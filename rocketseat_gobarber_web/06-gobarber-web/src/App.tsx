import React from 'react';

import SignIn from './pages/SignIn/SignIn';
import GlobalStyle from './styles/global';

import AppProvider from './hooks/indexProvider';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
