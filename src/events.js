import {nav} from './elements.js'

export function registerNav(){
    nav.addEventListener('click', (event) =>{
        const click = event.target.id
        const background = {
            'home' : './assets/mountains-universe-1.png',
            'universe' : './assets/mountains-universe-2.png',
            'exploration' : './assets/mountains-universe-3.png'
        }

        resetClass()
        document.querySelector(`#${click}`).classList.add('active')

        document.body.style.background = `url(${background[click]})`
        
    })
}

function resetClass(){
    const links = document.querySelectorAll('a')
    links.forEach(link => {
        if (link.classList.contains('active')){
            link.classList.remove('active')
        }
    })
}
