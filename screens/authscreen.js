import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Checkbox } from "react-native-paper";

const AuthScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);


  const handleSendOtp = () => {
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!agree) {
      alert("Please agree to Terms and Privacy Policy.");
      return;
    }
    alert("✅ OTP Sent to " + phone);
    navigation.navigate("Otp", { phone }); // ✅ Pass phone here
  };
  const handleRegister = () => {
   
    navigation.navigate("Register", { phone }); // ✅ Pass phone here
  };

  return (
    
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <view style={styles.auth}>
            <Image
            source={require("../assets/delivery.jpg")}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.textBox}>
            <Text style={styles.title}>Be an EatFit Partner</Text>
            <Text style={styles.subtitle}>Get a stable monthly income</Text>
          </View>
          </view>
          

          <TextInput
            style={styles.input}
            placeholder="Registered Phone Number"
            keyboardType="number-pad"
            maxLength={10}
            value={phone}
            onChangeText={setPhone}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Register" )}
            style={styles.registerWrapper}
          >
            <Text style={styles.registerText}>Already have an account? </Text>
            <Text style={styles.registerLink}
            onPress={handleRegister}>
            Register</Text>
          </TouchableOpacity>



          <View style={styles.checkboxContainer}>
            <Checkbox
              status={agree ? "checked" : "unchecked"}
              onPress={() => setAgree(!agree)}
              color="#e91e63"
            />
            <Text style={styles.checkboxText}>
              By signing up I agree to the{" "}
              <Text style={styles.link}>Terms of use</Text> and{" "}
              <Text style={styles.link}>Privacy Policy</Text>.
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.button, { opacity: agree ? 1 : 0.5 }]}
            onPress={handleSendOtp}
            disabled={!agree}
          >
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
   
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "orange",
    alignItems: "center",
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  textBox: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 30,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 20,
    width: "100%",
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 13,
    color: "#333",
    flex: 1,
    flexWrap: "wrap",
  },
  link: {
    color: "#e91e63",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#e91e63",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 30,
    width: "100%",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  registerText: {
    fontSize: 14,
    color: "#333",
  },
  registerLink: {
    fontSize: 14,
    color: "#e91e63",
    textDecorationLine: "underline",
  },
});
