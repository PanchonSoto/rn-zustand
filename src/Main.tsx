import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import BottomNav from './presentation/screens/navigators/BottomNav';


const Main = () => {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  )
}

export default Main;
