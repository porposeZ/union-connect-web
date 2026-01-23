"use client"
import Link from "next/link"

export default function NavBar() {

    return (
        <div className="bg-black/50 rounded-lg border border-gray-300 p-4 shadow-sm mr-3.5 h-fit">
            <nav>
                <ul>
                    <div className="flex flex-row gap-4 ">
                        <li className="hover:scale-105">
                            <Link href="./">Главная</Link>
                        </li>

                        <li className="hover:scale-105">
                            <Link href="/appeals">Обращения</Link>
                        </li>

                        <li className="hover:scale-105">
                            <Link href="/articles">Статьи</Link>
                        </li>

                        <li>
                            <p>Кто онлайн</p>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}