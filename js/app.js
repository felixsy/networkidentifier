
let form = document.querySelector('#form');
    form.addEventListener('submit', checkNetwork);
    
    let hello = /hello/;
   
        function checkNetwork(){

            let number = document.querySelector('#num');
            let mtnCode = /^(08[01][36])/;
            let airtelCode = /^080[28]/;
            let gloCode = /^080[57]/;
               
                if(mtnCode.test(number.value)){
                    console.log('The Number Entered is MTN Network'); 
                }else{
                    console.log('Unknown Network'); 
                }
        }
            
        
      

    