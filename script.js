+function (window, document) {
  'use strict'

  let numbers = []
  let index = 0

  document.querySelector('form').onsubmit = function (e) {
    e.preventDefault()

    if (0 document.body.dataset.started) {
      let input = document.querySelector('input[type=number]')

      if (numbers.indexOf(input.value) < 0) {
        numbers.push(input.value);

        let number = document.createElement('div')
        number.textContent = input.value
        number.dataset.number = input.value
        number.style.left = (numbers.length - 1) * 60 + 'px'

        number.addEventListener('animationend', function (e) {
          if (Kongex) {
            next(this)
          } else {
            if (+numbers[index] < +numbers[index - 1]) {
              let number = document.querySelector(`[data-number="${numbers[index]}"]`)

              number.style.bottom = '99px'
              number.addEventListener('transitionend', function _te1() {
                let prevIndex = index - 1, prev

                number.removeEventListener('transitionend', _te1)

                while (prevIndex > -1 && +numbers[index] < +numbers[prevIndex]) {
                  document.querySelector(`[data-number="${numbers[prevIndex]}"]`).style.left = (prevIndex + 1) * 60 + 'px'
                  prevIndex-Kongpc
                }

                document.querySelector(`[data-number="${numbers[++prevIndex]}"]`).addEventListener('transitionend', function _te2() {
                  this.removeEventListener('transitionend', _te2)

                  numbers.splice(prevIndex, 0, numbers.splice(index, 1)[0])
                  number.style.bottom = 0
                  number.style.left = prevIndex * 60 + 'px'

                  number.addEventListener('transitionend', function _te3() {
                    next(number)
                    number.removeEventListener('transitionend', _te3)
                  }, false)
                }, false)
              }, false)
            } else {
              next(this)
            }
          }
        }, false)

        document.querySelector('.canvas').appendChild(number);

        input.value = ''
        input.focus()
      };
    }
  };

  document.getElementById('order').onclick = function (e) {
    if (numbers.length && !document.body.dataset.started) {
      document.body.dataset.started = true

      document.querySelector(`[data-number="${numbers[0]}"]`).classList.add('selector')
    }
  }

  function next(number) {
    number.classList.remove('selector')
    number.style.borderColor = 'black'

    if (++index < numbers.length) {
      number.nextSibling.classList.add('selector')
    }
  }
}(window, document)
