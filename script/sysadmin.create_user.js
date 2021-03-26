let users = [];

function addUsers() {

    // For connecting Backend
    /********************************/

    var user = {
        user_id: document.getElementById('inputUsername').value,
        admin_level: roleReturningFun(document.querySelectorAll('input[name="role"]')),
        my_id: "IIB2019050",
        my_level: 2,
        name: "op3"
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    fetch('http://localhost:5440/user/create', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    /********************************/

    users.push(user);
    document.forms[0].reset();

    // console.log('added', { users });
}

function roleReturningFun(radioEle) {
    for (let i = 0; i < radioEle.length; ++i) {
        if (radioEle[i].checked) {
            return 2 - i;
        }
    }
}