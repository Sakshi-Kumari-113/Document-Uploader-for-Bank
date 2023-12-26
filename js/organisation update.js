
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

organisation1={"id":54,"orgName":"skin","orgDescription":"skinPosition","orgBranches":"2","orgDepartments":"1,4","orgNotifications":"1,2","orgSetings":"3,2","status":1,"orgLogo":"C:\\Users\\admin\\Desktop\\Node\\server\\upload\\1649225769707-maggie.png"}
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

let ac = document.getElementById("notiDiv");
for(var key in Notifications) {
    let element=document.createElement('div');
    let child=document.createElement('input');
    element.innerHTML = `<label class="form-check">
                        <input
                          class="form-check-input as"
                          type="checkbox"
						  name = "noti-check"
                          value=${key}
                        />
                        <span class="form-check-label"> ${Notifications[key]} </span>
                      </label>`
    ac.appendChild(element);
   
}




let oname = document.getElementById("organisationName").value=`${organisation1.orgName}`;
let ologo = document.getElementById("organisationLogo").value=`${organisation1.orgLogo}`;

let des = document.getElementById("orgDescription").value=`${organisation1.orgDescription}`;
let stat = document.getElementById("status").value=`${organisation1.status}`;


var checkDept1 = document.getElementsByName("dept-check");
   
		 for(var i=0; i<checkDept1.length ;i++)
		 {
             for(var j=0;j<organisation1.orgDepartments.length;j++)
			if(checkDept1[i].value == organisation1.orgDepartments[j])
			{
				checkDept1[i].checked = true;
			}
		 }

var checkNoti = document.getElementsByName("noti-check");
   
		 for(var i=0; i<checkNoti.length ;i++)
		 {
            
      for(var j=0;j<organisation1.orgNotifications.length;j++)
			if(checkNoti[i].value == organisation1.orgNotifications[j])
			{
				checkNoti[i].checked = true
			}
		 }

var checkBran = document.getElementsByName("branch-check");
   
		 for(var i=0; i<checkBran.length ;i++)
		 {
             for(var j=0;j<organisation1.orgBranches.length;j++)
			if(checkBran[i].value == organisation1.orgBranches[j])
			{
				checkBran[i].checked = true
			}
		 }

var checkSet = document.getElementsByName("seti-check");
   
		 for(var i=0; i<checkSet.length ;i++)
		 {
             for(var j=0;j<organisation1.orgSetings.length;j++)
			if(checkSet[i].value == organisation1.orgSetings[j])
			{
				checkSet[i].checked = true
			}
		 }




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

	
		


    

// Document Name
var organisationName = document.getElementById('organisationName').value;
console.log(organisationName);

// //orgId
// var orgid = document.getElementById('orgid').value;
// console.log(orgid);

//status
var status = document.getElementById('status').value;
console.log(status);

// //uploaded by
// var uploadedBy = document.getElementById('uploadedBy').value;
// console.log(uploadedBy);

// // Uploaded Date
// var uploadedDate = document.getElementById("uploadedDate").value;
// 	 console.log(uploadedDate);
// Document File

//  console.log( documentPath.files[0]);
	  
//Departments
 console.log(checkDept);

//Branches
console.log(checkBranch);

//description
 var description = document.getElementById("orgDescription").value;
	 console.log(description);

// //from Date
// var validFrom = document.getElementById("docValidFromDate").value;
// 	 console.log(validFrom);

// //To Date
// var validTo = document.getElementById("docValidToDate").value;
// 	 console.log(validTo);

// //Language

// var language = $("#language option:selected").text();    //Dropdown


// //Document Type
// var docType =$("#documentType  option:selected").text();    //Dropdown
// console.log(docType);

//Document Notification
// var emailNotification = document.getElementById('emailNotification').value;
// console.log(emailNotification);

//Document Settings
console.log(checkSeti);

// //Document Access
// console.log(checkAccess);


/*-----------------------End Values-----------------*/

/*-----------------------Validation-----------------*/

var validate = false	
// Name
if(organisationName ==""){
  var nameError = document.getElementById('nameError');
  nameError.style.display ="block";
     validate =false;
		  }
      else{
        var nameError = document.getElementById('nameError');
        nameError.style.display ="none";
        validate =true;
       
      }

    //   //orgid
    //   if(orgid ==""){
    //     var orgidError = document.getElementById('orgidError');
    //     orgidError.style.display ="block";
    //        validate =false;
    //             }
    //         else{
    //           var orgidError = document.getElementById('orgidError');
    //           orgidError.style.display ="none";
    //           validate =true;
             
    //         }

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

    //  //uploaded by
    //  if(uploadedBy ==""){
    //     var uploadedByError = document.getElementById('uploadedByError');
    //     uploadedByError.style.display ="block";
    //        validate =false;
    //             }
    //         else{
    //           var uploadedByError = document.getElementById('uploadedByError');
    //           uploadedByError.style.display ="none";
    //           validate =true;
             
    //         }
      

// Document File
if(ologo=="")
  {
    logoError = document.getElementById('logoError');
    logoError.style.display ="block";
  validate =false;
  }
  else{
    var logoError = document.getElementById('logoError');
        logoError.style.display ="none";
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


//notification
if(checkNoti  == "")
  {
    notificationError = document.getElementById('notificationError');
    notificationError.style.display ="block"; 
		  validate= false;
  }
  else{
    var notificationError = document.getElementById('notificationError');
        notificationError.style.display ="none";
    validate =true;
  }

if(validate == true)
{
/*----------------------- End Validation-----------------*/
     let formData = new FormData();
  formData.append("organisationName", organisationName );  
  formData.append("status", status );
//   formData.append("orgid", orgid );       
//   formData.append("uploadedBy", uploadedBy );  
  formData.append("file", ologo);
//   formData.append("uploadedDate",uploadedDate);
  formData.append("departments", checkDept);   //Multiselect
  formData.append("branches", checkBranch);     //Multiselect
  formData.append("description", description); 
//   formData.append("docValidFromDate", validFrom); 
//   formData.append("docValidToDate", validTo); 
//   formData.append("language", language); 
//   formData.append("documentType", docType); 
//   formData.append("emailNotification", emailNotification );  //Multiselect
  formData.append("orgSetings", checkSeti);      //Multiselect
  formData.append("orgNotification", checkNoti);     //Multiselect
	

	
     fetch('http://localhost:3001/document/insert', {
          method: "POST", 
          body: formData
        }); 
        if( organisationName !="" && ologo !="" && checkDept != "" && checkBranch != "" && description != ""  &&   checkSeti  != "" && checkNoti  != ""  && status !="" ) {   
        alert('The file has been updated successfully.');}
    


		}
  else{
    return false
  }

}