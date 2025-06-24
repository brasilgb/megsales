import { useAuth } from '@/src/contexts/AuthContext';
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TabOneScreen() {
  const { logOut } = useAuth();
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Tab One</Text>
      <Button title='Logout' onPress={logOut} />
    </View>
  );
}
