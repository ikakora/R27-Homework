// 1:

let userIsLoggedIn = false;
let videoIsCommentable = false;

const userCanComment = userIsLoggedIn && videoIsCommentable;

console.log(userCanComment);

// 2:

userIsLoggedIn = false;
let userIsBlocked = false;

const userCanPost = userIsLoggedIn && !userIsBlocked;

console.log(userCanPost) 

// 3:

let balance = 0;
let userCartTotal = 0;

const paymentComplete = balance >= userCartTotal;

console.log(paymentComplete);

// 4:

let userIsAdmin = false;
let userIsModerator = false;
let userIsCommentAuthor = false;

const userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor;

console.log(userCanDelete);

// 5:

let presidentKey = false;
let primeMinisterKey = false;
let generalOfArmiesKey = false;
let masterKey = false;

const bombWillLaunch = presidentKey && primeMinisterKey && generalOfArmiesKey || masterKey;

console.log(bombWillLaunch);

// 6:

const userPinCode = 1234;
const currentPinCode =1234;
const newPinCode = 1;
const retypeNewPinCode = 1;
const pinChangeComplete = userPinCode == currentPinCode && newPinCode == retypeNewPinCode

console.log(pinChangeComplete);

// 7:

let health = 70;
let lives = 1;
const gameOver = health == 0 || lives == 0;

console.log(gameOver);

// 8:

let capsuleCount = 50;
let capsulePrice = 2.5;
let userBalance = 5;
let creditCardStatus = userBalance >= capsulePrice;         // ვერ მივხდი დავალების ამ პუნქტს :))
const coffeePaymentComplete = !!capsuleCount && creditCardStatus;

console.log(coffeePaymentComplete);

// 9:

let availableRooms = 1;
let roomPrice = 100;
let userHasDiscount = true;
let discount = userHasDiscount ? roomPrice * 25 / 100 : 0;
let accountBalance = 150;
let userRoomCount = 2;

const bookingPaymentComplete = availableRooms >= userRoomCount && accountBalance >= (roomPrice - discount) * userRoomCount;

console.log(bookingPaymentComplete);
