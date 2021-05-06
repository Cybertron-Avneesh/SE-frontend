let baseUrl = 'http://localhost:5440/masters/program';

currUserObj = JSON.parse(window.localStorage.getItem("currUserObj"));
myID = currUserObj["user_id"];
myLevel = currUserObj["admin_level"]; 

let programs = [];

function addProgram() {
    var program = {
        program_id: document.getElementById('createProgramID').value,
        program_name: document.getElementById('createProgramName').value,

        name: currUserObj["name"]
    }
    var options = {
        method: 'POST',
        headers :{
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(program)
    }

    fetch('http://localhost:5440/masters/program?action=1', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    window.alert("Program created sucessfully.")
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    programs.push(program);
    document.forms[0].reset();
}
function updateProgram() {

    var program = {
        program_id: document.getElementById('upProgramID').value,
        program_name: document.getElementById('upProgramName').value,
        name: currUserObj["name"]
    }
    var options = {
        method: 'POST',
        headers :{
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(program)
    }

    fetch('http://localhost:5440/masters/program?action=3', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    window.alert("Program updated sucessfully.")
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    programs.push(program);
    document.forms[1].reset();
}
function deleteProgram() {

    var program = {
        program_id: document.getElementById('delProgramID').value,
        name: currUserObj["name"]
    }
    var options = {
        method: 'POST',
        headers :{
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(program)
    }

    fetch('http://localhost:5440/masters/program?action=4', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    window.alert("Program deleted sucessfully.")
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    programs.push(program);
    document.forms[2].reset();
}

async function getList() {

    var options = {
        method: 'POST',
        headers :{
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
    }
    var response;
    await fetch('http://localhost:5440/masters/program?action=2', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    response = data;
                    finalList = response['programs'];
                    console.log(finalList);
                    table = document.getElementById('listPrograms');
                    table.innerHTML = "";
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
                                                    ${element['program_id']}
                                                </td>
                                                <td>
                                                    ${element['program_name']}
                                                </td>
                                                </tr>
                        `);
                    });
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    // let data = await response.json();
    // console.log(data);

}