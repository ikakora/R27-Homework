// 1:

let userIsLoggedIn = false;
let videoIsCommentable = false;

let userCanComment = (userIsLoggedIn && videoIsCommentable)

console.log(userCanComment);

// 2:

userIsLoggedIn = false;
let userIsBlocked = false;

let userCanPost = (userIsLoggedIn && !userIsBlocked);

console.log(userCanPost) 

// 3:

let balance = 0;
let userCartTotal = 0;

let paymentComplete = (balance >= userCartTotal);

console.log(paymentComplete);

// 4:

let userIsAdmin = false;
let userIsModerator = false;
let userIsCommentAuthor = false;

let userCanDelete = (userIsAdmin || userIsModerator || userIsCommentAuthor);

console.log(userCanDelete);

// 5:

let presidentKey = false;
let primeMinisterKey = false;
let generalOfArmiesKey = false;
let masterKey = false;

let bombWillLaunch = (presidentKey && primeMinisterKey && generalOfArmiesKey || masterKey);

console.log(bombWillLaunch);