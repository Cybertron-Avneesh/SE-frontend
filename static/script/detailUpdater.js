currUserObj = JSON.parse(window.localStorage.getItem("currUserObj"));

document.getElementById("currUserName").innerHTML = currUserObj["user_id"];
document.getElementById("currUserLevel").innerHTML = getUserLevelString(currUserObj["admin_level"]);

function getUserLevelString(level){
    if(level === 2) return 'System Admin';
    else if(level === 1) return 'Privileged User';
    else if(level === 0) return 'Operating User';
}
