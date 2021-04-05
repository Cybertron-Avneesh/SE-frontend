currUserObj = JSON.parse(window.localStorage.getItem("currUserObj"));

document.getElementById("currUserName").innerHTML = currUserObj["name"];
document.getElementById("currUserLevel").innerHTML = getComputedStyle(currUserObj["admin_level"]);

function getUserLevelString(level){
    if(level === 0) return 'System Admin';
    else if(level === 1) return 'Privileged User';
    else if(level === 2) return 'Operating User';
}
