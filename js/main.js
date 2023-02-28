const EMPLOYES_COUNT = 25;

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


function getRandom (max = Math.random() * 10000){
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
  const descriptionA = [
    'На фотографии мы видим…',
    'При первом взгляде на фотографию становится очевидным, что…',
    'Предложенная для описания фотография интересна тем, что...',
    'Если внимательно посмотреть на снимок, то…'];
  const descriptionB = [
    'На переднем плане изображены…',
    'Если внимательно посмотреть на изображение, то…',
    'Композиция снимка весьма интересна, потому что…',
    'Выражения лиц у героев фотографии говорят о том, что…',
    'Фото несёт в себе определённое настроение:…'];
  const descriptionC = [
    'Завершая описание, хочется отметить…',
    'Своё описание хочется закончить…',
    'ельзя не увидеть талант фотографа, который сумел…',
  ];
  return function generateDescription(){
    return `${descriptionA[getRandom(descriptionA.length - 1)]} ${descriptionB[getRandom(descriptionB.length - 1)]} ${descriptionC[getRandom(descriptionC.length - 1)]}`;

  };
}

function getLikes(){
  const MaxLikes = 200;
  const MinLikes = 15;
  return function generateLikes(){
    let likes = getRandom(MaxLikes);
    if(likes > MinLikes){
      return likes;
    } else {
      likes = getRandom(MaxLikes);
    }
  };
}

function getComments(){

  const MaxCountComments = 10;
  const comments = [];
  const id = getRandomUnicId();

  return function getComment(){
    for (let i = 0; i <= getRandom(MaxCountComments);i++){
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
  const CountAvatars = 6;
  const Avatars = [];
  for (let i = 0; i < CountAvatars;i++){
    const urlAvatar = `.img/Avatar-${i}.svg`;
    Avatars.push(urlAvatar);

  }
  return function generateAvatars(){
    const Avatar = Avatars[getRandom(Avatars.length)];
    return Avatar;
  };
}

function getMessage(){
  const MaximumMessages = 2;
  const MessajesData = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  return function generateMessage(){
    const Messages = [];
    for (let i = 0; i < MaximumMessages;i++){
      let newMessage = MessajesData[getRandom(MessajesData.length)];
      if(Messages.includes(newMessage)){
        newMessage = MessajesData[getRandom(MessajesData.length)];
      } else {
        Messages.push(newMessage);

      }
    }

    return Messages;
  };
}

function getName(){
  const Names = [
    'Ника','Таисия','Михаил', 'Евгения','Василиса','Мария','Алиса','Илья','Иван',
    'Милана','Надежда','Ксения', 'Амина', 'Николай', 'Кирилл', 'Алексей', 'Руслан',
    'Олег', 'Степан', 'Ульяна', 'Мирослава', 'Андрей', 'Василий', 'Марк', 'София'
  ];
  return function generateName(){
    return Names[getRandom(Names.length)];
  };
}

getEmployes(EMPLOYES_COUNT);

