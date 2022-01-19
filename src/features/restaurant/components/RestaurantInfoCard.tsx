import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title, Avatar, Button, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const RestaurantInfoCard = () => {
  return (
    <Card>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Content>
        <Title>Some Restaurant</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({});
