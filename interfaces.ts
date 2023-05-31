import { RouteProp } from "@react-navigation/native";

export interface UserData {
  FirstName: string;
  LastName: string;
  DaysAgo: string;
  Name: string;
  Desc: string;
  FileURL: string;
}

export interface RootStackParamList extends Record<string, object | undefined> {
  PostScreen: undefined;
  ImageScreen: undefined;
}

export type PostScreenRouteProp = RouteProp<RootStackParamList, "PostScreen">;

export interface ImageScreenParams {
  userData: UserData;
}

export type PostScreenProps = {
  route: PostScreenRouteProp;
};
