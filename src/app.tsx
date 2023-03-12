// Packages
import React, { ReactElement } from 'react';

// Components
import { CustomMap } from './components';

/**
 * Project main tab rendering component
 * @return {ReactElement}
 */
function App(): ReactElement {
  return (
    <div>
      <CustomMap />
    </div>
  );
}

export default App;
