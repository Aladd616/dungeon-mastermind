
export async function getUser(){   
const response = await fetch('/auth/user',{
method:'GET'
})
console.log(response)
return(response.json)
}
    


