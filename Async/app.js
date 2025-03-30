//async await >> promise chains >>callback hell

//Synchronous
console.log("one");
console.log("two");


//Asynchronous
function hello() {
    console.log("hello");
}
setTimeout(hello, 2000); //it is used to execute a function; 2sec --> 2000ms

setTimeout(() => {
    console.log("hello1");
}, 4000);

console.log("three");
console.log("four");

// Callbacks --> A callback is a function passed as an argument to another function.

// Synchronous callback-->
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

// calculator(1,2,sum);

calculator(8, 6, (a, b) => {
    console.log(a + b);
});

// Asynchronous callback-->
const hello1 = () => {
    console.log("hello");
};
setTimeout(hello1, 3000);

//Callback Hell:Nested callbacks stacked below one another forming a pyramid structure.
//nesting

function getData(dataId, getNextData) {
    //console.log("data",dataId);
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// Callback Hell
getData(1, () => {
    console.log("getting data2...");
    getData(2, () => {
        console.log("getting data3...");
        getData(3, () => {
            console.log("getting data4...");
            getData(4);
        });
    });
});

/*Promises(To reduce callback hell)
Promise is for "eventual" completion of task.It is an object in js.It is a solution to callback hell.

let promise = new Promise((resolve,reject) => {...})
*/
/*let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
    // reject("some error occurred");
});*/

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success");
        // reject("network error");

    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled", res);
});

promise.catch((err) => {
    console.log("rejected", err);
});

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}

//promise chain
console.log("getting data1...");
getData(1)
    .then((res) => {
        console.log("getting data2...");
        return getData(2);
    })
    .then((res) => {
        console.log("getting data3...");
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });
/*function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    })
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    })
}
console.log("fetching data1...");
asyncFunc1().then((res) => {
console.log("fetching data2...");
asyncFunc2().then((res) => {});
});
*/
