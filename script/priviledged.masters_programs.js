let masters = [];

function addMasters() {

    var master = {
        prog_ID: document.getElementById('createProgramID'),
        prog_name: document.getElementById('createProgramName')
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
    table = document.getElementById('List');
    cnt = 0;
    finalList.reverse();
    finalList = finalList.slice(0, 10);
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