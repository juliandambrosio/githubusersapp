import React, { useState, useEffect } from 'react'
import { Text, View, Image } from 'react-native';
import { getUser } from '../services/ApiService';

export const PersonScreen = ({ route }) => {

  const params = route.params;
  const { userName } = params;

  const [user, setUser] = useState();

  useEffect(() => {

  }, [user]);

  useEffect(() => {
    getUser({ userName: userName, fnCallbackSuccess: getUserSuccessCallback });
  }, []);

  const getUserSuccessCallback = (data) => {
    setUser(data.data);
  }

  return (
    <View style={{
      flex: 1
    }}>
      <View style={{
        flex: 0.15,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 24,
          color: 'white',
          fontWeight: 'bold',
        }}>Home</Text>

      </View>
      <View style={{
        flex: 0.4,
        backgroundColor: 'white',
        paddingHorizontal: 15
      }}>
        <View style=
          {{ marginVertical: 15 }}>
        </View>
        <View>
          {user &&
            <View style={{ flexDirection: 'row' }}>

              <Image source={{ uri: user.avatar_url }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  marginRight: 15
                }} />
              <View>
                <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>{user.name}</Text>
                <Text style={{ color: 'grey', fontSize: 18 }}>{user.location}</Text>
              </View>
            </View>
          }
        </View>
      </View>
    </View>
  )
}
