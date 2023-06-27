import { GenericImage, GenericText, GenericView } from '@/assets/css';
import LeaderCard from '@/components/LeaderCard';
import AppHeader from '@/components/shared/AppHeader';
import { colors, dHeight, dWidth } from '@/constants';
import React from 'react';
import { FlatList } from 'react-native';
import first from '@/assets/img/first.png';
import second from '@/assets/img/second.png';
import third from '@/assets/img/third.png';
import SortCard from '@/components/SortCard';

const data = [
    {
        id: 0,
        name: 'Mahmut Can Yazlak ',
        point: 479,
    },
    {
        id: 1,
        name: 'Ginger ',
        point: 475,
    },
    {
        id: 2,
        name: 'Mario ',
        point: 450,
    },
    {
        id: 3,
        name: 'Micheal',
        point: 400,
    },
    {
        id: 4,
        name: 'kullanıcı-5',
        point: 350,
    },
    {
        id: 5,
        name: 'kullanıcı-6',
        point: 350,
    },
    {
        id: 6,
        name: 'kullanıcı-7',
        point: 350,
    },
    {
        id: 7,
        name: 'kullanıcı-8',
        point: 350,
    },
    {
        id: 8,
        name: 'kullanıcı-9',
        point: 350,
    },
    {
        id: 9,
        name: 'kullanıcı-10',
        point: 350,
    },
    {
        id: 10,
        name: 'kullanıcı-11',
        point: 350,
    },
]

const LeaderBoardScreen = ({ navigation }: any) => {
    const renderTest = ({ item, index }: any) => (
        <LeaderCard leader={item} index={index} />
    );

    const onPressBack = () => {
        navigation.goBack();
    }
    return (
        <GenericView flex={1}>
            <AppHeader back onPressBack={onPressBack} title={"LeaderBoard"} />
            <GenericView flex={1}>
                <FlatList
                    ListHeaderComponent={
                        <GenericView marginBottom={10} height={dHeight / 3.5} backgroundColor={colors.primary} flexDirection='row' justifyContent='space-around' >
                            <SortCard color={colors.second} image={second} name={data[1].name} height={100} width={100} />
                            <SortCard color={colors.first} image={first} name={data[0].name} height={150} width={150} />
                            <SortCard color={colors.third} image={third} name={data[2].name} height={100} width={100} />
                        </GenericView>
                    }
                    data={data}
                    renderItem={renderTest}
                    keyExtractor={(item) => item.id.toString()}
                />
            </GenericView>
        </GenericView>
    );
};

export default LeaderBoardScreen;