import React, { Component } from 'react';
import { View, Text,ActivityIndicator ,StyleSheet,SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';

const ActivityIndicatorElement = () => {
    return (
      <ActivityIndicator
        color="#009688"
        size="large"
        style={styles.activityIndicatorStyle}
      />
    );
  };

class webPage extends Component {
   
  render() {
    return (
        
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <WebView
            //Loading URL
            source={{uri: 'https://aboutreact.com'}}
            //Enable Javascript support
            javaScriptEnabled={true}
            //For the Cache
            domStorageEnabled={true}
            //View to show while loading the webpage
            renderLoading={ActivityIndicatorElement}
            //Want to show the view or not
            startInLoadingState={true}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
      flex: 1,
    },
    activityIndicatorStyle: {
      flex: 1,
      justifyContent: 'center',
    },
  });
  
export default webPage;