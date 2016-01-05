import React from 'react'
import {connect} from 'react-redux'
import Header from 'components/header'
import Footer from 'components/footer'
import Card from 'components/card'

const mainStyle = {
  padding: '0 50px'
}

const gridStyle = {
  margin: '0 auto',
  textAlign: 'center'
}

class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <main style={mainStyle}>
          <div style={gridStyle}>
            {
              this.props.posts.map(post => {
                return (
                  <Card key={post.name} post={post} />
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
