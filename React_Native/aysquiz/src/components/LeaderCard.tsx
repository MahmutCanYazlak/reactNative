import React from 'react'
import { GenericImage, GenericText, GenericTouchableOpacity, GenericView } from '@/assets/css'
import { colors, dWidth } from '@/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import second from '@/assets/img/second.png';
import third from '@/assets/img/third.png';
import first from '@/assets/img/first.png';


interface Props {
    leader: {
        id: number;
        name: string;
        point: number;

    }
    index: number;
}
const ProductCard = ({ leader, index }: Props) => {

    return (
        <GenericView margin={dWidth * 0.03} borderRadius={10} padding={15} backgroundColor={colors.primaryLight} flexDirection={"row"} center>
            <GenericView flex={1} width={50} height={50} alignItems={"center"} justifyContent={'center'}>
                {index + 1 == 1 ? <GenericImage resizeMode={"cover"} source={first} borderRadius={50} width={50} height={50} /> :
                    index + 1 == 2 ? <GenericImage resizeMode={"cover"} source={second} borderRadius={50} width={50} height={50} /> :
                        index + 1 == 3 ? <GenericImage resizeMode={"cover"} source={third} borderRadius={50} width={50} height={50} /> :
                            <GenericView alignItems='center' justifyContent='center' width={47} height={47} backgroundColor={colors.primaryDark} borderRadius={50}>
                                <GenericText bold fontSize={20} color={colors.white}>{index + 1}</GenericText>
                            </GenericView>
                }

            </GenericView>
            <GenericView flex={3} flexDirection='row' justifyContent='space-between' alignItems='center'>
                <GenericText bold fontSize={15} color={colors.grayDark}>{leader.name}</GenericText>
                <GenericText bold fontSize={15} color={colors.primaryDark}>{leader.point}</GenericText>
            </GenericView>
        </GenericView>
    );
};

export default ProductCard;