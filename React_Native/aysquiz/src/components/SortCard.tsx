import { GenericText } from "@/assets/css";
import { GenericImage } from "@/assets/css/image/genericImage";
import { GenericView } from "@/assets/css/view/genericView";
import { colors } from "@/constants";


interface Props {
        image: any;
        name: string;
        color: any;
        height: number;
        width: number;
}
const Sort = ({image ,name ,color ,height,width }:Props) => {
    return (
        <GenericView flex={1} flexDirection='column' alignItems='center' margin={3}>
            <GenericImage resizeMode={"cover"} source={image} borderRadius={100} width={width} height={height} />
            <GenericText bold color={color} fontSize={19} textAlign='center'>{name}</GenericText>
        </GenericView>
    );
};

export default Sort;