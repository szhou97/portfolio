
const toggleButton = document.querySelector('#mobile-menu')
const navbarLinks = document.querySelector('.navbar__menu')

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('is-active')
    navbarLinks.classList.toggle('active')
})

fetch('http://api.github.com/users/szhou97')
    .then(response => response.json())
    .then(data => {
        url = data.avatar_url
        bio = data.bio
        document.getElementById('profile_picture').src = url
        document.getElementById('bio').append(bio)
    })