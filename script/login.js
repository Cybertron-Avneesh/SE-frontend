let users = [];

function checkCred() {
    var cred = {
        user_id: document.getElementById('inputUsername').value,
        pass: document.getElementById('inputPass').value,
        admin_level: roleReturningFun(document.querySelectorAll('input[name="role"]')),
    }

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