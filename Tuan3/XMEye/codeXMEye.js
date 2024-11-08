import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';

const MyApp = () => {
  return (
    <View style={{ flex: 1, paddingTop:50,paddingBottom:50 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Image style={{ margin: 100 }} source={require('./assets/Eye.png')} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            borderBottomWidth: 2,
            borderColor: '#dddddd',
            width: '80%',
            height: 50,
            padding: 10,
            color: '#dddddd',
          }}
          placeholder="Please input your user name"
          placeholderTextColor="#dddddd"
        />
        <TextInput
          style={{
            borderBottomWidth: 2,
            borderColor: '#e5e5e5',
            width: '80%',
            height: 50,
            padding: 10,
            color: '#dddddd',
          }}
          placeholder="Please input your password"
          placeholderTextColor="#dddddd"
          secureTextEntry
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#386ffc',
              paddingVertical: 10,
              paddingHorizontal: 105,
              borderRadius: 8,
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
            width: 270,
          }}>
          <Text>Register</Text>
          <Text>Forget Password</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.line} />
          <Text>Other Login Methods</Text>
          <View style={styles.line} />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}></View>

        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:200,marginLeft:70}}>
        <Image style={{height:50,width:50}} source={require('./assets/mot.png')}/>
        <Image style={{height:50,width:50}} source={require('./assets/hai.png')}/>
        <Image style={{height:50,width:50}} source={require('./assets/ba.png')}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: 288,
  },
  line: {
    flex: 1,
    height: 2,
    borderWidth: 1,
    borderColor: '#0e18f5', // Đường viền đen
    marginHorizontal: 10,
  },
});

export default MyApp;
