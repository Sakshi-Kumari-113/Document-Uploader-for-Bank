d=[{"id":54,"orgName":"skin","status":1,"orgLogo":"C:\\Users\\admin\\Desktop\\Node\\server\\upload\\1649225769707-maggie.png"},
{"id":55,"orgName":"haircare","status":1,"orgLogo":"C:\\Users\\admin\\Desktop\\Node\\server\\upload\\1648810461748-dsBuffer.bmp.png"},
{"id":56,"orgName":"haircare","status":1,"orgLogo":"C:\\Users\\admin\\Desktop\\Node\\server\\upload\\1648810684454-dsBuffer.bmp.png"}]



let docs = document.getElementById("tr1");
for(var i=0; i<d.length ;i++){
    var element=document.createElement('tr');
    element.innerHTML = `<td>${d[i].id}&nbsp&nbsp</td>
    <td>${d[i].orgName}</td>
    <td>${d[i].status}</td>
    <td>${d[i].orgLogo}</td>
   
    <td>&nbsp&nbsp<a href="organisation-update.html"><i class="bi bi-pencil-fill"></i></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="#" onclick="myFunction(this); return false;"><i class="bi bi-trash-fill"></i></a></td>`
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