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



const Transaction = {
    all: [{
            description: 'Luz',
            amount: -50000,
            date: '23/01/2021'
        }, {
            description: 'Website',
            amount: 500000,
            date: '23/01/2021'
        },
        {
            description: 'Internet',
            amount: -20000,
            date: '23/01/2021'
        },
        {
            id: 4,
            description: 'App',
            amount: 200000,
            date: '23/01/2021'
        }
    ],
    add(transaction) {
        Transaction.all.push(transaction)
        App.reload()
    },
    remove(index) {
        Transaction.all.splice(index, 1)
        App.reload()
    },
    incomes() {
        let income = 0
        Transaction.all.forEach(transection => {
            if (transection.amount > 0) income += transection.amount
        })

        return income
    },
    expenses() {
        let expense = 0
        Transaction.all.forEach(transection => {
            if (transection.amount < 0) expense += transection.amount
        })

        return expense
    },
    total() {
        return Transaction.incomes() + Transaction.expenses()
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

        const amount = Utils.formatCurrency(transection.amount)

        const html = `
            <td class="description">${transection.description}</td>
            <td class="${CSSclass}"> ${amount}</td>
            <td class="date">${transection.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
        return html
    },
    updateBalance() {
        document.getElementById('incomeDisplay').
        innerHTML = Utils.formatCurrency(Transaction.incomes())

        document.getElementById('expenseDisplay').
        innerHTML = Utils.formatCurrency(Transaction.expenses())

        document.getElementById('totalDisplay').
        innerHTML = Utils.formatCurrency(Transaction.total())
    },
    clearTransactions() {
        DOM.TransectionsContainer.innerHTML = ''
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? '-' : ''
        value = String(value).replace(/\D/g, '')
        value = Number(value) / 100
        value = value.toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
        })
        return signal + value
    }
}

const Form = {
    formatData() {

    },
    validateField() {
        console.log(Form)
    },
    submit(event) {
        event.preventDefault()
        Form.validateField()
        Form.formatData()
    }
}

const App = {
    init() {
        Transaction.all.forEach(transection => DOM.addTransection(transection))


        DOM.updateBalance()

    },
    reload() {
        DOM.clearTransactions()
        App.init()
    }
}

App.init()