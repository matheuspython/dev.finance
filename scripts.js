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
        amount: -500000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
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
    addTransection(transection, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransection(transection)
        console.log(tr.innerHTML)
    },
    innerHTMLTransection(transection) {
        const html = `
            <td class="description">${transection.description}</td>
            <td class="expense"> ${transection.amount}</td>
            <td class="date">${transection.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
        return html
    }
}

DOM.addTransection(Transections[0])