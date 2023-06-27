import { FlatList, ScrollView, Alert } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { GenericText, GenericTouchableOpacity, GenericView } from '@/assets/css';
import { IQuestion } from '@/types/dataTypes';
import { colors } from '@/constants';
import Icon from '@/components/shared/Icons';
import QuestionItem from '@/components/question/QuestionItem';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { setAnswers, setExamDataThunk, setSelectedOptionId } from '@/store/reducers/examReducer';
import moment from 'moment';


const QuestionListScreen = ({ navigation }: any) => {

    const dispatch = useDispatch<AppDispatch>();

    const flatlistRef = useRef<FlatList<IQuestion>>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [viewableItems, setViewableItems] = useState<Array<any>>([]);
    const [primaryColor, setPrimaryColor] = useState('#000000');


    /* const examStartTime: Date = useSelector((state: RootState) => state.exam.examStartTime); */
    const examDuration = useSelector((state: RootState) => state.exam.examDuration);
    const [remainingTime, setRemainingTime] = useState(examDuration || 0);                                  // kalan süreyi tutan state
    const examTopicId = useSelector((state: RootState) => state.exam.examTopicId);
    const questionList: IQuestion[] = useSelector((state: RootState) => state.exam.questionList);
    const selectedOptionId = useSelector((state: RootState) => state.exam.selectedOptionId);
    const answerList = useSelector((state: RootState) => state.exam.answers);

    const currentQuestion = questionList[currentPage] || {}; // Şu anki soruyu alıyoruz (currentPage'e göre) ilk açıldığında currentQuestion boş oluyor (sorular redux tan yüklenmediği için)

    const handleViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any[] }) => {
        setViewableItems(viewableItems);
    }).current;

    useEffect(() => {


        if (viewableItems.length === 0) return;

        const currentViewableItem = viewableItems[0];
        if (currentPage !== currentViewableItem.index) {
            setCurrentPage(currentViewableItem.index);
            setPrimaryColor(currentViewableItem.item.color);
        }


    }, [currentPage, viewableItems]);

    const handleBack = () => {
        answeredQuestioncontrol(0);
        if (currentPage === 0 || !flatlistRef.current) {
            return;
        }
        flatlistRef.current.scrollToIndex({
            animated: true,
            index: currentPage - 1,
        });
    };

    const handleforward = () => {
        answeredQuestioncontrol(1);
        if (currentPage === questionList.length - 1 || !flatlistRef.current) {
            return;
        }
        flatlistRef.current.scrollToIndex({
            animated: true,
            index: currentPage + 1,
        });
    };

    const answeredQuestioncontrol = (type: number) => {

        const answeredQuestion = answerList.find((answer) => answer.questionId === questionList[type === 0 ? currentPage - 1 : currentPage + 1]?.id);

        if (answeredQuestion) {
            dispatch(setSelectedOptionId(answeredQuestion.answerId));
        }
        else {
            dispatch(setSelectedOptionId(0));
        }
    };

    const setExamData = () => {

        Alert.alert(
            'UYARI',
            'Bitirmek istediğinizden emin misiniz?',
            [
                {
                    text: 'Hayır', onPress: () => {
                    }
                },
                {
                    text: 'Evet', onPress: () => {

                        let data = {
                            topicId: examTopicId,
                            answers: answerList,
                        };
                        dispatch(setExamDataThunk({ data, navigation }));
                    }

                }
            ], { cancelable: false }
        )
    };

    const renderTopSection = () => {
        return (
            <GenericView backgroundColor={colors.primary} padding={10}>
                <GenericView flexDirection='row' justifyContent='space-between'>
                    <GenericView center>
                        <GenericText fontSize={20} color={colors.white} bold>{`soru ${currentPage + 1}`}</GenericText>
                    </GenericView>
                    <GenericView flexDirection='row' borderWidth={1} borderColor={colors.white} borderRadius={3} padding={3}>
                        <GenericView center padding={5}>
                            <Icon name='clock-outline' size={20} color={colors.white} />
                        </GenericView>
                        <GenericView center padding={2}>
                            <GenericText fontSize={16} color={colors.white}>{remainingTime} dk</GenericText>
                        </GenericView>
                    </GenericView>
                </GenericView>
                {/* Pagination */}
                <GenericView alignItems='center' padding={10}>
                    <GenericView flexDirection='row' alignItems='center'>
                        <ScrollView horizontal>
                            {
                                // No. of dots
                                [...Array(questionList.length)].map((_, index) => (
                                    <GenericView
                                        key={index}
                                        width={20}
                                        height={5}
                                        borderRadius={2}
                                        backgroundColor={index == currentPage
                                            ? colors.white
                                            : colors.white + '50'}
                                        marginRight={8}
                                    />
                                ))
                            }
                        </ScrollView>

                    </GenericView>
                </GenericView>
                {/* Pagination */}
            </GenericView>
        );
    };

    const renderBottomSection = () => {
        return (
            <GenericView>
                <GenericView flexDirection='row' justifyContent='space-between' padding={15}>
                    {
                        currentPage != 0 ?                              // ilk soru değilse geri butonu göster
                            <GenericView flex={1} center>
                                <GenericTouchableOpacity
                                    onPress={handleBack}
                                    flexDirection='row'
                                    alignItems='center'
                                    justifyContent='center'
                                    backgroundColor={colors.primary}
                                    width={60}
                                    height={60}
                                    borderRadius={30}
                                >
                                    <Icon name='chevron-double-left' size={40} color={colors.white} />

                                </GenericTouchableOpacity>
                            </GenericView>
                            :
                            <GenericView flex={1}></GenericView>
                    }

                    <GenericView justifyContent='space-between' alignItems='center' flex={4}>
                        {
                            // seçilen bir şık varsa ve soru daha önce cevaplanmamışsa onayla butonu göster
                            selectedOptionId != 0 && !answerList.find((answer) => answer.questionId === currentQuestion.id) ?
                                <GenericTouchableOpacity
                                    onPress={() => dispatch(setAnswers(currentQuestion.id))}
                                    backgroundColor={colors.primary}
                                    borderRadius={5}
                                    center
                                    padding={10}
                                    width={150}
                                >
                                    <GenericText color={colors.white} bold>Onayla</GenericText>
                                </GenericTouchableOpacity>
                                :
                                <GenericView></GenericView>
                        }
                        <GenericTouchableOpacity
                            onPress={() => setExamData()}
                            center
                            width={100}
                            padding={10}
                        >
                            <GenericText color={colors.primary} bold>Bitir</GenericText>
                        </GenericTouchableOpacity>
                    </GenericView>

                    {
                        currentPage != questionList.length - 1 ?                // son soru değilse ileri butonu göster
                            <GenericView flex={1} center>
                                <GenericTouchableOpacity
                                    onPress={handleforward}
                                    flexDirection='row'
                                    alignItems='center'
                                    justifyContent='center'
                                    backgroundColor={colors.primary}
                                    width={60}
                                    height={60}
                                    borderRadius={30}
                                >
                                    <Icon name='chevron-double-right' size={40} color={colors.white} />

                                </GenericTouchableOpacity>
                            </GenericView>
                            :
                            <GenericView flex={1}></GenericView>

                    }

                </GenericView>
            </GenericView >
        );
    };
    const renderFlatlistItem = ({ item }: { item: IQuestion }) => {
        return <QuestionItem item={item} />;
    };

    return (
        <SafeAreaWrapper>
            {/* TOP SECTION - Back & Skip button */}
            {renderTopSection()}

            {/* FLATLIST with pages */}
            < FlatList
                data={questionList}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderFlatlistItem}
                ref={flatlistRef}
                onViewableItemsChanged={handleViewableItemsChanged}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                initialNumToRender={1}
                scrollEnabled={false}
            />

            {/* BOTTOM SECTION - pagination & next or GetStarted button */}
            {renderBottomSection()}
        </SafeAreaWrapper >
    );
};

export default QuestionListScreen;