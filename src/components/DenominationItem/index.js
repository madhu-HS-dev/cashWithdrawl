// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationsList, onChange} = props
  const {value} = denominationsList

  const onChangeDenomination = () => {
    onChange(value)
  }
  return (
    <li className="list">
      <button type="button" className="button" onClick={onChangeDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
