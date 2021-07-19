var student = {
  name:"Shreya",
  class: 7,
  roll_number: 17,
  favorite_subject: "Science",
  marks:[100,95,98,100],
};












function setup() {
  createCanvas(400, 400);
  console.log(student.name);
  console.log(student.class);
  console.log(student.roll_number);
  console.log(student.favorite_subject);
  console.log(student.marks);
}

function draw() {
  background(220);
}