import 'react-native-gesture-handler';
import AppNavigator from './src/navigation/navigation'
import { AuthProvider } from './src/hooks/provider/authProvider'
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </Provider>

  );
}