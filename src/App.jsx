import "./App.css";

function App() {
  // Rest paramater
  // function getInfo(a, ...c) {
  //   console.log(a, c);

  //   return "Nihal Sherkar";
  // }

  // console.log(getInfo(1, 2, 3, 4, 5, 6, 7, 8, 9, 41));

  // Map ,Filter, find, some, every, includes, indexOf, findIndex

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

  // const getAllName = personsArray.map((singlePerson, index) => {
  //   console.log(singlePerson, index);

  //   return singlePerson.name;
  // });

  // console.log(getAllName);

  // let getPersonFromSangli = personsArray.find((data, index) => {
  //   return data.city === "Sangli";
  // });

  // console.log(getPersonFromSangli);

  // let getAllPersonsFromSangli = personsArray.filter((data, index) => {
  //   return data.city === "Sangli";
  // });

  // console.log(getAllPersonsFromSangli);

  let getMobileNumber = personsArray
    .filter((data, index) => {
      return data.mobile.num1 === 8806345522;
    })
    .map((data) => {
      return data.name;
    });

  console.log(getMobileNumber);

  return (
    <div>
      <h1>Hello This React Vite </h1>
    </div>
  );
}

export default App;
