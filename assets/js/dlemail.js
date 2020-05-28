function submitToAPI2(e) {
	alert("1no");
	//if (submitUserForm()) {

	e.preventDefault();
	var URL = "https://muzdbczmmh.execute-api.us-east-1.amazonaws.com/prod/test";
	alert("here1");

	if ($("#email2").val() == "") {
		alert("Please enter your email id");
		return;
	}

	var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2, 6})?$/;
	if (!reeamil.test($("#email2").val())) {
		alert("Please enter valid email address");
		return;
	}
	var name = "";
	var phone = "";
	var email = $("#email2").val();
	var desc = "newsletter";

	var data = {
		name: name,
		phone: phone,
		email: email,
		desc: desc
	};

	$.ajax({
		type: "POST",
		url: "https://muzdbczmmh.execute-api.us-east-1.amazonaws.com/prod/test",
		dataType: "json",
		crossDomain: "true",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(data),


		success: function () {
			// clear form and show a success message

			$('#myModal').modal('show');

			document.getElementById("contact-form").reset();
			location.reload();
		},
		error: function () {
			// show an error message
			alert("UnSuccessfull");
		}
	});
}
function submitToAPI(e) {

	//if (submitUserForm()) {
	alert("1");
	e.preventDefault();
	var URL = "https://muzdbczmmh.execute-api.us-east-1.amazonaws.com/prod/test";
	alert("here");
	var Namere = /[A-Za-z]{1}[A-Za-z]/;
	if (!Namere.test($("#name").val())) {
		alert("Name can not less than 2 char");
		return;
	}
	alert("2");
	if (!Namere.test($("#phone").val())) {
		alert("Subject can not less than 2 char");
		return;
	}
	alert("3");
	if (!Namere.test($("#desc").val())) {
		alert("Message can not less than 2 char");
		return;
	}
	if ($("#email").val() == "") {
		alert("Please enter your email id");
		return;
	}
	alert("4");

	//var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2, 6})?$/;
	//if (!reeamil.test($("#email").val())) {
	//	alert(($("#email").val()));
	//	alert("Please enter valid email address");
	//	return;
	//}
	alert("5");
	var name = $("#name").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	var desc = $("#desc").val();


	var data = {
		name: name,
		phone: phone,
		email: email,
		desc: desc
	};
	var tester = JSON.stringify(data);
	$.ajax({
		type: "POST",
		url: "https://muzdbczmmh.execute-api.us-east-1.amazonaws.com/prod/test",
		dataType: "json",
		crossDomain: "true",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(data),


		success: function () {
			// clear form and show a success message

			$('#myModal').modal('show');

			document.getElementById("contact-form").reset();
			location.reload();
		},
		error: function () {
			// show an error message
			alert("UnSuccessfull " + tester);
		}
	});
}
//}