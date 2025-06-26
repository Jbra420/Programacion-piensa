// Al presionar el botón, te lleva al quiz (ejemplo: quiz.html, cambia si usas otro archivo)
document.addEventListener('DOMContentLoaded', () => {
    const irQuizBtn = document.getElementById('irQuizBtn');
    if (irQuizBtn) {
        irQuizBtn.addEventListener('click', () => {
            window.location.href = "index.html"; // Cambia por la ruta real de tu quiz
        });
    }
});

// Aquí puedes poner lógica para animar, cargar eventos dinámicamente, abrir modal, etc.
// Por ejemplo, alerta al presionar "Ver detalles":
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.evento-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      alert('Próximamente más información sobre este evento.');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Mostrar un alert con los datos ingresados
  const form = document.querySelector('.perfil-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const fecha = document.getElementById('fecha').value;
      alert(`Nombre: ${nombre}\nEmail: ${email}\nContraseña: ${password}\nFecha: ${fecha}`);
      // Aquí puedes agregar lógica de login real, guardar en localStorage, etc.
    });
  }
});