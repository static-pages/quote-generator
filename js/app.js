var quotes = [1, 3, 4, 5, 6, 6,7,78 ,8 ];
random = Math.floor((Math.random() * 100) + 1);

function generateQuote() {
  var quoteNumber = quotes.length;
  var random = Math.floor((Math.random() * quoteNumber) + 1);
  $("#quote").html(quotes[random]);
}

$(document).ready(function() {
  $("#get-quote").click(generateQuote);
});
