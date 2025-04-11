
let alldata = []
let nuberOfRows = tbody.children.length;


document.getElementById("output").addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
        let row = e.target.closest("tr"); 
        let id = row.cells[0].textContent; 
        let name = row.cells[1].textContent; 
        console.log("Deleted Row ID:", id, "Name:", name);
        row.remove();
        alldata = alldata.filter(item => item.no !== parseInt(id)); 
    }
});

document.getElementById("output").addEventListener("click", function(e) {
    if (e.target.classList.contains("edit-btn")) {
        if(document.getElementById("name").value != ""){
            
        }
        else{
        let row = e.target.closest("tr");
        let id = row.cells[0].textContent; 
        let name = row.cells[1].textContent;
        // document.getElementById("output").style.display = "none";
        console.log("Edited Row ID:", id, "Name:", name);
        document.getElementById("name").value = row.cells[1].textContent;
        document.getElementById("email").value = row.cells[2].textContent;
        let gender = row.cells[3].textContent;
        if(gender == "Male"){
            document.getElementById("male").checked = true;}
        else{
            document.getElementById("female").checked = true;
        }
        document.getElementById("codingLang").value = row.cells[4].textContent;
        row.remove();
        alldata = alldata.filter(item => item.no !== parseInt(id));
        }
    }
});

document.getElementById("fillForm").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(e.target)
    saveRow();
});

function saveRow() {
    let rowName = document.getElementById("name").value;
    let rowEmail = document.getElementById("email").value;
    let rowGender = "";
    if(document.getElementById("male").checked){
         rowGender = "Male"
    } else{
         rowGender = "Female"
    }
    let rowLanguage = document.getElementById("codingLang").value;
    nuberOfRows++;
    let row = {
        no: nuberOfRows,
        name: rowName,
        email: rowEmail,
        gender: rowGender,
        language: rowLanguage
    }
    alldata.push(row);
    // showEnteredRow(alldata);
    showFullTable(alldata);
    document.getElementById("fillForm").reset();
}

function showFullTable(alldata) {
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = "";
    // document.getElementById("output").style.display = "block";
    for (let i = 0; i < alldata.length; i++) {
        let row = alldata[i];
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td>${row.no}</td>
        <td>${row.name}</td>
        <td>${row.email}</td>
        <td>${row.gender}</td>
        <td>${row.language}</td>
        <td><button class="edit-btn">Edit</button></td>
        <td><button class="delete-btn">Delete</button></td>
        `;
        tbody.append(newRow);
    }
    console.log(alldata);
}