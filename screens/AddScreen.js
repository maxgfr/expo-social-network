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

import { Field,reduxForm } from 'redux-form';

const validate = values => {
  const error= {};
  error.email= '';
  error.name= '';
  var ema = values.email;
  var nm = values.name;
  if(values.email === undefined){
    ema = '';
  }
  if(values.name === undefined){
    nm = '';
  }
  if(ema.length < 8 && ema !== ''){
    error.email= 'too short';
  }
  if(!ema.includes('@') && ema !== ''){
    error.email= '@ not included';
  }
  if(nm.length > 8){
    error.name= 'max 8 characters';
  }
  return error;
};

class AddScreen extends React.Component {


    static navigationOptions = {
      headerTitle: 'Add',

  };

  constructor(props){
    super(props);
    this.renderInput = this.renderInput.bind(this);
    this.renderTextAreaLocation = this.renderTextAreaLocation.bind(this);
    this.renderTextAreaNormal = this.renderTextAreaNormal.bind(this);
  }

    renderInput({ input, label, type, meta: { touched, error, warning } }){
      var hasError= false;
      if(error !== undefined){
        hasError= true;
      }
      return(
        <Item error= {hasError}>
          <Input {...input}  placeholder="Titre" />
          {hasError ? <Text>{error}</Text> : <Text />}
        </Item>
      )
    }

    renderTextAreaLocation({ input, label, type, meta: { touched, error, warning } }){
      var hasError= false;
      if(error !== undefined){
        hasError= true;
      }
      return(
         <Textarea rowSpan={1} style={{fontWeight:"bold"}} placeholder="Location" {...input} />
      )
    }

    renderTextAreaNormal({ input, label, type, meta: { touched, error, warning } }){
      var hasError= false;
      if(error !== undefined){
        hasError= true;
      }
      return(
         <Textarea rowSpan={5} placeholder="Blabla" {...input} />
      )
    }

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
                           <Field name="email" component={this.renderInput} />
                       </InputGroup>
                   </CardItem>

                   <CardItem cardBody>
                       <Field name="email" component={this.renderTextAreaNormal} />
                   </CardItem>

                   <CardItem>
                      <Field name="email" component={this.renderTextAreaLocation} />
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
                   <Button full rounded style={{ backgroundColor: "#7D9FDD" }} onPress={() => this.props.addPost(item)}>
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
  const { myState } = state
  return { myState }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addPost,
  }, dispatch)
);


AddScreen = connect(mapStateToProps, mapDispatchToProps)(AddScreen);

export default reduxForm({
  form: 'test',
  validate
})(AddScreen)
