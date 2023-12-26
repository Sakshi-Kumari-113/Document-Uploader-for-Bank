


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

     //e-mail
     var mail=document.getElementById("email").value;
    //password
    var pass =document.getElementById("password").value;
   
    //confirm password
    var cpass =document.getElementById("confirmPassword").value;

	//Access
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
var userName = document.getElementById('userName').value;
console.log(userName);

// Document File

console.log( icon.files[0]);

 
	  
//Departments
 console.log(checkDept);

//Branches
console.log(checkBranch);



//Language

var orgId = $("#orgId option:selected").text();    //Dropdown

//Document Access
console.log(checkAccess);


/*-----------------------End Values-----------------*/

/*-----------------------Validation-----------------*/

var validate = false	
// Name
var username1= /^[a-zA-Z]+$/;
if(userName ==""){
  var nameError = document.getElementById('nameError');
  nameError.style.display ="block";
     validate =false;
		  }
      else if(userName.match(username1)){
        var nameError = document.getElementById('nameError');
        nameError.style.display ="none";
        validate =true;
      }
     
// Icon File
if(icon.files[0] == null)
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
 
   
   //email
   var pattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   if(mail.match(pattern)){
    validate =true;
    var mailError = document.getElementById('mailError');
        mailError.style.display ="none";
    
        }
        else{
         
          var mailError = document.getElementById('mailError');
          mailError.style.display ="block";
             validate =false;
         
        }

   //password
  //  var ppattern= /^[A-Z]+[a-z]+[0-9]+[@#$%^&*_-]$/;
   if(pass==""){
    passError = document.getElementById('passError');
    passError.style.display ="block";
      validate= false;
  }
  else if(pass.length < 8){
    passError = document.getElementById('passError');
    passError.style.display ="block";
      validate= false;
  }
  else if(pass.length > 32){
    passError = document.getElementById('passError');
    passError.style.display ="block";
      validate= false;
  }
  else if(pass.match(/[A-Z]+/) && pass.match(/[a-z]+/) && pass.match(/[0-9]+/) && pass.match(/[@#$%^&*?]+/)){
    var passError = document.getElementById('passError');
        passError.style.display ="none";
    validate=true;
  }

  //confirm password
  if(cpass=="" || cpass!= pass){
    cpassError = document.getElementById('cpassError');
    cpassError.style.display ="block";
      validate= false;
  }
 
 
  else{
    var cpassError = document.getElementById('cpassError');
        cpassError.style.display ="none";
    validate=true;
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



//Language
var lan1 = $("#orgId option:selected").val();
if(lan1 == 0)
  {
    orgIdError = document.getElementById('orgIdError');
    orgIdError.style.display ="block";

	validate= false;
  }
  else{
    var orgIdError = document.getElementById('orgIdError');
        orgIdError.style.display ="none";
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
  formData.append("userName", userName );           
  formData.append("file", icon.files[0]);
  
  formData.append("departments", checkDept);   //Multiselect
  formData.append("branches", checkBranch);     //Multiselect
  formData.append("language", orgId); 
  formData.append("documentAccess", checkAccess);     //Multiselect
	

	
  fetch('http://localhost:3001/document/insert', {
    method: "POST", 
    body: formData
  });  
        if(userName !="" && mail.match(pattern) && pass!="" && pass.length > 8 && pass.length < 32 && cpass!="" && cpass== pass && checkDept != "" && checkBranch != "" && lan1 != 0 && userName.match(username1) && pass.match(/[A-Z]+/) && pass.match(/[a-z]+/) && pass.match(/[0-9]+/) && pass.match(/[@#$%^&*?]+/) && icon.files[0] != null && checkAccess  != "")
        {
          
         
        
        alert('The file has been uploaded successfully.');}
    


		}
  else{
    return false
  }

}