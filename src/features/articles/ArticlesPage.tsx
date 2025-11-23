"use client"

import { Article } from "../../domain/models"

type ArticlesPageProps = {
    articles: Article[]
}

export function ArticlesPages( {articles}: ArticlesPageProps) {
    return (
        <div>
            <h1>Список статей</h1>
            
            {articles.map((article) =>{
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>status: {article.status}</p>
                </div>
            })}
        </div>
    )
}