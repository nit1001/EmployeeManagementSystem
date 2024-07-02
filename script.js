const modalToggleButton=document.getElementById("modal-toggle-btn");
const modal=document.getElementById("modal");
const closeIcon=document.getElementById("close-icon");
console.log("modal");




modalToggleButton.addEventListener("click",()=>{
    modal.classList.remove("hide-modal");
    modal.classList.add("show-modal");
});
closeIcon.addEventListener("click", ()=>{
    modal.classList.add("hide-modal");
    modal.classList.remove("show-modal");
});

function toggleModal(){
    modal.classList.toggle("hide-modal");
    modal.classList.toggle("show-modal");
};

function editRecord(e){
    alert("edit record", e.target);
}

function deleteRecord(e){
    alert("delete record", e.target);
}

function createNewEmployeeRecord(employee){
    const record = document.createElement("tr");
    for(let key in employee){
       const cell= document.createElement("td");
       cell.innerText=employee[key];
       record.appendChild(cell);
    }

    const options=document.createElement("td");

    const editButton=document.createElement("button");
    editButton.innerText="edit";
    editButton.className="material-icons";
    editButton.addEventListener("click",editRecord);

    const deleteButton=document.createElement("button");
    deleteButton.innerText="delete";
    deleteButton.className="material-icons";
    deleteButton.addEventListener("click",deleteRecord);

    options.append(editButton,deleteButton);
    record.appendChild(options);

    tableBody.appendChild(record);
}

let inc=1;
function getNewID(){
    return inc++;
}

const tableBody=document.querySelector("#Employee-list> tbody");

const form=document.getElementById("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const employee={
        name: form.fullname.value,
        email:form.email.value,
        id: getNewID(),
        role:form.role.value,
        doj:form.doj.value,
        gender:form.gender.value,
    };
    createNewEmployeeRecord(employee);
    console.log(employee);
    form.reset();
    toggleModal();
});
