import React from 'react'
import IconButton from 'material-ui/lib/icon-button'
import FontIcon from 'material-ui/lib/font-icon'
import TextField from 'material-ui/lib/text-field'
import Colors from 'material-ui/lib/styles/colors'

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
    const styles = {
      iconButton: {
        float: 'right'
      },
      fontIcon: {
        lineHeight: '48px'
      },
      textFieldInput: {
        color: Colors.white
      },
      textFieldUnderline: {
        borderColor: Colors.transparent
      },
      textFieldUnderlineFocus: {
        borderColor: Colors.white
      }
    }

    return (
      <div>
        <IconButton style={styles.iconButton} onClick={this.showSearch.bind(this)}>
          <FontIcon className="material-icons" color={Colors.white} style={styles.fontIcon}>{this.state.searchActive ? 'clear' : 'search'}</FontIcon>
        </IconButton>
        <TextField className={this.state.searchActive ? '' : 'hidden'} ref="input" hint="Search" inputStyle={styles.textFieldInput} underlineStyle={styles.textFieldUnderline} underlineFocusStyle={styles.textFieldUnderlineFocus} onBlur={this.hideSearch.bind(this)}/>
      </div>
    )
  }
}
