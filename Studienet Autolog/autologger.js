console.log("Autologging now");
window.setTimeout(function f() {
	document.getElementById("login").value = "239841@via.dk"
	document.getElementById("passwd").value = "godzilla1954"
	document.getElementsByClassName("form insertPoint credentialform")[0].submit();
}, 2000);