import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import AppStackNavigator from "./AppStackNavigator"

const MainNavigator = () => {

    return (
        <NavigationContainer>
            <AppStackNavigator />
        </NavigationContainer>
    )
}

export default MainNavigator;
