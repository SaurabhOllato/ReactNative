import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

const Landingscreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Animated Logo */}
      <Animatable.Image
        animation="bounceIn"
        duration={1500}
        source={require("../assets/logo2.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Animated Title */}
      <Animatable.Text animation="fadeInUp" delay={500} style={styles.title}>
        SabZiya
      </Animatable.Text>

      {/* Button */}
      <Animatable.View animation="fadeInUp" delay={1000}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Auth")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Landingscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e91e63",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#e91e63",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
