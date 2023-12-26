d=[{"id":1,"userName":"bharti","email":"bhaeri2@gmail.com","status":1},
{"id":2,"userName":"bb","email":"bhaerimore210@gmail.com","status":1},
{"id":3,"userName":"bb","email":"bhaerimore210@gmail.com","status":1}]




let docs = document.getElementById("tr1");
for(var i=0; i<d.length ;i++){
    var element=document.createElement('tr');
    element.innerHTML = `<td>${d[i].id}&nbsp&nbsp</td>
    <td>${d[i].userName}</td>
    <td>${d[i].email}</td>
    <td>${d[i].status}</td>
    <td>&nbsp&nbsp<a href="user-update.html"><i class="bi bi-pencil-fill"></i></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="#" onclick="myFunction(this); return false;"><i class="bi bi-trash-fill"></i></a></td>`
    docs.appendChild(element);}
    function myFunction(o){
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this  file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                var p=o.parentNode.parentNode;
            p.parentNode.removeChild(p);
              swal("Your file has been deleted!",
               {
                icon: "success",
              });
            } else {
              swal("Your  file is safe!");
            }
          });
       
    }