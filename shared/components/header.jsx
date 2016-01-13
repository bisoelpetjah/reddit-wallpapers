import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import SearchBar from 'components/searchbar'
import Colors from 'material-ui/lib/styles/colors'

export default class Header extends React.Component {
  render() {
    const styles = {
      appBar: {
        height: '48px',
        minHeight: '48px',
        backgroundColor: Colors.blueGrey500
      },
      appBarTitle: {
        fontSize: '20px',
        lineHeight: '48px'
      }
    }

    return (
      <header>
        <nav>
          <AppBar title="/r/wallpaper" style={styles.appBar} titleStyle={styles.appBarTitle} showMenuIconButton={false}>
            <SearchBar />
          </AppBar>
        </nav>
      </header>
    )
  }
}
