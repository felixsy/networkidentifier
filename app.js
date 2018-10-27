
let form = document.querySelector('#form');
    form.addEventListener('submit', checkNetwork);

let phoneNumber = document.querySelector('#num1');

    let mtnCode = /0803/;
    let hello = /hello/;

       
        
        enteredCode = [];
   
   
        function checkNetwork(e){
            if(phoneNumber.search(mtnCode)){
                console.log(mtnCode); 
            }else{
                console.log('Unknown Network'); 
            }

            if(hello.exec('hello')){
                console.log('hello');
                console.log(mtnCode); 
            }

            
            e.preventDefault();

        }
            
        
      

    