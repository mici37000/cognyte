import { IMessage } from '../model/message';

export const getMessages = () => {
  return messagesData;
};

const messagesData: IMessage[] = [
  {
    id: 0,
    user: {
      name: 'New_user',
      messagesAmount: 1,
      rank: 0,
      joinDate: Date.parse('2021-10-22'),
      signature: '',
      avatar:
        'https://toppng.com/uploads/preview/fire-dragon-transparent-fire-dragon-logo-11562919439u8wgx0fna1.png',
    },
    messageData: {
      timestamp: Date.parse('2021-10-22T09:28:00'),
      body: 'Hello Im new here',
      rank: 0,
    },
  },
  {
    id: 1,
    user: {
      name: 'CaptionBunny',
      messagesAmount: 1896,
      rank: 4,
      joinDate: Date.parse('2020-08-08'),
      signature: 'Carrot is for all',
      avatar:
        'https://thumbs.dreamstime.com/b/bunny-pirate-cartoon-character-game-wild-animal-rabbit-bandana-cocked-hat-skull-eye-bunny-pirate-241207604.jpg',
    },
    messageData: {
      timestamp: Date.parse('2021-10-22T10:16:00'),
      body: 'Welcome to our community please read the rules',
      rank: 2,
    },
  },
  {
    id: 2,
    user: {
      name: 'BigElephant',
      messagesAmount: 250,
      rank: 1,
      joinDate: Date.parse('2021-04-11'),
      signature: 'You never walk alone',
      avatar:
        'http://www.clker.com/cliparts/f/V/l/8/j/F/baby-elephant-red-md.png',
    },
    messageData: {
      timestamp: Date.parse('2021-10-22T12:07:00'),
      body: 'Welcome buddy',
      rank: 0,
    },
  },
  {
    id: 3,
    user: {
      name: 'PR0_U$3R',
      messagesAmount: 999,
      rank: 2,
      joinDate: Date.parse('2020-12-22'),
      signature: 'Anonymous',
      avatar: 'https://static.thenounproject.com/png/3825456-200.png',
    },
    messageData: {
      timestamp: Date.parse('2021-10-22T14:16:00'),
      body: 'Welcome',
      rank: 0,
    },
  },
];
