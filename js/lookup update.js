lookup1={"id":7,"title":"accesstype","lookupid":1,"lookupname":"create","orgid":"1"}



// let tit = document.getElementById("title").value=`${lookup1.title}`;
let lid = document.getElementById("lookupId").value=`${lookup1.lookupid}`;
let lname = document.getElementById("lookupName").value=`${lookup1.lookupname}`;
let oid = document.getElementById("orgid").value=`${lookup1.orgid}`;
var checktit = document.getElementsByName("one");
   
		 for(var i=0; i<checktit.length ;i++)
		 {
            
			if(checktit[i].innerText == lookup1.title)
			{
				checktit[i].selected=true;
			}
		 }

/*------------------------------Values-----------------------------------*/
function validation(){    

// title
var title = $("#title option:selected").text(); //Dropdown

// lookup Id
var lookupId = document.getElementById("lookupId").value;
console.log(lookupId);

// lookup name
var lookupName = document.getElementById("lookupName").value;
console.log(lookupName);



/*-----------------------End Values-----------------*/

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

  //orgid
   if (oid == "") {
    var orgidError = document.getElementById("orgidError");
    orgidError.style.display = "block";
    validate = false;
  } else {
    var orgidError = document.getElementById("orgidError");
    orgidError.style.display = "none";
    validate = true;
  }

  if (validate == true) {
    /*----------------------- End Validation-----------------*/
    let formData = new FormData();
    formData.append("title", title);
    formData.append("lookupId", lookupId);
    formData.append("lookupName", lookupName);
    formData.append("oid", oid);

    fetch("http://localhost:3001/document/insert", {
      method: "POST",
      body: formData,
    });
    if (title1 != 0 && lookupId != "" && lookupName != "" && oid != "") {
      alert("The file has been uploaded successfully.");
    }
  } else {
    return false;
  }
}
