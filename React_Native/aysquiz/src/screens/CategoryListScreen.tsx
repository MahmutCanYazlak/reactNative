import React, { useEffect } from 'react'
import { GenericView } from '@/assets/css';
import { FlatList } from 'react-native';
import CategoryCard from '@/components/CategoryCard';
import { dWidth } from '@/constants';
import AppHeader from '@/components/shared/AppHeader';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { ICategory } from '@/types/dataTypes';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { useDispatch } from 'react-redux';
import { getAllCategoriesThunk } from '@/store/reducers/categoryReducer';




const CategoryListScreen = ({ navigation }: any) => {

    const dispatch = useDispatch<AppDispatch>();

    const products: ICategory[] = useSelector((state: RootState) => state.category.categories);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        dispatch(getAllCategoriesThunk());
    }

    const onPressBack = () => {
        navigation.goBack();
    };

    const renderProducts = (category: ICategory) => (
        <CategoryCard category={category} navigation={navigation} type={"product"} />
    );


    return (
        <SafeAreaWrapper>
            <GenericView flex={1}>
                <AppHeader title={"Kategoriler"} back onPressBack={onPressBack} />
                <GenericView flex={1} padding={dWidth * 0.02} >
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => renderProducts(item)}
                    />
                </GenericView>
            </GenericView>
        </SafeAreaWrapper>
    );
};

export default CategoryListScreen;