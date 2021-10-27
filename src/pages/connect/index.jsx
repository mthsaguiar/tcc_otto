import React from 'react'
import {View, Text, Button} from "react-native";

const Connect = ({ navigation }) => {
    return(
        <View>
            <Text>Hello</Text>
            <Button
            title="voltar"
            onPress={()=> navigation.navigate('Login')}
            />
        </View>
    );
}

export default Connect