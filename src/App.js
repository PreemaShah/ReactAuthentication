import React,{Component} from 'react';
import {View} from 'react-native';
import {Header} from './Component/Common';
import firebase from 'firebase';
import LoginForm from './Component/LoginForm'
class App extends Component
{
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDP1DciaQZYDkM7_LJIfaFjYL2koWxwmmk",
            authDomain: "authentication-88918.firebaseapp.com",
            databaseURL: "https://authentication-88918.firebaseio.com",
            projectId: "authentication-88918",
            storageBucket: "authentication-88918.appspot.com",
            messagingSenderId: "541202388946"
        });
    }
    render(){
        return(
            <View>
                <Header headerText={'Authentication'}/>
                <LoginForm/>
            </View>
        );
    }
};

export default App;
