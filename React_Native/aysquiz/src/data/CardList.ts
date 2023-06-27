import { IHomeCard } from "@/types/dataTypes";

export const homeCard: IHomeCard[] = [
    {
        id: 1,
        title: 'Test Konuları',
        image: require("@/assets/img/quiz.png"),
        screen: 'productList'
    },
    {
        id: 2,
        title: 'Ders İçerikleri',
        image: require("@/assets/img/lesson.png"),
        screen: 'ProfileScreen'
    },
    {
        id: 3,
        title: 'Skor Tablosu',
        image: require("@/assets/img/leaderboards.png"),
        screen: 'ScoreScreen'
    },
    {
        id: 4,
        title: 'Skor Tablosu',
        image: require("@/assets/img/ayssoft.png"),
        screen: 'ProductListScreen'
    },
    {
        id: 5,
        title: 'Skor Tablosu',
        image: require("@/assets/img/edatra.png"),
        screen: 'ProductListScreen'
    },
];