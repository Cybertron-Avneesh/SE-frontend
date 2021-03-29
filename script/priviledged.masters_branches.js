let branches = [];

function addBranch() {

    var branch = {
        branch_ID: document.getElementById('createBranchID'),
        branch_name: document.getElementById('createBranchName'),
        prog_ID: document.getElementById('createProgramID')
    }

    branches.push(branch);
    document.forms[0].reset();
}

function updateBranch() {

    var branch = {
        branch_ID: document.getElementById('upBranchID'),
        branch_name: document.getElementById('upBranchName'),
        prog_ID: document.getElementById('upProgramID')
    }

    branches.push(branch);
    document.forms[0].reset();
}

function deleteBranch() {

    var branch = {
        branch_ID: document.getElementById('delBranchID'),
        prog_ID: document.getElementById('delProgramID')
    }

    branches.push(branch);
    document.forms[0].reset();
}

let baseUrl = 'http://localhost:5440/masters/program';

async function getList() {
    let response = await fetch(baseUrl);
    let data = await response.json();
    console.log(data);
    finalList = data['branches'];
    console.log(finalList);
    //     data['users'].array.forEach(element => {

    //     });
    table = document.getElementById('listBranches');
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
                                                    ${element['prog_ID']}
                                                </td>
                                                <td>
                                                    ${element['prog_name']}
                                                </td>
                                                </tr>
        `);
    });
}

                                