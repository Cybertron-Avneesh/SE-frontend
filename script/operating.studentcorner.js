let baseUrl = 'http://localhost:5440/student/create/IIB2019001?action=2';
let student;

currUserObj = JSON.parse(window.localStorage.getItem("currUserObj"));
myID = currUserObj["user_id"];
myLevel = currUserObj["admin_level"]; 

async function searchStudent() {
    // let response = await fetch(baseUrl);
    // let data = await response.json();
    // console.log(data);
    var enrollNo = document.getElementById('inputEnroll').value;
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
    await fetch(`http://localhost:5440/student/create/${enrollNo}?action=2`, options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data);
                    response = data['student'][0];
                    student = response;
                    card = document.getElementById('detailCard');
                    if (response.length === 0) {
                        card.innerHTML = "<h2>No record found.</h2>";
                    } else {

                        card.innerHTML = `
                        <div class="card-header">
                            <h3 class="card-title" id="currEnrollID">
                            <i class="fa fa-user-circle"></i>
                            ${response['enrollment_id']}
                            ${getVerificationInfo(response['is_verified'])}
                            </h3>
                        </div>
                        <div class="card-body">
                            <p><strong>Name : </strong>${response['name']}</p>
                            <p><strong>DOB : </strong>${response['dob']}</p>
                            <p><strong>Program : </strong>${response['program_id']}</p>
                            <p><strong>Branch : </strong>${response['branch_id']}</p>
                            <p><strong>Semester : </strong>${response['current_semester_number']}</p>
                            <p><strong>Section : </strong>${response['section']}</p>
                            <p><strong>Credits Comp. : </strong>${response['credits_completed']}</p>
                            <p><strong>CGPI : </strong>${response['cgpi']}</p>
                            <p><strong>Mob No. : </strong>${response['phone_number']}</p>
                            <p><strong>Email : </strong>${response['email_id']}</p>
                            <p><strong>Address : </strong>${response['address']}</p>
                        </div>
                        `;
                        var elms = document.querySelectorAll("[class='currEnrollID']");
                        for (var i = 0; i < elms.length; i++)
                            elms[i].innerHTML = response['enrollment_id'];
                    }
                })
                .catch(err => {
                    console.log(`${err}`);
                    card = document.getElementById('detailCard');
                    card.innerHTML = "<h2>Something went fuzzy.</h2>";
                })
        })
        .catch(err => console.error(err))
    // console.log("Avneesh ", currStudentDetail);
}
function getVerificationInfo(status) {
    if (status == 1) {
        return `<span style="color: green; font-size: xx-large;">
        <i class="fa fa-check-circle">
          Verified
        </i>
      </span>`
    } else {
        return `<span style="color: red; font-size: xx-large;">
        <i class="fa fa-times-circle">
          Unverified
        </i>
      </span>`
    }
}

async function markAsVerified() {
    var cred = student;
    cred["is_verified"] = 1;
    cred["my_id"] = myID??"";
    cred["my_level"] = myLevel;
    console.log(cred);

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    await fetch(`http://localhost:5440/student/create/${cred['enrollment_id']}?action=3`, options)
        .then(res => {
            if (res.status === 200) {
                window.alert(`Student ${enrollNo} detail updated sucessfully!`);
            }
        })
        .catch(err => console.error(err))
}

async function sendFeeNotification() {

    var enrollNo = document.getElementsByClassName('currEnrollID')[0].innerHTML;
    var msg = document.getElementById('inputNotifMsg').value;
    var cred = {
        my_id: myID,
        my_level: myLevel,
        enrollment_id: enrollNo,
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
                window.alert(`Fee reminder sent successfully to ${enrollNo}!`);
            }
        })
        .catch(err => console.error(err))
}

async function takeDisciplinaryAction() {
    var enrollNo = document.getElementsByClassName('currEnrollID')[0].innerHTML;
    console.log(enrollNo);
    var reason = document.getElementById('inputReason').value;
    var action = document.getElementById('inputAction').value;
    var date = document.getElementById('inputDate').value;
    var cred = {
        my_id: myID??"",
        my_level: myLevel,
        enrollment_id: enrollNo,
        reason: reason,
        action: action
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    var response;
    await fetch(`http://localhost:5440/student/disciplinary?action=1`, options)
        .then(res => {
            res.json()
                .then(data => {
                    window.alert(`Disciplinary Action details updated successfully for ${enrollNo}!`);
                    console.log(data);
                })
                .catch(err => {
                    console.log(`${err}`);
                })
        })
        .catch(err => console.error(err))
}


function getPaidStatus(status) {
    if (status === 1) {
        return `<div>
                    <i class=" fa fa-check-circle" style="color: green;"></i>
                        Paid
                </div>`;
    } else {
        return `<div>
                    <i class=" fa fa-times-circle" style="color: red;"></i>
                        Un-paid
                </div>`
    }
}

async function getFeeStatus() {

    var cred = {
        my_id: myID??"",
        my_level: myLevel,
        enrollment_id: student['enrollment_id'],
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    await fetch(`http://localhost:5440/student/fees?action=2`, options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    response = data;
                    // appending them to the list
                    var feeStatusTable = document.getElementById('feeStatusTable');
                    feeStatusTable.innerHTML = "";
                    var cnt = 0;
                    data['Fees'].forEach(element => {
                        cnt++;
                        feeStatusTable.insertAdjacentHTML('beforeend',
                            `
                            <tr>
                                <td>
                                   ${cnt}
                                </td>
                                <td>
                                    ${element['semester_number']}
                                </td>
                                <td>
                                    ${element['payment_date']}
                                </td>
                                <td>
                                      ${getPaidStatus(element['fee_status'])}
                                </td>
                            </tr>
                            `
                        )
                    });
                    // notifList.insertAdjacentHTML('beforeend', li);

                })
                .catch(err => {
                    console.log(err);
                    document.getElementById("feeStatusTable").innerHTML = `
                    <p class=" alert-danger" align="center" style="padding: 20px; font-size: 12px;">
                        Error loading fee status.
                    </p>
                `;
                })


        })
        .catch(err => console.error(err))
}