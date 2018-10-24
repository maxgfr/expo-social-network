import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
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
        <ScrollView style={styles.container}>
            {this.props.data.byId.map((item, index) => (
                <CardComponent key={index} photo={this.props.data.byHash[item].content.photo} thumbnail={this.props.data.byHash[item].content.thumbnail} lastName={this.props.data.byHash[item].content.lastName} firstName={this.props.data.byHash[item].content.firstName} date={this.props.data.byHash[item].content.date} likes={this.props.data.byHash[item].content.likes} nb_commentaires={this.props.data.byHash[item].content.nb_commentaires} description={this.props.data.byHash[item].content.description} />
            ))}

         </ScrollView>
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
  const { data } = state
  return { data }
};

export default connect(mapStateToProps)(HomeScreen);
