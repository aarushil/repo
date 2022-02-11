console.log('hello');

const contactForm = document.getElementById('contactForm');

let name = document.getElementById('person-name');
let email = document.getElementById('emailAddress');
let mobilenumber = document.getElementById('mobilenumber');
let companyname = document.getElementById('companyname');
let alert = document.querySelectorAll('.alert-success');
const spinner = document.querySelectorAll('.spinner-border');
const sendButton = document.querySelectorAll('.send-btn');
// const formModal = document.getElementById('formModal') // relatedTarget
const myModalEl = document.querySelector('#formModal')
const formModal = bootstrap.Modal.getOrCreateInstance(myModalEl) 
// const formModal = new bootstrap.Modal(document.getElementById('formModal'), {
//     keyboard: false
//   })
contactForm.addEventListener('submit',(e) => {
        e.preventDefault();
        let formData = {
            name : name.value,
            email : email.value,
            mobilenumber : mobilenumber.value,
            company : companyname.value
        }

        spinner[0].classList.remove('d-none');
        sendButton[0].classList.add('active');
        let xhr = new XMLHttpRequest();
        xhr.open('POST','/');
        xhr.setRequestHeader('content-type','application/json')
        xhr.onload = function(){
            // console.log(xhr.responseText);

           
            if(xhr.responseText == 'success'){
                spinner[0].classList.add('d-none');
                sendButton[0].classList.remove('active');
                alert[0].classList.remove('d-none');
               
                setTimeout(function(){
                
                  formModal.dispose();
                  formModal.hide();
                  alert[0].classList.add('d-none');
                
                  myModalEl.classList.remove('show');

                  myModalEl.style.display = "none";
                },1500)
                name.value ='';
                email.value='';
                mobilenumber.value='';
                companyname.value ='';
            }
            else{
                console.log('went wrong');
            }
        }

        xhr.send(JSON.stringify(formData))
        console.log(formData);
})