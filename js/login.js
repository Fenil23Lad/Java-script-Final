var attempt = 5;

function login_Validation() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "JavaScript" && password == "java123") {
        alert("Login is Successful");
        window.location = "home.html";
        return false;
    } else {
        attempt--;
        alert("You have left " + attempt + " attempt;");

        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
