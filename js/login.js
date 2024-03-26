

function submitCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    document.cookie = "username=" + username + ";max-age=10;secure;path=/"
    document.cookie = "password=" + password + ";max-age=10;secure;path=/"
    //document.cookie += "max-age=100;path=/";

    //document.cookie = "username=" + username;
    //document.cookie += ";password=" + password;
    //document.cookie += ";expires"

    cookies = document.cookie.split(";");
    alert(cookies[0]);

    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('credentials.db', sqlite3.OPEN_READONLY);

    db.serialize(() => {
        db.each(`SELECT user_id as id FROM credentials`, (err, row) => {
            if (err) {
                alert(err.message);
            }
            else {
                alert(row.id);
            }
        })
    });

    db.close();
}

function checkCookies() {
    alert(document.cookie);
}