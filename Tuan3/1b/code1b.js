import React from 'react';
import { Text, View, TouchableOpacity,TextInput } from 'react-native';

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
        {/* Wrapper View để cắt nửa hình */}
        <View
          style={{
            width: 110,
            height: 50, // Chiều cao bằng nửa chiều cao của hình tròn
            overflow: 'hidden', // Cắt phần vượt ra ngoài
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 80,
              height: 100,
              borderRadius: 35, // Nửa đường kính
              borderWidth: 10,
              borderColor: 'black',
              backgroundColor: 'transparent',
            }}
          />
        </View>
         <View
            style={{
              width: 110,
              height: 70,
              borderBottomLeftRadius:30,
              borderBottomRightRadius:30,
              borderWidth: 36,
              borderColor: 'black',
              backgroundColor: 'transparent',
            }}
          />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
          FORGET
        </Text>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
           PASSWORD
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
          Provide your account's email for which you 
        </Text>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>
        want to reset your password
        </Text>
      </View>
      <View style={{flex:1, alignItems:'center'}}>
      <TextInput
      style={{backgroundColor:'#c4c4c4',height:40,width:'85%',padding:10}} placeholder='Email'
      />
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
              paddingHorizontal: 120,
            }}
          >
            <Text style={{ color: 'black', fontWeight: 'bold' }}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 2, backgroundColor: '#00CCF9' }}></View>
    </View>
  );
};

export default MyApp;
