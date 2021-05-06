async function getLogs() {
    let options = {
        headers :{
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
    let response = await fetch('http://localhost:5440/logs',options);
    let data = await response.json();
    finalList = data['logs'];
    // data['users'].array.forEach(element => {

    // });
    table = document.getElementById('logsTable');
    cnt = 0;
    finalList.reverse();
    finalList = finalList.slice(0, 50);
    finalList.forEach(element => {
        cnt++;
        // roleTag = getRoleTag(element["admin_level"]);
        table.insertAdjacentHTML('beforeend', `
                                                <tr>
                                                <td>
                                                    ${cnt}
                                                </td>
                                                <td>
                                                    ${element['user_id']}
                                                </td>
                                                <td>
                                                    ${element['time']}
                                                </td>
                                                <td>
                                                    ${element['action']}
                                                </td>
                                                </tr>
        `);
    });
}