import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';

class LightSpeedExample extends React.Component {
  render() {
    return (
      <div>
        <LightSpeed left cascade>
          <div className='heroTextCover'>
            <h2>Antonín</h2>
            <h2>Zejda</h2>
            <h2>Resumé</h2>
          </div>
        </LightSpeed>
      </div>
    );
  }
}

export default LightSpeedExample;