console.log('connecté')


const home = document.querySelector('.icone_home')
const réseaux = document.querySelectorAll('.fab')
const navContent = document.querySelectorAll('.sans_rs h2')
console.log(navContent)

const linkToNav = ['portfolio.html','aboutme.html','contact.html']
const linkToRes = ['https://www.facebook.com/sebastien.montibert/','https://www.linkedin.com/in/s%C3%A9bastien-montibert-729795153/']




// animation home
home.addEventListener('click', function () {
    location.href='/index.html'

})
home.addEventListener('mouseover', function () {
    home.style.color = '#507bcb'
    home.style.cursor = 'pointer'

})
home.addEventListener('mouseout', function () {
    home.style.color = '#8faadc'
    home.style.cursor = 'default'

})


// animation navbar autre que home et RS
for (let i = 0; i < navContent.length; i++) {
    let navEl = navContent[i]
    navEl.addEventListener('click', function () {
        location.href=linkToNav[i]
    })
}

for (let i = 0; i < navContent.length; i++) {
    let navEl = navContent[i]
    navEl.addEventListener('mouseover', function () {
        navEl.style.color = '#507bcb'
        navEl.style.cursor = 'pointer'

    })
}

for (let i = 0; i < navContent.length; i++) {
    let navEl = navContent[i]
    navEl.addEventListener('mouseout', function () {
        navEl.style.color = '#8faadc'
        navEl.style.cursor = 'default'
    })
}


// animation réseaux sociaux
for (let i = 0; i < réseaux.length; i++) {
    let réseau = réseaux[i]
    réseau.addEventListener('click', function () {
        window.open(linkToRes[i])
    })
}

for (let i = 0; i < réseaux.length; i++) {
    let réseau = réseaux[i]
    réseau.addEventListener('mouseover', function () {
        réseau.style.color = '#507bcb'
        réseau.style.cursor = 'pointer'
    })
}

for (let i = 0; i < réseaux.length; i++) {
    let réseau = réseaux[i]
    réseau.addEventListener('mouseout', function () {
        réseau.style.color = '#8faadc'
        réseau.style.cursor = 'default'

    })
}

