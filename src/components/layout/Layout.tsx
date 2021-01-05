import React, {ReactNode} from 'react';
import {
  Container,
  Header,
  Content,
  Icon,
  Button,
  Body,
  Title,
  Left,
} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {HomeScreenNavigationProp} from '../../navigation/root-navigator';
import {useNavigation} from '@react-navigation/native';

interface Prop {
  screenName: string;
  children: ReactNode;
}

export default (props: Prop) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate('Home')}>
            <Icon name="home" type="AntDesign" />
          </Button>
        </Left>
        <Body>
          <Title>{props.screenName}</Title>
        </Body>
      </Header>
      <KeyboardAwareScrollView>
        <Content padder>{props.children}</Content>
      </KeyboardAwareScrollView>
    </Container>
  );
};
