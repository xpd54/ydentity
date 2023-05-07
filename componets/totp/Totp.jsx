import React from "react";
import { View, Text, ActivityIndicator} from "react-native";
import TotpCell from "./totpCell/TotpCell";
import useFetch from "../../hooks/useFetch";
import { COLORS } from "../../constants";
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Azure AD',
    email: 'test@test.com',
    logo: 'https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-1/15/azure-1024.png',
    value: "234232"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Dropbox',
    email: 'dropbox@test.com',
    logo: '',
    value: "234232"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Firebase',
    email: 'firebase@test.com',
    logo: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-1024.png',
    value: "234232"
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455719827389',
    title: 'Ten Speed',
    email: 'tenspeed@test.com',
    logo: '',
    value: "234232"
  },
];

const Totp = () => {
  const { data, isLoading, error } = useFetch("getAllServices", {});
  return (
    <View>
      {
        isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) :
        (data?.map((service) =>
        (
          <TotpCell 
            service={service}
            key={service._id}
            handleNavigate={() => {}}
          />
        ))
      )}
    </View>
  )
}

export default Totp;
