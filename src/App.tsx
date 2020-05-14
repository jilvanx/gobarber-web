import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

import Approvider from './hooks';

const App: React.FC = () => (
  <>
    <Approvider>
      <SignIn />
    </Approvider>

    <GlobalStyle />
  </>
);

export default App;
