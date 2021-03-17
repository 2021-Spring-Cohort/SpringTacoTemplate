// const getEvenRandomNumberBetweenTwoAndTen = new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random * 10 + 1)
//     const isEven = number => number % 2 === 0
  
//     isEven(randomNumber)
//       ? resolve(`Your random even number is ${randomNumber}`)
//       : reject(`Number returned was odd.`)
//   })
  
//   getEvenRandomNumberBetweenTwoAndTen
//     .then(res => console.log(res))
//     .catch(err => console.error(err))

const getEvenRandomNumberBetweenTwoAndTen = new Promise((resolve,reject) =>{
    const randomNumber = Math.floor(Math.random() * 10 + 1)
    const isEven = number => number % 2 === 0

         if(isEven(randomNumber))
         {
             resolve(`Your random even number is ${randomNumber}`);
         }
         else
         {
             reject(`Number returned was odd.`)
         }

    })
 getEvenRandomNumberBetweenTwoAndTen
     .then(res => console.log(res))
     .catch(err => console.error(err))



fetch("https://swapi.dev/api/people")
.then(response => response.json())
.then(jsonData => {
    //console.log(jsonData))
    const people = jsonData.results;
    
    people.forEach(person => {
        console.log(person.name);
        console.log(person.hair_color);
    })
})
.catch(err => console.log(err));
