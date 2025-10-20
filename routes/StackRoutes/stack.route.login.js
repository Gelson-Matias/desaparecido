import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../../resource/views/foundBy';
import SingIn from "../../resource/views/signIn";

export default function StackRouteLogin({ setLogin }) {
  const Stack =createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SingIn"
          // component=
          options={{
          headerShown:false
        }}>  
        { props => <SingIn {...props} setLogin={setLogin} />}  
      </Stack.Screen>
    </Stack.Navigator>
  )
}