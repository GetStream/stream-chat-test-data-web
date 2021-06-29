import faker from 'faker';
import { Message } from 'stream-chat';
import { randomInt } from './utils';

const sentences = [
  'Swim at your own risk was taken as a challenge for the group of Kansas City college students.',
  "Yesterday's weather was good for climbing.",
  "Hang on, my kittens are scratching at the bathtub and they'll upset by the lack of biscuits.",
  'I made an effort to smile in front of others.',
  'The random sentence generator generated a random sentence about a random sentence.',
  'Happiness can be found in the depths of chocolate pudding.',
  'People keep telling me "orange" but I still prefer "pink".',
  'Let me help you with your baggage.',
  'I only enjoy window shopping when the windows are transparent.',
  'The teens wondered what was kept in the red shed on the far edge of the school grounds.',
  'The mysterious diary records the voice.',
  "He picked up trash in his spare time to dump in his neighbor's yard.",
  'Mary realized if her calculator had a history, it would be more embarrassing than her computer browser history.',
  'Each person who knows you has a different perception of who you are.',
  'It caught him off guard that space smelled of seared steak.',
  'The father died during childbirth.',
  'If eating three-egg omelets causes weight-gain, budgie eggs are a good substitute.',
  "It took me too long to realize that the ceiling hadn't been painted to look like the sky.",
  "It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball.",
  'This building is really high!',
  'We will not allow you to bring your pet armadillo along.',
  'Carol drank the blood as if she were a vampire.',
  'Fluffy pink unicorns are a popular status symbol among macho men.',
  "She couldn't decide of the glass was half empty or half full so she drank it.",
  'Hit me with your pet shark!',
  "Take care while I'm gone.",
  'The waves were crashing on the shore; it was a lovely sight.',
  "It turns out you don't need all that stuff you insisted you did.",
  "It would have been a better night if the guys next to us weren't in the splash zone.",
  'his seven-layer cake only had six layers.',
  'Strange as it may sound, what I said was true.',
  "I'm a great listener, really good with empathy vs sympathy and all that, but I hate people.",
  'Who does this land belong to?',
  'Two more days and all his problems would be solved.',
  'If my calculator had a history, it would be more embarrassing than my browser history.',
  "Although it wasn't a pot of gold, Nancy was still enthralled at what she found at the end of the rainbow.",
  "Weather is not trivial - it's especially important when you're standing in it.",
  'Tomorrow will bring something new, so leave today as a memory.',
  'She used her own hair in the soup to give it more flavor.',
  "A dead duck doesn't fly backward.",
  'One small action would change her life, but whether it would be for better or for worse was yet to be determined.',
  'He watched the dancing piglets with panda bear tummies in the swimming pool.',
  'I caught my squirrel rustling through my gym bag.',
  'I received a heavy fine but it failed to crush my spirit.',
  'It was her first experience training a rainbow unicorn.',
  'Situps are a terrible way to end your day.',
  'Three generations with six decades of life experience.',
  'The shooter says goodbye to his love.',
  'This book is sure to liquefy your brain.',
  'She had a difficult time owning up to her own crazy self.',
  'His son quipped that power bars were nothing more than adult candy bars.',
  'Last Friday I saw a spotted striped blue worm shake hands with a legless lizard.',
  'He shaved the peach to prove a point.',
  'Getting up at dawn is for the birds.',
  'Before he moved to the inner city, he had always believed that security complexes were psychological.',
  'They throw cabbage that turns your brain into emotional baggage.',
  'The Tsunami wave crashed against the raised houses and broke the pilings as if they were toothpicks.',
  'This made him feel like an old-style rootbeer float smells.',
  'Traveling became almost extinct during the pandemic.',
  'He invested some skill points in Charisma and Strength.',
  'Had he known what was going to happen, he would have never stepped into the shower.',
  'The fifty mannequin heads floating in the pool kind of freaked them out.',
  'Everyone was busy, so I went to the movie alone.',
  'I come from a tribe of head-hunters, so I will never need a shrink.',
  'The mysterious diary records the voice.',
  'My older sister looks like my mom.',
  'She saw the brake lights, but not in time.',
  'He learned the important lesson that a picnic at the beach on a windy day is a bad idea.',
  'Having no hair made him look even hairier.',
  'Beach-combing replaced wine tasting as his new obsession.',
  'Pat ordered a ghost pepper pie.',
  'He wondered if it could be called a beach if there was no sand.',
  "I want a giraffe, but I'm a turtle eating waffles.",
  "Yesterday's weather was good for climbing.",
  'Be careful with that butter knife.',
  'Car safety systems have come a long way, but he was out to prove they could be outsmarted.',
  "She wrote him a long letter, but he didn't read it.",
  'He decided water-skiing on a frozen lake wasn’t a good idea.',
  'Her life in the confines of the house became her new normal.',
  'Iron pyrite is the most foolish of all minerals.',
  'As he entered the church he could hear the soft voice of someone whispering into a cell phone.',
  'Behind the window was a reflection that only instilled fear.',
  'Too many prisons have become early coffins.',
  'Fluffy pink unicorns are a popular status symbol among macho men.',
  "She hadn't had her cup of coffee, and that made things all the worse.",
  'The tart lemonade quenched her thirst, but not her longing.',
  'The book is in front of the table.',
  'It was the scarcity that fueled his creativity.',
  'The door swung open to reveal pink giraffes and red elephants.',
  "I thought red would have felt warmer in summer but I didn't think about the equator.",
  "They're playing the piano while flying in the plane.",
  'Baby wipes are made of chocolate stardust.',
  'He was disappointed when he found the beach to be so sandy and the sun so sunny.',
  'She used her own hair in the soup to give it more flavor.',
  'They called out her name time and again, but were met with nothing but silence.',
  "You can't compare apples and oranges, but what about bananas and plantains?",
  'The blue parrot drove by the hitchhiking mongoose.',
  'He figured a few sticks of dynamite were easier than a fishing pole to catch fish.',
  'Writing a list of random sentences is harder than I initially thought it would be.',
  'Which one is more important between speaking and writing?',
  'She saw the brake lights, but not in time.',
  'Thirty years later, she still thought it was okay to put the toilet paper roll under rather than over.',
  "It didn't take long for Gary to detect the robbers were amateurs.",
  'They desperately needed another drummer since the current one only knew how to play bongos.',
  'He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.',
  "If you don't like toenails, you probably shouldn't look at your feet.",
  'The door swung open to reveal pink giraffes and red elephants.',
  'His thought process was on so many levels that he gave himself a phobia of heights.',
  'He fumbled in the darkness looking for the light switch, but when he finally found it there was someone already there.',
  'Patricia loves the sound of nails strongly pressed against the chalkboard.',
  'People who insist on picking their teeth with their elbows are so annoying!',
  'The thick foliage and intertwined vines made the hike nearly impossible.',
  'Before he moved to the inner city, he had always believed that security complexes were psychological.',
  "They're playing the piano while flying in the plane.",
  "You're unsure whether or not to trust him, but very thankful that you wore a turtle neck.",
  'Pantyhose and heels are an interesting choice of attire for the beach.',
  'Lightning Paradise was the local hangout joint where the group usually ended up spending the night.',
  'Seek success, but always be prepared for random cats.',
  'I need a refrigerator for kimchi.',
  "I'll never do that again.",
  'He took one look at what was under the table and noped the hell out of there.',
  "He had accidentally hacked into his company's server.",
  'Pat ordered a ghost pepper pie.',
  'It was always dangerous to drive with him since he insisted the safety cones were a slalom course.',
  'Some bathing suits just shouldn’t be worn by some people.',
  'I checked to make sure that he was still alive.',
  "Although it wasn't a pot of gold, Nancy was still enthralled at what she found at the end of the rainbow.",
  "She learned that water bottles are no longer just to hold liquid, but they're also status symbols.",
  'She was amazed by the large chunks of ice washing up on the beach.',
  'He decided to count all the sand on the beach as a hobby.',
  'It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.',
  'The small white buoys marked the location of hundreds of crab pots.',
  'Iron pyrite is the most foolish of all minerals.',
  'The golden retriever loved the fireworks each Fourth of July.',
  'Writing a list of random sentences is harder than I initially thought it would be.',
  'I pretended to take out some money from my purse.',
  'The Great Dane looked more like a horse than a dog.',
  'The sign said there was road work ahead so he decided to speed up.',
  'He excelled at firing people nicely.',
  'Shakespeare was a famous 17th-century diesel mechanic.',
  'I often see the time 11:11 or 12:34 on clocks.',
  'He went back to the video to see what had been recorded and was shocked at what he saw.',
  'The light that burns twice as bright burns half as long.',
  'Which university do you want to go to?',
  'I love bacon, beer, birds, and baboons.',
  'Giving directions that the mountains are to the west only works when you can see them.',
  "She couldn't decide of the glass was half empty or half full so she drank it.",
  'Where do I put this box?',
  'His ultimate dream fantasy consisted of being content and sleeping eight hours in a row.',
  'Martha came to the conclusion that shake weights are a great gift for any occasion.',
  'Tomorrow will bring something new, so leave today as a memory.',
  'Nothing is as cautiously cuddly as a pet porcupine.',
  'He set out for a short walk, but now all he could see were mangroves and water were for miles.',
  'I made an effort to smile in front of others.',
  'Truth in advertising and dinosaurs with skateboards have much in common.',
  "If you spin around three times, you'll start to feel melancholy.",
  'He strives to keep the best lawn in the neighborhood.',
  'He turned in the research paper on Friday; otherwise, he would have not passed the class.',
  'I currently have 4 windows open up… and I don’t know why.',
  'He excelled at firing people nicely.',
  'I think I will buy the red car, or I will lease the blue one.',
  'He was surprised that his immense laziness was inspirational to others.',
  'It was obvious she was hot, sweaty, and tired.',
  'The small white buoys marked the location of hundreds of crab pots.',
  'Shakespeare was a famous 17th-century diesel mechanic.',
  "It didn't make sense unless you had the power to eat colors.",
  'Sixty-Four comes asking for bread.',
  'This made him feel like an old-style rootbeer float smells.',
  'Pink horses galloped across the sea.',
  'She moved forward only because she trusted that the ending she now was going through must be followed by a new beginning.',
  'Strange as it may sound, what I said was true.',
  'Don’t put your hand in your pocket.',
  'They got there early, and they got really good seats.',
  "Please tell me you don't work in a morgue.",
  "He picked up trash in his spare time to dump in his neighbor's yard.",
  'He realized there had been several deaths on this road, but his concern rose when he saw the exact number.',
  'It dawned on her that others could make her happier, but only she could make herself happy.',
  'The opportunity of a lifetime passed before him as he tried to decide between a cone or a cup.',
  'The beauty of the African sunset disguised the danger lurking nearby.',
  'Thigh-high in the water, the fisherman’s hope for dinner soon turned to despair.',
  'He decided to count all the sand on the beach as a hobby.',
  'I liked their first two albums but changed my mind after that charity gig.',
  'He said he was not there yesterday; however, many people saw him there.',
  "She couldn't decide of the glass was half empty or half full so she drank it.",
  "You're good at English when you know the difference between a man eating chicken and a man-eating chicken.",
  "You're unsure whether or not to trust him, but very thankful that you wore a turtle neck.",
  'In hopes of finding out the truth, he entered the one-room library.',
  'As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts.',
  'Lets all be unique together until we realise we are all the same.',
  'If my calculator had a history, it would be more embarrassing than my browser history.',
  "It isn't true that my mattress is made of cotton candy.",
  'Even with the snow falling outside, she felt it appropriate to wear her bikini.',
  'He took one look at what was under the table and noped the hell out of there.',
  'The near-death experience brought new ideas to light.',
  'Shingle color was not something the couple had ever talked about.',
  'The tart lemonade quenched her thirst, but not her longing.',
  'His mind was blown that there was nothing in space except space itself.',
  "If you don't like toenails, you probably shouldn't look at your feet.",
  'Nancy was proud that she ran a tight shipwreck.',
  'He knew it was going to be a bad day when he saw mountain lions roaming the streets.',
];

const generateAttachments = () => {
  const attachments = [];

  const len = randomInt(1, 3);
  for (let i = 0; i < len; i++) {
    const url = faker.image.image();
    attachments.push({ type: 'image', thumb_url: url, asset_url: url });
  }

  return attachments;
};

export const generateMessage = (userID: string) => {
  const message: Message = { user_id: userID, text: sentences[randomInt(0, sentences.length - 1)] };

  // only 25% of messages has attachments
  if (randomInt(0, 4) % 4 === 0) {
    message.attachments = generateAttachments();
  }

  return message;
};