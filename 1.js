function solution(S, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const idx = days.findIndex((days) => {
        return days === S
    })

    return days[(idx+K) % days.length]
}
    

console.log(solution('Wed', 2)) // Fri
console.log(solution('Sat', 23)) // Mon