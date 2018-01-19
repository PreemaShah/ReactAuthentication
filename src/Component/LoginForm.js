import React,{Component} from 'react';
import {TextInput,Text} from 'react-native';
import {Card,CardItem,Button,Input,Spinner} from "./Common";
import firebase from 'firebase';

class LoginForm extends Component {
    state={email:'',password:'',error:'',loading:false};
    onButtonPress()
    {
        this.setState({error:'',loading:true});
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(this.onLoginSuccess.bind(this)).catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(this.onLoginSuccess.bind(this)).catch(()=>{
                this.setState(
                    {
                        error:'Registration Failed',
                        loading:false
                    }
                );
            })
        })
    }

   /* onLoginFail()
    {

    }*/


    onLoginSuccess()
    {
        this.setState(
            {
                error:'',
                email:'',
                password:'',
                loading:false}
                );
    }




    ButtonRender()
    {
        if(this.state.loading)
        {
           return <Spinner size='small'/>;
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
            Log In
        </Button>
        );

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
                    {this.ButtonRender()}
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