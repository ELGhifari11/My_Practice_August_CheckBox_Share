import {Alert, SafeAreaView, Share, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RowNama from './RowNama';
import Tombol from './Tombol';

import {angkatan16, angkatan17} from './ListNama';

export default function AbsensiPage() {
  const [waktu, setWaktu] = useState('');
  const [listGenerate, setListGenerate] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const handleShowAlert = () => {
    Alert.alert(
      'Konfirmasi',
      `Data telah tersimpan anda bisa lanjut share
      ${listGenerate}`,
      [
        {
          text: 'OK',
          style: 'cancel',
        },
        {
          text: 'Reset',
          onPress: () => {
            // Panggil fungsi resetCheckboxes di sini
            resetCheckboxes();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const condition = {
    A1: '✅',
    A11: '✅✅',
    B1: '‼️',
    B11: '‼️‼️',
    C1: '❌',
    C11: '❌❌',
    D4: '⛔',
    D44: '⛔⛔',
  };

  const numCon = 21;
  const [checkboxStates, setCheckboxStates] = useState(
    Array.from({length: numCon}, () => ({
      A: false,
      B: false,
      C: false,
      D: false,
      A2: false,
      B2: false,
      C2: false,
      D2: false,
    })),
  );

  const [combinedValues, setCombinedValues] = useState<string[]>([]);

  const handleCheckboxChange = (index: any, key: any) => {
    setCheckboxStates(prevState => {
      const newState: any = [...prevState];
      newState[index][key] = !newState[index][key];

      const combinedValue = getCombinedCheckboxValue(index); // Ambil hasil gabungan
      setCombinedValues(prevCombinedValues => {
        const newCombinedValues = [...prevCombinedValues];
        newCombinedValues[index] = combinedValue; // Simpan hasil gabungan di indeks yang sesuai
        return newCombinedValues;
      });

      return newState;
    });
  };

  const getCombinedCheckboxValue = (index: number) => {
    const checkbox = checkboxStates[index];

    return `${checkbox.A ? condition.A1 : ''}${
      checkbox.A2 ? condition.A11 : ''
    }${checkbox.B ? condition.B1 : ''}${checkbox.B2 ? condition.B11 : ''}${
      checkbox.C ? condition.C1 : ''
    }${checkbox.C2 ? condition.C11 : ''}${checkbox.D ? condition.D4 : ''}${
      checkbox.D2 ? condition.D44 : ''
    }`;
  };

  const rendercheckBoxes = () => {
    return angkatan17.map((value, index) => (
      <View style={{}} key={index}>
        <RowNama
          namaSiswa={`${value}`}
          titik={`${` : ` + getCombinedCheckboxValue(index)}`}
          //  //////////////////////////////////////////////////

          isChecked1={checkboxStates[index].A || checkboxStates[index].A2}
          onPress1={() => handleCheckboxChange(index, 'A')}
          onLongPress1={() => handleCheckboxChange(index, 'A2')}
          // ///////////////////////////////////////////////////

          isChecked2={checkboxStates[index].B || checkboxStates[index].B2}
          onPress2={() => handleCheckboxChange(index, 'B')}
          onLongPress2={() => handleCheckboxChange(index, 'B2')}
          // ///////////////////////////////////////////////////////////

          isChecked3={checkboxStates[index].C || checkboxStates[index].C2}
          onPress3={() => handleCheckboxChange(index, 'C')}
          onLongPress3={() => handleCheckboxChange(index, 'C2')}
          // /////////////////////////////////////////////////////////

          isChecked4={checkboxStates[index].D || checkboxStates[index].D2}
          onPress4={() => handleCheckboxChange(index, 'D')}
          onLongPress4={() => handleCheckboxChange(index, 'D2')}
        />
      </View>
    ));
  };

  const generateShareableText = () => {
    const shareableText = angkatan17
      .map((value, index) => {
        const combinedValue = combinedValues[index];
        return `${value} : ${combinedValue}`;
      })
      .join(`\n`);
    setListGenerate(shareableText);
    console.log(shareableText);

    const currentDateTime = new Date();
    // const year = currentDateTime.getFullYear();
    // const month = currentDateTime.toLocaleString('id', {month: 'long'}); // Menggunakan opsi "long" untuk mendapatkan nama bulan panjang dalam bahasa Indonesia
    // const dayN = currentDateTime.toLocaleString('la', {day: 'numeric'}); // Menggunakan opsi "numeric" untuk mendapatkan angka hari dalam bahasa Latin
    const day = currentDateTime.toLocaleString('id', {weekday: 'short'}); // Menggunakan opsi "long" untuk mendapatkan nama hari panjang dalam bahasa Indonesia
    // const hours = currentDateTime.getHours();
    // const minutes = currentDateTime.getMinutes();
    // const seconds = currentDateTime.getSeconds();

    setWaktu(`${day}`);

    handleShowAlert();
    setIsGenerated(true);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `°ANGKATAN 17° 
        
${waktu}

KEGIATAN  :

        ${listGenerate}

Ket: 
✅ Hadir Tepat Waktu 
❌Tidak Hadir (Sesuai  SOP)
⛔ Di luar kawasan 
❕ Sakit #pengecekan dari Staff Kesehatan)
‼️ Izin
         `,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const resetCheckboxes = () => {
    setCheckboxStates(
      Array.from({length: numCon}, () => ({
        A: false,
        B: false,
        C: false,
        D: false,
        A2: false,
        B2: false,
        C2: false,
        D2: false,
      })),
    );
    setCombinedValues([]);
  };

  return (
    <SafeAreaView>
      {/* ////////////////////////////////// */}
      <View
        style={{
          alignItems: 'center',
          marginTop: 30,
          marginBottom: 30,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            fontWeight: '600',
          }}>
          Angakatan 17
        </Text>
      </View>
      {/* ////////////////////////////////////////// */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
        }}>
        <Text style={styles.textSub}>Nama</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textSub}>✅</Text>
          <Text style={styles.textSub}>‼️</Text>
          <Text style={styles.textSub}>❌</Text>
          <Text style={styles.textSub}>⛔</Text>
        </View>
      </View>
      {rendercheckBoxes()}

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginBottom: 30,
        }}>
        <Tombol text={'Generate'} onPress={() => generateShareableText()} />
        {isGenerated && <Tombol text={'Share'} onPress={() => onShare()} />}
        <Tombol text={'Reset'} onPress={() => resetCheckboxes()} />
      </View>
      {/* ////////////////////////////////////////// */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textSub: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 7,
    marginBottom: 15,
  },
});
