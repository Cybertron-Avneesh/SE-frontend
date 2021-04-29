currUserObj = JSON.parse(window.localStorage.getItem("currUserObj"));
myID = currUserObj["user_id"];
myLevel = currUserObj["admin_level"];


async function search_program() {

    var cred = {
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2,
        program_id: document.getElementById('inputProgramID').value,
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    await fetch(`http://localhost:5440/student/create/?action=2`, options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    response = data;
                    // appending them to the list
                    var regTable = document.getElementById('sem_reg_table');
                    regTable.innerHTML = "";
                    var cnt = 0;
                    data['student'].forEach(element => {
                        cnt++;
                        regTable.insertAdjacentHTML('beforeend',
                            `
                            <tr>
                                  <td>
                                        ${cnt}
                                  </td>
                                  <td>
                                        ${element['enrollment_id']}
                                  </td>
                                  <td>
                                        ${element['name']}
                                  </td>
                                  <td>
                                        ${element['dob']}
                                  </td>
                                  <td>
                                        ${element['current_semester_number']}
                                  </td>
                            </tr>
                            `
                        )
                    });
                    // notifList.insertAdjacentHTML('beforeend', li);

                })
                .catch(err => {
                    console.log(err);
                    document.getElementById("sem_reg_table").innerHTML = `
                    <p class=" alert-danger" align="center" style="padding: 20px; font-size: 12px;">
                        Error loading fee status.
                    </p>
                `;
                })


        })
        .catch(err => console.error(err))
}
