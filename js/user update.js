
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

user1={"id":3,"userName":"bb","password":"salon@123","orgId":2,"email":"bhaerimore210@gmail.com","departments":"1,2","branches":"3,5","icon":"Offer","access":"2,3","status":1}

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


let uname = document.getElementById("userName").value=`${user1.userName}`
let pass1 = document.getElementById("password").value=`${user1.password}`;
let icon1 = document.getElementById("icon").value=`${user1.icon}`;
let stat = document.getElementById("status").value=`${user1.status}`;
let mail1 = document.getElementById("email").value=`${user1.email}`;

var checkoid = document.getElementsByName("one");
   
		 for(var i=0; i<checkoid.length ;i++)
		 {
            
			if(checkoid[i].innerText == user1.orgId)
			{
				checkoid[i].selected=true;
			}
		 }

     
var checkDept1 = document.getElementsByName("dept-check");
   
		 for(var i=0; i<checkDept1.length ;i++)
		 {
             for(var j=0;j<user1.departments.length;j++)
			if(checkDept1[i].value == user1.departments[j])
			{
				checkDept1[i].checked = true;
			}
		 }

var checkAccess1 = document.getElementsByName("access-check");
   
		 for(var i=0; i<checkAccess1.length ;i++)
		 {
            
      for(var j=0;j<user1.access.length;j++)
			if(checkAccess1[i].value == user1.access[j])
			{
				checkAccess1[i].checked = true
			}
		 }

var checkBran = document.getElementsByName("branch-check");
   
		 for(var i=0; i<checkBran.length ;i++)
		 {
             for(var j=0;j<user1.branches.length;j++)
			if(checkBran[i].value == user1.branches[j])
			{
				checkBran[i].checked = true
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

     //e-mail
     var mail=document.getElementById("email").value;
    //password
    var pass =document.getElementById("password").value;
   
   

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
		


// User Name
var userName = document.getElementById('userName').value;
console.log(userName);

// Icon File

var iconFile = document.getElementById('icon').value;
console.log(iconFile);

 
	  
//Departments
 console.log(checkDept);

//Branches
console.log(checkBranch);



//orgid

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
if(iconFile == "")
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
  formData.append("file", iconFile);
  
  formData.append("departments", checkDept);   //Multiselect
  formData.append("branches", checkBranch);     //Multiselect
  formData.append("language", orgId); 
  formData.append("documentAccess", checkAccess);     //Multiselect
	

	
  fetch('http://localhost:3001/document/insert', {
    method: "POST", 
    body: formData
  });  
        if(userName !="" && mail.match(pattern) && pass!="" && pass.length > 8 && pass.length < 32 &&  checkDept != "" && checkBranch != "" && lan1 != 0 && userName.match(username1) && pass.match(/[A-Z]+/) && pass.match(/[a-z]+/) && pass.match(/[0-9]+/) && pass.match(/[@#$%^&*?]+/) && iconFile != "" && checkAccess  != "")
        {
          
         
        
        alert('The file has been uploaded successfully.');}
    


		}
  else{
    return false
  }

}