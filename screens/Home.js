import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
    
<TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Blog')}
         
        >
          <Text style={styles.btnText}>IMAGE PICKER
			</Text>
</TouchableOpacity>
<TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('BlogDetails')}
         
        >
          <Text style={styles.btnText}>TABLE VIEW WITH IMAGE
			</Text>
</TouchableOpacity>
<TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('webPage')}
         
        >
          <Text style={styles.btnText}>WEB VIEW 
			</Text>
</TouchableOpacity>
<TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('ApiContainer')}
         
        >
          <Text style={styles.btnText}>API CALLS 
			</Text>
</TouchableOpacity> 

<TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('SignatureView')}
         
        >
          <Text style={styles.btnText}>Signature View
			</Text>
</TouchableOpacity> 
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({

    button: {
      width: 300,
      marginTop: 20,
      backgroundColor: "#9C27B0",
      padding: 15,
      borderRadius: 10,
    },
    btnText: {
      color: "white",
      fontSize: 22,
      justifyContent: "center",
      textAlign: "center",
    },
  });