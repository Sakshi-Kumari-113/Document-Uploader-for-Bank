
Branches = 
{ "1":"Mangalore","2":"Mumbai","3":"delhi","4":"delhi","5":"delhi","6":"delhi"}
Department = 
{ "1":"Loan","2":"IT","3":"Technical support","4":"Technical support","5":"Technical support"}
Access = 
{ "1":"Read","2":"Create","3":"Authorise","4":"Delete","5":"Delete","6":"Delete"}
Notifications = 
{"1":"Server down notification","2":"slow network", "3":"New user added","4":"New user added","5":"New user added","6":"New user added","7":"New user added"}
Settings=
{"1": "Settings A", "2":"Settings B", "3":"Settings C", "4":"Settings D", "5":"Settings D", "6":"Settings D", "7":"Settings D"}


let dpt = document.getElementById("deptDiv");
for(var key in Department){
    console.log(key)
    let element=document.createElement('div');
    let child=document.createElement('input');
    element.innerHTML = ` <label class="form-check">
                        <input
                          class="form-check-input bs"
                          type="checkbox"
						  name="dept-check"
                          value=${key}
						  
                        />
                        <span class="form-check-label" > ${Department[key]} </span>
                      </label>`
    dpt.appendChild(element);
}

let br = document.getElementById("branchDiv");
for(var key in Branches) {
    let element=document.createElement('div');
    let child=document.createElement('input');
    element.innerHTML = ` <label class="form-check">
                        <input
                          class="form-check-input bs"
                          type="checkbox"
						  name = "branch-check"
                          value=${key}
                        />
                        <span class="form-check-label"> ${Branches[key]} </span>
                      </label>`
    br.appendChild(element);
   
}
 
let not = document.getElementById("notiDiv");
for(var key in Notifications) {
    let element=document.createElement('div');
    let child=document.createElement('input');
    element.innerHTML = `<label class="form-check">
                        <input
                          class="form-check-input ns"
                          type="checkbox"
                          name = "noti-check"
                          value=${key}
                        />
                        <span class="form-check-label"> ${Notifications[key]} </span>
                      </label>`
    not.appendChild(element);
  
}

let set = document.getElementById("setiDiv");
for(var key in Settings) {
    let element=document.createElement('div');
    let child=document.createElement('input');
    element.innerHTML = `<label class="form-check">
                        <input
                          class="form-check-input ss"
                          type="checkbox"
						  name = "seti-check"
                          value=${key}
                        />
                        <span class="form-check-label"> ${Settings[key]} </span>
                      </label>`
    set.appendChild(element);
  
}

let ac = document.getElementById("accessDiv");
for(var key in Access) {
    let element=document.createElement('div');
    let child=document.createElement('input');
    element.innerHTML = `<label class="form-check">
                        <input
                          class="form-check-input as"
                          type="checkbox"
						  name = "access-check"
                          value=${key}
                        />
                        <span class="form-check-label"> ${Access[key]} </span>
                      </label>`
    ac.appendChild(element);
   
}

//Uploaded Date

let date =document.getElementById('uploadedDate');
let today=new Date();
let day=`${today.getDate() <10 ? "0" :""}${today.getDate()}`;
let month=`${(today.getMonth() +1) < 10 ? "0" : ""}${today.getMonth() + 1}`;
let year= today.getFullYear();
date.textContent=`Uploaded date:  ${day}/${month}/${year}`;


/*------------------------------Values-----------------------------------*/
function validation(){
	// Department
		 var checkDept = [];
		 var checkName = document.getElementsByName("dept-check");
		 for(var i=0; i<checkName.length ;i++)
		 {
			if(checkName[i].checked == true)
			{
			
				checkDept.push(checkName[i].value);
				
			}
		 }

	// Branches
		 var checkBranch = [];
		 var checkName1 = document.getElementsByName("branch-check");
		 for(var i=0; i<checkName1.length ;i++)
		 {
			if(checkName1[i].checked == true)
			{
				checkBranch.push(checkName1[i].value);
				
			}
		 }

    // Notification
		 var checkNoti = [];
		 var checkName2 = document.getElementsByName("noti-check");
		 for(var i=0; i<checkName2.length ;i++)
		 {
			if(checkName2[i].checked == true)
			{
				//alert(checkName2[i].value);
				checkNoti.push(checkName2[i].value);
				
			}
		 }
	// Settings
		 var checkSeti = [];
		 var checkName3 = document.getElementsByName("seti-check");
		 for(var i=0; i<checkName3.length ;i++)
		 {
			if(checkName3[i].checked == true)
			{
			
				checkSeti.push(checkName3[i].value);
				
			}
		 }

	// Access
		var checkAccess = [];
		 var checkName4 = document.getElementsByName("access-check");
		 for(var i=0; i<checkName4.length ;i++)
		 {
			if(checkName4[i].checked == true)
			{
			
				checkAccess.push(checkName4[i].value);
				
			}
		 }
		
// alert("Document Uploaded")

// Document Name
var documentName = document.getElementById('documentName').value;
console.log(documentName);

// Uploaded Date
var uploadedDate = `${day}/${month}/${year}`;
console.log(uploadedDate)
// Document File

 console.log( documentFile.files[0]);
	  
//Departments
 console.log(checkDept);

//Branches
console.log(checkBranch);

//description
 var description = document.getElementById("documentDescription").value;
	 console.log(description);

//from Date
var validFrom = document.getElementById("docValidFromDate").value;
	 console.log(validFrom);

//To Date
var validTo = document.getElementById("docValidToDate").value;
	 console.log(validTo);

//Language

var language = $("#language option:selected").text();    //Dropdown
console.log(language);


//Document Type
var docType =$("#documentType  option:selected").text();    //Dropdown
console.log(docType);

//Document Notification
console.log(checkNoti);

//Document Settings
console.log(checkSeti);

//Document Access
console.log(checkAccess);


/*-----------------------End Values-----------------*/

/*-----------------------Validation-----------------*/

var validate = false	
// Name
if(documentName ==""){
  var nameError = document.getElementById('nameError');
  nameError.style.display ="block";
     validate =false;
		  }
      else{
        var nameError = document.getElementById('nameError');
        nameError.style.display ="none";
        validate =true;
       
      }

// Document File
if(documentFile.files[0] == null)
  {
    filesError = document.getElementById('filesError');
    filesError.style.display ="block";
  validate =false;
  }
  else{
    var filesError = document.getElementById('filesError');
        filesError.style.display ="none";
    validate =true;
  }
   //Departments
if(checkDept == "")
  {
    deptError = document.getElementById('deptError');
    deptError.style.display ="block";
		  validate= false;
  }
  else{
    var deptError = document.getElementById('deptError');
        deptError.style.display ="none";
    validate =true;
  }
//Branches
if(checkBranch == "")
  {
    branchError = document.getElementById('branchError');
    branchError.style.display ="block";
		  validate= false;
  }
  else{
    var branchError = document.getElementById('branchError');
        branchError.style.display ="none";
    validate =true;
  }
//description

  if(description == "")
  {
    descError = document.getElementById('descError');
    descError.style.display ="block";
		  validate= false;
  }
  else{
    var descError = document.getElementById('descError');
        descError.style.display ="none";
    validate =true;
  }
//from Date
if(validFrom  == "")
  {
    validFromError = document.getElementById('validFromError');
    validFromError.style.display ="block";
		  validate= false;
  }
  else{
    var validFromError = document.getElementById('validFromError');
        validFromError.style.display ="none";
    validate =true;
  }

//To Date
if(validTo  == "")
  {
    validToError = document.getElementById('validToError');
    validToError.style.display ="block";
		  validate= false;
  }
  else{
    var validToError = document.getElementById('validToError');
        validToError.style.display ="none";
    validate =true;
  }
//Language
var lan1 = $("#language option:selected").val();
if(lan1 == 0)
  {
    langError = document.getElementById('langError');
    langError.style.display ="block";

	validate= false;
  }
  else{
    var langError = document.getElementById('langError');
        langError.style.display ="none";
    validate =true;
  }
  
//Document Type
var docType1 = $("#documentType option:selected").val();
if(docType1 == 0)
  {
    docTypeError = document.getElementById('docTypeError');
    docTypeError.style.display ="block";
    validate= false;
  }
  else{
    var docTypeError = document.getElementById('docTypeError');
        docTypeError.style.display ="none";
    validate =true;
  }
  

  
//Document Notification
if(checkNoti  == "")
  {
    notiError = document.getElementById('notiError');
    notiError.style.display ="block";
		  validate= false;
  }
  else{
    var notiError = document.getElementById('notiError');
        notiError.style.display ="none";
    validate =true;
  }


//Document Settings
if(checkSeti  == "")
  {
    setError = document.getElementById('setError');
    setError.style.display ="block";
		  validate= false;
  }
  else{
    var setError = document.getElementById('setError');
        setError.style.display ="none";
    validate =true;
  }


//Document Access
if(checkAccess  == "")
  {
    accessError = document.getElementById('accessError');
    accessError.style.display ="block"; 
		  validate= false;
  }
  else{
    var accessError = document.getElementById('accessError');
        accessError.style.display ="none";
    validate =true;
  }

if(validate == true)
{
/*----------------------- End Validation-----------------*/
     let formData = new FormData();
  formData.append("documentName", documentName );           
  formData.append("file", documentFile.files[0]);
  formData.append("uploadedDate",uploadedDate);
  formData.append("departments", checkDept);   //Multiselect
  formData.append("branches", checkBranch);     //Multiselect
  formData.append("description", description); 
  formData.append("docValidFromDate", validFrom); 
  formData.append("docValidToDate", validTo); 
  formData.append("language", language); 
  formData.append("documentType", docType); 
  formData.append("emailNotification", checkNoti);   //Multiselect
  formData.append("documentSetings", checkSeti);      //Multiselect
  formData.append("documentAccess", checkAccess);     //Multiselect
	

	
     fetch('http://localhost:3001/document/insert', {
          method: "POST", 
          body: formData
        }); 
        if(documentName !="" && documentFile.files[0] != null && checkDept != "" && checkBranch != "" && description != "" && validFrom  != "" && validTo  != "" && lan1 != 0 && docType1 != 0 && checkNoti  != "" && checkSeti  != "" && checkAccess  != "") {   
        alert('The file has been uploaded successfully.');}
    


		}
  else{
    return false
  }

}