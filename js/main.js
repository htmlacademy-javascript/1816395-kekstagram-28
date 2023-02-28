const EMPLOYES_COUNT = 25;

function getEmployes(countEmployes){
  const Employes = [];
  const id = getId();
  const url = getUrl(countEmployes);
  for (let i = 0; i < countEmployes; i++){
    const newEmploee = {};
    const description = getDescription();
    const likes = getLikes();
    // const comments = getComments;
    newEmploee.id = id();
    newEmploee.url = url();
    newEmploee.description = description();
    newEmploee.likes = likes();
    // newEmploee.comments = comments();
    Employes.push(newEmploee);
  }
  return Employes;
}


function getRandom (max){
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
  function getComment(){
    for (const i = 0; i <= getRandom(MaxCountComments);i++){
      const newComment = {};
      newComment.id = getRandomUnicId();
      newComment.avatar = getAvatar();
      newComment.message = getMessage();
      newComment.name = getName();
      comments.push(newComment);
    }
    return comments;
  }
  getComment();
  return comments;
}


getEmployes(EMPLOYES_COUNT);
