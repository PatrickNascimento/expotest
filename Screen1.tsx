import React from "react";
import { View, ScrollView, Text } from "react-native";
import { VideoCard } from "./components";

const numCards = 6;

const renderVideoCards = () => {
  const cards: JSX.Element[] = [];
  for (let i = 0; i < numCards; i++) {
    cards.push(<VideoCard key={i} />);
  }
  return cards;
};

const Screen1: React.FC = () => {
  return (
    <>
      <View style={{ margin: 12, marginBottom: 2 }}>
        <Text> Welcome </Text>
      </View>
      <ScrollView>
        <ScrollView horizontal>
          <View style={{ flex: 1, flexDirection: "row" }}>
            {renderVideoCards()}
          </View>
        </ScrollView>

        <ScrollView horizontal>
          <View style={{ flex: 1, flexDirection: "row" }}>
            {renderVideoCards()}
          </View>
        </ScrollView>

        <ScrollView horizontal>
          <View style={{ flex: 1, flexDirection: "row" }}>
            {renderVideoCards()}
          </View>
        </ScrollView>

        <ScrollView horizontal>
          <View style={{ flex: 1, flexDirection: "row" }}>
            {renderVideoCards()}
          </View>
        </ScrollView>

        <ScrollView horizontal>
          <View style={{ flex: 1, flexDirection: "row" }}>
            {renderVideoCards()}
          </View>
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default Screen1;
