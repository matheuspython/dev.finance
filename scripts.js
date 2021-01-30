const Modal = {
    open() {
        document.querySelector('.modal-overlay').
        classList.add('active')
    },
    close() {

        document.querySelector('.modal-overlay').
        classList.remove('active')
    }
}

const Transections = [{
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    }, {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    },
    {
        id: 4,
        description: 'App',
        amount: 20000,
        date: '23/01/2021'
    }
]

const Transection = {
    incomes() {

    },
    expenses() {

    },
    total() {

    }
}

const DOM = {
    TransectionsContainer: document.querySelector('#data-table tbody'),
    addTransection(transection, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransection(transection)

        DOM.TransectionsContainer.appendChild(tr)
    },
    innerHTMLTransection(transection) {
        const CSSclass = transection.amount > 0 ? 'income' : 'expense'

        const html = `
            <td class="description">${transection.description}</td>
            <td class="${CSSclass}"> ${transection.amount}</td>
            <td class="date">${transection.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
        return html
    }
}

Transections.forEach((transection) => DOM.addTransection(transection))