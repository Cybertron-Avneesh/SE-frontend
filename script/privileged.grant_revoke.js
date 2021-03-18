let baseUrl = 'http://localhost:5440/user/list?admin_level=0';
listOfOperatingUser()

document.querySelector('.row').addEventListener('click',async (e)=>{
    var action = e.target.classList[0];
    var user_id = e.target.parentElement.parentElement.id;
    console.log(action)
    await grant_Revoke(user_id,action)
})
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

    let response = await fetch('http://localhost:5440/user/permission', options);
    let data = await response.json();
    console.log(data);

    document.querySelector('#'+userId).childNodes[9].textContent=getAccessStatus(accessStatus)

}
async function listOfOperatingUser() {
    console.log(baseUrl)

    var cred = {
        my_id:"iib2019050",
        my_level:2
    }

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    var response;
    await fetch(baseUrl,options)        
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    response = data;
                    listuser(response)
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))
    
}


function listuser(data){
    finalList = data['users'];
    console.log(finalList);

    table = document.getElementById('listOperatingUser');
    cnt = 0;
    finalList.forEach(element => {
        cnt++;
        roleTag = getRoleTag(element["admin_level"]);
        // table.insertAdjacentHTML('beforeend', `<tr><td>${cnt}</td><td>${element["name"]}</td><td>${element["user_id"]}</td><td>${roleTag}</td></tr>`);
        table.insertAdjacentHTML('beforeend', `
                                                <tr id=${element["user_id"]}>
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
                                                    <button class="1 btn btn-sm btn-success">Grant</button>
                                                    <button class="0 btn btn-sm btn-danger">Revoke</button>
                                                </td>
                                            </tr>`)
    });
}