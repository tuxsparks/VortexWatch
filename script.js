fetch("news.json")
  .then(response => response.json())
  .then(data => {

    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    const container = document.getElementById("news-container");

    data.forEach(article => {
      const articleDiv = document.createElement("div");

      articleDiv.innerHTML = `
        <h2>${article.title}</h2>
        <p><strong>${article.date}</strong> | ${article.category}</p>
        <p>${article.content}</p>
        <hr>
      `;

      container.appendChild(articleDiv);
    });
  });
