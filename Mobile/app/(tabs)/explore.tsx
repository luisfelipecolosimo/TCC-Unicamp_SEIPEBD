import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.subtitle}>Prepare-se para testar seus conhecimentos.</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/perguntas/temas")}
            >
                <Text style={styles.buttonText}>Ir para os Temas</Text>
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
    title: {
        fontSize: 28,
        color: "white",
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        color: "#ccc",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 40,
    },
    button: {
        backgroundColor: "#7A3EDC",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 12,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
