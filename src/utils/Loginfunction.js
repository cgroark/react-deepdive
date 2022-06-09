export default function Loginfunction({username, password}){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(username && password === 'pass1234'){
                alert(`hey ${username}, you logged in`);
                resolve()
            }else{
                alert(`can't log you in ${username}`)
                reject(new Error('invalid'))
            }
        }, 2000)
    })
        
}