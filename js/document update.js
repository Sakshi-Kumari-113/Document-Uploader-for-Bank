
Branches = 
{ "1":"Mangalore","2":"Mumbai","3":"delhi","4":"delhi","5":"delhi","6":"delhi"}
Department = 
{ "1":"Loan","2":"IT","3":"Technical support","4":"Technical support1","5":"Technical support2"}
Access = 
{ "1":"Read","2":"Create","3":"Authorise","4":"Delete","5":"Delete","6":"Delete"}
Notifications = 
{"1":"Server down notification","2":"slow network", "3":"New user added","4":"New user added","5":"New user added","6":"New user added","7":"New user added"}
Settings=
{"1": "Settings A", "2":"Settings B", "3":"Settings C", "4":"Settings D", "5":"Settings D", "6":"Settings D", "7":"Settings D"}

document1={"id":34,"orgid":3,"documentName":"Term Deposits - Interest calculation methodology","documentType":".pdf","documentPath":"document\\1649763782280-Bank1_en.pdf","departments":"2,3","branches":"1,2","emailNotification":2,"uploadedDate":"2022-04-11T23:43:02.000Z","uploadedBy":2,"documentDescription":"DEMO DOC1","documentSetings":"1,2","status":3,"language":"English","documentAccess":"1,2","docValidFromDate":"2022-04-11T18:30:00","docValidToDate":"2022-04-20T18:30:00","deleteStatus":0}

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

// Uploaded Date
let idContent = document.getElementById("uploadedDate");
    idContent.innerText = document1.uploadedDate;

let orgid1 = document.getElementById("orgid").value=`${document1.orgid}`
let dname = document.getElementById("documentName").value=`${document1.documentName}`
// let dtype=document.getElementById("documentType").value=`${document1.documentType}`
// console.log(dtype)
// var dtype = document.getElementById("documentType").value="d"

let enoti = document.getElementById("emailNotification").value=`${document1.emailNotification}`;
let uby = document.getElementById("uploadedBy").value=`${document1.uploadedBy}`;
let des = document.getElementById("documentDescription").value=`${document1.documentDescription}`;
let stat = document.getElementById("status").value=`${document1.status}`;
let vfdate = document.getElementById("docValidFromDate").value=`${document1.docValidFromDate}`;
let vtdate = document.getElementById("docValidToDate").value=`${document1.docValidToDate}`;
let dpath = document.getElementById("documentPath").value=`${document1.documentPath}`;
// console.log(document.getElementById("docValidToDate"))
// let vfdate1 = document.getElementById("j").value=`${document1.docValidFromDate}`;
var checklang = document.getElementsByName("op");
   
		 for(var i=0; i<checklang.length ;i++)
		 {
            
			if(checklang[i].innerText == document1.language)
			{
				checklang[i].selected=true;
			}
		 }

     var checkdtype = document.getElementsByName("op1");
   
		 for(var i=0; i<checkdtype.length ;i++)
		 {
            
			if(checkdtype[i].innerText == document1.documentType)
			{
				checkdtype[i].selected=true;
			}
		 }

var checkDept1 = document.getElementsByName("dept-check");
   
		 for(var i=0; i<checkDept1.length ;i++)
		 {
             for(var j=0;j<document1.departments.length;j++)
			if(checkDept1[i].value == document1.departments[j])
			{
				checkDept1[i].checked = true;
			}
		 }

var checkAccess = document.getElementsByName("access-check");
   
		 for(var i=0; i<checkAccess.length ;i++)
		 {
            
      for(var j=0;j<document1.documentAccess.length;j++)
			if(checkAccess[i].value == document1.documentAccess[j])
			{
				checkAccess[i].checked = true
			}
		 }

var checkBran = document.getElementsByName("branch-check");
   
		 for(var i=0; i<checkBran.length ;i++)
		 {
             for(var j=0;j<document1.branches.length;j++)
			if(checkBran[i].value == document1.branches[j])
			{
				checkBran[i].checked = true
			}
		 }

var checkSet = document.getElementsByName("seti-check");
   
		 for(var i=0; i<checkSet.length ;i++)
		 {
             for(var j=0;j<document1.documentSetings.length;j++)
			if(checkSet[i].value == document1.documentSetings[j])
			{
				checkSet[i].checked = true
			}
		 }

//      var language = $("#language option:selected").text();    //Dropdown
// console.log(language);



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
		


    

// Document Name
var documentName = document.getElementById('documentName').value;
console.log(documentName);

//orgId
var orgid = document.getElementById('orgid').value;
console.log(orgid);

//status
var status = document.getElementById('status').value;
console.log(status);

//uploaded by
var uploadedBy = document.getElementById('uploadedBy').value;
console.log(uploadedBy);

// Uploaded Date
var uploadedDate = document.getElementById("uploadedDate").value;
	 console.log(uploadedDate);
// Document File

//  console.log( documentPath.files[0]);
	  
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


//Document Type
var docType =$("#documentType  option:selected").text();    //Dropdown
console.log(docType);

//Document Notification
var emailNotification = document.getElementById('emailNotification').value;
console.log(emailNotification);

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

      //orgid
      if(orgid ==""){
        var orgidError = document.getElementById('orgidError');
        orgidError.style.display ="block";
           validate =false;
                }
            else{
              var orgidError = document.getElementById('orgidError');
              orgidError.style.display ="none";
              validate =true;
             
            }

            //status
      if(status ==""){
        var statusError = document.getElementById('statusError');
        statusError.style.display ="block";
           validate =false;
                }
            else{
              var statusError = document.getElementById('statusError');
              statusError.style.display ="none";
              validate =true;
             
            }

     //uploaded by
     if(uploadedBy ==""){
        var uploadedByError = document.getElementById('uploadedByError');
        uploadedByError.style.display ="block";
           validate =false;
                }
            else{
              var uploadedByError = document.getElementById('uploadedByError');
              uploadedByError.style.display ="none";
              validate =true;
             
            }
      

// Document File
if(dpath=="")
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
if(emailNotification ==""){
    var emailNotificationError = document.getElementById('emailNotificationError');
    emailNotificationError.style.display ="block";
       validate =false;
            }
        else{
          var emailNotificationError = document.getElementById('emailNotificationError');
          emailNotificationError.style.display ="none";
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
  formData.append("status", status );
  formData.append("orgid", orgid );       
  formData.append("uploadedBy", uploadedBy );  
  formData.append("file", dpath);
  formData.append("uploadedDate",uploadedDate);
  formData.append("departments", checkDept);   //Multiselect
  formData.append("branches", checkBranch);     //Multiselect
  formData.append("description", description); 
  formData.append("docValidFromDate", validFrom); 
  formData.append("docValidToDate", validTo); 
  formData.append("language", language); 
  formData.append("documentType", docType); 
  formData.append("emailNotification", emailNotification );  //Multiselect
  formData.append("documentSetings", checkSeti);      //Multiselect
  formData.append("documentAccess", checkAccess);     //Multiselect
	

	
     fetch('http://localhost:3001/document/insert', {
          method: "POST", 
          body: formData
        }); 
        if(documentName !="" && dpath !="" && checkDept != "" && checkBranch != "" && description != "" && validFrom  != "" && validTo  != "" && lan1 != 0 && docType1 != 0 &&  checkSeti  != "" && checkAccess  != "" && orgid !="" && status !="" && uploadedBy !="" && emailNotification !="" && uploadedDate  == "") {   
        alert('The file has been updated successfully.');}
    


		}
  else{
    return false
  }

}