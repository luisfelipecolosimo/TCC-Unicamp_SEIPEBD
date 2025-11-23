import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Perfil() {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        async function carregar() {
            const data = await AsyncStorage.getItem("usuario");
            if (data) {
                setUsuario(JSON.parse(data));
            }
        }
        carregar();
    }, []);

    const logout = async () => {
        await AsyncStorage.removeItem("usuario");
        router.replace("/login");
    };

    if (!usuario) {
        return (
            <View style={styles.container}>
                <Text style={{ color: "white" }}>Carregando perfil...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu Perfil</Text>

            <View style={styles.card}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.value}>{usuario.nome} {usuario.sobrenome}</Text>

                <Text style={styles.label}>Usuário:</Text>
                <Text style={styles.value}>{usuario.usuario}</Text>

                <Text style={styles.label}>Nascimento:</Text>
                <Text style={styles.value}>{usuario.data_nascimento}</Text>

                <Text style={styles.label}>Tipo:</Text>
                <Text style={styles.value}>
                    {usuario.tipo === 1 ? "Aluno" : "Administrador"}
                </Text>

                <Text style={styles.label}>Status:</Text>
                <Text style={styles.value}>
                    {usuario.status === 1 ? "Ativo" : "Inativo"}
                </Text>
            </View>

            <TouchableOpacity onPress={logout} style={styles.logout}>
                <Text style={styles.logoutText}>Sair da Conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#121212", padding: 20 },
    title: { color: "white", fontSize: 26, fontWeight: "bold", marginBottom: 20 },
    card: {
        backgroundColor: "#1e1e1e",
        padding: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#333",
    },
    label: { color: "#888", fontSize: 14, marginTop: 10 },
    value: { color: "white", fontSize: 18, fontWeight: "500" },
    logout: {
        marginTop: 40,
        backgroundColor: "#E53935",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    logoutText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
