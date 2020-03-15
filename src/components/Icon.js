import React from 'react'
import { View } from 'react-native'
import Font from 'react-native-vector-icons/Ionicons';


const Icon = ({ name, size, color, padding, isAbout }) => {
    return (
        <View style={{ padding: padding }}>
            <Font name={isAbout === true ? name : "ios-" + name} size={size} color={color} />
        </View>
    )
}

export default Icon
