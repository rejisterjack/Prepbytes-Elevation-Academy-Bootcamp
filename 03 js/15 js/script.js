console.log("Working");

// Closures - It is not something that we create manually, instead it is created automatically in certain situations.

const ticketBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`the count of passengers are ${passengerCount}`);
    };
};

const bookie = ticketBooking();//after line 14, fn ticetBookinh has finished its execution  and now ceases to exist.

bookie();//1
bookie();//2
bookie();//3

console.dir(bookie);

// Any fn always has access to the variable environment of the execution context in which the fn was created. 
// So fn Bookie was created in the execution context of ticketBooking and so fn bookie can access the variables of the function ticketBooking even though the later fn(ticketBooking) ceases to exist.

// So even though the E.C. of ticketBooking ceases still fn Bookie can access the passengerCount Variable which is a part of fn ticketBooking...

let f;
const g = function(){
    const a = 23;

    f = function(){
        console.log(a*2);
    };
};

const h = function(){
    const b = 25;

    f = function(){
        console.log(b*2);
    };
};

g();//
f();//46
h();
f();

console.dir(f);


//setTimeout

// setTimeout(function(){
//     console.log("Hello");
// },3000)

// setTimeout((drink1, drink2)=>{
//     console.log(`Here's your drinks ${drink1} and ${drink2} `);
// },2000,
// "Virgin Mojito","Blue Lagoon");


let drinks = ["Virgin Mojito","Blue Lagoon"];
let timer = setTimeout((drink1, drink2)=>{
    console.log(`Here's your drinks ${drink1} and ${drink2} `);
},2000,
...drinks//spread operators
);

if(drinks.includes("Blue Lagoon")){
    clearTimeout(timer);
}

//------------------------------------------------------------
// setTimeout + closures examples

const boardPassengers = (n,wait) =>{
    let groupOfPeople = n/3;

    setTimeout(() => {
        console.log(`The no of passengers are ${n}`);
        console.log(`The no of passengers per group are ${groupOfPeople}`);
    }, wait*1000);
    console.log(`Onboarding all the pasengers in ${wait} seconds`);
}

let groupOfPeople = 25;
boardPassengers(120,3);