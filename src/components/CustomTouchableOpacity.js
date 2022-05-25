import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const CustomTouchableOpacity = ({ userName }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{
            width: 170,
            height: 50,                        
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 5,
            marginVertical: 5,            
            backgroundColor: '#3B89FF'
        }} onPress={() => navigation.navigate('PersonScreen', { userName: userName })}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}> {userName} </Text>
        </TouchableOpacity>
    );
}
export default CustomTouchableOpacity;