# React + Vite

This is for Practising the ReactJs with Vite

const personsArray = [
{
id: 1,
name: "Nihal",
age: 25,
city: "Sangli",
mobile: {
num1: 8806345522,
num2: 9359548230,
},
},
{
id: 2,
name: "Pritam",
age: 22,
city: "Malada",
mobile: {
num1: 8806345522,
num2: 9359548230,
},
},
{
id: 3,
name: "Prajwal",
age: 27,
city: "Kolhapur",
mobile: {
num1: 8806345522,
num2: 9359548230,
},
},
{
id: 4,
name: "Shreejay",
age: 26,
city: "Mumbai",
mobile: {
num1: 8806345522,
num2: 9359548230,
},
},
{
id: 5,
name: "Ashish",
age: 25,
city: "Ichalkaranji",
mobile: {
num1: 8806345522,
num2: 9359548230,
},
},
{
id: 6,
name: "Aslam",
age: 55,
city: "Sangli",
mobile: {
num1: 9960780715,
num2: 9359548230,
},
},
];

# map

const getAllName = personsArray.map((singlePerson, index) => {
console.log(singlePerson, index);

return singlePerson.name;
});

console.log(getAllName);

# Find

let getPersonFromSangli = personsArray.find((data, index) => {
return data.city === "Sangli";
});

console.log(getPersonFromSangli);

# Filter

let getAllPersonsFromSangli = personsArray.filter((data, index) => {
return data.city === "Sangli";
});

console.log(getAllPersonsFromSangli);

# Filter + map

let getMobileNumber = personsArray
.filter((data, index) => {
return data.mobile.num1 === 8806345522;
})
.map((data) => {
return data.name;
});

console.log(getMobileNumber);

# Filter + map

const getNameOfNihal = personsArray
.filter((data, index) => {
return data.name === "Nihal";
})
.map((data) => {
return data.name;
});

console.log(getNameOfNihal);

# Some

const checkSome = personsArray.some((data, index) => {
return data.age === 25;
});

console.log(checkSome);

const arrData = [1, 2, 3, 4];

let result = arrData.some((data, index) => {
return data === 4;
});

console.log(result);

# Every

let check2 = arrData.every((data) => {
return data < 1;
});

let check3 = personsArray
.filter((data) => {
return data.age > 50;
})
.map((data) => {
return data.name;
});

console.log(check3);

# React_Vite
