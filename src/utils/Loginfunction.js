export default function Loginfunction({username, password}){
    console.log('hit')
    if(username && password === 'pass1234'){
        setTimeout(() => {
            alert(`hey ${username}, you logged in`);
        }, 2000)
    }else{
        alert(`can't log you in ${username}`)
    }
    
}