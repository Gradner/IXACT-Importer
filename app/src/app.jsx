import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter, Route } from 'react-router-dom';
import IndexPage from './components/IndexPage.jsx';
import UploadedPage from './components/UploadedPage.jsx';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <HashRouter>
      <Route path="/" component={IndexPage}/>

    </HashRouter>
  </MuiThemeProvider>), document.getElementById('react-app'));
