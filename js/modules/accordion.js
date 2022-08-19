export default function initAccordion() {
  const $dt = document.querySelectorAll('[data-anime="accordion"] dt');

  function activeAccordion() {
    this.classList.toggle('dd-ativo');
    this.nextElementSibling.classList.toggle('dd-ativo');
  }

  if ($dt.length) {
    $dt[0].classList.add('dd-ativo');
    $dt[0].nextElementSibling.classList.add('dd-ativo');

    $dt.forEach((item) => item.addEventListener('click', activeAccordion));
  }
}
