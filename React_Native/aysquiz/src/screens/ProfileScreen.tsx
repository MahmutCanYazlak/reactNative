import { GenericText, GenericView } from '@/assets/css';
import AppHeader from '@/components/shared/AppHeader';
import Icon from '@/components/shared/Icons';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { colors, dHeight, dWidth } from '@/constants';
import { IProfile } from '@/types/dataTypes';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileThunk } from '@/store/reducers/profileReducers';
import { AppDispatch, RootState } from '@/store';
import { StorageService } from '@/utils/storage';



const Wallet = ({ score }: any) => {
    return (
        <GenericView
            flex={1}
            top={dHeight * 0.15}
            zIndex={-1}
            position={'absolute'}
            borderRadius={10}
            width={dWidth * 0.9}
            height={dHeight * 0.15}
            backgroundColor={colors.white}
            margin={dHeight * 0.02}
            elevation={5}
            shadowColor={colors.black}
            shadowOffset={{ width: 0, height: 2 }}
            shadowRadius={2}
            shadowOpacity={0.25}>
            {score && (
                <GenericView flex={2} flexDirection={'row'} center spaceAround>
                    <GenericView center>
                        <Icon name="star-outline" size={dHeight * 0.05} color={colors.primaryDark} />
                        <GenericText bold fontSize={dHeight * 0.02} color={colors.primaryDark}>
                            Total Score
                        </GenericText>
                        <GenericText bold fontSize={dHeight * 0.03} color={colors.primaryDark}>
                            {score.scoreTotal}
                        </GenericText>
                    </GenericView>
                    <GenericView center>
                        <Icon name="wallet-outline" size={dHeight * 0.05} color={colors.primaryDark} />
                        <GenericText bold fontSize={dHeight * 0.02} color={colors.primaryDark}>
                            Cüzdan
                        </GenericText>
                        <GenericText bold fontSize={dHeight * 0.03} color={colors.primaryDark}>
                            {score.priceTotal}₺
                        </GenericText>
                    </GenericView>
                </GenericView>
            )}
        </GenericView>
    );
};

const ProfileScreen = ({ navigation }: any) => {
    const dispatch: AppDispatch = useDispatch();
    const profileData: IProfile | null = useSelector((state: RootState) => state.profile.profileData);

    React.useEffect(() => {
        dispatch(getProfileThunk());
    }, [dispatch]);

    const goBack = () => {
        navigation.goBack();
    };

    const logout = () => {
        /* StorageService.clearAll(); */
        console.log('logout', navigation.navigate);
        navigation.navigate('login');
    };


    return (
        <SafeAreaWrapper>
            <GenericView flex={1} backgroundColor={colors.primary}>
                <AppHeader title="Profile" right="logout" onRightPress={logout} back onPressBack={goBack} />
                {profileData && (
                    <>
                        <GenericView flex={2} backgroundColor={colors.primary} alignItems={'center'} position={'relative'}>
                            <Icon name="account" size={dHeight * 0.12} color={colors.white} />
                            <GenericText bold color={colors.white} fontSize={dHeight * 0.03}>
                                {profileData.name}
                            </GenericText>
                            <Wallet score={profileData.score} />
                        </GenericView>
                        <GenericView zIndex={-1} flex={1} backgroundColor={colors.white} />
                        <GenericView flex={4} backgroundColor={colors.white} padding={dWidth * 0.03}>
                            {/* <FlatList data={null} keyExtractor={(item) => item.id.toString()} renderItem={renderList} /> */}
                        </GenericView>
                    </>
                )}
            </GenericView>
        </SafeAreaWrapper>
    );
};

export default ProfileScreen;
