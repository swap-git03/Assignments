// 1. Square of Asterisks
function printSquare(n) {
    for (let i = 0; i < n; i++) {
        console.log("* ".repeat(n));
    }
}

// 2. Right-Angled Triangle
function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log("* ".repeat(i));
    }
}

// 3. Inverted Right-Angled Triangle
function printInvertedTriangle(n) {
    for (let i = n; i >= 1; i--) {
        console.log("* ".repeat(i));
    }
}

// 4. Hollow Square
function printHollowSquare(n) {
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) {
            console.log("* ".repeat(n));
        } else {
            console.log("* " + "  ".repeat(n - 2) + "*");
        }
    }
}

// 5. Pyramid
function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat(n - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

// 6. Inverted Pyramid
function printInvertedPyramid(n) {
    for (let i = n; i >= 1; i--) {
        let spaces = " ".repeat(n - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

// 7. Diamond
function printDiamond(n) {
    printPyramid(n);
    for (let i = n - 1; i >= 1; i--) {
        let spaces = " ".repeat(n - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

// 8. Hollow Right-Angled Triangle
function printHollowTriangle(n) {
    for (let i = 1; i <= n; i++) {
        if (i === 1 || i === n) {
            console.log("* ".repeat(i));
        } else {
            console.log("* " + "  ".repeat(i - 2) + "*");
        }
    }
}

// 9. Hollow Inverted Triangle
function printHollowInvertedTriangle(n) {
    for (let i = n; i >= 1; i--) {
        if (i === n || i === 1) {
            console.log("* ".repeat(i));
        } else {
            console.log("* " + "  ".repeat(i - 2) + "*");
        }
    }
}

// 10. Number Pyramid
function printNumberPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat(n - i);
        let nums = "";
        for (let j = 1; j <= i; j++) nums += j + " ";
        for (let j = i - 1; j >= 1; j--) nums += j + " ";
        console.log(spaces + nums.trim());
    }
}

// Example calls:
printSquare(5);
console.log("\n");
printTriangle(5);
console.log("\n");
printInvertedTriangle(5);
console.log("\n");
printHollowSquare(5);
console.log("\n");
printPyramid(5);
console.log("\n");
printInvertedPyramid(5);
console.log("\n");
printDiamond(5);
console.log("\n");
printHollowTriangle(5);
console.log("\n");
printHollowInvertedTriangle(5);
console.log("\n");
printNumberPyramid(5);
