

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



/*------------------------------Values-----------------------------------*/
function validation(){
	// Department
		 var checkDept = [];
		 var checkName = document.getElementsByName("dept-check");
     console.log(checkName)
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

	

// organisation Name
var orgName = document.getElementById('orgName').value;
console.log(orgName);


// Document File

 console.log( orgLogo.files[0]);
	  
//Departments
 console.log(checkDept);

//Branches
console.log(checkBranch);

//description
 var description = document.getElementById("orgDescription").value;
	 console.log(description);



//Document Notification
console.log(checkNoti);

//Document Settings
console.log(checkSeti);

//*-----------------------End Values-----------------*/

/*-----------------------Validation-----------------*/

var validate = false	
// Name
if(orgName ==""){
  var nameError = document.getElementById('nameError');
  nameError.style.display ="block";
     validate =false;
		  }
      else{
        var nameError = document.getElementById('nameError');
        nameError.style.display ="none";
        validate =true;
       
      }

// logo File
if(orgLogo.files[0] == null)
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

  

  
// Notification
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


// Settings
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



if(validate == true)
{
/*----------------------- End Validation-----------------*/
     let formData = new FormData();
  formData.append("orgName", orgName );           
  formData.append("file", orgLogo.files[0]);
  
  formData.append("departments", checkDept);   //Multiselect
  formData.append("branches", checkBranch);     //Multiselect
  formData.append("description", description); 
  
  formData.append("emailNotification", checkNoti);   //Multiselect
  formData.append("documentSetings", checkSeti);      //Multiselect
  
	

	
  fetch('http://localhost:3001/document/insert', {
    method: "POST", 
    body: formData
  }); 
        if(orgName !="" && orgLogo.files[0] != null && checkDept != "" && checkBranch != "" && description != "" &&  checkNoti  != "" && checkSeti  != "") {   
          alert('The file has been uploaded successfully.');}
    


		}
  else{
    return false
  }

}