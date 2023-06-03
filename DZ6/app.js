const btn = document.querySelector('.get');
const box = document.querySelector('.wrapper');

btn.addEventListener('click', async () => {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            console.log('Failed to fetch data');
        }

        const data = await response.json();

        data.forEach(i => {
            const card = document.createElement('div');

            card.innerHTML = `
                <div class="card">
                    <img class="card_img" src="${i.image}" alt="#">
                    <p>${i.name}</p>
                    <span>${i.price}</span>
                </div>`;
            box.append(card);
        });
    } catch (error) {
        console.log('An error occurred:', error);
    }
});
