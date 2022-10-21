const employees = []

employees.push({
    "name": "soukaina",
    "salary": 5000,
    "id": 1001
})

const lol = {
    "name": "lol",
    "salary": 9000,
    "id": 1002
}

employees.push(lol)

employees.push({
    "name": "bob",
    "salary": 2000,
    "id": 1003
})

console.log(JSON.stringify(employees))