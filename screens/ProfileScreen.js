import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from '../actions/PostActions';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
        <View style={styles.container}>
           {
          this.props.nb_post.possible.map((friend, index) => (
            <Button
              key={ friend }
              title={ `Add ${ friend }` }
              onPress={() =>
                this.props.addPost(index)
              }
            />
          )
        )
        }
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = (state) => {
  const { nb_post } = state
  return { nb_post }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addPost,
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
