import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, TITLE, icons } from "../constants";
import {NavigationBtn} from "../componets"
const Home = () => {
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
                    <NavigationBtn iconUrl={icons.add} dimension="60%"/>
                ),
                headerTitleAlign: 'left',
                headerTitle: TITLE
            }}
        />
    </SafeAreaView>
    )
}

export default Home;