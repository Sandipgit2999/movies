 document.querySelector('#loginform').addEventListener('submit', signup);


 function createobj(n,c,e,p){
     this.name=n;
     this.contact=c;
     this.email=e;
     this.password=p;
 }

 function signup(){
     event.preventDefault();
     let name=document.querySelector('#name').value;
     let contact=document.querySelector('#contact').value;
     let email=document.querySelector('#email').value;
     let password=document.querySelector('#password').value;

      let c1= new createobj(name,contact,email,password);
      console.log(c1)
      localStorage.setItem("userdata",JSON.stringify(c1));
    //   window.location='www.google.com';
 }

let usedata=JSON.parse(localStorage.getItem("userdata"))||[];

if(usedata.length >=1){
   alert("Aleready Signup No need to signup")}
