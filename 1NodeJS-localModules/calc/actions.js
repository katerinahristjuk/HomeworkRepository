function add(x, y) {
    return x + y
}

function sub(x, y) {
    return x - y
}

function mult(x, y) {
    return x * y
}

function div(x, y) {
    return x / y
}

function pow(x, y) {
    return x ^ y
}

function calc(x, y, type) {
    if (type === "+") {
        return add(x, y);
    } else if (type === "-") {
        return sub(x, y);
    } else if (type === "*") {
        return mult(x, y)
    } else if (type === "/") {
        return div(x, y)
    } else if (type === "^") {
        return pow(x, y)
    } else {
        console.log("invalid operator!")
    }

}

module.exports.calc = calc;