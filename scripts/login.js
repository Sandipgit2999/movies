


document.querySelector('#loginform').addEventListener('submit',login);

var logindata=JSON.parse(localStorage.getItem('userdata'))
let names=document.getElementById("name");
console.log(logindata.name);
function login(){
    event.preventDefault();

    let email=document.querySelector('#email').value;
    console.log(email)
    let mypasss=document.querySelector('#password').value;
    console.log(mypasss);
    console.log(logindata.email);
     
    if(email==logindata.email && mypasss==logindata.password){
        alert("login Successful")
        names.innerText=logindata.name;

        window.open(document.getElementById('index'))
    }else{
        alert("Invalid Credentials")
    }

  

    
}