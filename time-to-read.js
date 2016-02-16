var timeToRead = function() {
  words = document.getElementsByTagName("body");
  Array.prototype.slice.call(words);
  var content = words[0].textContent.trim().replace(/\W\s/gi,'').split(" ");
  console.log("THIS IS CONTENT", content.length);
  wpm = Math.round(content.length / 230);
  return wpm + " min read";
};


var time = timeToRead();

var bodyTime = document.getElementsByTagName('body')[0];
var timeDisplay = document.createElement('p');
timeDisplay.textContent = time;
timeDisplay.className= "readTime";
bodyTime.appendChild(timeDisplay);
