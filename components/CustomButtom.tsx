import { View, Text, TouchableOpacity, GestureResponderEvent, StyleSheet } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    title: string,
    handlePress: (event: GestureResponderEvent) => void,
    containerStyles?: object,
    textStyles?: object,
    isLoading?: boolean
}

const CustomButtom : React.FC<CustomButtonProps> = ({
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading
}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.5}
        disabled={isLoading}
        style={[styles.button, containerStyles]}>
            
      <Text style={[styles.text, textStyles]}>
        {title}
      </Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FF9C01",
        padding: 16,
        borderRadius: 12,
        minHeight: 62,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    text: {
        color: '#161622',
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold'
    },

});

export default CustomButtom