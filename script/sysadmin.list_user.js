let baseUrl = 'http://localhost:5440/user/list?admin_level=3';

function getRoleTag(roleID){

    if(roleID == 0){
        return '<span class=" alert-primary" style="padding: 6px; border-radius: 20px;">Operating User</span>';
    }
    if(roleID == 1){
        return '<span class=" alert-warning" style="padding: 6px; border-radius: 20px;">Privileged User</span>';
    }
    if(roleID == 2){
        return '<span class=" alert-success" style="padding: 6px; border-radius: 20px;">System Admin</span>';
    }
}
async function listOfUser() {
    let response = await fetch(baseUrl);
    let data = await response.json();
    console.log(data);
    finalList = data['users'];
    console.log(finalList);
    // data['users'].array.forEach(element => {
        
    // });
    table = document.getElementById('listUser');
    cnt = 0;
    finalList.forEach(element => {
        cnt++;
        roleTag = getRoleTag(element["admin_level"]);
        table.insertAdjacentHTML('beforeend', `<tr><td>${cnt}</td><td>${element["name"]}</td><td>${element["user_id"]}</td><td>${roleTag}</td></tr>`);
    });
}
