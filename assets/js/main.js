//List of authorized emails
const listaEmail =['massimo@gmail.com', 'romano@gmail.com', 'mr@gmail.com']
console.log(listaEmail);

//function to authorize emails
const verificaEmail = () => {
    //Get the value entered by the user
    const userEmail = document.getElementById('check').value
    let accessAllow= false
    console.log(userEmail);

//Check if the email is in the whitelist using a for loop
    for(let i = 0 ; i < listaEmail.length ; i++){

        if(listaEmail[i] === userEmail){
            accessAllow = true;
            break; 
        }
    }

    if(accessAllow){
        alert('Accesso Consentito')
         
    }else{
        alert('Accesso negato')
        
    }  
}
document.getElementById('verification').addEventListener('click', verificaEmail);