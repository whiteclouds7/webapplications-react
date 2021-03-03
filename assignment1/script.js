const createCalculation = () => {
    const getRandomInt = (max) => Math.floor(Math.random() * max);
    const calculateResult = (a, b, operation) => {
        switch (operation) {
            case 0:
                return a/b;
            case 1:
                return a*b;
            case 2:
                return a-b;
            case 3:
                return a+b;
        }
    }

    const ul = document.getElementById('calculations');
    const operations = ['/', '*', '-', '+'];
    const a = getRandomInt(100);
    const b = getRandomInt(100);
    const operation = getRandomInt(4);

    // add li element with input
    const li = document.createElement('li');
    li.innerHTML = `${a} ${operations[operation]} ${b} = `;
    ul.appendChild(li);

    // add input to li element
    const input = document.createElement('input')
    input.setAttribute('type', 'number');
    li.appendChild(input);

    // add keypress event to input
    input.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            li.innerHTML = `${a} ${operations[operation]} ${b} = ${calculateResult(a,b,operation)}`;
            li.style.color = parseInt(input.value) === calculateResult(a,b,operation) ? 'green' : 'red';
            createCalculation();
        }
    })
}

createCalculation();

