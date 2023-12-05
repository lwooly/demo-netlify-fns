const messageNode = document.getElementById('message')

const render = (message = "", node = messageNode) => {
messageNode.textContent = message
}

const getData = async () => {
    try {
        const res = await fetch('./.netlify/functions/hello-world')

        if (!res.ok) {
            throw res
        }

        const data = await res.json()
        render(data.message)
    } catch (error) {
        
    }
}

getData()