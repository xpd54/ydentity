import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, FONT, SIZES, TITLE, icons } from "../constants";
import {NavigationBtn, Totp} from "../componets"
const Home = () => {
    const router = useRouter();
    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.limeGreen},
                headerShadowVisible: true,
                headerLeft: () => (
                    <NavigationBtn iconUrl={icons.menu} dimension="60%"/>
                ),
                headerRight: () => (
                    <NavigationBtn iconUrl={icons.add} dimension="60%" handlePress={() => {router.push(`/scan`)}}/>
                ),
                headerTitleAlign: 'left',
                headerTitle:() => (<Text  style={{color: COLORS.white, fontSize: SIZES.large, fontWeight: FONT.bold}}>{TITLE}</Text>)
            }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                padding: SIZES.medium,
              }}
            >
                <Totp/>
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default Home;