import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import {
  NavigationContainer,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useRoute } from "@react-navigation/native";
import { Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import apiData from "./api.json";
import { styles } from "./styles";
import {
  UserData,
  RootStackParamList,
  PostScreenRouteProp,
} from "./interfaces";

const Stack = createStackNavigator<RootStackParamList>();

const PostScreen: React.FC<PostScreenRouteProp> = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular: Roboto_400Regular,
  });
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      //const response = await axios.get('http://dev1.riza.network:8000/api/test1_userLogView/NO_SESSION/');
      //const data = response.data.payload.Posts[0];
      const data = apiData.payload.Posts[0];

      const userData: UserData = {
        FirstName: data.Post.FirstName,
        LastName: data.Post.LastName,
        DaysAgo: calculateDaysAgo(data.Post.DateCreated),
        Name: data.Post.Name,
        Desc: data.Post.Desc,
        FileURL: data.Files?.FileTop?.FileURL || "",
      };

      setUserData(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const calculateDaysAgo = (dateCreated: string) => {
    const today = new Date();
    const createdDate = new Date(dateCreated);
    const diffTime = Math.abs(today.getTime() - createdDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} days ago`;
  };

  return (
    <ScrollView style={styles.container}>
      {userData && fontsLoaded ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("ImageScreen", { userData })}
          style={{ padding: 3 }}
        >
          <View style={styles.postContainer}>
            <View style={styles.postHeader}>
              <View>
                <Text style={styles.nameText}>
                  {userData.FirstName} {userData.LastName}
                </Text>
                <Text style={styles.dateText}>{userData.DaysAgo}</Text>
              </View>
            </View>
            <Image
              source={{ uri: userData.FileURL }}
              style={styles.postImage}
            />
            <View style={styles.postContent}>
              <Text style={styles.descriptionText}>{userData.Desc}</Text>
              <View style={styles.footerContainer}>
                <Icon name="heart" size={24} color="red" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

type ImageScreenParams = {
  userData: UserData;
};

const ImageScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "ImageScreen">>();
  const { userData }: ImageScreenParams = route.params ?? {
    userData: undefined,
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{ uri: userData.FileURL }}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        resizeMode="contain"
      />
      <TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
        <Icon name="close" style={styles.closeIcon} />
      </TouchableOpacity>
    </View>
  );
};

const Screen2: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ImageScreen"
        component={ImageScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Screen2;
