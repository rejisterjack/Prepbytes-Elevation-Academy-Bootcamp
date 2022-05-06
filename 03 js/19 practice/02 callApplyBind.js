var employee1 = {firstName : "rupam", lastName : "das"}
var employee2 = {
  firstName:"piumita",
  lastName:"sarkar"
}

function invite(greeting1,greeting2){
  console.log(greeting1+" "+this.firstName+" "+this.lastName+" "+greeting2);
}
invite.call(employee1,"hello","how are you")
invite.apply(employee1,["hello","how are you"])
var inviteEmployee = invite.bind(employee1)
inviteEmployee("hello","how are you")