import { useRoute } from '@react-navigation/native';
import { CardField, useStripe } from "@stripe/stripe-react-native";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { addPaymentMethod } from "../services/api";

export default function AddPaymentScreen() {
  const { createPaymentMethod } = useStripe();
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const { userId } = route.params;

  const handleAddPayment = async () => {
    if (!cardDetails?.complete) {
      Alert.alert("Invalid Card", "Please enter complete card details");
      return;
    } 
 
    try {
      setLoading(true);     

      // 1. Create PaymentMethod (Visa, Mastercard, etc.)
      const { paymentMethod, error } = await createPaymentMethod({
        paymentMethodType: "Card"
      });

      if (error) {
        console.error("Payment Meth9d Error:", error);
        Alert.alert("Error", error.message);
        setLoading(false);
        return;
      }

      alert("✅ Payment method created:" + paymentMethod.id);

      // 2. Send paymentMethodId to your backend 
      const  paymentMethodId=  paymentMethod.id;
      await addPaymentMethod({userId,paymentMethodId} );

      Alert.alert("Success", "Card added successfully!");
    } catch (err) {
      console.error(err);
      //Alert.alert("Error", "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="text-xl font-bold mb-4 text-center">
        Add Payment Method
      </Text>

      {/* Stripe CardField */}
      <CardField
        postalCodeEnabled={true}
        placeholders={{ number: "4242 4242 4242 4242" }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
          borderWidth: 1,
          borderColor: "#d1d5db",
          borderRadius: 8,
        }}
        style={{
          width: "100%",
          height: 50,
          marginVertical: 20,
        }}
        onCardChange={(details) => setCardDetails(details)}
      />

      <TouchableOpacity
        onPress={handleAddPayment}
        disabled={loading}
        className={`${
          loading ? "bg-gray-400" : "bg-black"
        } rounded-lg py-4 mt-4`}
      >
        <Text className="text-white text-center font-semibold text-base">
          {loading ? "Processing..." : "Continue"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
