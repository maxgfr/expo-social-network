import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import CardComponent from '../components/CardComponent';

import { Icon, Content } from 'native-base'

class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: "My Profile!",
        headerRight: (
            <TouchableOpacity onPress={()=>{ navigation.navigate('AddScreen'); }}>
                <Icon name="ios-add-outline" style={{ color: 'black', right: '100%'}} />
            </TouchableOpacity>

        ),
    });



  render() {
    return (
        <View style={styles.container}>

           <CardComponent photo={require("../assets/images/icon.png")} thumbnail={require("../assets/images/robot-dev.png")} lastName="Last" firstName="First" date="01/01/2018" likes={ this.props.nb_post.current.length } nb_commentaires="3" description="dsq HEIN"/>


         </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

const mapStateToProps = (state) => {
  const { nb_post } = state
  return { nb_post }
};

export default connect(mapStateToProps)(HomeScreen);
