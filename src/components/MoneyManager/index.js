import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {transactionList: [], title: '', amount: '', type: ''}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  addTransaction = event => {
    event.preventDefalut()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
    }))
  }

  render() {
    const {title, amount, type, transactionList} = this.state
    return (
      <div className="bg-container">
        <div className="title-container">
          <h1 className="title-heading">Hi, Richards</h1>
          <p className="title-description">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <div className="balance-details">
          <div className="balance-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
              className="balance-image"
            />
            <div className="data-container">
              <p className="balance">Your Balance</p>
              <p className="amount">Rs 0</p>
            </div>
          </div>
          <div className="income-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
              className="income-image"
            />
            <div className="data-container">
              <p className="balance">Your Balance</p>
              <p className="amount">Rs 0</p>
            </div>
          </div>
          <div className="expenses-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
              className="expenses-image"
            />
            <div className="data-container">
              <p className="balance">Your Balance</p>
              <p className="amount">Rs 0</p>
            </div>
          </div>
        </div>
        <div className="total-data-container">
          <form
            className="transection-container"
            onSubmit={this.addTransaction}
          >
            <h1 className="transection-heading">Add Transection</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              className="text-input"
              id="title"
              onChange={this.onChangeTitle}
              value={title}
            />
            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              className="text-input"
              id="amount"
              onChange={this.onChangeAmount}
              value={amount}
            />
            <label className="label" htmlFor="type">
              TYPE
            </label>
            <select
              className="text-input"
              id="type"
              onChange={this.onChangeType}
              value={type}
            >
              {transactionTypeOptions.map(each => (
                <option>{each.displayText}</option>
              ))}
            </select>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>

          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="history-details">
              <p className="title-part">Title</p>
              <p className="amount-part">Amount</p>
              <p className="type-part">Type</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
