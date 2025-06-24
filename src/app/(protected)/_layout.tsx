import { useAuth } from '@/src/contexts/AuthContext';
import { Redirect, Stack } from 'expo-router';


export default function ProtectedLayout() {

  const { isLoggedIn, isReady } = useAuth();

  if (!isReady) {
    return null;
  }

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
