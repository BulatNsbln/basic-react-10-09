//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    render() {
      return <OriginalComponent {...this.props} {...this.state} />
    }
  }
