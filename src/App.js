import React,{Component} from 'react';
import {View} from 'react-native';
import {Header,Button,Spinner} from './Component/Common';
import firebase from 'firebase';
import LoginForm from './Component/LoginForm'
class App extends Component
{
    state={loggedIn:null};
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDP1DciaQZYDkM7_LJIfaFjYL2koWxwmmk",
            authDomain: "authentication-88918.firebaseapp.com",
            databaseURL: "https://authentication-88918.firebaseio.com",
            projectId: "authentication-88918",
            storageBucket: "authentication-88918.appspot.com",
            messagingSenderId: "541202388946"
        });

        firebase.auth().onAuthStateChanged((user)=>{
            if(user)
            {
                this.setState({loggedIn : true});
            }
            else
            {
                this.setState({loggedIn : false});
            }
        });
    }
    renderContent() {
        switch (this.state.loggedIn) {

            case true:
                return <Button onPress={()=>firebase.auth().signOut()}>Log Out</Button>
            case false:
                return <LoginForm/>
            default:<Spinner size='large'/>

        }
    }
    render(){
        return(
            <View>
                <Header headerText={'Authentication'}/>
                {this.renderContent()}
            </View>
        );
    }
};

export default App;
