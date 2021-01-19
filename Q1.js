let email = "suryavanshi.r12@gmail.com";
let splitedEmail = email.split("@");
let email1 = splitedEmail[0];
let splitedEmail1 = email1.split("");
let splitedEmail1Length = splitedEmail1.length;
let starredEmail = null;
for (let i = 2; i < splitedEmail1Length - 1; i++) {
  starredEmail = splitedEmail1.splice(i, 1, "*");
}
let newEmail = splitedEmail1.join("");
let joinMail = newEmail + "@" + splitedEmail[1].toString();
console.log(joinMail);
