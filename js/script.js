const text=document.getElementById('text');
const score=document.getElementById('score');
// const text=document.getElementById('score');
 
 function counting() {
 	// var text=text.length();
 	let value=text.value.length
 	console.log(value);
 	score.innerHTML=value;

 }