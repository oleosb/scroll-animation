let contents = document.querySelectorAll('.content')
let contentContainer = document.querySelector('.content-container')

window.addEventListener('scroll', innerContent)

function innerContent() {
        let viewPortHeight = window.innerHeight / 1.1

        contents.forEach(content => {
                let topContent = content.getBoundingClientRect().top

                if (topContent < viewPortHeight) {
                        content.classList.add('show')
                } else {
                        content.classList.remove('show')
                }
        })
}