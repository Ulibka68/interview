import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.module.css';
import cn from 'classnames';

ReactDOM.render(
  <div>
    <div>
      <h1 className={cn(style.h1Background, 'color1')}>React boilerplate</h1>
    </div>
    <div className="h1-global">
      <h1>Просто React boilerplate</h1>
    </div>
  </div>,
  document.getElementById('root')
);
