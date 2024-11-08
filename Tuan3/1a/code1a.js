import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const MyApp = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#cff3f6' }}>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <View
          style={{
            width: 130,
            height: 130,
            borderRadius: 75,
            borderWidth: 15,
            borderColor: 'black',
            backgroundColor: 'transparent',
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
          GROW
        </Text>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
          YOUR BUSINESS
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>
          We will help you to grow your business using
        </Text>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>
          online server
        </Text>
      </View>
      <View style={{flex:2}}>
      <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
       <TouchableOpacity style={{ backgroundColor: '#e3c000', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 10 }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#e3c000', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <Text style={{textAlign:'center',marginBottom:60}}>HOW WE WORK</Text>
      </View>
      <View style={{flex:1,backgroundColor:'#00CCF9'}}></View>
    </View>
  );
};

export default MyApp;
