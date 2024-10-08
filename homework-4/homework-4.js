/* question 6 */
    const listItems = document.querySelectorAll('#list li');
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            listItems.forEach(li => li.style.color = 'blue');
        });
    });

    /* question 7 */
    const cats = [
        {
            name: 'Charlie',
            adoptionStatus: 'available'
        },
        {
            name: 'Lily',
            adoptionStatus: 'not-available'
        },
        {
            name: 'Coco',
            adoptionStatus: 'available'
        },
        {
            name: 'Oreo',
            adoptionStatus: 'not-available'
        },
        {
            name: 'Luna',
            adoptionStatus: 'available'
        },
        {
            name: 'Milo',
            adoptionStatus: 'available'
        },
        {
            name: 'Lola',
            adoptionStatus: 'not-available'
        },
        {
            name: 'Leo',
            adoptionStatus: 'available'
        },
        {
            name: 'Willow',
            adoptionStatus: 'available'
        },
        {
            name: 'Bella',
            adoptionStatus: 'not-available'
        },
        {
            name: 'Max',
            adoptionStatus: 'available'
        },
        {
            name: 'Cleo',
            adoptionStatus: 'available'
        },
        {
            name: 'Lucy',
            adoptionStatus: 'not-available'
        },
        {
            name: 'Daisy',
            adoptionStatus: 'available'
        },
    ];

    const catsList = document.getElementById('cats-list');
    cats.forEach(cat => {
        const li = document.createElement('li');
        li.textContent = cat.name;
        catsList.appendChild(li);
    });

    /* question 8 */
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const inputValue = input.value.trim();
        console.log(inputValue);

        /* question 9 */
        if (inputValue === '') {
            messageDiv.textContent = 'Please Provide a Value';
            messageDiv.className = 'error';
        /* question 10 */
        } else {
            messageDiv.textContent = 'Success';
            messageDiv.className = 'success';
        }
    });
