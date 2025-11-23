import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../utils/api";

export default function Score() {
    const [usuario, setUsuario] = useState(null);
    const [historico, setHistorico] = useState([]);

    useEffect(() => {
        async function carregar() {
            const data = await AsyncStorage.getItem("usuario");
            if (data) {
                const user = JSON.parse(data);
                setUsuario(user);

                const res = await api.get(`/historico/usuario/${user.id_usuario}`);
                setHistorico(res.data);
            }
        }
        carregar();
    }, []);

    if (!usuario || !historico) {
        return (
            <View style={styles.container}>
                <Text style={{ color: "white" }}>Carregando score...</Text>
            </View>
        );
    }

    const acertos = historico.filter(h => h.acertou).length;
    const erros = historico.length - acertos;
    const pontos = acertos * 10; // regras do seu app
    const nivel = pontos >= 150 ? "Difícil" : pontos >= 80 ? "Médio" : "Fácil";

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu Score</Text>

            <View style={styles.card}>
                <Text style={styles.scoreValue}>{pontos} pontos</Text>
                <Text style={styles.nivel}>Nível atual: {nivel}</Text>

                <View style={styles.linha}>
                    <Text style={styles.acerto}>✔️ Acertos: {acertos}</Text>
                    <Text style={styles.erro}>❌ Erros: {erros}</Text>
                </View>
            </View>

            <Text style={styles.subtitulo}>
                Continue respondendo para subir de nível!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#121212", padding: 20 },
    title: { color: "white", fontSize: 26, fontWeight: "bold", marginBottom: 20 },
    card: {
        backgroundColor: "#1e1e1e",
        padding: 25,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#333",
    },
    scoreValue: {
        color: "#7A3EDC",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    nivel: { color: "#ccc", fontSize: 18, textAlign: "center", marginBottom: 20 },
    linha: { flexDirection: "row", justifyContent: "space-between" },
    acerto: { color: "#4CAF50", fontSize: 18, fontWeight: "bold" },
    erro: { color: "#E53935", fontSize: 18, fontWeight: "bold" },
    subtitulo: {
        color: "#aaa",
        textAlign: "center",
        marginTop: 30,
        fontSize: 16,
    },
});
