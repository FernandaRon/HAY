import React from 'react';
import {Link} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const HeaderBar = (props) => (
  <div>
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit">
          <Link to="/"><span>Home</span></Link>
        </Typography>
        <Typography variant="title" color="inherit">
          <Link to="/cohort"><Button label="Cohort" color="inherit">Cohort</Button></Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

export default HeaderBar;
