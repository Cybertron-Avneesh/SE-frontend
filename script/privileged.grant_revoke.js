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
async function grant_Revoke(userId, accessStatus){
    reqBody = {
        my_id: 'iib2019050',
        has_access: accessStatus,
        my_level: 1,
        user_id: userId
    };
    console.log(reqBody)

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    }

    let response = await fetch(baseUrl, options);
    let data = await response.json();
    console.log(data);

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
                                                    ${element["name"]}
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
                                                    <button class="btn btn-sm btn-success" onclick="grant_Revoke('iib2019052', 1)">Grant</button>
                                                    <button class="btn btn-sm btn-danger" onclick="${grant_Revoke(element['user_id'], 0)}">Revoke</button>
                                                </td>
                                            </tr>`)
    });
}
