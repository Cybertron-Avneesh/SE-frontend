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