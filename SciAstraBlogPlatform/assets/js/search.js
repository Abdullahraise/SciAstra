document.getElementById("search").addEventListener("keyup", function() {
    let query = this.value;

    fetch(`backend/search.php?q=${query}`)
        .then(response => response.json())
        .then(data => {
            let resultsDiv = document.getElementById("search-results");
            resultsDiv.innerHTML = "";

            data.forEach(item => {
                let div = document.createElement("div");
                div.textContent = `${item.title} (${item.type})`;
                resultsDiv.appendChild(div);
            });
        });
});
