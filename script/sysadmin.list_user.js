let baseUrl = 'http://localhost:5440/user/list?admin_level=3';
currUserObj = JSON.parse(window.localStorage.getItem("currUserObj"));
myID = currUserObj["user_id"];
myLevel = currUserObj["admin_level"]; 

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
    console.log(finalList);
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
    var cred = {
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2,
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    var response;
    fetch(baseUrl,options)        
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    response = data;
                    console.log(listUser)
                    listUser(response)
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    // console.log(response)
}
