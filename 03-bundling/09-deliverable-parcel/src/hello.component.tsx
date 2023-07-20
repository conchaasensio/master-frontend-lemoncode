import React from 'react';
import logo from './content/logo_1.png';
import classes from './hello.module.scss';

export const Hello: React.FC = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.text}>Hello from Hello component</h2>
      <img src={logo} alt="logo" className={classes.logo} />
    </div>
  );
};
