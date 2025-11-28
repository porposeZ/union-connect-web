import { Article } from "../domain/models";
import Link from "next/link";

type LeftNavProps = {
    articles: Article[];
};

export default function LeftNav(articles: LeftNavProps) {
    return <div className="rounded-lg border border-gray-300 p-4 shadow-sm bg-white mr-3.5 h-fit">
        <nav>
            <ul>
                <li>
                    <Link href="/articles">Категории</Link>
                </li>

                <li>
                    <Link href="/articles">Разделы</Link>
                </li>

                <li>
                    <Link href="/articles">Все статьи</Link>
                </li>

                <li>
                    <Link href="/articles">Частые вопросы</Link>
                </li>

                <li>
                    <Link href="/articles">Создать задачу</Link>
                </li>

                <li>
                    <p>Кто онлайн</p>
                </li>
            </ul>
        </nav>
    </div>;
}