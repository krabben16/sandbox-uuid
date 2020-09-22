const { v4: uuidv4 } = require("uuid")
const LOOP_COUNT = 10

let i = 0
while (i < LOOP_COUNT) {
  console.log(uuidv4())
  i++
}
