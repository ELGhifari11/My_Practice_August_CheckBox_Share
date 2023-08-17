import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function RowNama({
  namaSiswa,
  titik,
  isChecked1,
  isChecked2,
  isChecked3,
  isChecked4,
  onPress1,
  onPress2,
  onPress3,
  onPress4,
  onLongPress1,
  onLongPress2,
  onLongPress3,
  onLongPress4,
}: any): React.JSX.Element {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 17,
        marginTop: 15,
      }}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '500',
          color: 'black',
        }}>
        {namaSiswa}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: 'black',
        }}></Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginRight: 30,
            fontSize: 20,
            fontWeight: '900',
            color: 'black',
          }}>
          {titik}
        </Text>
        <BouncyCheckbox
          disableBuiltInState
          isChecked={isChecked1}
          onPress={onPress1}
          delayLongPress={250}
          onLongPress={onLongPress1}
          fillColor="green"
          size={20}
        />
        <BouncyCheckbox
          disableBuiltInState
          isChecked={isChecked2}
          onPress={onPress2}
          delayLongPress={250}
          onLongPress={onLongPress2}
          fillColor="red"
          size={20}
        />
        <BouncyCheckbox
          disableBuiltInState
          isChecked={isChecked3}
          onPress={onPress3}
          delayLongPress={250}
          onLongPress={onLongPress3}
          fillColor="black"
          size={20}
        />
        <BouncyCheckbox
          disableBuiltInState
          isChecked={isChecked4}
          onPress={onPress4}
          delayLongPress={250}
          onLongPress={onLongPress4}
          fillColor="red"
          size={20}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
