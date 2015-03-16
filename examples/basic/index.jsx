'use strict';

import React from 'react';
import Component from 'react-init-component';
import styles from '../global-styles';

var Application = React.createClass({

  render() {
    return (
      <div>
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Default</legend>

          <Component style={styles.component} />
        </fieldset>
      </div>
    );
  }
});

if (typeof window !== 'undefined') {
  React.render(
    <Application />,
    document.querySelector('#root')
  );
}

export default Application;
