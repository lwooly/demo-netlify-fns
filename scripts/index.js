const messageNode = document.getElementById('message')


const render = (cars = [], DOMnode = messageNode) => {
    console.log(cars, `cars`)
    const frag = document.createDocumentFragment();
    cars.forEach(car => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${car.avatar_url}" /><span>${car.name} (${car.bhp})</span>`
        frag.append(li)
    })
    DOMnode.append(frag)
}


const getData = async () => {
    try {
        const res = await fetch('/.netlify/functions/read-all-cars')

        if (!res.ok) {
            throw res
        }
        const data = await res.json()
        
        render(data)
        
    } catch (error) {
        alert('Error fetching, check console!')
        console.log(error)
    }
}

getData()