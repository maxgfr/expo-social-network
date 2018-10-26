import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { delPost } from '../actions/PostActions';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Root, ActionSheet } from 'native-base'

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class CardComponent extends Component {

    render() {

        return (
            <Root>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: this.props.thumbnail }} />
                            <Body>
                                <Text style={{ fontWeight: "900" }}>{this.props.username}</Text>
                                <Text note>{this.props.date}</Text>
                            </Body>
                        </Left>
                        <Right>
                            <Button transparent onPress={() =>
                                ActionSheet.show(
                                  {
                                    options: BUTTONS,
                                    cancelButtonIndex: CANCEL_INDEX,
                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                    title: "Actions"
                                  },
                                  buttonIndex => {
                                      console.log(BUTTONS[buttonIndex], this.props.id);
                                      this.props.delPost(this.props.id);
                                  }
                                )}>
                                <Icon name="ios-more-outline" style={{ color: 'black' }}/>
                            </Button>
                        </Right>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                          source={{ uri: this.props.photo }}
                          style={{ height: 200, width: null, flex: 1 }}
                        />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                                <Text> {this.props.likes} likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                                <Text> {this.props.nb_commentaires} comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name="ios-send-outline" style={{ color: 'black' }} />
                            </Button>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                <Text style={{ fontWeight: "900" }}>{this.props.username} </Text>
                                {this.props.description}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Root>
        );
    }
}


const mapStateToProps = (state) => {
    const { myState } = state
    return { myState }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        delPost,
    }, dispatch)
);

CardComponent = connect(mapStateToProps, mapDispatchToProps)(CardComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CardComponent;
