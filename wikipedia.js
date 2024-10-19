const articles = {
    article1: {
        title: "Article 1",
        content: "This is the content for Article 1. It provides an overview of the topic."
    },
    article2: {
        title: "Article 2",
        content: "This is the content for Article 2. It dives deeper into another aspect."
    },
    article3: {
        title: "Article 3",
        content: "This is the content for Article 3. It concludes the discussion."
    }
};

function loadArticle(articleId) {
    const article = articles[articleId];
    if (article) {
        document.getElementById("article").querySelector("h2").innerText = article.title;
        document.getElementById("content").innerText = article.content;
    } else {
        document.getElementById("article").querySelector("h2").innerText = "Article Not Found";
        document.getElementById("content").innerText = "";
    }
}
