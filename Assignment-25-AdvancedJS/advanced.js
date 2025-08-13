
// 1️⃣ Callback Example (simulate file reading)
function readDataCallback(callback) {
    setTimeout(() => {
        callback("📄 Data loaded using Callback!");
    }, 1000);
}

// 2️⃣ Promise Example
function readDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("📄 Data loaded using Promise!");
        }, 1000);
    });
}

// 3️⃣ Async/Await Example
async function readDataAsync() {
    let data = await readDataPromise();
    console.log(data);
}

// 4️⃣ setTimeout Example
setTimeout(() => {
    console.log("⏳ setTimeout: Runs after 2 seconds");
}, 2000);

// 5️⃣ setInterval Example
let counter = 0;
let timer = setInterval(() => {
    counter++;
    console.log(`⏰ setInterval: Tick ${counter}`);
    if (counter >= 3) {
        clearInterval(timer);
        console.log("🛑 Interval stopped");
    }
}, 1000);

// Run examples
readDataCallback((data) => console.log(data));
readDataPromise().then(data => console.log(data));
readDataAsync();


