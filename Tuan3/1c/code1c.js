import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const MyApp = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#cff3f6' }}>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 50, fontWeight: '700' }}>CODE</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
          VERIFICATION
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>
          Enter one-time password sent on
        </Text>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>
          ++849092605798
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>

      <View style={{ flex: 2 }}>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#e3c000',
              paddingVertical: 10,
              paddingHorizontal: 105,
            }}
          >
            <Text style={{ color: 'black', fontWeight: 'bold' }}>VERIFY CODE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 2, backgroundColor: '#00CCF9' }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    width: '100%',
    alignItems:'center'
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default MyApp;
