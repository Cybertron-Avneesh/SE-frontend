async function addNotification() {

    var target = document.getElementById('inputTarget').value;
    var msg = document.getElementById('inputNotifMsg').value;
    if (!target) {
        target = "";
    }
    var cred = {
        my_id: "iib2019050",
        my_level: 2,
        enrollment_id: target,
        description: msg
    }
    console.log(cred);
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    await fetch(`http://localhost:5440/student/notification?action=1`, options)
        .then(res => {
            if (res.status === 200) {
                window.alert("Notification sent successfully!");
            } else {
                window.alert("Error sending notification. Please try again.");
            }
        })
        .catch(err => console.error(err))
}