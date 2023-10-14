import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Avatar, Icon } from '@rneui/themed';
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <Icon
        name='rowing' />

      <Icon
        name='g-translate'
        color='#00aced' />

      <Icon
        name='sc-telegram'
        type='evilicon'
        color='#517fa4'
      />

      <Icon
        reverse
        name='ios-american-football'
        type='ionicon'
        color='#517fa4'
      />

      <Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='#f50'
        onPress={() => console.log('hello')} />
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
