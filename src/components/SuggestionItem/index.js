// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, onSelectSuggestion} = props
  const {id, suggestion} = suggestionItem
  const onSelect = () => {
    onSelectSuggestion(id)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-name">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onSelect}
      />
    </li>
  )
}

export default SuggestionItem
