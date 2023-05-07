const yearOfBirth = prompt('Please enter your year of birth.');
const city = prompt('In what city do you live?');
const typeOfSport = prompt('What`s your favorite kind of sport?');
let age = 2023 - parseInt(yearOfBirth);


if(age > 0 && city === 'Kyiv' && typeOfSport === 'football') {
alert(`You are ${age} years old and you live in the capital of Ukraine. Cool! So you want to become second Cristiano Ronaldo?`)
} else if (age > 0 && city === 'Kyiv' && typeOfSport === 'golf') {
alert(`You are ${age} years old and you live in the capital of Ukraine. Cool! So you want to become second Tiger Woods?`)
} else if (age > 0 && city === 'Kyiv' && typeOfSport === 'boxing') {
alert(`You are ${age} years old and you live in the capital of Ukraine. Cool! So you want to become second Floyd Mayweather?`)
} else if (age > 0 && city === 'Washington' && typeOfSport === 'football') {
alert(`You are ${age} years old and you live in the capital of USA. Cool! So you want to become second Cristiano Ronaldo?`)
} else if (age > 0 && city === 'Washington' && typeOfSport === 'golf') {
alert(`You are ${age} years old and you live in the capital of USA. Cool! So you want to become second Tiger Woods?`)
} else if (age > 0 && city === 'Washington' && typeOfSport === 'boxing') {
alert(`You are ${age} years old and you live in the capital of USA. Cool! So you want to become second Floyd Mayweather?`) 
} else if (age > 0 && city === 'London' && typeOfSport === 'football') {
alert(`You are ${age} years old and you live in the capital of Great Britain. Cool! So you want to become second Cristiano Ronaldo?`)
} else if (age > 0 && city === 'London' && typeOfSport === 'golf') {
alert(`You are ${age} years old and you live in the capital of Great Britain. Cool! So you want to become second Tiger Woods?`)
} else if (age > 0 && city === 'London' && typeOfSport === 'boxing') {
alert(`You are ${age} years old and you live in the capital of Great Britain. Cool! So you want to become second Floyd Mayweather?`)  
} else if (yearOfBirth == null) {
alert('Why did not you enter your year of birth?')
} else if (city == null) {
alert('Why did not you enter your city?')
} else if (typeOfSport == null) {
alert('Why did not you enter your favorite kind of sport?')
} else if (age > 0) {
alert(`You are ${age} years old and you live in ${city}. Cool! I like ${typeOfSport} too!`)
} 
