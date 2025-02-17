import React from 'react';

function Banner({ status, action, actionText, children }) {
  return (
    <div className={`${status} banner`}>
      {children}
      {action && <button onClick={action} style={{ color: 'yellow'}} >{actionText}</button>}
    </div>
  );
}

export default Banner;