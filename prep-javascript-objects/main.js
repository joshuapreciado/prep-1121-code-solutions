var person = {
  firstname: 'josh', lastname: 'preciado', hobby: 'soccer', job: 'coder', previousJob: 'manager'

};
console.log(person);
var legit = person.firstname;
var test = person.lastname;
console.log("The person's name is:", '\n', legit, test);
var secondtest = person.job;
console.log("The person's current job", '\n', 'is:', secondtest);
var thirdtest = person.previousJob;
console.log("The person's previous", '\n', 'job is:', thirdtest);
console.log(person);
