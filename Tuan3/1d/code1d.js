import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

const MyApp = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#d8efdf',paddingBottom:50 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 20 }}>
          LOGIN
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            backgroundColor: '#cae1d1',
            width: '90%',
            height: 50,
            padding: 10,
          }}
          placeholder="Name"
        />
        <TextInput
          style={{
            backgroundColor: '#cae1d1',
            width: '90%',
            height: 50,
            padding: 10,
          }}
          placeholder="Password"
        />
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
              paddingHorizontal: 118
              ,
            }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ textAlign: 'center' }}>
          When you agree to terms and conditions
        </Text>
        <Text style={{ textAlign: 'center', color: '#7851f4' }}>
          For got your password?
        </Text>
        <Text style={{ textAlign: 'center' }}>Or login with</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{ width: 100, height: 40 ,borderRadius:3}}
          source={{
            uri: 'https://about.fb.com/wp-content/uploads/2018/11/fb-hero-image-001.jpeg',
          }}
        />
        <Image
          style={{ width: 100, height: 40,borderRadius:3 }}
          source={{
            uri: 'https://cdn.tgdd.vn/Files/2020/07/21/1272550/unnamed_800x480.png',
          }}
        />
        <Image
          style={{ width: 100, height: 40,borderTopWidth:1,borderRightWidth:1,borderBottomWidth:1,borderLeftWidth:1,borderRadius:3,borderColor:'#0068ff'}}
          source={{
            uri: 'https://pngimg.com/d/google_PNG19644.png',
          }}
        />
      </View>
    </View>
  );
};

export default MyApp;
