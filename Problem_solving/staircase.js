function staircase(n) {
    // Write your code here
    for (var i = 1; i <= n; i++) {
        let char = '#'
        let space = " "
        console.log(space.repeat(n - i) + char.repeat(i))
    }
}

staircase(6)

//DONE