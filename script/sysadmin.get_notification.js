
currUserObj = JSON.parse(window.localStorage.getItem("currUserObj"));
myID = currUserObj["user_id"];
myLevel = currUserObj["admin_level"]; 

async function getNotification() {

    var cred = {
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2,
        enrollment_id: myID??"",
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    await fetch(`http://localhost:5440/student/notification?action=2`, options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    response = data;
                    // appending them to the list
                    listDiv = document.getElementById('notifDiv');
                    notifList = document.getElementById('notifList');
                    notifList.innerHTML = "";
                    data['Notifications'].forEach(element => {
                        notifList.insertAdjacentHTML('beforeend', `
                        <li >
                            <div class="alert alert-info" role="alert">
                                <span>
                                <p class="badge badge-primary" style="font-style: italic">${element['time'].split('.')[0]}</p>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">
                                    <i class="fa fa-times"></i>
                                  </span>
                                </button>
                                </span>
                                <p>${element['description']}</p>
                            </div>
                        </li>
                        `)
                    });
                    // notifList.insertAdjacentHTML('beforeend', li);

                })
                .catch(err => {
                    console.log(err);
                    document.getElementById("notifDiv").innerHTML = `
                    <p class=" alert-danger" align="center" style="padding: 20px; font-size: 12px;">
                        Error loading notifications
                    </p>
                `;
                })


        })
        .catch(err => console.error(err))
}