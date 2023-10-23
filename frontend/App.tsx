import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/utils/Router'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
          <Provider store={store}>
           <Router/>
          </Provider>
        </SafeAreaProvider>
    </NavigationContainer>
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
