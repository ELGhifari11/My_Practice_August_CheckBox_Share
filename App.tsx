import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AbsensiPage from './components/app7/AbsensiPage';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AbsensiPage />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
