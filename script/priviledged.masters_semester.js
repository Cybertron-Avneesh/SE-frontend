let semesters = [];

function addSemester() {

    var semester = {
        branch_ID: document.getElementById('createBranchID'),
        sem_num: document.getElementById('createSumNum'),
        sem_ID: document.getElementById('createSemID')
    }

    semesters.push(semester);
    document.forms[0].reset();
}

function updateSemester() {

    var semester = {
        branch_ID: document.getElementById('upBranchID'),
        sem_num: document.getElementById('upSumNum'),
        sem_ID: document.getElementById('upSemID')
    }

    semesters.push(semester);
    document.forms[0].reset();
}

function deleteSemester() {

    var semester = {
        branch_ID: document.getElementById('delBranchID'),
        sem_num: document.getElementById('delSumNum'),
        sem_ID: document.getElementById('delSemID')
    }

    semesters.push(semester);
    document.forms[0].reset();
}

let baseUrl = 'http://localhost:5440/masters/program';

async function getList() {
    let response = await fetch(baseUrl);
    let data = await response.json();
    console.log(data);
    finalList = data['semesters'];
    console.log(finalList);
    //     data['users'].array.forEach(element => {

    //     });
    table = document.getElementById('listSemesters');
    cnt = 0;
    finalList.forEach(element => {
        cnt++;
        // roleTag = getRoleTag(element["admin_level"]);
        table.insertAdjacentHTML('beforeend', `
                                            <tr>
                                                <td>
                                                    ${cnt}
                                                </td>
                                                <td>
                                                    ${element['sem_ID']}
                                                </td>
                                                <td>
                                                    ${element['sem_num']}
                                                </td>
                                                <td>
                                                    ${element['branch_ID']}
                                                </td>
                                            </tr>
        `);
    });
}

