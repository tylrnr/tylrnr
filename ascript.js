function renderArticle(articleId) {
  fetch('articles.json')
    .then(response => response.json())
    .then(data => {
      const article = data.articles.find(a => a.id === articleId);
      if (article) {
        document.getElementById('article-title').textContent = article.title;
        document.getElementById('article-date').textContent = `Published: ${article.date}`;
        const contentDiv = document.getElementById('article-content');
        contentDiv.innerHTML = ''; // Clear previous content
        article.content.forEach(paragraph => {
          const p = document.createElement('p');
          p.innerHTML = paragraph; // Use innerHTML to interpret bold/italic tags
          contentDiv.appendChild(p);
        });
      }
    })
    .catch(error => console.error('Error loading article:', error));
}

// Call this function with the appropriate article ID
renderArticle('article1');
