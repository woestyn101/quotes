var myquote = "This is Marius";



var quote1 = "All you need are these: certainty of judgment in the present moment; action for the common good in the present moment; and an attitude of gratitude in the present moment for anything that comes your way.";

var quote2 = "If we limited our thoughts and opinions about 'good ' and 'bad' to our own actions, we'd stop treating other people as enemies.";

var quote3 = "When you interact with other human beings, behave like one.";

var quote4 = "Our own worth is measured by what we  devote our energy to";

var quote5 = "To feel affection for people even when they make mistakes is uniquely human";

var quote6 = "Think of yourself as dead. You have lived your life. Now take what is left and live it properly";

var quote7 = "In a sense, people are our proper occupation. Our job is to do them good and to put up with them";

var quote8 = "The things you think about determine the quality of your mind. Your soul takes on the color of your thoughts";

var quote9 = "In everything you do, even the smallest thing, remember the chain that links them all.";

var quote10 = "Do everything as if it were the last thing you were doing in your life";

var quoteArray = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10]



document.getElementById("myButton").onclick = function () {
  // alert("You clicked the button");
  var selectQuote = quoteArray[Math.floor(Math.random()* quoteArray.length)];
  document.getElementById("content").innerHTML = selectQuote;
};