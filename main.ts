import { login } from './login';

const form = document.querySelector('form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = document.getElementById('exampleInputEmail1') as HTMLInputElement;
  const passwordInput = document.getElementById('exampleInputPassword1') as HTMLInputElement;
  const datos = document.getElementById('datos') as HTMLElement
  if (emailInput && passwordInput) {
    const email = emailInput.value;
    const password = passwordInput.value;
    datos.innerHTML =`Email:${email} <br> Password:${password}`;

    //if (login(email, password)) {
      //alert('Ha iniciado sesion');
      //window.location.href ='Sitio-oficial.html'//
      
    //} else {
      //alert('verificar los datos de nuevo');
   //}
  }
});