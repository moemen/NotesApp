import React from 'react';

import {Container, Text, Header, Content} from 'native-base';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Container>
      <Header />
      <Content padder>
        <Text>Hello world</Text>
      </Content>
    </Container>
  );
};

export default App;
