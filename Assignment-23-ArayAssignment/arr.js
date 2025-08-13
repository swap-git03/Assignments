// 1. To-Do List Manager
let tasks = [];
function addTask() {
    let input = document.getElementById("todoInput");
    if (input.value.trim() !== "") {
        tasks.push(input.value);
        input.value = "";
        displayTasks();
    }
}
function displayTasks() {
    let list = document.getElementById("todoList");
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <span class="delete" onclick="deleteTask(${index})">X</span>`;
        list.appendChild(li);
    });
}
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
function clearTasks() {
    tasks = [];
    displayTasks();
}

// 2. Student Marks Calculator
let marks = [];
function addMarks() {
    let input = document.getElementById("marksInput");
    if (input.value) {
        marks.push(parseFloat(input.value));
        input.value = "";
    }
}
function calculateMarks() {
    if (marks.length > 0) {
        let avg = (marks.reduce((a, b) => a + b, 0) / marks.length).toFixed(2);
        let max = Math.max(...marks);
        let min = Math.min(...marks);
        document.getElementById("marksResult").innerText =
            `Average: ${avg}, Max: ${max}, Min: ${min}`;
    }
}
function resetMarks() {
    marks = [];
    document.getElementById("marksResult").innerText = "";
}

// 3. Search in an Array
let searchArr = [10, 20, 30, 40, 50, "Alice", "Bob"];
document.getElementById("searchArrayDisplay").innerText = `Array: ${searchArr.join(", ")}`;
function searchArray() {
    let val = document.getElementById("searchInput").value;
    let result = document.getElementById("searchResult");
    if (searchArr.includes(isNaN(val) ? val : Number(val))) {
        result.innerText = `${val} Found!`;
    } else {
        result.innerText = "Not Found";
    }
}

// 4. Filter Even and Odd Numbers
let numArr = [];
function addNumber() {
    let num = document.getElementById("numberInput").value;
    if (num) {
        numArr.push(parseInt(num));
        document.getElementById("numberInput").value = "";
    }
}
function showEven() {
    document.getElementById("evenNumbers").innerText = "Even: " + numArr.filter(n => n % 2 === 0).join(", ");
}
function showOdd() {
    document.getElementById("oddNumbers").innerText = "Odd: " + numArr.filter(n => n % 2 !== 0).join(", ");
}
function clearNumbers() {
    numArr = [];
    document.getElementById("evenNumbers").innerText = "";
    document.getElementById("oddNumbers").innerText = "";
}

// 5. Sort Names Alphabetically
let namesArr = [];
function addName() {
    let name = document.getElementById("nameInput").value.trim();
    if (name) {
        namesArr.push(name);
        document.getElementById("nameInput").value = "";
        displayNames();
    }
}
function sortNames() {
    namesArr.sort();
    displayNames();
}
function resetNames() {
    namesArr = [];
    displayNames();
}
function displayNames() {
    let list = document.getElementById("namesList");
    list.innerHTML = "";
    namesArr.forEach(name => {
        let li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
    });
}
