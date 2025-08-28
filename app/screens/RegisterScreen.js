// app/RegisterScreen.tsx
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { register } from "../services/api";

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [password, setPassword] = useState("");
 

  const handleRegister = async () => {
    try {      
        const res = await register({ firstName,lastName,phoneNumber,email,password, businessName});
        alert("Register succesfully for " + email);
        navigation.navigate("AddPayment", { userId: res.data.userId });
    }
    catch(error){
       alert(error);
       console.error(err.response?.data || err.message);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white px-6 pt-12">
      {/* Header */}
      <Text className="text-2xl font-bold text-center text-gray-900 mb-6">
        Create your TickTickGo account
      </Text>

      {/* First Name */}
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
      />

      {/* Last Name */}
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
      />

      {/* Email */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
      />

      {/* Phone */}
      <TextInput
        placeholder="Mobile number"
        value={phoneNumber}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
      />

      {/* Phone */}
      <TextInput
        placeholder="Business Name"
        value={businessName}
        onChangeText={setBusinessName}
        keyboardType="phone-pad"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
      />

      {/* Password */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-base"
      />

      {/* Register Button */}
      <TouchableOpacity
        className="bg-black rounded-xl py-4 mb-6"
        onPress={handleRegister}
      >
        <Text className="text-white text-center text-base font-semibold">
          Sign Up
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <View className="flex-row items-center mb-6">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-3 text-gray-500">or</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Social Logins (future) */}
      <TouchableOpacity className="bg-gray-100 rounded-xl py-4 mb-4">
        <Text className="text-gray-800 text-center">Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-gray-100 rounded-xl py-4 mb-6">
        <Text className="text-gray-800 text-center">Continue with Google</Text>
      </TouchableOpacity>

      {/* Already have account */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text className="text-center text-gray-600">
          Already have an account? <Text className="text-blue-600">Log in</Text>
        </Text>
      </TouchableOpacity>
       
    </ScrollView>
  );
}
