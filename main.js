var array =  ['coffee : $1.00','coke : $2:00','beer: $10.00'];
var uList = document.getElementById('list');


array.forEach(function(drink) {
  var listItem = document.createElement('li');
  if(drink.slice(0,4) === 'beer') {
    listItem.innerHTML  = `${drink} <span>My Fav Drink!!!!</span>`;
    uList.appendChild(listItem);
  } else {
    listItem.innerHTML  = `${drink}`;
    uList.appendChild(listItem);
  }
});




// var something = "nick";
// $(function() {
//   $("#testId").append(`${something} is writing code right now`);
//
// })




// $( "#myDiv" ).css( "border", "3px solid red" );
