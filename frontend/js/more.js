const user = document.querySelector('.user')
const code = document.querySelector('.code')
const id = location.search.split('=').at(-1)
const url = 'http://localhost:8080/users/'

fetch(url + id)
    .then(res => res.json())
    .then(res => {
        user.innerHTML = `user: ${id} - ${res.name}`
        code.innerHTML = JSON.stringify(res, null, 2)
    })