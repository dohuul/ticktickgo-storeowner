import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StripeProvider } from "@stripe/stripe-react-native";
import "./globals.css";
import AddPaymentScreen from "./screens/AddPaymentScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <StripeProvider publishableKey="pk_test_51RzNKLFFs3Kvi6UhTk3Z6Yw3pOVGM5tHk1JLatS1hPXS5jeJfwMe4Zn30aLlq4iygK0JtG4U1lnSErdb2ThRgSJ000t9bLwLTH">
      
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={LoginScreen} />     

              <Stack.Screen name="Register" component={RegisterScreen} /> 

              <Stack.Screen name="AddPayment" component={AddPaymentScreen} />  
            </Stack.Navigator>
  
    </StripeProvider>
  );
}
