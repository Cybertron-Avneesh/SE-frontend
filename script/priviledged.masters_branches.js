let branches = [];
currUserObj = JSON.parse(window.localStorage.getItem("currUserObj"));
myID = currUserObj["user_id"];
myLevel = currUserObj["admin_level"]; 

function addBranch() {
    var branch = {
        branch_id: document.getElementById('createBranchID').value,
        branch_name: document.getElementById('createBranchName').value,
        program_id: document.getElementById('createProgramID').value,
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2,
        name: currUserObj["name"]
    }
    
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(branch)
    }

    fetch('http://localhost:5440/masters/branch?action=1', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    window.alert("Branch created sucessfully.")
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))
    
    branches.push(branch);
    document.forms[0].reset();
}

function updateBranch() {

    var branch = {
        branch_id: document.getElementById('upBranchID').value,
        branch_name: document.getElementById('upBranchName').value,
        program_id: document.getElementById('upProgramID').value,
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2,
        name: currUserObj["name"]
    }
    
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(branch)
    }

    fetch('http://localhost:5440/masters/branch?action=3', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    window.alert("Branch updated sucessfully.")
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    branches.push(branch);
    document.forms[0].reset();
}

function deleteBranch() {

    var branch = {
        branch_id: document.getElementById('delBranchID').value,
        program_id: document.getElementById('delProgramID').value,
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2,
        name: currUserObj["name"]
    }
    
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(branch)
    }

    fetch('http://localhost:5440/masters/branch?action=4', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    window.alert("Branch deleted sucessfully.")
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    branches.push(branch);
    document.forms[0].reset();
}


async function getList() {
    var cred = {
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    var response;
    await fetch('http://localhost:5440/masters/branch?action=2', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    response = data;
                    finalList = response['branches'];
                    console.log(finalList);
                    table = document.getElementById('listBranches');
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
                                ${element['branch_id']}
                            </td>
                            <td>
                                ${element['branch_name']}
                            </td>
                            <td>
                                ${element['program_id']}
                            </td>
                        </tr>
                        `);
                    });
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))
}

