// log "Red" → "Green" → "Yellow" with a delay between each. Using setTimeout only, no loops!

function colors() {
    setTimeout(() => console.log("Red"), 1000)
    setTimeout(() => console.log("Green"), 2000)
    setTimeout(() => console.log("Yellow"), 3000)
}
colors()