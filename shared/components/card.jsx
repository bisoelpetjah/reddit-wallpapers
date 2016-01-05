import React from 'react'
import Paper from 'material-ui/lib/paper'

const paperStyle = {
  width: '300px',
  height: '200px',
  margin: '10px',
  display: 'inline-block'
}

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}

export default class Card extends React.Component {
  render() {
    return (
      <Paper style={paperStyle}>
        <img src={this.props.post.url} style={imageStyle} />
      </Paper>
    )
  }
}
