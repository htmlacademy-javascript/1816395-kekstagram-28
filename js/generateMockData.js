import {
  EMPLOYEES_COUNT,
  COUNT_AVATAR,
  MAXIMUM_MESSAGES,
  MAX_LIKES,
  MIN_LIKES,
  MAX_COUNT_UNIQ_ID,
  MAX_COUNT_COMMENTS,
  DESCRIPTION_INTRODUCTION,
  DESCRIPTION_BASE,
  DESCRIPTION_END,
  MESSAGES_ARRAY,
  NAMES_ARRAY
} from '../js/constantData.js';


const getRandom = (max = Math.random() * MAX_COUNT_UNIQ_ID) => Math.floor(Math.random() * max);


const getId = () => {
  let count = 1;
  return function generateId() {
    return count++;
  };
};


const getUrl = (urlCount) => {
  const url = [];
  return function generateUrl() {
    const newUrl = (`photos/${getRandom(urlCount) + 1}.jpg`);
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
  return `${DESCRIPTION_INTRODUCTION[getRandom(DESCRIPTION_INTRODUCTION.length - 1)]} ${DESCRIPTION_BASE[getRandom(DESCRIPTION_BASE.length - 1)]} ${DESCRIPTION_END[getRandom(DESCRIPTION_END.length - 1)]}`;

};


const getLikes = () => function generateLikes() {
  let likes = getRandom(MAX_LIKES);
  if (likes > MIN_LIKES && likes > 0) {
    return likes;
  } else {
    likes = getRandom(MAX_LIKES);
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
      newId = getRandom();
    } else {
      uniqId.push(newId);
    }
    return newId;
  };
};

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
  const id = getRandomUniqId;
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


const getEmployees = () => {
  const Employees = [];
  const id = getId();
  const url = getUrl(EMPLOYEES_COUNT);
  for (let i = 0; i < EMPLOYEES_COUNT; i++) {
    const newEmployee = {};
    const description = getDescription();
    const likes = getLikes();
    const comments = getComments();
    newEmployee.id = id();
    newEmployee.url = url();
    newEmployee.description = description();
    newEmployee.likes = likes();
    if (!newEmployee.likes){
      newEmployee.likes = likes();
      // console.log(newEmployee.id);
    }
    newEmployee.comments = comments();
    Employees.push(newEmployee);
  }
  return Employees;
};


export { getEmployees };
