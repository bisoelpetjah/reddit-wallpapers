import React from 'react'
import IconButton from 'material-ui/lib/icon-button'
import FontIcon from 'material-ui/lib/font-icon'
import TextField from 'material-ui/lib/text-field'
import Colors from 'material-ui/lib/styles/colors'

const iconButtonStyle = {
  float: 'right'
}

const fontIconStyle = {
  lineHeight: '48px'
}

const textFieldInputStyle = {
  color: Colors.white
}

const textFieldUnderlineStyle = {
  borderColor: Colors.transparent
}

const textFieldUnderlineFocusStyle = {
  borderColor: Colors.white
}

export default class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {searchActive: false}
  }

  showSearch() {
    this.refs.input.clearValue()
    this.setState({searchActive: true})
    setTimeout(() => {
      this.refs.input.focus()
    }, 100)
  }

  hideSearch() {
    this.refs.input.blur()
    this.setState({searchActive: false})
  }

  render() {
    return (
      <div>
        <IconButton style={iconButtonStyle} onClick={this.showSearch.bind(this)}>
          <FontIcon className="material-icons" color={Colors.white} style={fontIconStyle}>{this.state.searchActive ? 'clear' : 'search'}</FontIcon>
        </IconButton>
        <TextField className={this.state.searchActive ? '' : 'hidden'} ref="input" hint="Search" inputStyle={textFieldInputStyle} underlineStyle={textFieldUnderlineStyle} underlineFocusStyle={textFieldUnderlineFocusStyle} onBlur={this.hideSearch.bind(this)}/>
      </div>
    )
  }
}
