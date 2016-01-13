import React from 'react'
import Paper from 'material-ui/lib/paper'

export default class Card extends React.Component {
  render() {
    const styles = {
      paper: {
        width: '300px',
        height: '200px',
        margin: '10px',
        display: 'inline-block'
      },
      image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }

    return (
      <Paper style={styles.paper}>
        <img src={this.props.post.url} style={styles.image} />
      </Paper>
    )
  }
}
