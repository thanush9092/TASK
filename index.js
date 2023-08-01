   // check the empty input
   function checkEmptyInput()
   {
       var isEmpty = false,
           fname = document.getElementById("fname").value,
           lname = document.getElementById("lname").value,
           email = document.getElementById("email").value;
           Phone = document.getElementById("Phone").value;
   
       if(fname === ""){
           alert("First Name Connot Be Empty");
           isEmpty = true;
       }
        if(lname === ""){
           alert("Last Name Connot Be Empty");
           isEmpty = true;
       }
        if( !email.match(/^[A-Za-z\._\[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        alert("Email is invalid");
        
        isEmpty = true;
        
    }
    if(Phone === ""){
        alert("phone Connot Be Empty");
        isEmpty = true;
    }
       

       return isEmpty;
   }
   
   // add Row
   function addHtmlTableRow()
   {
       
       if(!checkEmptyInput()){
       var newRow = table.insertRow(table.length),
           cell1 = newRow.insertCell(0),
           cell2 = newRow.insertCell(1),
           cell3 = newRow.insertCell(2),
           cell4 = newRow.insertCell(3),
           fname = document.getElementById("fname").value,
           lname = document.getElementById("lname").value,
           email = document.getElementById("email").value;
           Phone = document.getElementById("Phone").value;
   
       cell1.innerHTML = fname;
       cell2.innerHTML = lname;
       cell3.innerHTML = email;
       cell4.innerHTML = Phone;
       
       selectedRowToInput();
   }
   }
   
//    search
function tableSearch() {
    let input, filter, table, tr, td, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}
// 
