// Write your code here
import {Component} from 'react'

import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onChangeAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="cash-withdrawal-container">
        <div className="cash-withdrawal-card-container">
          <div className="name-container">
            <div className="name-logo">S</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="rupees-container">
              <p className="digits">{amount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdrawal-heading">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationsList={eachDenomination}
                key={eachDenomination.key}
                onChange={this.onChangeAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
