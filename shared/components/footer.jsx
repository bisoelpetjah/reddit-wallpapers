import React from 'react'
import Colors from 'material-ui/lib/styles/colors'

export default class Footer extends React.Component {
  render() {
    const styles = {
      footer: {
        fontSize: '14px',
        lineHeight: '14px',
        padding: '20px 50px 20px 50px',
        backgroundColor: Colors.blueGrey400,
        color: Colors.white
      }
    }

    return (
      <footer className="page-footer" style={styles.footer}>
        &copy; 2016 Irvan Adhitya
      </footer>
    )
  }
}
