import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Stories from '../components/stories/Stories'
import { useTheme } from '../ThemeContext';

import Icon from '@expo/vector-icons/FontAwesome';

import { theme } from '../theme';

import { fabStyles } from '../styles';

export default function StoriesScreen() {
  const { isDarkMode } = useTheme(); 
  return (
    <View style={{ backgroundColor: isDarkMode ? '#1C1C1C' : '#fff', flex: 1}}>
      <ScrollView>
        <Stories />
      </ScrollView>

     <TouchableOpacity style={fabStyles.style}>
        <Icon name="camera" size={25} color={theme.colors.primary}/>
      </TouchableOpacity> 
    </View>
  )
}