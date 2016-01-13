import React from 'react'
import {connect} from 'react-redux'
import Header from 'components/header'
import Footer from 'components/footer'
import Card from 'components/card'

class Home extends React.Component {
  render() {
    const styles = {
      main: {
        padding: '0 50px'
      },
      grid: {
        margin: '0 auto',
        textAlign: 'center'
      }
    }

    return (
      <div className="page">
        <Header />
        <main style={styles.main}>
          <div style={styles.grid}>
            {
              this.props.posts.map(post => {
                return (
                  <Card key={post.id} post={post} />
                )
              })
            }
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default connect(state => ({posts: state.wallpaper.posts}))(Home)
