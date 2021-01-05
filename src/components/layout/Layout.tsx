import React, {ReactNode} from 'react';
import {Container, Header, Content} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface Prop {
  children: ReactNode;
}

export default (props: Prop) => (
  <Container>
    <Header />
    <KeyboardAwareScrollView>
      <Content padder>{props.children}</Content>
    </KeyboardAwareScrollView>
  </Container>
);
