const arr = [
{
    id : 1,
    name : "patel dev",
    age : 12
},
{
    id : 3,
    name : "nilay shukla",
    age : 23
},
{
    id : 4,
    name : "desai manali",
    age : 4
},
{
    id : 2,
    name : "shah pushti",
    age : 50
}
]

const sortBy = "name"
let finalAns = []
let temp = []
let type = undefined
arr.map((val , index)=>{
    temp.push(val[sortBy])
    type = typeof val[sortBy]
})
if(type == Number)
{
temp.sort((a,b)=>a-b)
}
else
{
    temp.sort()
}


temp.map((test)=>{
    
    for(var i = 0;i<arr.length;i++)
    {
        if(arr[i][sortBy] == test)
        {
            finalAns.push(
            {
            id : arr[i]["id"],
            name:arr[i]["name"],
            age :arr[i]["age"]
            }
            )
        
    }

}
})
console.log("before : " ,arr)
console.log("after  : " , finalAns)
