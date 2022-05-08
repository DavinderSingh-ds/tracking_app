import React,{useState} from 'react';
import { View,StyleSheet } from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignUpScreen = ({ navigation,route}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <View style={styles.container}>

           <Spacer>
           <Text h3> Sign Up for Tracker </Text>  
           </Spacer>
           <Input 
                label="Email" 
                value={email} 
                // onChangeText={(newEmail) => setEmail(newEmail) }
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            /> 
           <Input 
                secureTextEntry
                label="Password" 
                value={password} 
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
           <Spacer>
           <Button title="SignUp"/>
           </Spacer>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        flex:1,
        justifyContent:'center',
        marginBottom:200,
    }
});

export default SignUpScreen;