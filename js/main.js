const EMPLOYES_COUNT = 25;
const COUNT_AVATAR = 6;
const MAXIMUM_MESSAGES = 2;
const MAX_LIKES = 200;
const MIN_LIKES = 15;
const MAX_COUNT_UNIK_ID = 10000;
const DESCRIPTION_INTRODUCION = [
  'На фотографии мы видим…',
  'При первом взгляде на фотографию становится очевидным, что…',
  'Предложенная для описания фотография интересна тем, что...',
  'Если внимательно посмотреть на снимок, то…'];
const DESCRIPTION_BASE = [
  'На переднем плане изображены…',
  'Если внимательно посмотреть на изображение, то…',
  'Композиция снимка весьма интересна, потому что…',
  'Выражения лиц у героев фотографии говорят о том, что…',
  'Фото несёт в себе определённое настроение:…'];
const DESCRIPTION_END = [
  'Завершая описание, хочется отметить…',
  'Своё описание хочется закончить…',
  'ельзя не увидеть талант фотографа, который сумел…',
];
const MESSAGES_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES_ARRAY = [
  'Ника','Таисия','Михаил', 'Евгения','Василиса','Мария','Алиса','Илья','Иван',
  'Милана','Надежда','Ксения', 'Амина', 'Николай', 'Кирилл', 'Алексей', 'Руслан',
  'Олег', 'Степан', 'Ульяна', 'Мирослава', 'Андрей', 'Василий', 'Марк', 'София'
];

function getEmployes(countEmployes){
  const Employes = [];
  const id = getId();
  const url = getUrl(countEmployes);
  for (let i = 0; i < countEmployes; i++){
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
}


function getRandom (max = Math.random() * MAX_COUNT_UNIK_ID){
  // console.log(max)
  return Math.floor(Math.random() * max);
}


function getId(){
  let count = 0;
  return function generateId(){
    count++;
    // console.log(count);
    return count;
  };
}


function getUrl(urlCount){
  const url = [];
  return function generateUrl(){
    const newUrl = (`photos/${ getRandom(urlCount) }.jpg`);
    if (url.includes(newUrl)){
      generateUrl();
    } else {
      url.push(newUrl);
    }
    // console.log(url);
    if((url.length) <= urlCount){
      // console.log(url.length);
      return url[url.length - 1];
    }
  };
}


function getDescription(){
  return function generateDescription(){
    return `${DESCRIPTION_INTRODUCION[getRandom(DESCRIPTION_INTRODUCION.length - 1)]} ${DESCRIPTION_BASE[getRandom(DESCRIPTION_BASE.length - 1)]} ${DESCRIPTION_END[getRandom(DESCRIPTION_END.length - 1)]}`;

  };
}


function getLikes(){
  return function generateLikes(){
    let likes = getRandom(MAX_LIKES);
    if(likes > MIN_LIKES){
      return likes;
    } else {
      likes = getRandom(MAX_LIKES);
    }
  };
}


function getComments(){
  const MAX_COUNT_COMMENTS = 10;
  const comments = [];
  const id = getRandomUnicId();
  return function getComment(){
    for (let i = 0; i <= getRandom(MAX_COUNT_COMMENTS);i++){
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

}


function getRandomUnicId(){
  const unicId = [];
  return function generateRandomeUnicId(){
    let newId = getRandom();
    if (unicId.includes(newId)){
      newId = getRandom();
    } else {
      unicId.push(newId);
    }
    return newId;
  };
}


function getAvatar(){
  const Avatars = [];
  for (let i = 0; i < COUNT_AVATAR;i++){
    const urlAvatar = `.img/Avatar-${i}.svg`;
    Avatars.push(urlAvatar);
  }
  return function generateAvatars(){
    const Avatar = Avatars[getRandom(Avatars.length)];
    return Avatar;
  };
}


function getMessage(){
  return function generateMessage(){
    const Messages = [];
    for (let i = 0; i < MAXIMUM_MESSAGES;i++){
      let newMessage = MESSAGES_ARRAY[getRandom(MESSAGES_ARRAY.length)];
      if(Messages.includes(newMessage)){
        newMessage = MESSAGES_ARRAY[getRandom(MESSAGES_ARRAY.length)];
      } else {
        Messages.push(newMessage);

      }
    }

    return Messages;
  };
}


function getName(){
  return function generateName(){
    return NAMES_ARRAY[getRandom(NAMES_ARRAY.length)];
  };
}

getEmployes(EMPLOYES_COUNT);

