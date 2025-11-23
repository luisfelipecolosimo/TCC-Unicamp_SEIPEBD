import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { api } from "../utils/api";

export default function Temass() {
    const temas = [
        { id: 1, nome: "SQL Básico" },
        { id: 2, nome: "Chaves e Normalização" },
        { id: 3, nome: "Índices e Otimização" },
    ];

    //const res = await api.get("/temas");
  //  temas.push(...res.data);
   // console.log(res.data);
    console.log(temas);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione um Tema a</Text>

            {temas.map((tema) => (
                <TouchableOpacity
                    key={tema.id}
                    style={styles.card}
                    onPress={() => router.push(`/perguntas/perguntas?id=${tema.id}`)}
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
    cardText: { color: "#fff", fontSize: 16 },
});
