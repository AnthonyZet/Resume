import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';

class LightSpeedExample extends React.Component {
  render() {
    return (
      <div>
        <LightSpeed left cascade>
          <div className='heroTextCover content'>
            <h2>Crypto</h2>
            <h2>Or</h2>
            <h2>Nothing</h2>
          </div>
        </LightSpeed>
      </div>
    );
  }
}

export default LightSpeedExample;