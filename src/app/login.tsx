import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@/src/contexts/AuthContext';

export default function LoginScreen() {
    const { logIn } = useAuth();
    return (
        <View className='flex-1 items-center justify-center bg-gray-100'>
            <Text>login screen</Text>
            <Button title='Login' onPress={logIn} />
        </View>
    )
}