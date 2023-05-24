const btn = document.querySelector('.get')
const box = document.querySelector('.wrapper')

btn.addEventListener('click',() => {
    const request = new XMLHttpRequest()
    request.open("GET","data.json")
    request.setRequestHeader("Content-Type","application.json")
    request.send()

    request.addEventListener("load",() => {
        const data = JSON.parse(request.response)

        data.forEach(i => {
            const card = document.createElement('div')

            card.innerHTML = `
            <div class="card">
                <img class="card_img" src="${i.image}" alt="#">
                <p>${i.name}</p>
                <span>${i.price}</span>
            </div>`
            box.append(card)
        })
    })
})

