import React from 'react'
import {Link} from 'react-router'
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
        <a href={this.props.post.url} target="blank">
          <img src={this.props.post.url} style={styles.image} />
        </a>
      </Paper>
    )
  }
}
