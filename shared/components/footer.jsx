import React from 'react'
import Colors from 'material-ui/lib/styles/colors'

const footerStyle = {
  fontSize: '14px',
  lineHeight: '14px',
  padding: '20px 50px 20px 50px',
  backgroundColor: Colors.blueGrey400,
  color: Colors.white
}

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer" style={footerStyle}>
        &copy; 2016 Irvan Adhitya
      </footer>
    )
  }
}
