var katzDeli = [];
var line = [];
function takeANumber(katzDeli,name){
  var position = katzDeli.length+1
  katzDeli.push(`${name}`);
  return "Welcome, " + name +". You are number "+ position +" in line."
}
function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
     return "There is nobody waiting to be served!";
   }
   else {
     return (`Currently serving ${katzDeli.shift()}.`);
   }
 }
function currentLine(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
     line.push(` `+[i+1]+`. `  + katzDeli[i]);
     i++;
   }
   if (katzDeli.length === 0) {
     return "The line is currently empty.";
   }
   else{
     return(`The line is currently:` + line);
   }
 }
