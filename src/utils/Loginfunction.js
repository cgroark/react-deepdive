export default function Loginfunction({username, password}){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(username && password === 'pass1234'){
                resolve()
            }else{
                reject(new Error('invalid password or email'))
            }
        }, 500)
    })
}