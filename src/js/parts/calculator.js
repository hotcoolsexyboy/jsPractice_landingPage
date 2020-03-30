function calculator() {
  let person = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    totalValue = document.getElementById('total'),
    place = document.getElementById('select');

  totalValue.textContent = 0;
  let t = place.options[place.selectedIndex].value;

  person.addEventListener('change', function () {
    if (this.value == '' || restDays.value == '') {
      totalValue.textContent = 0;
    } else {
      totalValue.textContent = (+restDays.value + (+this.value)) * 4000 * t;
    }
  });
  restDays.addEventListener('change', function () {
    if (this.value == '' || person.value == '') {
      totalValue.textContent = 0;
    } else {
      totalValue.textContent = (+person.value + (+this.value)) * 4000 * t;
    }
  });

  place.addEventListener('change', function () {
    t = this.options[this.selectedIndex].value;
    totalValue.textContent = (+person.value + (+restDays.value)) * 4000 * t;
  });
}

module.exports = calculator;