import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function Tombol({onPress, text}: any) {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 50,
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: 'black',
          padding: 15,
          borderRadius: 10,
          marginHorizontal: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontWeight: '700',
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
