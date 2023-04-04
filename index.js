const drivers =['Bob', 'Alice', 'Charlie', 'Dave'];

const result = returnFirstTwoDrivers(drivers);
console.log(result);

const returnFirstTwoDrivers = (drivers)=>{return drivers.splice(0,2)}
const returnFirstTwoDrivers2 = (drivers)=>{return drivers.splice(-2)}
  
  const drivers2 =['Bob', 'Alice', 'Charlie', 'Dave'];
  const result2 = returnLastTwoDrivers(drivers);
  console.log(result);

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  console.log(selectingDrivers[0](drivers)); 

  console.log(selectingDrivers[1](drivers)); 

  console.log(selectingDrivers[0](drivers));

  console.log(selectingDrivers[1](drivers));

  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  const fareDoubler = createFareMultiplier(2);
  console.log(fareDoubler(10));
  
  const fareTripler = createFareMultiplier(3);
  console.log(fareTripler(10));

  const fareQuadrupler = createFareMultiplier(4);
  console.log(fareQuadrupler(10))

function fareDoubler2(fare) {
    return createFareMultiplier(2)(fare);
  }
  
  console.log(fareDoubler(10));


function doubleFare(fare) {
  return fare * 2;
}
function fareDoubler3(fare) {
  return doubleFare(fare);
}

   function tripleFare(fare) {
    return fare * 3;
  }
  function fareTripler2(fare) {
    return tripleFare(fare);
  }

  function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
  }
  
  function returnFirstTwoDrivers3(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }