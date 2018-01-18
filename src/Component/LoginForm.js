import React,{Component} from 'react';
import {View,TextInput,Text} from 'react-native';
import {Card,CardItem,Button,Input} from "./Common";
import firebase from 'firebase';

class LoginForm extends Component {
    state={email:'',password:'',error:''};
    onButtonPress()
    {
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(()=>{
                this.setState({error:'Registration Failed'})
            })
        })
    }
    render()
    {
        return(
            <Card>
                <CardItem>
                    <Input
                        label={'Email'}
                     value={this.state.email}
                    onChangeText={email=>this.setState({email})}
                        placeholder='user@gmail.com'
                    />

                </CardItem>
                <CardItem>
                     <Input label={'Password'}
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={password=>this.setState({password})}
                            placeholder='password'
                     />
                </CardItem>
                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
                </CardItem>

            </Card>
        );
    }
}

const styles = {
    errorStyle:{
        color:'red',
        fontSize:18,
        alignSelf:'center'
    }
}
export default LoginForm;