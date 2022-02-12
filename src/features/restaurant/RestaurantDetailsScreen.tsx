import { ScrollView } from "react-native";
import React from "react";
import RestaurantInfoCard from "./components/RestaurantInfoCard";
import { StackScreenProps } from "@react-navigation/stack";
import { restaurantParamList } from "../../infras/navigations/restaurants";
import { CustomSafeAreaView } from "../styles";
import { List } from "react-native-paper";
import FavouriteIcon from "../../components/FavouriteIcon";

type props = StackScreenProps<restaurantParamList, "RestaurantDetails">;

const RestaurantDetails = ({ route }: props) => {
  return (
    <>
      <CustomSafeAreaView>
      <FavouriteIcon restaurant={route.params.restaurant} />
        <RestaurantInfoCard restaurant={route.params.restaurant} />
        <ScrollView>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
          >
            <List.Item title="Egg Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
          >
            <List.Item title="Burger w/ fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food" />}
          >
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Steak Frites" />
          </List.Accordion>
          <List.Accordion
            title="Drink"
            left={(props) => <List.Icon {...props} icon="cup" />}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
            <List.Item title="Modelo" />
          </List.Accordion>
        </ScrollView>
      </CustomSafeAreaView>
    </>
  );
};

export default RestaurantDetails;
