import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { api } from "../utils/api";
import { useEffect, useState } from "react";

export default function Temas() {
    const [temas, setTemas] = useState([]);

    async function carregarTemas() {
        try {
            const res =  await api.get("/temas");
            setTemas(res.data);
        } catch (e) {
            console.log("Erro ao buscar temas:", e);
        }
    }

    useEffect(() => {
        carregarTemas();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione um Tema</Text>

            {temas.map((tema) => (
                <TouchableOpacity
                    key={tema.id}
                    style={styles.card}
                    onPress={() =>
                        router.push(`/perguntas/perguntas?tema=${tema.id}&nome=${tema.nome}`)

                    }
                >
                    <Text style={styles.cardText}>{tema.nome}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#121212", padding: 20 },
    title: { color: "#fff", fontSize: 22, marginBottom: 20 },
    card: {
        backgroundColor: "#1e1e1e",
        padding: 18,
        borderRadius: 10,
        marginBottom: 12,
    },
    cardText: { color: "#fff", fontSize: 18 },
});
