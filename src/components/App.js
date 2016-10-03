import React, { PropTypes } from 'react';

const App =  () => (
  <div className="container">
    <h1 className="text-center">App</h1>
  </div>
);

App.contextTypes = {
  store: PropTypes.object.isRequired
};

export default App;
