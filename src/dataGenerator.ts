import faker from 'faker';
import { Channel, ChannelData, StreamChat, UserResponse } from 'stream-chat';
import { Logger } from './AppCtx';
import { randomId, sleep, signServerToken, randomInt } from './utils';
import { generateMessage } from './messages';

const fakerGenerator = (fn: Function, len = 10) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(fn());
  }
  return arr;
};

const createCurrentUser = async (client: StreamChat, userID: string, logger: Logger) => {
  await client.upsertUser({ id: userID, name: userID, image: faker.image.avatar() });
  logger(`User "${userID}" with id "${userID}" created`);
};

const createRandomUsers = async (client: StreamChat, logger: Logger, len = 10) => {
  const ids = fakerGenerator(randomId, len);
  const names = fakerGenerator(faker.name.firstName, len);
  const avatars = fakerGenerator(faker.image.avatar, len);

  const res = await client.upsertUsers(
    ids.map((id, i) => ({
      id,
      name: names[i],
      image: avatars[i],
    })),
  );
  const users = Object.values(res.users);
  users.forEach((u) => logger(`User "${u.name}" with id "${u.id}" created`));
  return users;
};

const sendMessages = async (channel: Channel, logger: Logger, len = 10) => {
  let counter = 0;
  for (let i = 0; i < len; i++) {
    const members = Object.values(channel.state.members);
    const message = generateMessage(members[randomInt(0, members.length - 1)].user_id as string);

    try {
      await channel.sendMessage(message, { skip_push: true });
      counter += 1;
    } catch (error) {
      console.warn(error);
      logger(`Sending message failed, waiting few seconds before resuming...`);
      await sleep(2000);
    }
  }

  logger(`Pushed ${counter} messages to channel "${channel.id}"`);
};

const createRandomChannels = async (
  client: StreamChat,
  userID: string,
  users: UserResponse[],
  logger: Logger,
  len = 10,
) => {
  for (let i = 0; i < len; i++) {
    const name = faker.music.genre();
    const color = faker.commerce.color();
    const id = `${name}-${color}-${userID}-${i}`.replaceAll(' ', '-').toLowerCase();
    const data: ChannelData = { name, created_by_id: userID, members: [userID, users[i].id] };

    // make 50% channels with +2 members
    if (i % 2) {
      data.members?.push(...users.slice(i + 1).map((u) => u.id));
      data.image = faker.image.avatar();
    }

    const channel = client.channel('messaging', id, data);

    try {
      await channel.create();
      logger(`Channel "${id}" created`);
    } catch (error) {
      console.warn(error);
      logger(`Creating a channel failed, waiting few seconds to resuming...`);
      await sleep(2000);
    }

    await sendMessages(channel, logger, len);
  }
};

export const dataGenerator = async (key: string, secret: string, userID: string, logger: Logger, len = 10) => {
  // setup stream client with server token
  const token = await signServerToken(secret);
  const client = StreamChat.getInstance(key, {});
  client.tokenManager.token = token;
  client.secret = secret;

  // create random users and some channel with messages for the current user
  try {
    await createCurrentUser(client, userID, logger);
  } catch (err) {
    console.error(err);
    logger('Creating the current user failed, check console logs');
    return;
  }

  let users: UserResponse[];
  try {
    users = await createRandomUsers(client, logger, len);
  } catch (err) {
    console.error(err);
    logger('Creating the random users failed, check console logs');
    return;
  }

  await createRandomChannels(client, userID, users, logger, len);
};
