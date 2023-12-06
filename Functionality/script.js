const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    const searchQuery = searchInput.value.trim().toLowerCase();
    if (searchQuery === '') {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
    } else {(searchResultsData => {
                const filteredResults = searchResultsData.filter(result => result.name.toLowerCase().includes(searchQuery));
                searchResults.innerHTML = '';
                if (filteredResults.length === 0) {
                    searchResults.innerHTML = '<p>No results found.</p>';
                } else {
                    filteredResults.forEach(result => {
                        const resultElement = document.createElement('div');
                        resultElement.innerHTML = `<a href="${result.url}">${result.name}</a>`;
                        searchResults.appendChild(resultElement);
                    });
                }
                searchResults.style.display = 'block';
            });
    }
});