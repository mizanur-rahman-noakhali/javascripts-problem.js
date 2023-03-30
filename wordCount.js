var speech="i am good person. i donot snore at night."
//console.log(speech.length);
count=0;
for(var i=0;i<speech.length;i++){
    var char = speech[i];
   // console.log(char);
   if(char ==" "){
     count++;
   }
}
//count++;
console.log(count);
