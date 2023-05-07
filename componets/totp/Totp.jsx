import React from "react";
import { useRouter } from "expo-router";
import { View, Text,} from "react-native";
import TotpCell from "./totpCell/TotpCell";
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
  const router = useRouter();
  return (
    <View>
      {
        DATA?.map((service) => 
        (
          <TotpCell 
            service={service}
            key={service.id}
            handleNavigate={() => router.push('/generate/')}
          />
        ))
      }
    </View>
  )
}

export default Totp;
