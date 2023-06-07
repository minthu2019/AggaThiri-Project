
  const FormTag = document.querySelector("#Form");

  FormTag.addEventListener("submit", (e) => {
  e.preventDefault();
 ;

  const nameInput = document.querySelector("#nameInput input");
  const fatherNameInput = document.querySelector("#fatherNameInput input");
  const hobbyInput = document.querySelector("#hobbyInput input");
  const classInput = document.querySelector("#classInput input");
  const ageInput = document.querySelector("#ageInput input");
  const emailInput = document.querySelector("#emailInput input");

  console.log(nameInput.value);
  console.log(fatherNameInput.value);
  console.log(hobbyInput.value);
  console.log(classInput.value);
  console.log(ageInput.value);
  console.log(emailInput.value);




});
