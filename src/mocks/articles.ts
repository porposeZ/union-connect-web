import { Article, ArticleVersion } from "../domain/models";

export const articleMocks: Article[] = [
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
}
]