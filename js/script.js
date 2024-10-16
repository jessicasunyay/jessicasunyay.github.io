const searchBar = document.getElementById('searchBar');
const boxes = document.querySelectorAll('.box');
const noResults = document.getElementById('noResults');

searchBar.addEventListener('keyup', function() {
    const searchText = searchBar.value.toLowerCase();
    let hasResults = false;

    // Loop through each project box
    boxes.forEach(function(box) {
        const boxText = box.textContent.toLowerCase();

        if (boxText.includes(searchText)) {
            box.style.display = 'block'; 
            hasResults = true;
        } else {
            box.style.display = 'none';
        }
    });

    if (!hasResults) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
});
