import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';

type Props = {
  size?: number;
};

export default function Logo({ size = 64 }: Props) {
  const circleSize = size;
  const innerSize = Math.round(size * 0.6);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          { width: circleSize, height: circleSize, borderRadius: circleSize / 2 },
        ]}
      >
        <View
          style={[
            styles.inner,
            { width: innerSize, height: innerSize, borderRadius: innerSize / 2 },
          ]}
        />
      </View>

      <View style={styles.textContainer}>
        <ThemedText type="title">SEIPEBD</ThemedText>
        <Text style={styles.tagline}>Sistema Educacional Interativo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  circle: {
    backgroundColor: '#1D9BF0',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  inner: {
    backgroundColor: '#FFFFFF',
    opacity: 0.95,
  },
  textContainer: {
    flexDirection: 'column',
  },
  tagline: {
    color: '#6b7280',
    fontSize: 12,
  },
});
