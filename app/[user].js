import { useLocalSearchParams } from 'expo-router';

import { Text } from 'react-native';

export default function Page() {
  const { user } = useLocalSearchParams();

  return <Text>Blog post: {user}</Text>;
}
