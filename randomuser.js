const img = document.getElementById("img");
const name = document.getElementById("name");
const age = document.getElementById("age");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const loc = document.getElementById("loc");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click",() =>{
    getuserInfo();
})

async function getuserInfo() {
    const response = await fetch("https://randomuser.me/api/");
    const result = await response.json();
    console.log(result);
    setUserInfo(result);    
}
function setUserInfo(result){
    img.src = result.results[0].picture.large;
    name.textContent = result.results[0].name.first +" "+ result.results[0].name.last;
    age.textContent = result.results[0].dob.age;
    dob.textContent = result.results[0].dob.date.split("T")[0];
    gender.textContent = result.results[0].gender;
    email.textContent = result.results[0].email;
    phoneNumber.textContent = result.results[0].phone;
    loc.textContent = result.results[0].location.city + "," + result.results[0].location.country;

}