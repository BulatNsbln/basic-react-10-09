import React, { PureComponent } from 'react'

class Article extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render() {
    console.log('---', 'rendering')
    const { article } = this.props
    return (
      <div>
        <div>
          <h3 ref={this.setTitleRef}>{article.title}</h3>
          <button onClick={this.handleBtnClick}>
            {this.state.isOpen ? 'close' : 'open'}
          </button>
        </div>
        {this.state.isOpen && <section>{article.text}</section>}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () => this.setState({ isOpen: !this.state.isOpen })
}

export default Article
