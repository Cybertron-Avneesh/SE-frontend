let baseUrl = 'http://localhost:5440/user/list?admin_level=0';

function getRoleTag(roleID) {

    if (roleID == 0) {
        return '<span class=" alert-primary" style="padding: 6px; border-radius: 20px;">Operating User</span>';
    }
    if (roleID == 1) {
        return '<span class=" alert-warning" style="padding: 6px; border-radius: 20px;">Privileged User</span>';
    }
    if (roleID == 2) {
        return '<span class=" alert-success" style="padding: 6px; border-radius: 20px;">System Admin</span>';
    }
}
function getAccessStatus(status) {
    if (status == 1) {
        return 'Has Access';
    }
    if (status == 0) {
        return 'No Access';
    }
}
async function listOfOperatingUser() {
    let response = await fetch(baseUrl);
    let data = await response.json();
    console.log(data);
    finalList = data['users'];
    console.log(finalList);

    table = document.getElementById('listOperatingUser');
    cnt = 0;
    finalList.forEach(element => {
        cnt++;
        roleTag = getRoleTag(element["admin_level"]);
        // table.insertAdjacentHTML('beforeend', `<tr><td>${cnt}</td><td>${element["name"]}</td><td>${element["user_id"]}</td><td>${roleTag}</td></tr>`);
        table.insertAdjacentHTML('beforeend', `
                                                <tr>
                                                <td>
                                                    ${cnt}
                                                </td>
                                                <td>
                                                    ${element["name"].toCapital()}
                                                </td>
                                                <td>
                                                    ${element["user_id"]}
                                                </td>
                                                <td>
                                                    ${roleTag}
                                                </td>
                                                <td>
                                                    ${getAccessStatus(element["has_access"])}
                                                </td>
                                                <td>
                                                    <button class="btn btn-sm btn-success" id="${element["user_id"]}_grant">Grant</button>
                                                    <button class="btn btn-sm btn-danger"  id="${element["user_id"]}_revoke">Revoke</button>
                                                </td>
                                            </tr>`)
    });
}
