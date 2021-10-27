import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

const Error = (props) =>{
    if(props.props){
        return <Text>Senha inválida</Text>
    }else{
        return null
    }

}

const Login = ({navigation}) => {

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  function handleUser(value){
    setUser(value);
  }
  function handlePass(value){
    setPass(value);
  }
  function onPress(){

    if( user == 'x' & pass == 'y' ){
        navigation.navigate('Connect')
    }else{
        setError(true)
    }
    
  }

  return (
    <View style={styles.viewStyle}>
      <View style={styles.titleStyle} >
        <Text style={styles.titleTextStyle}>Entrar</Text>
      </View>
      <View style={styles.contentStyle}>
        <Text style={styles.textStyle} >Usuário</Text>
        <TextInput 
        onChangeText={text => handleUser(text)}
        style={styles.inputStyle} 
        placeholder='  e-mail ou nome'
        value={user} 
        />
        <Text style={styles.textStyle} >Senha</Text>
        <TextInput 
        onChangeText={text => handlePass(text)}
        style={styles.inputStyle}
        placeholder='  senha'
        value={pass} 
        />
        <TouchableOpacity
        style={styles.btnStyle}
        onPress={onPress}
        >
            <Text style={styles.btnText}>Avançar</Text>
        </TouchableOpacity>
        <Error props={error} ></Error>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    titleTextStyle:{
        fontSize: 48
    },
    titleStyle:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 64
    },
    contentStyle:{
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 32
    },
    viewStyle: {
        width:'100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'      
    },
    inputStyle:{
        paddingHorizontal: 4,
        paddingVertical: 8,
        width: '50%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000'
    },
    textStyle: {
        fontSize: 24,
        paddingBottom: 8,
        paddingTop: 8,
        fontWeight: "bold"
    },
    btnStyle:{
        marginTop: 32,
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: '#3c3c3c'
    },
    btnText:{
        fontSize: 24,
        color: '#FFF'
    }
});

export default Login;