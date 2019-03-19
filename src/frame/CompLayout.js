import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import '../assets/scss/manage.scss';

class ComLayout extends Component {
  render() {
    return (
      <div className="component-con">
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

export default ComLayout