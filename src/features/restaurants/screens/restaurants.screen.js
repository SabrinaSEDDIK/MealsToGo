import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../../../features/restaurants/components/search.component";

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <>
      <Search />

      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.amber100} />
        </LoadingContainer>
      )}

      <RestaurantsList
        data={restaurants}
        renderItem={({ item }) => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};

//style

const RestaurantsList = styled(FlatList).attrs(() => ({
  contentContainerStyle: {
    padding: 16,
  },
}))``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
