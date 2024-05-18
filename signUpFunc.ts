import {Sign} from './SignUp';

const form = document.querySelector('form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre_user') as HTMLInputElement;
  const emailInput = document.getElementById('exampleInputEmail1') as HTMLInputElement;
  const passwordInput = document.getElementById('exampleInputPassword1') as HTMLInputElement;
  const ConpasswordInput = document.getElementById('exampleInputPassword1') as HTMLInputElement;
  const datosR = document.getElementById('datosR') as HTMLElement
  if (emailInput && passwordInput && ConpasswordInput && nombre) {
    const nom= nombre.value;
    const conpass = ConpasswordInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    //datosR.innerHTML =`Email:${email} <br> Password:${password} <br> Nombre:${nom} <br> Confirmar contraseña:${conpass}`;

    if (Sign(email, password,nom)) {
      alert(`Email:${email}\n Nombre:${nom} \n Password:${password} \n Confirmar contraseña:${conpass}`);
      window.location.href ='index.html'
      
    } else {
      alert('verificar los datos de nuevo');
   }
  }
});