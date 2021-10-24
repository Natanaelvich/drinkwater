import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Fontisto } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../styles/theme';
import { Header } from '../components/Header';

export function Home() {

  return (
    <View style={styles.container}>
      <Header ml={0} percent={0} />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Fontisto
            name="blood-drop"
            size={32}
            color={theme.colors.blue90}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}