function submitCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    alert(username + " " + password);

    var cookieInhoud = "username=" + username + "; password=" + password;

    document.cookie = "name=Credentials; " + cookieInhoud;
    //document.cookie = "username=" + username;
    //document.cookie = "password=" + password;
    var cookies = document.cookie.split(";");
    alert(cookies);
}