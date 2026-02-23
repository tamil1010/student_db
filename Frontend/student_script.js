document.addEventListener("DOMContentLoaded", function () {

    const BASE_URL = "https://student-database-pqry.onrender.com";

    const form = document.getElementById("studentForm");
    const rollInput = document.getElementById("rollno");
    const branchSelect = document.getElementById("branch");
    const citySelect = document.getElementById("city");
    const listBtn = document.getElementById("listBtn");
    const updateBtn = document.getElementById("updateBtn");

    /* =============================
       AUTO BRANCH FROM ROLLNO
    ============================== */

    rollInput.addEventListener("input", function () {

        rollInput.value = rollInput.value.toUpperCase();

        const value = rollInput.value;
        const match = value.match(/^\d{2}([A-Z]+)\d{2}$/);

        if (match) {
            const extractedBranch = match[1];
            branchSelect.value = extractedBranch;
        }
    });

    /* =============================
       ADD STUDENT
    ============================== */

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const rollno = rollInput.value.trim();
        const name = document.getElementById("name").value.trim();
        const branch = branchSelect.value;
        const city = citySelect.value;

        try {
            const res = await fetch(`${BASE_URL}/students`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ rollno, name, branch, city })
            });

            const data = await res.json();
            showToast(data.message);

            form.reset();
            rollInput.readOnly = false;
            loadStudents();

        } catch (err) {
            console.error(err);
            showToast("Add failed");
        }
    });

    /* =============================
       LIST STUDENTS
    ============================== */

    listBtn.addEventListener("click", loadStudents);

    /* =============================
       UPDATE STUDENT
    ============================== */

    updateBtn.addEventListener("click", async function () {

        const rollno = rollInput.value.trim();
        const nameInput = document.getElementById("name").value.trim();
        const branchInput = branchSelect.value;
        const cityInput = citySelect.value;

        if (!rollno) {
            showToast("Enter RollNo to update");
            return;
        }

        try {

            const res = await fetch(`${BASE_URL}/students`);
            const data = await res.json();

            const existingStudent = data.find(
                student => student.RollNo === rollno
            );

            if (!existingStudent) {
                showToast("Student not found");
                return;
            }

            const updatedStudent = {
                name: nameInput || existingStudent.Name,
                branch: branchInput || existingStudent.Branch,
                city: cityInput || existingStudent.City
            };

            const updateRes = await fetch(`${BASE_URL}/students/${rollno}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedStudent)
            });

            const updateData = await updateRes.json();
            showToast(updateData.message);

            setTimeout(() => {
                location.reload();
            }, 1200);

        } catch (err) {
            console.error(err);
            showToast("Update failed");
        }

    });

});

/* =============================
   GLOBAL FUNCTIONS
============================= */

async function loadStudents() {

    const BASE_URL = "https://student-database-pqry.onrender.com";

    try {
        const res = await fetch(`${BASE_URL}/students`);
        const data = await res.json();

        const tableBody = document.getElementById("studentTableBody");
        tableBody.innerHTML = "";

        data.forEach(student => {
            tableBody.innerHTML += `
                <tr>
                    <td>${student.RollNo}</td>
                    <td>${student.Name}</td>
                    <td>${student.Branch}</td>
                    <td>${student.City}</td>
                    <td>
                        <i class="fa-solid fa-pen edit-icon"
                           onclick="editStudent('${student.RollNo}',
                                                 '${student.Name}',
                                                 '${student.Branch}',
                                                 '${student.City}')">
                        </i>

                        <i class="fa-solid fa-trash delete-icon"
                           onclick="deleteStudent('${student.RollNo}')">
                        </i>
                    </td>
                </tr>
            `;
        });

    } catch (err) {
        console.error(err);
    }
}

function editStudent(rollno, name, branch, city) {

    document.getElementById("rollno").value = rollno;
    document.getElementById("name").value = name;
    document.getElementById("branch").value = branch;
    document.getElementById("city").value = city;

    document.getElementById("rollno").readOnly = true;
}

async function deleteStudent(rollno) {

    const BASE_URL = "https://student-database-pqry.onrender.com";

    try {
        const res = await fetch(`${BASE_URL}/students/${rollno}`, {
            method: "DELETE"
        });

        const data = await res.json();
        showToast(data.message);
        loadStudents();

    } catch (err) {
        console.error(err);
        showToast("Delete failed");
    }
}

/* =============================
   TOAST NOTIFICATION
============================= */

function showToast(message) {

    const toast = document.getElementById("toast");
    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}