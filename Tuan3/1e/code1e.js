import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const MyApp = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#d8efdf',paddingBottom:30}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 20 }}>
          REGISTER
        </Text>
      </View>

      <View
        style={{
          flex: 4,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Text style={{ backgroundColor: '#cae1d1', width: '90%', height: 50, padding: 10 }}>
          Name
        </Text>
        <Text style={{ backgroundColor: '#cae1d1', width: '90%', height: 50, padding: 10 }}>
          Phone
        </Text>
        <Text style={{ backgroundColor: '#cae1d1', width: '90%', height: 50, padding: 10 }}>
          Email
        </Text>
        <Text style={{ backgroundColor: '#cae1d1', width: '90%', height: 50, padding: 10 }}>
          Password
        </Text>
        <Text style={{ backgroundColor: '#cae1d1', width: '90%', height: 50, padding: 10 }}>
          Birthday
        </Text>
      </View>

      <View style={{ flex: 1,flexDirection:'row' ,justifyContent: 'space-around', alignItems: 'center',marginRight:100}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              marginRight: 10,
            }}
          />
          <Text>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              marginRight: 10,
            }}
          />
          <Text>Female</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#c34e3b',
              paddingVertical: 10,
              paddingHorizontal: 118,
            }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ textAlign: 'center' }}>
          When you agree to terms and conditions
        </Text>
      </View>
    </View>
  );
};

export default MyApp;
