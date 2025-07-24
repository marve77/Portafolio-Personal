// Actualiza el número de proyectos realizados leyendo las tarjetas de portafolio.html
document.addEventListener('DOMContentLoaded', function() {
  fetch('portafolio.html')
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const proyectos = doc.querySelectorAll('.proyecto');
      const numProyectos = document.getElementById('num-proyectos');
      if (numProyectos) {
        numProyectos.textContent = `+${proyectos.length}`;
      }
    });
});
