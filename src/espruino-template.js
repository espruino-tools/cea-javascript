var elements = []

export const showTemplate = () => {
    let root = document.getElementById('page-root')
    
    createImage()
    createTitle()
    createSubText()

    elements.map((element) => {
        root.appendChild(element)
    })
}

const createImage = () => {
    let imageContainer = document.createElement('div')
    imageContainer.className = 'image-container'
    elements.push(imageContainer)
}

const createTitle = () => {
    let titleContainer = document.createElement('h1')
    titleContainer.innerText = "Espruino Tools"
    titleContainer.className = 'title-container'
    elements.push(titleContainer)
}

const createSubText = () => {
    let subtextContainer = document.createElement('p')
    subtextContainer.className = 'subtext-container'
    subtextContainer.innerHTML = 'Get started quick by looking at the documentation <a id="documentation-link" href="https://documentation-xi-liard.vercel.app">here</a>'
    elements.push(subtextContainer)
}