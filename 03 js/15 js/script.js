// closures: it is not something that we create manually, instead it is created automatically in centain situations.

const ticketBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`the count of passengers are ${passengerCount}`);
  }
}

const bookie = ticketBooking();  //after line 11, fn ticketBoooking has finished its execution and now cases to exist.

bookie();
bookie();
bookie();

// any fn always has access to the variable environment of the execution context in which the function was created.  

// so fn bookie was created in the execution context of ticketBooking and so can access the variables of the functions ticket Booking even though the later fn(ticketBooking) causes to exists

// so even though the execution context of ticket booking ceases still fn Bookie can access the passengerCount variables.

let f;
const g = function(){
  const a = 23;
  f=function(){
    console.log(a*2);
  }
}

const h = function(){
  const b=25;
  f=function(){
    console.log(b*2)
  }
}

g()
f()
h()
f()


const boardPassengers = (n,wait) =>{
  let groupOfPeople = n/3;

  setTimeout(() => {
      console.log(`The no of passengers are ${n}`);
      console.log(`The no of passengers per group are ${groupOfPeople}`);
  }, wait*2000);
  console.log(`Inboarding all the pasengers in ${wait} seconds`);
}

boardPassengers(120,3);
