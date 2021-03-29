let semesters = [];

function addSemester() {

    var semester = {
        branch_id: document.getElementById('createBranchID').value,
        semester_num: document.getElementById('createSumNum').value,
        semester_id: document.getElementById('createSemID').value,
        my_id: "IIB2019050",
        my_level: 2,
        name: "op3"
    }
    
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(semester)
    }

    fetch('http://localhost:5440/masters/semester?action=1', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    window.alert("Semester created sucessfully.")
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))


    semesters.push(semester);
    document.forms[0].reset();
}

// function updateSemester() {

//     var semester = {
//         branch_ID: document.getElementById('upBranchID'),
//         sem_num: document.getElementById('upSumNum'),
//         sem_ID: document.getElementById('upSemID')
//     }

//     semesters.push(semester);
//     document.forms[0].reset();
// }

function deleteSemester() {

    var semester = {
        semester_id: document.getElementById('delSemID').value,
        my_id: "IIB2019050",
        my_level: 2,
        name: "op3"
    }
    
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(semester)
    }

    fetch('http://localhost:5440/masters/semester?action=4', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    window.alert("Semester deleted sucessfully.")
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    semesters.push(semester);
    document.forms[0].reset();
}


async function getList() {

    var cred = {
        my_id: "iib2019050",
        my_level: 2
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    var response;
    await fetch('http://localhost:5440/masters/semester?action=2', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    response = data;
                    finalList = response['semesters'];
                    console.log(finalList);
                    table = document.getElementById('listSemesters');
                    table.innerHTML = "";
                    cnt = 0;
                    finalList.forEach(element => {
                        cnt++;
                        table.insertAdjacentHTML('beforeend', `
                                            <tr>
                                                <td>
                                                    ${cnt}
                                                </td>
                                                <td>
                                                    ${element['semester_id']}
                                                </td>
                                                <td>
                                                    ${element['semester_num']}
                                                </td>
                                                <td>
                                                    ${element['branch_id']}
                                                </td>
                                            </tr>
                        `);
                    });
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))
}

