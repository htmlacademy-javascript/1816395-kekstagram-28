import {
  PICTURES_COUNT,
  COUNT_AVATAR,
  MAXIMUM_MESSAGES,
  MAX_LIKES,
  MIN_LIKES,
  // MAX_COUNT_UNIQ_ID,
  MAX_COUNT_COMMENTS,
  DESCRIPTION_INTRODUCTION,
  DESCRIPTION_BASE,
  DESCRIPTION_END,
  MESSAGES_ARRAY,
  NAMES_ARRAY
} from '../js/constantData.js';
import { util } from './util.js';


const getId = () => {
  let count = 1;
  return function generateId() {
    return count++;
  };
};


const getUrl = (urlCount) => {
  const url = [];
  return function generateUrl() {
    const newUrl = (`photos/${util.getRandom(urlCount) + 1}.jpg`);
    if (newUrl === 'photos/0.jpg'){
      generateUrl();
    }

    if (url.includes(newUrl)) {
      generateUrl();
    } else {
      url.push(newUrl);
    }
    // console.log(url);
    if ((url.length) <= urlCount) {
      // console.log(url.length);
      return url[url.length - 1];
    }
  };
};


const getDescription = () => function generateDescription() {
  return `${DESCRIPTION_INTRODUCTION[util.getRandom(DESCRIPTION_INTRODUCTION.length - 1)]} ${DESCRIPTION_BASE[util.getRandom(DESCRIPTION_BASE.length - 1)]} ${DESCRIPTION_END[util.getRandom(DESCRIPTION_END.length - 1)]}`;

};


const getLikes = () => function generateLikes() {
  let likes = util.getRandom(MAX_LIKES);
  if (likes > MIN_LIKES && likes > 0) {
    return likes;
  } else {
    likes = util.getRandom(MAX_LIKES);
  }
};


function getUniqId() {
  const random = Math.random();
  return random.toString(16).substring(2);
}

const getRandomUniqId = () => {
  const uniqId = [];
  return function generateRandomUniqId() {
    let newId = getUniqId();
    if (uniqId.includes(newId)) {
      newId = getUniqId();
    } else {
      uniqId.push(newId);
    }
    return newId;
  };
};

const getAvatar = () => {
  const Avatars = [];
  for (let i = 1; i < COUNT_AVATAR; i++) {
    const urlAvatar = `./img/avatar-${i}.svg`;
    Avatars.push(urlAvatar);
  }
  return function generateAvatars() {
    const Avatar = Avatars[util.getRandom(Avatars.length)];
    return Avatar;
  };
};


const getMessage = () => function generateMessage() {
  const Messages = [];
  for (let i = 0; i < MAXIMUM_MESSAGES; i++) {
    let newMessage = MESSAGES_ARRAY[util.getRandom(MESSAGES_ARRAY.length)];
    if (Messages.includes(newMessage)) {
      newMessage = MESSAGES_ARRAY[util.getRandom(MESSAGES_ARRAY.length)];
    } else {
      Messages.push(newMessage);
    }
  }
  return Messages.join(' ');
};


const getName = () => function generateName() {
  return NAMES_ARRAY[util.getRandom(NAMES_ARRAY.length)];
};

const getComments = () => {
  const comments = [];
  const id = getRandomUniqId;
  return function getComment() {
    for (let i = 0; i <= util.getRandom(MAX_COUNT_COMMENTS); i++) {
      const NewComment = {};
      const Avatar = getAvatar();
      const Message = getMessage();
      const Name = getName();
      NewComment.id = id();
      NewComment.Avatar = Avatar();
      NewComment.Message = Message();
      NewComment.name = Name();
      comments.push(NewComment);
    }
    return comments;
  };
};


const getPictures = () => {
  const pictures = [];
  const id = getId();
  const url = getUrl(PICTURES_COUNT);
  for (let i = 0; i < PICTURES_COUNT; i++) {
    const newPictures = {};
    const description = getDescription();
    const likes = getLikes();
    const comments = getComments();
    newPictures.id = id();
    newPictures.url = url();
    newPictures.description = description();
    newPictures.likes = likes();
    if (!newPictures.likes){
      newPictures.likes = likes();
      // console.log(newPictures.id);
    }
    newPictures.comments = comments();
    pictures.push(newPictures);
  }
  return pictures;
};


export { getPictures };
