const acc = document.getElementsByClassName('accordion')
let i

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle('active')

        this.nextElementSibling.classList.toggle('show')
    }
}


const counters = document.querySelectorAll('.number')
const speed = 26

counters.forEach(number => {
    const updateCount = () => {
        const target = +number.getAttribute('data-target')
        const count = +number.innerText

        const inc = target / speed

       if(count < target) {
            number.innerText = count + inc
            setTimeout(updateCount, 1)
       } else {
           count.innerText = target
       }
    }

    updateCount()
})
