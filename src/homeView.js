export const elements = {
    body: document.querySelector('body')
}

export const renderHome = () => {
    const markup = `<h1>Hello, World</h1>`

    elements.body.innerHTML = markup
}