import { Tabs } from 'expo-router';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { HapticTab } from '@/components/haptic-tab';

import { useColorScheme } from '@/hooks/use-color-scheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
       // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
     
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <MaterialIcons  size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <MaterialIcons  size={28} name="person" color={color} />,
        }}
      />

      <Tabs.Screen
        name="score"
        options={{
          title: 'score',
           tabBarIcon: ({ color }) => <MaterialIcons name="score" size={28} color={color}/>,
        }}
      />
       <Tabs.Screen
        name="index"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <MaterialIcons name="info" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
