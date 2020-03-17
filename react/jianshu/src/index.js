import React from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style'
import { IconGlobalstyle } from './statics/iconfont/iconfont'
import { IconGlobalstyle1 } from './statics/iconfont2/iconfont'
import App from './App';

ReactDOM.render(
  <div>
    <Globalstyle />
    <IconGlobalstyle />
    <IconGlobalstyle1 />
    <App />
  </div>,
  document.getElementById('root')
);
