import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Text,
  Card,
  CardItem,
  Body,
  Form,
  Item,
  Input,
  Textarea,
} from 'native-base';

import {observer} from 'mobx-react-lite';
import {useNoteStore} from '../../context/notes-context';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  textArea: {
    width: '100%',
    flex: 1,
  },
});
const defaultHeight = 100;

export default observer(() => {
  const {selectedNote} = useNoteStore();
  const navigation = useNavigation();
  if (!selectedNote) {
    navigation.navigate('home');
  }

  const [height, setHeight] = useState(defaultHeight);
  const textAreaStyle = {height};

  return (
    <View>
      <Card>
        <Form>
          <CardItem header>
            <Item>
              <Input
                placeholder="Title"
                onChangeText={(text) => selectedNote?.setTitle(text)}>
                {selectedNote?.title || ''}
              </Input>
            </Item>
            <Text />
          </CardItem>
          <CardItem>
            <Body>
              <Item last>
                <Textarea
                  style={[styles.textArea, textAreaStyle]}
                  bordered={false}
                  placeholder="Note body ..."
                  onChangeText={(text) => selectedNote?.setBody(text)}
                  onContentSizeChange={(e) =>
                    setHeight(
                      Math.max(defaultHeight, e.nativeEvent.contentSize.height),
                    )
                  }>
                  {selectedNote?.body || ''}
                </Textarea>
              </Item>
            </Body>
          </CardItem>
        </Form>
      </Card>
    </View>
  );
});
