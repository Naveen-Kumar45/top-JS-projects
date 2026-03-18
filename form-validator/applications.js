/* Caption: applications.js — Loads submitted applications from localStorage and renders them into a table.
    - Populates rows with stored `submitData` entries.
    - Provides a clear button to remove stored submissions.
*/

// Get reference to the table body where rows will be appended.
let tableBody = document.getElementById("tableBody");

// Load stored submissions from localStorage; fallback to empty array.
let storedData = JSON.parse(localStorage.getItem("submitData")) || [];


// If no stored data, show a friendly message row in the table.
if (storedData.length === 0) {
    tableBody.innerHTML = 
            `<tr>
            <td colspan="7" class="no-data">No applications submitted yet.</td>
            </tr>`;
}

// Start serial numbering at 1 for display.
let serialNo = 1;

// Render each stored application as a table row.
storedData.forEach((application) => {

    let row = document.createElement("tr"); // create a new table row element

    // Fill row markup with application fields and current serialNo
    row.innerHTML =
     `
        <td>${serialNo}</td>
        <td>${application.name}</td>
        <td>${application.email}</td>
        <td>${application.age}</td>
        <td>${application.gender}</td>
        <td>${application.phone}</td>
        <td>${application.topic}</td>
    `;

    tableBody.appendChild(row); // append row to table body
    serialNo+=1; // increment serial number
});

// Clear button reference for removing all stored applications.
let clearBtn = document.getElementById("clearBtn");

// Confirm and clear stored submissions when clicked.
clearBtn.addEventListener("click",() => {
    let confirmation = confirm("Are you sure you want to clear all applications? This action cannot be undone.");

    if (confirmation) {
        localStorage.removeItem("submitData") // remove key from localStorage
        tableBody.innerHTML = 
        `<tr> 
            <td colspan = "7" class="no-data"> No applications submitted yet.</td>
        </tr>`; // update table to show empty message
    }
})
