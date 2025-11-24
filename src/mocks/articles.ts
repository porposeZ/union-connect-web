import { Article, ArticleVersion } from "../domain/models";

export const articlesMock: Article[] = [
    {
    id: "1",
    title: "Принтер чеков",
    status: "actual",
    currentVersionId: "1",
},
{
    id: "2",
    title: "Страховой Агент",
    status: "actual",
    currentVersionId: "2",
},
{    id: "3",
    title: "Фискальный регистратор",
    status: "partially_outdated",
    currentVersionId: "3",
},
{    id: "4",
    title: "Онлайн касса",
    status: "needs_update",
    currentVersionId: "4",
}
]

export const articleVersionMocks: ArticleVersion[] = [
    {
    id: "1",
    articleId: "1",
    body: "Принтер чеков - ПО которое позволяет ...",
    createdAt: "10.06.2025",
    createdByUserId: "318",
    appVersion: "1.0.1"
},
{
    id: "2",
    articleId: "2",
    body: "Страховой агент нужен для того чтобы добавить доп поля в вашем чеке",
    createdAt: "14.06.2025",
    createdByUserId: "318",
    appVersion: "1.6.1"
},
{    id: "3",
    articleId: "3",
    body: "Фискальный регистратор - устройство для печати чеков",
    createdAt: "20.06.2025",
    createdByUserId: "318",
    appVersion: "2.0.0"
},
{    id: "4",
    articleId: "4",
    body: "Онлайн касса - это современное решение для вашего бизнеса",
    createdAt: "25.06.2025",
    createdByUserId: "318",
    appVersion: "3.1.4"
}
]