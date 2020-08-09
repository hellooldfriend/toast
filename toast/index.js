import './index.scss'

const toastTemplate = ({ title, message, index, type }) => {
    const cls = `toast-item ${type === 'alert' ? '_alert' : ''}`
    const titleBlock = title ? `<div class="toast-item-title">${title}</div>` : ''
    const messageBlock = message ? `<div class="toast-item-text">${message}</div>` : ''

    return `
        <div class="${cls}" data-index="${index}">
            ${titleBlock}
            ${messageBlock}
        </div>
    `
}

export class Toast {
    constructor() {
        this.elements = []

        this.$el =  this.elements.length === 0 ? this.#createContainer() : document.querySelector('.toast')

        this.#render()
    }

    #render() {
        this.$el.innerHTML = this.elements.map((el, i) => toastTemplate({...el, index: i})).join('')

        const items = this.$el.querySelectorAll('.toast-item')
        items.forEach(item => item.addEventListener('click', this.handleCloseClick.bind(this)))
    }

    #createContainer() {
        let container = document.createElement('div')
        container.classList.add('toast')
        document.body.appendChild(container)
        return container
    }

    // Handlers
    handleCloseClick = (e) => {
        const item = e.currentTarget
        const index = Number(item.getAttribute('data-index'))

        let newElements = [...this.elements]
        newElements.splice(index, 1)

        this.elements = newElements
        this.#render()
    }

    // Features
    message(toast) {
        this.elements.push({...toast, type: 'message'})
        this.#render()
    }

    alert(toast) {
        this.elements.push({...toast, type: 'alert'})
        this.#render()
    }
}