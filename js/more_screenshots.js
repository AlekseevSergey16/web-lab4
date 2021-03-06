const btnLoadMore = document.querySelector('.btn-load-more');

btnLoadMore.addEventListener('click', function (e) {
    const screenshots = document.querySelector('.screenshots')
    let offset = parseInt(e.target.getAttribute("last-screenshot-id"))
    const url = `load_more.php?offset=${offset}`
    fetch(url)
        .then(response => response.text())
        .then(result => {
            screenshots.insertAdjacentHTML('beforeend', result)
            btnLoadMore.setAttribute("last-screenshot-id", (offset - 9).toString())
            if (offset < 0) {
                btnLoadMore.style.display = 'none';
            }
        }).catch(error => console.log(error))

})




