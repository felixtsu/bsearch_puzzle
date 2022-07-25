bsearch.solvePuzzle(function (weights, target) {
    lower = 0
    upper = bsearch.size() - 1
    while (lower <= upper) {
        index = Math.floor((lower + upper) / 2)
        currentNo = bsearch.at(index)
        if (currentNo == target) {
            bsearch.submitAnswer(index)
        } else if (currentNo < target) {
            lower = index + 1
        } else {
            upper = index - 1
        }
        index = Math.floor((lower + upper) / 2)
    }
    bsearch.submitAnswer(index)
})
let currentNo = 0
let index = 0
let upper = 0
let lower = 0
bsearch.startGame()
