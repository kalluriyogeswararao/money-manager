import {Component} from 'react'
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
  render() {
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
      </div>
    )
  }
}

export default MoneyManager
