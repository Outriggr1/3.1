const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')
const rub = document.querySelector("#rub")
const yuan = document.querySelector("#yuan")

const convert = (elem, target, target2) => {
    elem.addEventListener("input", () => {

        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.addEventListener("load", () => {
            const data = JSON.parse(request.response)

            target.forEach(e =>{
                target2 === 'som'?
                    e.value = (elem .value / data [e.id]).toFixed(2) : e === som ?
                        e.value = (elem.value * data[elem.id]).toFixed(2)
                        :e.value = ((elem.value * data[elem.id])/ data[e.id]).toFixed(2)
            } )
            elem.value === '' && (target.forEach(e => e.value = ''))
        })
        request.onerror = () => {
            alert.error("Произошла ошибка!")
        }
    })
}
convert(som,[usd,euro])
convert(usd,[som,euro])
convert(euro,[som,usd])
