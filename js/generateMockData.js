import {
  EMPLOYES_COUNT,
  COUNT_AVATAR,
  MAXIMUM_MESSAGES,
  MAX_LIKES,
  MIN_LIKES,
  MAX_COUNT_UNIK_ID,
  MAX_COUNT_COMMENTS,
  DESCRIPTION_INTRODUCION,
  DESCRIPTION_BASE,
  DESCRIPTION_END,
  MESSAGES_ARRAY,
  NAMES_ARRAY
} from '../js/constantData.js';


const getRandom = (max = Math.random() * MAX_COUNT_UNIK_ID) => Math.floor(Math.random() * max);


const getId = () => {
  let count = 0;
  return function generateId() {
    return count++;
  };
};


const getUrl = (urlCount) => {
  const url = [];
  return function generateUrl() {
    const newUrl = (`photos/${getRandom(urlCount)}.jpg`);
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
  return `${DESCRIPTION_INTRODUCION[getRandom(DESCRIPTION_INTRODUCION.length - 1)]} ${DESCRIPTION_BASE[getRandom(DESCRIPTION_BASE.length - 1)]} ${DESCRIPTION_END[getRandom(DESCRIPTION_END.length - 1)]}`;

};


const getLikes = () => function generateLikes() {
  let likes = getRandom(MAX_LIKES);
  if (likes > MIN_LIKES) {
    return likes;
  } else {
    likes = getRandom(MAX_LIKES);
  }
};


function getRandomUnicId() {
  const random = Math.random();
  return random.toString(16).substring(2);
}

// const getRandomUnicId = () => {
//   const unicId = [];
//   return function generateRandomeUnicId() {
//     let newId = getRandom();
//     if (unicId.includes(newId)) {
//       newId = getRandom();
//     } else {
//       unicId.push(newId);
//     }
//     return newId;
//   };
// };

const getAvatar = () => {
  const Avatars = [];
  for (let i = 0; i < COUNT_AVATAR; i++) {
    const urlAvatar = `.img/Avatar-${i}.svg`;
    Avatars.push(urlAvatar);
  }
  return function generateAvatars() {
    const Avatar = Avatars[getRandom(Avatars.length)];
    return Avatar;
  };
};


const getMessage = () => function generateMessage() {
  const Messages = [];
  for (let i = 0; i < MAXIMUM_MESSAGES; i++) {
    let newMessage = MESSAGES_ARRAY[getRandom(MESSAGES_ARRAY.length)];
    if (Messages.includes(newMessage)) {
      newMessage = MESSAGES_ARRAY[getRandom(MESSAGES_ARRAY.length)];
    } else {
      Messages.push(newMessage);
    }
  }
  return Messages.join(' ');
};


const getName = () => function generateName() {
  return NAMES_ARRAY[getRandom(NAMES_ARRAY.length)];
};

const getComments = () => {
  const comments = [];
  const id = getRandomUnicId;
  return function getComment() {
    for (let i = 0; i <= getRandom(MAX_COUNT_COMMENTS); i++) {
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


const getEmployes = () => {
  const Employes = [];
  const id = getId();
  const url = getUrl(EMPLOYES_COUNT);
  for (let i = 0; i < EMPLOYES_COUNT; i++) {
    const newEmploee = {};
    const description = getDescription();
    const likes = getLikes();
    const comments = getComments();
    newEmploee.id = id();
    newEmploee.url = url();
    newEmploee.description = description();
    newEmploee.likes = likes();
    newEmploee.comments = comments();
    Employes.push(newEmploee);
  }
  return Employes;
};


export { getEmployes };
