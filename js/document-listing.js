d=[{"id":34,"documentName":"Term Deposits - Interest calculation methodology","documentType":".pdf","language":"English","docValidFromDate":"2022-04-11T18:30:00.000Z","docValidToDate":"2022-04-20T18:30:00.000Z"},

{"id":35,"documentName":"Design and security features of all the bank notes - 50/100/200/500/2000","documentType":".pdf","language":"English","docValidFromDate":"2022-04-11T18:30:00.000Z","docValidToDate":"2022-04-28T18:30:00.000Z"},

{"id":36,"documentName":"Schedule of Charges - All Deposit and Asset account variants","documentType":".pdf","language":"Kannada","docValidFromDate":"2022-04-11T18:30:00.000Z","docValidToDate":"2022-04-20T18:30:00.000Z"},

{"id":37,"documentName":"FOREX Rates","documentType":".pdf","language":"English","docValidFromDate":"2022-04-12T18:30:00.000Z","docValidToDate":"2022-04-21T18:30:00.000Z"}]

// console.log(<i class="bi bi-trash-fill"></i>)

let docs = document.getElementById("tr1");
for(var i=0; i<d.length ;i++){
    var element=document.createElement('tr');
    element.innerHTML = `<td>${d[i].id}&nbsp&nbsp</td>
    <td>${d[i].documentName}</td>
    <td>${d[i].documentType}</td>
    <td>${d[i].language}</td>
    <td>${d[i].docValidFromDate}</td>
    <td>${d[i].docValidToDate}</td>
    <td>&nbsp&nbsp<a href="document update.html"><i class="bi bi-pencil-fill"></i></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="#" onclick="myFunction(this); return false;"><i class="bi bi-trash-fill"></i></a></td>`
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