//ELEMENTOS REACT
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import react, { Component } from 'react';

//SCREENS
import Home from './src/screens/Home';
import Register from './src/screens/Register';
import Header from './src/components/Header/Header';
import Login from './src/screens/Login';
import TabNavigation from './src/navigation/TabNavigation';
import StackNavigation from './src/navigation/StackNavigation';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginActive: false,
      registerActive: true
    }
  }
  toggleLogin() {
    if (this.state.loginActive === true) {
      this.setState({ loginActive: false })
    } else {
      this.setState({ loginActive: true, registerActive: false })
    }
  }
  toggleRegister() {
    if (this.state.registerActive === true) {
      this.setState({ registerActive: false })
    } else {
      this.setState({ registerActive: true, loginActive: false })
    }
  }
  render() {
    return (
      // <View>
      //   {/* <Home></Home> */}
      //   {/* <Header toggleLogin={() => this.toggleLogin()} toggleRegister={() => this.toggleRegister()} style={styles}></Header>
      //   {this.state.loginActive === true ?
      //     <Login style={styles}></Login>
      //     :
      //     null}
      //   {this.state.registerActive === true ?
      //     <Register style={styles}></Register>
      //     :
      //     null} */}
      // </View>
      // <TabNavigation style={styles}></TabNavigation>
      <StackNavigation style={styles}></StackNavigation>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formulario: {
    backgroundColor: '#7fffd4',
    width: 300,
    height: 50,
    textAlign: 'center',
    margin: 5
  },
  containerForm: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderWidth: 4,
    borderRadius: 4,
    borderColor: "#FFFFF"
  },
  botonForm: {
    borderWidth: 3,
    backgroundColor: '#C18A16',
    padding: 5
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 'large'
  },
  textoResult: {
    color: ''
  },
  Header: {
    width: 300,
    height: 40,
    margin: 5,
    backgroundColor: '#DFB0A2',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2
  },
  botonHeader: {
    backgroundColor: '#8aa6ef',
    width: 80,
    height: 30,
    margin: 5,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center'
  },
  botonRedirect: {
    backgroundColor: "#DFB0A2",
    margin: 5,
    padding: 5,
    borderWidth: 2,
    borderRadius: 2
  }

});
