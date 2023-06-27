import { colors } from "@/constants"
import { RootState } from "@/store"
import React, { ReactNode, useEffect } from "react"
import { StatusBar } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useSelector } from "react-redux"
import Loader from "./Loader"

type SafeAreaWrapperProps = {
    children: ReactNode
}

const SafeAreaWrapper = ({ children }: SafeAreaWrapperProps) => {

    const isLoading = useSelector((state: RootState) => state.loading.isLoading);

    useEffect(() => {
        console.log("SafeAreaWrapper", isLoading)
    }, [])

    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.primary}
            />
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: colors.white
                }}
            >
                {
                    isLoading ?
                        <Loader />
                        :
                        children
                }

            </SafeAreaView>
        </>

    )
}

export default SafeAreaWrapper
