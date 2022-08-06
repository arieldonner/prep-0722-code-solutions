const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  hobby: 'playing video games'
};

console.log('The person is: ', person);

const fullName = person.firstName + ' ' + person.lastName;

console.log('The full name is: ', fullName);

person.job = 'software developer';

console.log("The person's job: ", person.job);

person.previousJob = 'teacher';

console.log("The person's previous job: ", person.previousJob);

console.log('The complete person object: ', person);
