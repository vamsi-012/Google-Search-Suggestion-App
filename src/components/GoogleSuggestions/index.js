// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSelectSuggestion = id => {
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(each => each.id === id)
    const selectedSuggestion = searchResults[0].suggestion
    this.setState({searchInput: selectedSuggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="suggestions-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              placeholder="Search Google"
              type="search"
              id="input"
              value={searchInput}
              className="search-input"
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul className="suggestions-list">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                suggestionItem={eachSuggestion}
                key={eachSuggestion.id}
                onSelectSuggestion={this.onSelectSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
