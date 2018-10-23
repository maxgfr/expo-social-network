import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Textarea, Container, InputGroup, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Item, Input, Content } from 'native-base'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from '../actions/PostActions';

class AddScreen extends React.Component {


    static navigationOptions = {
      headerTitle: 'Add',

    };

  render() {
    return (
        <View style={styles.container}>


        <Container>

           <Content style={{ alignSelf: "center" , marginTop: 20}}>
                 <Icon style={{ alignSelf: "center" }} name='brush' />
                <Text style={{ fontWeight: "600" , fontSize: 18}}>
                  What is on your mind ?
                </Text>
           </Content>

               <Card>
                   <CardItem>
                       <Left>
                           <Thumbnail source={require("../assets/images/robot-dev.png")} />
                           <Body>
                               <Text style={{ fontWeight: "900" }}>Maxime Mko</Text>
                               <Text note>Now</Text>
                           </Body>
                       </Left>
                       <Right>
                           <Button transparent>
                               <Icon name="ios-more-outline" style={{ color: 'black' }} />
                           </Button>
                       </Right>
                   </CardItem>

                   <CardItem cardBody>
                       <InputGroup style={{ borderColor: 'transparent'}} >
                           <Input  placeholder='Titre' />
                       </InputGroup>
                   </CardItem>

                   <CardItem cardBody>
                       <Textarea rowSpan={5} placeholder="Blabla bla" />
                   </CardItem>

                   <CardItem>
                       <Textarea rowSpan={1} style={{fontWeight:"bold"}} placeholder="Location" />
                   </CardItem>

                   <CardItem>
                       <Left>
                           <Button transparent>
                               <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                           </Button>
                       </Left>
                       <Body>
                           <Button transparent style={{ alignSelf: "center" }}>
                               <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                           </Button>
                       </Body>
                       <Right>
                           <Button transparent>
                               <Icon name="ios-send-outline" style={{ color: 'black' }} />
                           </Button>
                       </Right>
                   </CardItem>
               </Card>

                <Content style={{  marginTop: 10, marginLeft: 30, marginRight: 30}}>
                   <Button full rounded style={{ backgroundColor: "#7D9FDD" }} onPress={() => this.props.addPost('item')}>
                        <Text style={{ color: "white" }}>Publish</Text>
                   </Button>
                </Content>


            </Container>

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

export default connect(mapStateToProps)(AddScreen);
