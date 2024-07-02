const MAX_ID_LENGTH = [25];
const MAX_URL_LENGTH = [25];
const MAX_AVATAR_LENGTH = [6];
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const names = [
  'Алексей','Петр','Андрей','Владимир','Игорь','Евгений'
];
const description = "Описание";

function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const usedID = [];

function generateUnicId(){
  let randomId;
  do {
    randomId = getRandomNumber(1,MAX_ID_LENGTH);
  }
  while (usedID.includes(randomId));
  usedID.push(randomId);
  return randomId;
}

function genrateRandomAvatarUrl () {
  const randomAvatar = getRandomNumber(1,MAX_AVATAR_LENGTH);
  return `img/avatar-${randomAvatar}.svg`;
}

function getRandomString (array){
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateCommentsArray(){
  const commentsNum = getRandomNumber(0,30);
  const commentsArray = [];

  for(let i = 0; i <= commentsNum; i++){
    commentsArray.push(getRandomComment());
  }
  return commentsArray;
}

function getRandomComment() {
  return {
    id:generateUnicId(),
    avatar: genrateRandomAvatarUrl(),
    message: getRandomString(messages),
    name: getRandomString(names),
  };
}

const usedPostId = [];

function generateUnicPostId(){
  let randomPostId;
  do {
    randomPostId = getRandomNumber(1,MAX_ID_LENGTH);
  }
  while (usedPostId.includes(randomPostId));
  usedPostId.push(randomPostId);
  return randomPostId;
}

const usedPostUrl = [];

function generateUnicPostURL(){
  let randomPostURL;
  do {
    randomPostURL = getRandomNumber(1,MAX_URL_LENGTH)
  }
  while (usedPostUrl.includes(randomPostURL));
  usedPostUrl.push(randomPostURL);
  return `photos/${randomPostURL}.jpg`;
}

function generateRandomPost() {
  return {
    id:generateUnicPostId(),
    url:generateUnicPostURL(),
    description:description,
    likes:getRandomNumber(15,200),
    comments:generateCommentsArray(),
  };
}
