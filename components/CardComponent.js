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
                </CardItem>
                <CardItem cardBody>
                    <Image
                      source={this.props.photo}
                      style={{ height: 200, width: null, flex: 1 }}
                    />
                </CardItem>
                <CardItem style={{ height: 30 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                            <Text> {this.props.likes}</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                            <Text> {this.props.nb_commentaires}</Text>
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
