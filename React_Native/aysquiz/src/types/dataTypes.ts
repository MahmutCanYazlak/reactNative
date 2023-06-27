export interface IHomeCard {
    id: number;
    title: string;
    image: string;
    screen?: string;
};


export interface IQuestion {
    id: number;
    title: string;
    points: number;
    image: string;
    topic_id: number;
    created_at: string;
    updated_at: string;
    answers: IAnswer[];
};
export interface IAnswer {
    id: number;
    title: string;
    is_correct: number;
    question_id: number;
    created_at: string;
    updated_at: string;
};

export interface ICategory {
    id: number;
    title: string;
    icon: string | null;
    created_at: string;
    updated_at: string;
};

export interface IExamTopic {
    id: number;
    title: string;
    icon: string | null;
    duration: number;
    question_count: number;
    category_id: number;
    created_at: string;
    updated_at: string;
};
export interface IAnsweredQuestion {
    questionId: number;
    answerId: number;
};
export interface IProfile {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    role: string;
    score:{
        priceTotal: number;
        scoreTotal: number;
    };
    created_at: string;
    updated_at: string;
    deleted_at: string;
};