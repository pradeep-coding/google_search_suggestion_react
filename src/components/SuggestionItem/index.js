import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, onClickAutoComplete} = props

  const {suggestion} = suggestionItem

  const onAutoComplete = () => {
    onClickAutoComplete(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-logo"
        onClick={onAutoComplete}
      />
    </li>
  )
}

export default SuggestionItem
