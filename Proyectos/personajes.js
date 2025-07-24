// Script para el carrusel y modal de imágenes en Personajes Rick y Morty

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.carousel-img');
  let current = 0;
  function showImage(idx) {
    images.forEach((img, i) => {
      img.style.display = i === idx ? 'block' : 'none';
    });
  }
  document.getElementById('prev').onclick = () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  };
  document.getElementById('next').onclick = () => {
    current = (current + 1) % images.length;
    showImage(current);
  };
  showImage(current);

  // Modal funcionalidad
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const closeModal = document.getElementById('closeModal');
  images.forEach(img => {
    img.style.cursor = 'pointer';
    img.onclick = () => {
      modalImg.src = img.src;
      modal.classList.remove('hidden');
    };
  });
  closeModal.onclick = () => {
    modal.classList.add('hidden');
    modalImg.src = '';
  };
  // Cerrar modal al hacer click fuera de la imagen
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modalImg.src = '';
    }
  };
});
