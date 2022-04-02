import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SearchbarContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchbarContainer>

      <RestaurantsList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => (
          <>
            <RestaurantInfoCard />
            <Spacer position="bottom" size="large" />
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};

const SearchbarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsList = styled(FlatList).attrs(() => ({
  contentContainerStyle: {
    padding: 16,
  },
}))``;
