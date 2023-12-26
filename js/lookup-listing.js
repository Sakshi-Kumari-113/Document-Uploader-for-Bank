d=
[{"id":7,"title":"accesstype","lookupid":1,"lookupname":"create"},
{"id":8,"title":"accesstype","lookupid":2,"lookupname":"edit"},
{"id":9,"title":"accesstype","lookupid":3,"lookupname":"authorize"},
{"id":10,"title":"branch","lookupid":1,"lookupname":"BKC"},
{"id":11,"title":"DEPARTMENT","lookupid":1,"lookupname":"IT"}];



let docs = document.getElementById("tr1");
for(var i=0; i<d.length ;i++){
    var element=document.createElement('tr');
    element.innerHTML = `<td>${d[i].id}&nbsp&nbsp</td>
    <td>${d[i].title}</td>
    <td>${d[i].lookupid}</td>
    <td>${d[i].lookupname}</td>
   
    <td>&nbsp&nbsp<a href="lookup-update.html"><i class="bi bi-pencil-fill"></i></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="#" onclick="myFunction(this); return false;"><i class="bi bi-trash-fill"></i></a></td>`
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