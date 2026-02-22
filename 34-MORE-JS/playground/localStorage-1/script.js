const setToLS = () => {
    const number = Math.ceil(Math.random() * 100);
    console.log(number);
    localStorage.setItem("number", number)
}

const setObjToLS = () => {
    const person = { name: 'John Doe', age: 28, isMarried: true };
    // console.log(person);
    const personJSON = JSON.stringify(person);
    // console.log(personJSON);
    localStorage.setItem('person', personJSON)
}

