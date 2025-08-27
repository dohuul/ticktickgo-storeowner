import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { login } from "../services/api";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleContinue = async () => {
    try{
      
      const res = await login({ email, password });
      global.authToken = res.data.token;
      alert("Login succesfully with token " + global.authToken);
      navigation.navigate("AddPayment", { userId: res.data.userId });
    }
    catch(error){
      alert(error);
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      <View className="flex-1 items-center px-6 pt-16">
        {/* Logo */}
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/c/cc/TickTickGo_logo_2018.png",
          }}
          className="w-20 h-20 mb-6"
          resizeMode="contain"
        />

        {/* Title */}
        <Text className="text-xl font-semibold text-center mb-6">
          Get started with TickTickGo NailTech
        </Text>

        {/* Input */}
        <TextInput
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base mb-4"
          placeholder="Mobile number or email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base mb-4"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        {/* Continue Button */}
        <TouchableOpacity
          className="w-full bg-black rounded-lg py-3 items-center mb-4"
          onPress={handleContinue}
        >
          <Text className="text-white font-semibold">Continue</Text>
        </TouchableOpacity>

        {/* OR */}
        <Text className="text-gray-500 mb-4">or</Text>

        {/* Signup Button */}
        <TouchableOpacity className="w-full bg-gray-100 rounded-lg py-3 items-center mb-3" onPress={() => navigation.navigate("Register")}>
          <Text className="text-base"> Continue with Sign Up</Text>
        </TouchableOpacity>

        {/* Apple Button */}
        <TouchableOpacity className="w-full bg-gray-100 rounded-lg py-3 items-center mb-3">
          <Text className="text-base"> Continue with Apple</Text>
        </TouchableOpacity>

        {/* Google Button */}
        <TouchableOpacity className="w-full bg-gray-100 rounded-lg py-3 items-center mb-3">
          <Text className="text-base">🔴 Continue with Google</Text>
        </TouchableOpacity>

        {/* OR */}
        <Text className="text-gray-500 my-4">or</Text>

        {/* Find my account */}
        <TouchableOpacity>
          <Text className="text-base font-medium">🔍 Find my account</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text className="text-xs text-gray-500 text-center mt-6">
          By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages,
          including by automated dialer, from TickTickGo and its affiliates to the
          number provided. Text "STOP" to 89203 to opt out.
        </Text>
    
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
