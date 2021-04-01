const form = document.querySelector('#my-form')
const msg = document.querySelector('.msg')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const btn = document.querySelector('.btn')
const userList = document.querySelector('#users')

form.addEventListener('submit', onSubmit);

function onSubmit(e){
   e.preventDefault();
   if(nameInput.value === '' || emailInput.value === ''){
       msg.innerHTML ='Please enter all fields'
       msg.classList.add('error');

       setTimeout(()=> msg.remove(), 3000);
   }else{
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
       userList.appendChild(li);

       emailInput.value = '';
       nameInput.value = '';
   }
   
}
