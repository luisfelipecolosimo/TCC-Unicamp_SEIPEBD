import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { api } from "../utils/api";
import { useEffect, useState } from "react";

export default function ListaPerguntas() {
        const { tema, nome } = useLocalSearchParams();
const [perguntas, setPerguntas] = useState([]);

   async function carregarPerguntas() {
     
        try {
            const res = await api.get(`/tema/${tema }`);
           // console.log(res.data);
            setPerguntas(res.data);
        } catch (e) {
            console.log("Erro ao buscar Perguntas:", e);
        }
    }

     useEffect(() => {
        carregarPerguntas();
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.title}> {nome}</Text>

            {perguntas.map((p) => (
                <TouchableOpacity
                    key={p.id}
                    style={styles.card}
                    onPress={() =>
                        router.push(`/perguntas/${p.tipo_pergunta === "MULTIPLA_ESCOLHA" ? "questao" : "blocos"}?id=${p.id}`)
                    }
                >
                    <Text style={styles.cardText}>{p.enunciado}</Text>
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
