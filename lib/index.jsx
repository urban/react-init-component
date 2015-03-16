'use strict';

import React, { Component } from 'react';

export default class ReactInitComponent extends Component {

  render() {
    return (
      <div {...this.props}>
        Hello World!
      </div>
    );
  }
}
