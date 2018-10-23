import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class CardComponent extends Component {

    render() {

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={this.props.thumbnail} />
                        <Body>
                            <Text style={{ fontWeight: "900" }}>{this.props.lastName} {this.props.firstName}</Text>
                            <Text note>{this.props.date}</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-more-outline" style={{ color: 'black' }} />
                        </Button>
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    <Image
                      source={this.props.photo}
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
                            <Text style={{ fontWeight: "900" }}>{this.props.lastName} {this.props.firstName} </Text>
                            {this.props.description}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
