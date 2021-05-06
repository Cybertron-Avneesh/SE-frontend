let baseUrl = 'http://localhost:5440/user/list?admin_level=3';
// currUserObj = JSON.parse(window.localStorage.getItem("currUserObj"));
// myID = currUserObj["user_id"];
// myLevel = currUserObj["admin_level"]; 

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

function listUser(response){
    
    var finalList = response['users'];
    // data['users'].array.forEach(element => {
        
    // });
    var table = document.getElementById('listUser');
    var cnt = 0;
    finalList.forEach(element => {
        cnt++;
        roleTag = getRoleTag(element["admin_level"]);
        table.insertAdjacentHTML('beforeend', `<tr><td>${cnt}</td><td>${element["name"]}</td><td>${element["user_id"]}</td><td>${roleTag}</td></tr>`);
    });

}
async function listOfUser() {
    // let response = await fetch(baseUrl);
    // let data = await response.json();
    // console.log(data);
    var options = {
        method: 'POST',
        headers :{
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
    }
    var response;
    fetch(baseUrl,options)        
        .then(res => {
            res.json()
                .then(data => {
                    response = data;
                    listUser(response)
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    // console.log(response)
}
