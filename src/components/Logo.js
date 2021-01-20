import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
      width="50px"
      height="50px"
      style={{ borderRadius: '50%' }}
      {...props}
    />
  );
};

export default Logo;
