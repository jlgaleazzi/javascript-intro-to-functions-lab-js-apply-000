function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
   console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
  var lowercase = 'hello';
  var uppercase = "HELLO";
  var mixedCase = "I love you, Grandma."
 
  if (uppercase.toUpperCase() === string) {
    return "YES INDEED!";
  }
  
   if (lowercase.toLowerCase() === string) {
     return "I can\'t hear you!";
  }
  if (mixedCase === string) {
    return "I love you, too.";
  }
=======
  if (string.toLowerCase() === 'hello') {
     return "I can\'t hear you!";
  }
  if (string.toUpperCase() === "HELLO")
>>>>>>> ce4eabff3ad9f73104bd95cb3a41e53920813822
}
