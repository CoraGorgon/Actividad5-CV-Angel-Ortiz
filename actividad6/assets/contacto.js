document.getElementById('formulario').addEventListener('submit', function (evento) {
  evento.preventDefault();
  if (!this.reportValidity()) return;
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;
  const cuerpo = 'Nombre: ' + nombre + '\nCorreo: ' + correo + '\n\n' + mensaje;
  window.location.href = 'mailto:25000075@alumnos.utleon.edu.mx?subject=Contacto%20del%20portafolio&body=' + encodeURIComponent(cuerpo);
});
