import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { router } from "expo-router"; // <-- IMPORTANTE
import { api } from "./utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    console.log("Email:", email, "Senha:", senha);

    // Aqui você pode futuramente chamar sua API (Node.js)
    // Por enquanto vamos apenas navegar:

    router.replace("/(tabs)"); // <-- ENTRA NO APP
  };

  const login = async () => {
  const res = await api.post("/login", {
    usuario: email,
    senha: senha
  });

  console.log(res.data);

  if(res.data.status === 200){
    await AsyncStorage.setItem("usuario", JSON.stringify(res.data.content));

    router.replace("/(tabs)"); // <-- ENTRA NO APP
  }else{
    alert("Erro no login: " + res.data.message);
  }
 // router.replace("/(tabs)"); 
};


  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/react-logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Bem-vindo</Text>

      {/* Campo de e-mail */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Campo de senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Botão de login */}
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Link de cadastro */}
      <TouchableOpacity>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    paddingHorizontal: 15,
    color: "#fff",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#7A3EDC", // cor mais bonita no tema escuro
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#9A6AFF",
    marginTop: 10,
  },
});
