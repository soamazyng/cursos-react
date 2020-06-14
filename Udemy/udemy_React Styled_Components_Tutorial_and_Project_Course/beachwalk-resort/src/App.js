import React from 'react';
import Home from './pages/Home';
import GlobalStyles from './components/globals/GlobalStyles';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lato:wght@400;700', 'Courgette'],
  },
});

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}

export default App;
