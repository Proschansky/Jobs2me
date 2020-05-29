import React from 'react';
import Sidebar from './components/Sidebar'
import ContentWrapper from './components/ContentWrapper'
import Contents from './components/Contents'

function App() {
  return (
    <div id="wrapper">
      <Sidebar/>
      <ContentWrapper>
        <Contents/>
      </ContentWrapper>
    </div>
  );
}

export default App;
