import React from 'react'
import {connect} from 'react-redux'
import Header from 'components/header'
import Footer from 'components/footer'
import Card from 'components/card'
import {fetchWallpaperList} from 'actions'

class Home extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

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
            {this.props.isFetching ? 'Loading more' : ''}
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
      this.props.dispatch(fetchWallpaperList(this.props.after))
  }
}

export default connect(state => ({
  isFetching: state.wallpaper.isFetching,
  posts: state.wallpaper.posts,
  after: state.wallpaper.after
}))(Home)
