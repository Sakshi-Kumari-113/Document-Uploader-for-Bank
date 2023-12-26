
var t1 = document.getElementById("1");
var t2 = document.getElementById("2");
var t3 = document.getElementById("3");
var t4 = document.getElementById("4");
var t5 = document.getElementById("5");
function abc() {
  if (t1.selected) {
    idContent = document.getElementById("lookupId");
    idContent.innerText = "1";
  }
  if (t2.selected) {
    idContent = document.getElementById("lookupId");
    idContent.innerText = "2";
  }
  if (t3.selected) {
    idContent = document.getElementById("lookupId");
    idContent.innerText = "3";
  }
  if (t4.selected) {
    idContent = document.getElementById("lookupId");
    idContent.innerText = "4";
  }
  if (t5.selected) {
    idContent = document.getElementById("lookupId");
    idContent.innerText = "5";
  }
}


// /*------------------------------Values-----------------------------------*/
function validation() {
  // title
  var title = $("#title option:selected").text(); //Dropdown

  // lookup Id
  var lookupId = document.getElementById("lookupId").value;
  console.log(lookupId);

  // lookup name
  var lookupName = document.getElementById("lookupName").value;
  console.log(lookupName);

  //*-----------------------End Values-----------------*/

  /*-----------------------Validation-----------------*/

  var validate = false;
  // title
  var title1 = $("#title option:selected").val();
  if (title1 == 0) {
    titleError = document.getElementById("titleError");
    titleError.style.display = "block";

    validate = false;
  } else {
    var titleError = document.getElementById("titleError");
    titleError.style.display = "none";
    validate = true;
  }
  // lookup Id
  if (lookupId == "") {
    var lookupIdError = document.getElementById("lookupIdError");
    lookupIdError.style.display = "block";
    validate = false;
  } else {
    var lookupIdError = document.getElementById("lookupIdError");
    lookupIdError.style.display = "none";
    validate = true;
  }
  // lookup name
  if (lookupName == "") {
    var lookupNameError = document.getElementById("lookupNameError");
    lookupNameError.style.display = "block";
    validate = false;
  } else {
    var lookupNameError = document.getElementById("lookupNameError");
    lookupNameError.style.display = "none";
    validate = true;
  }

  if (validate == true) {
    /*----------------------- End Validation-----------------*/
    let formData = new FormData();
    formData.append("title", title);
    formData.append("lookupId", lookupId);
    formData.append("lookupName", lookupName);

    fetch("http://localhost:3001/document/insert", {
      method: "POST",
      body: formData,
    });
    if (title1 != 0 && lookupId != "" && lookupName != "") {
      alert("The file has been uploaded successfully.");
    }
  } else {
    return false;
  }
}
