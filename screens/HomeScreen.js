import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  View,
  RefreshControl
} from 'react-native';

import { connect } from 'react-redux';

import CardComponent from '../components/CardComponent';

import { Icon, Content } from 'native-base'

import { getPost } from '../actions/PostActions';

import { reloadPost } from '../actions/PostActions';

import { bindActionCreators } from 'redux';

class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Feed",
        headerRight: (
            <TouchableOpacity onPress={()=>{ navigation.navigate('AddScreen'); }}>
                <Icon name="ios-add-outline" style={{ color: 'black', right: '100%'}} />
            </TouchableOpacity>

        ),
    });

    componentDidMount() {
        this.props.getPost();
    }

    _onRefresh = () => {
        this.props.reloadPost();
    }

  render() {
    return (
        <ScrollView  refreshControl={
          <RefreshControl
            refreshing={this.props.data.isReloaded}
            onRefresh={this._onRefresh}
          />
        }
        style={styles.container}>
            {this.props.data.isFetching ? <View style={{flex: 1}}> <ActivityIndicator size="large" color="#7D9FDD"/> </View> : this.props.data.byId.map((item, index) => (
                <CardComponent key={index} id={item} photo={this.props.data.byHash[item].content.photo} thumbnail={this.props.data.byHash[item].content.thumbnail} username={this.props.data.byHash[item].content.username} date={this.props.data.byHash[item].content.date} likes={this.props.data.byHash[item].content.likes} nb_commentaires={this.props.data.byHash[item].content.nb_commentaires} description={this.props.data.byHash[item].content.description} />
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getPost,
        reloadPost,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
