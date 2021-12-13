const formulario = document.getElementById('formulario');
var inputs = document.querySelectorAll('#formulario input');
var Nombre = document.getElementById('name');
var Email = document.getElementById('email');
var Telefono = document.getElementById('telefono');
var lblNombre = document.getElementById('nombre-lbl');
var lblEmail = document.getElementById('email-lbl');
var lblTelefono = document.getElementById('telefono-lbl');
var lblContraseña = document.getElementById('contraseña-lbl');
var contraseña = document.getElementById('contraseña')
var lblContraseña2 = document.getElementById('contraseña-lbl2');
var contraseña2 = document.getElementById('contraseña2')
var h1 = document.getElementById('confirmacion')

var confirmacion = "Gracias por Registrarse"
var  error = "Por favor complete el formulario correctamente"
var entrar = false;
var AlertaNombre = document.getElementById('alerta1')
var AlertaEmail = document.getElementById('alerta2')
var AlertaTelefono = document.getElementById('alerta3')
var AlertaContraseña = document.getElementById('alerta4')
var AlertaContraseña2 = document.getElementById('alerta5')


const validarFormulario = (e) => {
	switch (e.target.name) {


        case 'nombre':
        if(restriccionesInputs.nombre.test(e.target.value) )
        {
            AlertaNombre.style.visibility = 'hidden';
            AlertaNombre.style.opacity = '0';
            lblNombre.style.color = "#35b680"
   
            entrar = true;
            h1.style.visibility = "hidden"
         
      
        
    
          
        }
        else{
            AlertaNombre.style.visibility = 'visible';
            AlertaNombre.style.opacity = '1';
            AlertaNombre.style.color = "red"
            lblNombre.style.color = "red"
          
            entrar = false;
            h1B.style.visibility = "hidden"
            console.log(false);
           

             
            
     
            
        }
        break;
   
             case 'email':
                if(restriccionesInputs.email.test(e.target.value) )
                {
                    AlertaEmail.style.visibility = 'hidden';
                    AlertaEmail.style.opacity = '0';
                    lblEmail.style.color = "#35b680"
                   
                    entrar = true;
                    h1.style.visibility = "hidden"
             
                 
                  
                
                 
                
                
                }
                
                else{
                    AlertaEmail.style.visibility = 'visible';
                    AlertaEmail.style.opacity = '1';
                    AlertaEmail.style.color = "red"
                    lblEmail.style.color = "red"
              
                    entrar = false;
                    h1B.style.visibility = "hidden"
                   
                
            
             
                }
                 break;
                 case 'telefono':
                    if(restriccionesInputs.telefono.test(e.target.value))
                    {
                        AlertaTelefono.style.visibility = 'hidden';
                        AlertaTelefono.style.opacity = '0';
                        lblTelefono.style.color = "#35b680"
                      
                        entrar = true;
                        h1.style.visibility = "hidden"
                   
                    
               
             
                       
                    }
                   
                    else{
                        AlertaTelefono.style.visibility = 'visible';
                        AlertaTelefono.style.opacity = '1';
                        AlertaTelefono.style.color = "red"
                        lblTelefono.style.color = "red"
               
                        entrar = false;
                        h1B.style.visibility = "hidden"
                      
            
                   
                    }
                   
                     break;
                 
                  

                    case 'contraseña':
                     if(restriccionesInputs.contraseña.test(e.target.value) && contraseña.value == contraseña2.value)
                    {
                    
                        AlertaContraseña.style.visibility = 'hidden';
                        AlertaContraseña.style.opacity = '0';
                        AlertaContraseña2.style.visibility = 'hidden';
                        AlertaContraseña2.style.opacity = '0';
                        lblContraseña.style.color = "#35b680"
                        lblContraseña2.style.color = "#35b680"
                    
                        entrar = true;
                        h1.style.visibility = "hidden"
                
                
                    }
          
                 
                   
    
                else if(!restriccionesInputs.contraseña.test(e.target.value)){
                    
         
                    AlertaContraseña.style.visibility = 'visible';
                    AlertaContraseña.style.opacity = '1';
                    AlertaContraseña.style.color = "red"
                    lblContraseña.style.color = "red"
               
                    lblContraseña2.style.color = "red"
                  
                    entrar = false;
                    h1B.style.visibility = "hidden"
                   
                
                 
             

                }else if(contraseña.value !== contraseña2.value){
            
                    AlertaContraseña2.style.visibility = 'visible';
                    AlertaContraseña2.style.opacity = '1';
                    AlertaContraseña2.style.color = "red"
                    lblContraseña.style.color = "red"
                
                    lblContraseña2.style.color = "red"
                
                    entrar = false;
                    h1B.style.visibility = "hidden"
                }
                
            
                        break;


                       
                    
           
            
        

    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blure', validarFormulario)
    
});


const restriccionesInputs = {

    nombre:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/ ,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
    telefono: /^\d{7,14}$/,
    contraseña: /^.{4,12}$/,
    contraseña2: /^.{4,12}$/
}



function validacionCorrecta(){
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
       
    
    
    
        
         
            if(entrar == false){
                if(!restriccionesInputs.telefono.test(e.target.value) | !restriccionesInputs.email.test(e.target.value) | !restriccionesInputs.nombre.test(e.target.value) | !restriccionesInputs.contraseña.test(e.target.value)| contraseña.value !== contraseña2.value | contraseña.value =="" | contraseña2.value == ""){
                    entrar = false;
                    h1.innerHTML = error;
                    h1.style.color = "red"
                    h1.style.fontSize = "15px"
                    
                    h1.style.textAlign = "center"
                    h1.style.visibility = "visible"
                   
                
                   }
    
    
                if(!restriccionesInputs.telefono.test(e.target.value) & !restriccionesInputs.email.test(e.target.value) & !restriccionesInputs.nombre.test(e.target.value) & !restriccionesInputs.contraseña.test(e.target.value) & contraseña.value !== contraseña2.value){
                    entrar = false;
                   
                    h1.innerHTML = error;
                    h1.style.color = "red"
                    h1.style.fontSize = "15px"
             
                    h1.style.textAlign = "center"
                    h1.style.visibility = "visible"
                 
                
                }
    
            }else if(entrar == true){
    
                
                    entrar = true
                
                    h1.innerHTML = confirmacion
                    h1.style.width="100%"
                    h1.style.fontSize = "15px"
                    h1.style.color = "#35b680"
               
                    h1.style.textAlign = "center"
                    h1.style.visibility = "visible"
              
             
            
    
            }
     
           
        
    })
    
    }



    var typed = new Typed(".typing",{
 
        strings:["Una Tablet",
       "Una Laptop",
       "Un Iphone 12"],
        backSpeed: 60,
        typeSpeed: 100,
        loop: true
       
       
    });






   
