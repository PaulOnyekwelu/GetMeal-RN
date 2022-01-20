import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

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
