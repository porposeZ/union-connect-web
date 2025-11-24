// Пользователи и группы

export type UserRole = 'specialist' | 'admin' | 'developer';
export type UserStatus = 'active' | 'inactive' | 'pending';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    status: UserStatus;
    groupId?: string; // group
    lastActionAt?: string;
}

export interface Group {
    id: string;
    name: string;
    description?: string;
    members: User[];
}

// Обращения и сообщения

export interface Appeal {
    id: string
    number: string
    theme: string
    status: "open" | "in_progress" | "closed"
    priority: "low" | "normal" | "high" | "critical"
    clientName: string
    clientContact: string 
    appointedSpecialistId?: string
    createdAt: string
    updatedAt: string
}

export type AppealAuthorType = 'client' | 'specialist' | 'developer' | 'ai';

export interface AppealMessage {
    id: string
    appealId: string
    senderId: string
    message: string
    createdAt: string
    isInternal: boolean
    authorType: AppealAuthorType
}

// База знаний

export interface Application {
    id: string
    name: string
    code: string
    version: string
    description?: string
}

export type CategoryLevel = 'main' | 'section' | 'subcategory';

export interface Category {
    id: string
    name: string
    parentId?: string
    level: CategoryLevel
}

export type ArticleStatus = "actual" | "partially_outdated" | "needs_update"

export interface Article {
    [x: string]: any;
    id: string
    title: string
    applicationId?: string
    categoryId?: string
    status: ArticleStatus 
    lastReviewedAt?: string
    currentVersionId: string
}

export interface ArticleVersion {
    id: string
    articleId: string
    appVersion?: string    // (для какой версии ПО актуально)
    body: string           // (markdown)
    changeSummary?: string
    createdAt: string
    createdByUserId: string
}