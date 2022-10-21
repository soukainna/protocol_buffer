const employees = []
const fs = require("fs")


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

fs.writeFileSync("jsonData.json", JSON.stringify(employees))
//console.log(JSON.stringify(employees))