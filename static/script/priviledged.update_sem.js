currUserObj = JSON.parse(window.localStorage.getItem("currUserObj"));
myID = currUserObj["user_id"];
myLevel = currUserObj["admin_level"]; 

async function updateSem() {

    var progID = document.getElementById('upProgID').value;

    var cred = {
        program_id: progID
    }
    console.log(cred);
    var options = {
        method: 'POST',
        headers :{
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    await fetch(`http://localhost:5440/student/updateSemester`, options)
        .then(res => {
            if (res.status === 200) {
                window.alert("Semester update successfully.");
            } else {
                window.alert("Error updating semester. Please try again.");
            }
        })
        .catch(err => console.error(err))
}
