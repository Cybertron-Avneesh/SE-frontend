function removeUsers() {

    // For connecting Backend
    /********************************/

    var user = {
        user_id: document.getElementById('inputUsername').value,
        my_id: "IIB2019050",
        my_level: 2,
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    fetch('http://localhost:5440/user/remove', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    /********************************/

    document.forms[0].reset();

    // console.log('added', { users });
}
