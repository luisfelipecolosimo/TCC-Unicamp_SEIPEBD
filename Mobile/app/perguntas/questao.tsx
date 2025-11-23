import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { api } from "../utils/api";

export default function QuestaoMCQ() {
    const { id } = useLocalSearchParams();

    const [pergunta, setPergunta] = useState(null);
    const [alternativas, setAlternativas] = useState([]);
    const [selecionada, setSelecionada] = useState(null);

    // Buscar dados no back-end
    useEffect(() => {
        async function carregar() {
            try {
                // 🔹 Buscar a pergunta completa
                const resPergunta = await api.get(`/resposta/${id}`);
                console.log(resPergunta.data[0].resposta_correta);
                setPergunta(resPergunta.data[0]);

                // 🔹 Buscar alternativas
                const resAlternativas = await api.get(`/pergunta/${id}`);
                // console.log(resAlternativas.data);
                setAlternativas(resAlternativas.data);
            } catch (err) {
                console.log("Erro ao carregar pergunta:", err);
            }
        }
        carregar();
    }, []);



    const enviar = async () => {
        if (pergunta) {
        const acertou = selecionada === pergunta.resposta_correta;

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


 if (acertou) {
     router.push(`/perguntas/resultado?status=acertou&id=${id}`);
 } else {
     router.push(`/perguntas/resultado?status=errou&id=${id}`);
 }
}
};


 if (!pergunta) {
     return (
         <View style={styles.container}>
             <Text style={{ color: "white" }}>Carregando...</Text>
         </View>
     );
 }

 return (
     <View style={styles.container}>
         <Text style={styles.enunciado}>{pergunta.enunciado}</Text>

         {alternativas.map((alt) => (
             <TouchableOpacity
                 key={alt.id}
                 style={[
                     styles.alternativa,
                     selecionada === alt.texto &&
                         styles.alternativaSelecionada,
                 ]}
                 onPress={() => setSelecionada(alt.texto)}
             >
                 <Text style={styles.altText}>
                     {alt.letra}) {alt.texto}
                 </Text>
             </TouchableOpacity>
         ))}

         <TouchableOpacity style={styles.botao} onPress={enviar}>
             <Text style={styles.botaoText}>Enviar</Text>
         </TouchableOpacity>
     </View>
 );
}

const styles = StyleSheet.create({
 container: { flex: 1, backgroundColor: "#121212", padding: 20 },
 enunciado: { fontSize: 20, color: "white", marginBottom: 20 },
 alternativa: {
     backgroundColor: "#1e1e1e",
     padding: 15,
     borderRadius: 10,
     marginBottom: 10,
 },
 alternativaSelecionada: { backgroundColor: "#7A3EDC" },
 altText: { color: "white" },
 botao: {
     marginTop: 20,
     backgroundColor: "#7A3EDC",
     padding: 15,
     borderRadius: 10,
     alignItems: "center",
 },
 botaoText: { color: "white", fontWeight: "bold", fontSize: 16 },
});
