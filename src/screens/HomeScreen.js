import React, { useState } from 'react'
import { Text, View } from 'react-native';
import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
export const HomeScreen = () => {

  const [users, setUsers] = useState(["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"]);

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
        <Text style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 28,
          fontWeight: 'bold',
          color: 'black'
        }}>Top 5 GitHub Users</Text>
        <View style=
          {{ marginVertical: 5 }}>            
        </View>
        <Text style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 22,
          color: 'black'
        }}>Tap the username to see more information</Text>
          <View style=
          {{ marginVertical: 5 }}></View>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {
          users.map((userName, i)=> {
            return <CustomTouchableOpacity key={userName} userName={userName}></CustomTouchableOpacity>
          })
        }
        </View>
      </View>
    </View>
  )
}
