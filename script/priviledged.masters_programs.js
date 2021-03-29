let masters = [];

function addMaster() {

    var master = {
        prog_ID: document.getElementById('createProgramID'),
        prog_name: document.getElementById('createProgramName')
    }

    masters.push(master);
    document.forms[0].reset();

}
function updateMaster() {

    var master = {
        prog_ID: document.getElementById('upProgramID'),
        prog_name: document.getElementById('upProgramName')
    }

    masters.push(master);
    document.forms[0].reset();

}
function deleteMaster() {

    var master = {
        prog_ID: document.getElementById('upProgramID')
    }

    masters.push(master);
    document.forms[0].reset();

}

let baseUrl = 'http://localhost:5440/masters/program';

async function getList() {
    let response = await fetch(baseUrl);
    let data = await response.json();
    console.log(data);
    finalList = data['programs'];
    console.log(finalList);
    //     data['users'].array.forEach(element => {

    //     });
    table = document.getElementById('listPrograms');
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