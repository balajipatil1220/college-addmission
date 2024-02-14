class studentDetails {
    constructor(sName, fName, dob, cName, per, address, branch) {
        this.sName = sName;
        this.fName = fName;
        this.dob = dob;
        this.cName = cName;
        this.per = per;
        this.address = address;
        this.branch = branch;
    }
}
showDetails();

function deleteStu(index) {
    if (confirm('Do you Want to Delete')) {

        let stuDetails = localStorage.getItem("stuDetails");

        if (stuDetails == null) {
            stuArr = [];

        }
        else {
            stuArr = JSON.parse(stuDetails);

        }
        stuArr.splice(index, 1);

        localStorage.setItem('stuDetails', JSON.stringify(stuArr));
        console.log(stuArr);
        console.log(localStorage);
        showDetails();
        console.log(index);
    }
}

function addLocalStorage(stu) {
    let stuDetails = localStorage.getItem('stuDetails');
    if (stuDetails == null) {
        stuArr = [];
    }
    else {
        stuArr = JSON.parse(stuDetails);
    }
    stuArr.push(stu);

    localStorage.setItem('stuDetails', JSON.stringify(stuArr));
}
function formClear() {

    let addmForm = document.getElementById('formid');
    addmForm.reset();

}
function validate(stu) {
    if (stu.sName < 2 || stu.fName < 2 || stu.dob < 2 || stu.cName < 2 || stu.address < 2 || stu.branch < 2) {
        return false;
    }
    else {
        return true;
    }
}
function showDetails() {
    let stuDetails = localStorage.getItem('stuDetails');
    if (stuDetails == null) {
        stuObj = [];
    }
    else {
        stuObj = JSON.parse(stuDetails);
    }

    document.getElementById('tcont').innerHTML = `
            <table id="table">
                <tr>
                    <th>Index</th>
                    <th>Student Name</th>
                    <th>Father Name</th>
                    <th>Student Date of Birth</th>
                    <th>Puc College Name</th>
                    <th>Puc Percentage</th>
                    <th>Student Adress</th>
                    <th>Slected Branch</th>
                    <th>Delete</th>
                
                </tr>
            </table>
    `;
    stuObj.forEach((element, index) => {
        let table = document.getElementById('table')
        let trow = document.createElement('tr');
        trow.innerHTML = `
        <th>${index + 1}</th>
        <th>${element.sName}</th>
        <th>${element.fName}</th>
        <th>${element.dob}</th>
        <th>${element.cName}</th>
        <th>${element.per}%</th>
        <th>${element.address}</th>
        <th>${element.branch}</th>
        <th> <button id="${index}" class="btn-d" onclick="deleteStu(this.id)">Delete</button></th>
        `;
        table.appendChild(trow);
    });

}


let addmForm = document.getElementById('formid');
addmForm.addEventListener('submit', addmFormSubmit);
function addmFormSubmit(e) {
    let name = document.getElementById('name').value;
    let fatherName = document.getElementById('fname').value;
    let dob = document.getElementById('birthday').value;
    let collegeName = document.getElementById('cname').value;
    let percentage = document.getElementById('pucPerct').value;
    let address = document.getElementById('address').value;
    let cse = document.getElementById('cse');
    let ece = document.getElementById('ece');
    let eee = document.getElementById('eee');
    let branch;
    if (cse.checked) {
        branch = cse.value;
    }
    else if (ece.checked) {
        branch = ece.value;
    }
    else if (eee.checked) {
        branch = eee.value;
    }


    let stu = new studentDetails(name, fatherName, dob, collegeName, percentage, address, branch);

    if (validate(stu)) {
        addLocalStorage(stu);
        showDetails();
        formClear();
    }
    else {
        alert('Form is Empty');
    }

    e.preventDefault();

}
