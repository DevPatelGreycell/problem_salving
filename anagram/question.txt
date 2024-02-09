const store = ["cold","dolc","odlc","eaht","heat","nilay","layni","nialy","ialny"]

let input = ["cold","eaht"];
let finalAns = []

for(var i=0;i<input.length;i++)
{
    const temp = Array.from(input[i]);
    const give = temp.sort().join("");
    giveMeThelength(give , input[i])
}
  
function giveMeThelength(val , original)
{
   cnt = 0
for(var i = 0;i<store.length;i++){
    
    if( Array.from(store[i]).sort().join("") == val)
    {
      cnt++
    }
    else
    {
        continue;
    }
}
finalAns.push({[original] : cnt})
}
console.log(finalAns)

