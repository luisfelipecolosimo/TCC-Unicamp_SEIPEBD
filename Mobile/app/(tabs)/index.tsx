import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import Logo from '../components/logo';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={{ marginBottom: 8 }}>
        <Logo size={64} />
      </ThemedView>

  <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sobre:</ThemedText>
         <ThemedText style={{ textAlign: 'justify' }}>
          {'\t'}O <ThemedText type="defaultSemiBold">SEIPEBD</ThemedText> ou Sistema Educacional Interativo para 
          o Ensino de Banco de Dados, é uma plataforma desenvolvida para auxiliar estudantes no aprendizado de conceitos relacionados a bancos de dados.
          Através de uma interface amigável e interativa, o SEIPEBD oferece recursos educacionais que facilitam a compreensão de tópicos como modelagem de dados, 
          linguagens de consulta (SQL), normalização, entre outros. Com o SEIPEBD, os alunos podem explorar conceitos teóricos por meio de atividades práticas, 
          simulações e exercícios, promovendo um aprendizado mais dinâmico e eficaz na área de banco de dados.
         </ThemedText>
        </ThemedView>


    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
