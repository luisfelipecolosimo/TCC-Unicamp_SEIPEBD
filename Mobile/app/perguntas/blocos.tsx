import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { api } from "../utils/api";

export default function QuestaoBlocos() {
    const { id } = useLocalSearchParams(); // pega id da pergunta
    const [blocos, setBlocos] = useState([]);
    const [respostaCerta, setRespostaCerta] = useState("");
    const [montado, setMontado] = useState([]);

    /** BUSCA OS BLOCOS E A RESPOSTA CERTA */
   useEffect(() => {
    async function carregar() {
        try {
            const resBlocos = await api.get(`/blocos/${id}`);
            const resPergunta = await api.get(`/resposta/${id}`);
console.log(resPergunta.data);
            // Ajuste correto aqui ⬇⬇⬇
            setBlocos(resBlocos.data.map(b => b.texto));

            setRespostaCerta(resPergunta.data[0].resposta_correta);
        } catch (err) {
            console.log("Erro ao carregar blocos:", err);
        }
    }
    carregar();
}, []);

    function adicionar(bloco) {
        setMontado((prev) => [...prev, bloco]);
    }

    async function enviar() {
        const resposta = montado.join(" ").trim();
         const acertou = (resposta.toLowerCase()).replace(" ;",";") === respostaCerta.toLowerCase();
console.log(acertou);
         
        // Salvar histórico no back-end
        try {
            await api.post("/historico/salvar", {
                usuario: 1, // SUBSTITUIR PELO USER LOGADO
                pergunta: Number(id),
                resposta_usuario: resposta,
                correta: acertou,
            });
        } catch (err) {
            console.log("Erro salvando histórico:", err);
        }

        // navegar para tela de resultado
        router.push(`/perguntas/resultado?status=${acertou ? "acertou" : "errou"}&id=${id}`);
   
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Monte a resposta:</Text>

            <View style={styles.blocosContainer}>
                {blocos.map((b, i) => (
                    <TouchableOpacity key={i} style={styles.bloco} onPress={() => adicionar(b)}>
                        <Text style={styles.blocoText}>{b}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.montagem}>
                <Text style={{ color: "white", fontSize: 18 }}>
                    {montado.join(" ") || "Sua resposta aparecerá aqui..."}
                </Text>
            </View>

            <TouchableOpacity style={styles.botao} onPress={enviar}>
                <Text style={styles.botaoText}>Enviar Resposta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#121212", padding: 20 },
    title: { color: "white", fontSize: 22, marginBottom: 20 },
    blocosContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginBottom: 30,
    },
    bloco: {
        backgroundColor: "#1e1e1e",
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 8,
    },
    blocoText: { color: "white" },
    montagem: {
        backgroundColor: "#1a1a1a",
        padding: 20,
        minHeight: 70,
        borderRadius: 10,
        marginBottom: 30,
    },
    botao: {
        backgroundColor: "#7A3EDC",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    botaoText: { color: "white", fontWeight: "bold", fontSize: 16 },
});
