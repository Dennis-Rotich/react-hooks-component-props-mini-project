import React from "react";
import Article from "./Article";

function ArticleList(props){
    const newArticle = props.posts.map((post)=>{
        return(
            <Article key= {post.id} title={post.title} date={post.date} preview={post.preview} />
        )
    })
    
    return(
        <main>
            {newArticle}
        </main>
    )
}

export default ArticleList