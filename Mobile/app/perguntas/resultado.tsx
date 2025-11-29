import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { api } from "../utils/api";

export default function Resultado() {
    const { status, id } = useLocalSearchParams();

    const acertou = status === "acertou";

    async function irParaProxima() {
        try {
            const res = await api.get(`/pergunta/proxima/${id}`);

            if (!res.data || !res.data.id) {
                alert("Não há mais perguntas neste tema!");
                return;
            }

            router.replace(`/perguntas/questao?id=${res.data.id}`);
        } catch (err) {
            console.log("Erro ao buscar próxima pergunta:", err);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.icone, { color: acertou ? "#4CAF50" : "#E53935" }]}>
                {acertou ? "✔️" : "❌"}
            </Text>

            <Text style={styles.titulo}>
                {acertou ? "Você acertou!" : "Você errou!"}
            </Text>

            <Text style={styles.subtitulo}>
                {acertou
                    ? "Ótimo trabalho! Vamos para a próxima pergunta?"
                    : "Revise o conteúdo e tente novamente!"}
            </Text>

            {acertou && (
                <TouchableOpacity style={[styles.botao, styles.botaoRoxo]} onPress={irParaProxima}>
                    <Text style={styles.botaoTexto}>Próxima Pergunta</Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity
                style={styles.botao}
                onPress={() => router.replace("/perguntas")}
            >
                <Text style={styles.botaoTexto}>Voltar à Seleção de Perguntas</Text>
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
    icone: {
        fontSize: 85,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 28,
        color: "white",
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitulo: {
        fontSize: 16,
        color: "#ccc",
        textAlign: "center",
        marginBottom: 30,
    },
    botao: {
        width: "100%",
        backgroundColor: "#1e1e1e",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#333",
    },
    botaoRoxo: {
        backgroundColor: "#7A3EDC",
        borderColor: "#7A3EDC",
    },
    botaoTexto: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
