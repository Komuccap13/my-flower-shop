document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const alphabetNavigation = document.querySelector('.alphabet-navigation');
    const sortsList = document.getElementById('sorts-list');
    const sorts = Array.from(sortsList.getElementsByTagName('li')); // Получаем все элементы списка

    // Функция для фильтрации сортов по поисковому запросу
    function filterSorts(searchTerm) {
        sorts.forEach(sort => {
            const sortName = sort.textContent.toLowerCase();
            if (sortName.includes(searchTerm.toLowerCase())) {
                sort.style.display = 'block';
            } else {
                sort.style.display = 'none';
            }
        });
    }

    // Функция для фильтрации сортов по букве
    function filterByLetter(letter) {
        sorts.forEach(sort => {
            const sortName = sort.textContent.toLowerCase();
            if (sortName.startsWith(letter.toLowerCase())) {
                sort.style.display = 'block';
            } else {
                sort.style.display = 'none';
            }
        });
    }

    // Обработчик события для строки поиска
    searchInput.addEventListener('input', function() {
        filterSorts(this.value);
    });

    // Обработчик события для буквенной навигации
    alphabetNavigation.addEventListener('click', function(event) {
        if (event.target.tagName === 'SPAN') {
            const letter = event.target.textContent;
            filterByLetter(letter);
        }
    });
});
