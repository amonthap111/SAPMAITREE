const portfolioItems = [
    {
        image: 'assents/IMG/all-img/1.jpg',
        title: 'โครงการ 1',
        description: 'รายละเอียดโครงการ 1...'
    },
    {
        image: 'images/project2.jpg',
        title: 'โครงการ 2',
        description: 'รายละเอียดโครงการ 2...'
    },
    {
        image: 'images/project3.jpg',
        title: 'โครงการ 3',
        description: 'รายละเอียดโครงการ 3...'
    }
    // เพิ่มผลงานเพิ่มเติมได้ที่นี่
];

const portfolioItemsContainer = document.getElementById('portfolio-items');

portfolioItems.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;

    const title = document.createElement('h3');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    portfolioItem.appendChild(image);
    portfolioItem.appendChild(title);
    portfolioItem.appendChild(description);

    portfolioItemsContainer.appendChild(portfolioItem);
});