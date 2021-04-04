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

async function getFeeStatusForAll() {

    var cred = {
        my_id: "iib2019050",
        my_level: 2,
        enrollment_id: '',
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
                                        ${element['enrollment_id']}
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