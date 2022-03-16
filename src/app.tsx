// Packages
import React, {ReactElement} from 'react';
import GoogleMap from './components/GoogleMap';

/**
 * Project main tab rendering component
 * @return {ReactElement}
 */
function App(): ReactElement {
  return (
    <div>
      <GoogleMap />
    </div>
  );
}

export default App;
