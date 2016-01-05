import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import SearchBar from 'components/searchbar'
import Colors from 'material-ui/lib/styles/colors'

const appBarStyle = {
  height: '48px',
  minHeight: '48px',
  backgroundColor: Colors.blueGrey500
}

const appBarTitleStyle = {
  fontSize: '20px',
  lineHeight: '48px'
}

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <AppBar title="/r/wallpaper" style={appBarStyle} titleStyle={appBarTitleStyle} showMenuIconButton={false}>
            <SearchBar />
          </AppBar>
        </nav>
      </header>
    )
  }
}
