import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchItem: '',
  }

  onChangeSearch = event => {
    this.setState({searchItem: event.target.value})
  }

  onClickAutoComplete = suggestion => {
    this.setState({searchItem: suggestion})
  }

  render() {
    const {searchItem} = this.state
    const {suggestionsList} = this.props
    const updatedSuggestionList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchItem.toLowerCase()),
    )

    return (
      <div className="google-bg-container">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-and-suggestions">
            <div className="input-search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-logo"
              />
              <input
                type="search"
                placeholder="Search Google"
                onChange={this.onChangeSearch}
                value={searchItem}
                className="search-input"
              />
            </div>
            <ul className="suggestions-list">
              {updatedSuggestionList.map(eachSuggestion => (
                <SuggestionItem
                  suggestionItem={eachSuggestion}
                  key={eachSuggestion.id}
                  onClickAutoComplete={this.onClickAutoComplete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
