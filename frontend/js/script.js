let gridNet = document.querySelector('.grid-net')
let gridOrg = document.querySelector('.grid-org')
let gridOther = document.querySelector('.grid-other')
let url = 'http://localhost:8080/'
function reload(arr, place, place2, place3) {
    place.innerHTML = ''
    place2.innerHTML = ''
    place3.innerHTML = ''

    for(let item of arr) {
        let card = document.createElement('div')
        let title = document.createElement('h3')
        let desc = document.createElement('div')
        let company = document.createElement('h4')
        let website = document.createElement('h4')
        let email = document.createElement('h4')
        let tel = document.createElement('h4')
        let a = document.createElement('a')
        let aBtn = document.createElement('button')

        card.classList.add('card')
        title.classList.add('title')
        desc.classList.add('desc')
        a.classList.add('more')
        aBtn.classList.add('moreBtn')

        if(item.email.endsWith('net')) {
            place.append(card)
        } else if (item.email.endsWith('org')) {
            place2.append(card)
        } else {
            place3.append(card)
        }

        card.append(title, desc, a)
        desc.append(company, website, tel, email)
        a.append(aBtn)

        a.href = './more.html?id=' + item.id

        title.innerHTML = item.name
        company.innerHTML = "company: " +  item.company.name
        website.innerHTML = "website: " +  item.website
        tel.innerHTML = "phone: " +  item.phone
        email.innerHTML = "email: " +  item.email
        aBtn.innerHTML = 'Подробнее'
    }
}

function getData() {
    fetch(url + 'users')
        .then(res => res.json())
        .then(res => reload(res, gridNet, gridOrg, gridOther))
}

getData()

let showBtns = document.querySelectorAll('[data-grid]')
let grids = document.querySelectorAll('[data-gridName]')

// grids.forEach(grid => {
    showBtns.forEach(btn => {
        btn.onclick = () => {
            if(btn.classList.contains('hide')) {
                btn.classList.remove('hide')
                btn.innerHTML = 'Скрыть'

                if(btn.dataset.grid === 'net') {
                    gridNet.style.height = gridNet.scrollHeight + 'px'
                } else if(btn.dataset.grid === 'org') {
                    gridOrg.style.height = gridOrg.scrollHeight + 'px'
                } else if(btn.dataset.grid === 'other') {
                    gridOther.style.height = gridOther.scrollHeight + 'px'
                }
            } else {
                btn.classList.add('hide')
                btn.innerHTML = 'Показать все'

                if(btn.dataset.grid === 'net') {
                    gridNet.style.height = '190px'
                } else if(btn.dataset.grid === 'org') {
                    gridOrg.style.height = '190px'
                } else if(btn.dataset.grid === 'other') {
                    gridOther.style.height = '190px'
                }
            }
        }
    })
// })
