import React from 'react';
import { View, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import styled from 'styled-components/native';

const screenWidth = Dimensions.get('window').width;

const User: string = "Patrick";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${(props: { screenWidth: Number; }) => props.screenWidth}px;
  padding-right: 30px;
`;

const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UserIcon = styled(Feather)`
  margin-right: 8px;
`;

const UserInfo = styled.View``;

const GreetingText = styled.Text`
  font-size: 14px;
`;

const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const ActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ActionIcon = styled(Feather)`
  margin-right: 8px;
`;

// Uso dos componentes estilizados
export const Header = () => {
  return (
    <Container screenWidth={screenWidth}>
      <UserContainer>
        <UserIcon name="user" size={20} color="black" />
        <UserInfo>
          <GreetingText>Hi</GreetingText>
          <UserName>{User}</UserName>
        </UserInfo>
      </UserContainer>
      <ActionContainer>
        <ActionIcon name="search" size={20} color="black" />
        <ActionIcon name="bell" size={20} color="black" />
      </ActionContainer>
    </Container>
  );
};
