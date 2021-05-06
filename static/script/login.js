let users = [];

function checkCred() {

    var cred = {
        user_id: document.getElementById('inputUsername').value,
        password: document.getElementById('inputPass').value,
        admin_level: roleReturningFun(document.querySelectorAll('input[name="role"]')),
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }

    fetch('http://localhost:5440/login', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    data["admin_level"] = cred["admin_level"];
                    data["user_id"] = cred["user_id"];

                    if(res.status===200){
                        localStorage.setItem('currUserObj', JSON.stringify(data));
                        localStorage.setItem('token',data.token);
                        if(cred["admin_level"] === 0){
                            window.location.replace('./operating/index.html');
                        }
                        else if(cred["admin_level"] === 1){
                            window.location.replace('./privileged/index.html');
                        }
                        else if(cred["admin_level"] === 2){
                            window.location.replace('./sysadmin/index.html');
                        }
                        // window.location.replace('./sysadmin/index.html')
                    } else {
                        window.alert("Please check your credentials.");
                    }
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    users.push(cred);
    document.forms[0].reset();

    console.log('check for ', { users });
}

function roleReturningFun(radioEle) {
    for (let i = 0; i < radioEle.length; ++i) {
        if (radioEle[i].checked) {
            return 2 - i;
        }
    }
}
