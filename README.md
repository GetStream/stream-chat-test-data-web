# Stream Chat Test Data Web App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Process

### Token
User token is generated using `crypto-js` in browser, hence the secret/token never leaves the client.

### Data
Some random data is inserted to the chat app around the requested `user_id` provided for the token generation. These data are inserted using a server token generated on the fly inside the browser.

- **Users**: Some random users with id, name and avatar are upserted.
- **Channel**:  Some random channels are created, all owned by provided `user_id`. Half of these channels are 1-1 channel without image and the other half are group chat with different memeber size. Members are based on the previously upserted users.
- **Message**: Some random messages are inserted into all the channels previously created, it has meaningful texts and some has image attachemnts. Channel members are associated with these messages.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
