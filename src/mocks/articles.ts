import { Article, ArticleVersion, Appeal, AppealMessage } from "../domain/models";

export const articlesMocks: Article[] = [
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
{   id: "3",
    title: "Фискальный регистратор",
    status: "partially_outdated",
    currentVersionId: "3",
},
{   id: "4",
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

export const appealsMocks: Appeal[] = [
  {
    id: "1",
    number: "A-1001",
    theme: "Printer does not print",
    status: "open",
    priority: "normal",
    clientName: "Ivan Petrov",
    clientContact: "ivan.petrov@example.com",
    appointedSpecialistId: "sp-1",
    createdAt: "13.12.2025",
    updatedAt: "14.12.2025",
  },
  {
    id: "2",
    number: "A-1002",
    theme: "POS app crashes on start",
    status: "in_progress",
    priority: "high",
    clientName: "Anna Smirnova",
    clientContact: "+7 900 000-00-00",
    appointedSpecialistId: "sp-2",
    createdAt: "18.12.2025",
    updatedAt: "19.12.2025",
  },
  {
    id: "3",
    number: "A-1003",
    theme: "Online cashbox not syncing",
    status: "closed",
    priority: "low",
    clientName: "OOO Trade",
    clientContact: "support@trade.example",
    appointedSpecialistId: "sp-1",
    createdAt: "10.12.2025",
    updatedAt: "12.12.2025",
  },
];

export const appealMessageMocks: AppealMessage[] = [
  {
    id: "m-1",
    appealId: "1",
    senderId: "client-1",
    message: "Printer shows paper jam, but tray is empty.",
    createdAt: "13.12.2025 19:30",
    isInternal: false,
    authorType: "client",
  },
  {
    id: "m-2",
    appealId: "1",
    senderId: "sp-1",
    message: "Asked client to reboot printer and clear queue.",
    createdAt: "13.12.2025 19:45",
    isInternal: true,
    authorType: "specialist",
  },
  {
    id: "m-3",
    appealId: "2",
    senderId: "client-2",
    message: "POS app closes right after login.",
    createdAt: "18.12.2025 09:20",
    isInternal: false,
    authorType: "client",
  },
  {
    id: "m-4",
    appealId: "2",
    senderId: "dev-1",
    message: "Looks like missing runtime dependency. Check logs.",
    createdAt: "18.12.2025 10:00",
    isInternal: true,
    authorType: "developer",
  },
  {
    id: "m-5",
    appealId: "3",
    senderId: "client-3",
    message: "Cashbox sync delayed for 2 hours.",
    createdAt: "10.12.2025 14:10",
    isInternal: false,
    authorType: "client",
  },
  {
    id: "m-6",
    appealId: "3",
    senderId: "sp-1",
    message: "Sync restored after network reset.",
    createdAt: "12.12.2025 11:00",
    isInternal: false,
    authorType: "specialist",
  },
  {
    id: "m-7",
    appealId: "2",
    senderId: "client-2",
    message: "THANKS APP STARTS WORKING",
    createdAt: "18.12.2025 07:00",
    isInternal: false,
    authorType: "specialist",
  }
];
