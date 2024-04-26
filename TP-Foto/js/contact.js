$(document).ready(function(){

    $('#btnSend').click(function(){
  
        var errores = '';
  
        // Validado Nombre ==============================
        var regexNombre = /^[a-zA-Z\s]*$/; // Expresión regular para validar que el campo contenga sólo letras y espacios.
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else if (!regexNombre.test($('#names').val())) {
            errores += '<p>El nombre sólo puede contener letras</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }
  
        // Validado Teléfono ============================
        var regexTelefono = /^[0-9]*$/; // Expresión regular para validar que el campo contenga sólo números.
        if( $('#phone').val() == '' ){
            errores += '<p>Ingrese un número de teléfono</p>';
            $('#phone').css("border-bottom-color", "#F14B4B")
        } else if (!regexTelefono.test($('#phone').val())) {
            errores += '<p>El teléfono sólo puede contener números</p>';
            $('#phone').css("border-bottom-color", "#F14B4B")
        } else{
            $('#phone').css("border-bottom-color", "#d1d1d1")
        }
        
        // Validado Correo ==============================
        var email = $('#email').val();
        if (!(/\S+@\S+\.\S+/.test(email))) {
          errores += '<p>Ingrese un correo electrónico válido</p>';
          $('#email').css("border-bottom-color", "#F14B4B");
        } else {
          $('#email').css("border-bottom-color", "#d1d1d1");
        }
  
        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }
  
        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'
  
            $('body').append(mensajeModal);
        }else {
            const $form = document.querySelector('form');
            $form.addEventListener('submit',handleSubmit)
            async function handleSubmit(event){
                event.preventDefault()
                const form = new FormData(this);
                const response = await fetch(this.action,{
                    method:this.method,
                    body: form,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                if (response.ok){
                    this.reset()
                    alert('Gracias por tu consulta')
                }
            }
            // // Limpiar campos y mostrar mensaje de éxito
            // $('#names').val('');
            // $('#email').val('');
            // $('#phone').val('');
            // $('#mensaje').val('');
            // alert('Mensaje enviado correctamente');
          }
      
          // CERRANDO MODAL ==============================
          $('#btnClose').click(function(){
            $('.modal_wrap').remove();
          });
        });
      
      });