import React from 'react';
import {
    ScrollView,
    Text,
    StyleSheet,
    Image,
    View
} from "react-native";
import { ImagePicker } from 'expo';
import {
     Textarea,
     Container,
     InputGroup,
     Card,
     CardItem,
     Thumbnail,
     Body,
     Left,
     Right,
     Button,
     Icon,
     Item,
     Input,
     Content
} from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { addPost } from '../actions/PostActions';

const validate = values => {
    const error= {};
    error.title= '';
    error.description= '';
    error.tot = false;
    var ttl = values.title;
    var dsc = values.description;
    if(values.title === undefined){
        ttl = '';
    }
    if(values.description === undefined){
        dsc = '';
    }
    if(ttl == ''){
        error.title= 'Too short';
        error.tot = true;
    }
    if(dsc.length < 8){
        error.description= 'Too short';
        error.tot = true;
    }
    return error;
};

class AddScreen extends React.Component {


    static navigationOptions = {
        headerTitle: 'Add',
    };

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            thumbnail: 'https://banner2.kisspng.com/20180303/zhe/kisspng-snout-facial-expression-face-cartoon-cute-round-face-5a9b7bf16ad8d7.7816424615201392494377.jpg',
            username: 'maxgfr',
            date:'Now',
            image: null,
            formValid: false
        }
        this.isAttempting = false;
        this.renderInputTitle = this.renderInputTitle.bind(this);
        this.renderTextAreaDescription = this.renderTextAreaDescription.bind(this);
    }

    handlePressSubmit = () => {
        const { title, description, thumbnail, username, date, image } = this.state;
        this.isAttempting = true;
        console.log('Title : ',title);
        console.log('Description : ',description);
        var item = {id: Date.now(), type:'post_writing', content: {photo: image, thumbnail: thumbnail, username: username, date: new Date().toLocaleString(), likes: '0', nb_commentaires: '0', description: description}};
        this.props.addPost(item);
        this.props.navigation.goBack();
    }

    handleChangeDescription = (text) => {
        this.setState({ description: text })
    }

    handleChangeTitle = (text) => {
        this.setState({ title: text })
    }

    _pickImage = async () => {
        const { Permissions } = Expo;
        const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            alert('Hey! You might want to enable camera for my app, they are good.');
        } else {
            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],
            });

            console.log(result);

            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
        }
    };

    renderInputTitle({ input, label, type, meta: { touched, error, warning } }){
        const { title } = this.state;
        const { fetching } = this.props;
        const editable = !fetching;
        var hasError= false;
        if(error !== undefined){
            hasError= true;
        }
        return(
            <Item error= {hasError}>
                <Input {...input}  value={title} editable={editable} onChangeText={this.handleChangeTitle} onSubmitEditing={this.handlePressSubmit} placeholder="Titre" />
                {hasError ? <Text>{error}</Text> : <Text />}
            </Item>
        )
    }

    renderTextAreaDescription({ input, label, type, meta: { touched, error, warning } }){
        const { description } = this.state;
        const { fetching } = this.props;
        const editable = !fetching;
        var hasError= false;
        if(error !== undefined){
            hasError= true;
        }
        return(
            <Textarea value={description} editable={editable} onChangeText={this.handleChangeDescription} onSubmitEditing={this.handlePressSubmit} rowSpan={3} placeholder="Blabla" {...input} />
        )
    }

    render() {
        let { image } = this.state;
        return (
            <ScrollView style={styles.container}>


                <Container>

                    <Content style={{ alignSelf: "center" , marginTop: 20, marginBottom: null}}>
                        <Icon style={{ alignSelf: "center" }} name='brush' />
                        <Text style={{ fontWeight: "600" , fontSize: 18}}>
                        What is on your mind ?
                        </Text>
                    </Content>

                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: this.state.thumbnail }} />
                                <Body>
                                    <Text style={{ fontWeight: "900" }}>{this.state.username}</Text>
                                    <Text note>{this.state.date}</Text>
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
                                <Field name="title" component={this.renderInputTitle} />
                            </InputGroup>
                        </CardItem>

                        <CardItem>
                            {image && <Image source={{ uri: image }} style={{ height: 200, width: null, flex: 1 }}/>}
                        </CardItem>

                        <CardItem cardBody>
                            <Field name="description" component={this.renderTextAreaDescription} />
                        </CardItem>

                        <CardItem >
                            <Body style={{ flexDirection: "row", justifyContent: "center"}}>
                                <Button transparent  onPress={this._pickImage}>
                                    <Icon name="ios-image-outline" style={{ color: 'black' }} />
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>

                    <Content style={{  marginTop: 10, marginLeft: 30, marginRight: 30}}>
                        <Button  disabled={!this.props.formValid} full rounded style={{ backgroundColor: "#7D9FDD" }} onPress={this.handlePressSubmit}>
                            <Text style={{ color: "white" }}>Publish</Text>
                        </Button>
                    </Content>


                </Container>

            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 0,
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
    form: 'addScreen',
    validate
})(AddScreen)
