import { Stack } from "expo-router";

export default function PerguntasLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="temas" />
           
            <Stack.Screen name="questao" />
            <Stack.Screen name="blocos" />
        </Stack>
    );
}
