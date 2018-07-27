function krunners_submit(e) {
    console.log("krunners submit");
    jQuery("#runner-reg-form").submit();
	window.location.href = 'http://www.run4orphans.org/signup-acknowledge';
    //document.getElementById("runner-reg-form").submit();
}

jQuery(document).ready(function($) {	
	var fine = false;
	var fname = true;	
	var lname = true;
	var email = true;
	var phone = true;
	var address = true;
	var age = true;
	var adult = true;
	var isminor = false;
	var guardian = true;

	jQuery("input:radio[name=adult]").change(function(event){
		if($(this).val()==1){
			jQuery("#guardian-form").prop("readonly",false);
		} else {
			jQuery("#guardian-form").prop("readonly",true);
		}
	});

	jQuery("#runner-register-btn").click(function(event){
//		event.preventDefault();
		if(jQuery('#fname-form').val().length<=0){
			document.getElementById("fname-error").style.display = 'block';
			console.log("fname error");
			fname = false;
		} else {
			document.getElementById("fname-error").style.display = 'none';
			fname = true;
		}

		if(jQuery('#lname-form').val().length<=0){
			document.getElementById("lname-error").style.display = 'block';
			console.log("lname error");
			lname = false;
		} else {
			document.getElementById("lname-error").style.display = 'none';
			lname = true;
		}
		
		if(jQuery('#email-form').val().length<=0){
			document.getElementById("email-error").style.display = 'block';
			console.log("email error");
			email = false;
		} else {
			document.getElementById("email-error").style.display = 'none';
			email = true;
		}
		
		if(jQuery('#phone-form').val().length<=0){
			document.getElementById("phone-error").style.display = 'block';
			console.log("phone error");
			phone = false;
		} else {
			document.getElementById("phone-error").style.display = 'none';
			phone = true;
		}
				
		if(jQuery('#address-form').val().length<=0){
			document.getElementById("address-error").style.display = 'block';
			console.log("address error");
			address = false;
		} else {
			document.getElementById("address-error").style.display = 'none';
			address = true;
		}
		
		if(jQuery('#age-form').val().length<=0){
			document.getElementById("age-error").innerHTML = "This field is required";
			document.getElementById("age-error").style.display = 'block';
			console.log("age-error");
			age = false;
		} else if(isNaN(jQuery('#age-form').val())){
			document.getElementById("age-error").innerHTML = "Please enter a number";
			document.getElementById("age-error").style.display = 'block';
			console.log("not a number");
			age = false;
		} else {
			document.getElementById("age-error").style.display = 'none';
			age = true;
		}

		if($("input:checked").val()==0||$("input:checked").val()==1){
			document.getElementById("adult-error").style.display = 'none';
			adult = true;
		} else {
			document.getElementById("adult-error").style.display = 'block';
			console.log("adult minor error");
			adult = false;
		}
		if($("input:checked").val()==1){
			console.log("d");
			isminor = true;
			if(jQuery('#guardian-form').val().length<=0){
				document.getElementById("guardian-error").style.display = 'block';
				console.log("guardian error");
				guardian = false;
			} else {
				document.getElementById("guardian-error").style.display = 'none';
				guardian = true;
			}
		} else {
			isminor = false;
			document.getElementById("guardian-error").style.display = 'none';
		}
		
		if(fname && lname && email && phone && address && age && adult && ((isminor && guardian) || !isminor)){
			fine = true;
		}
		console.log("ndd");
		console.log(fname);
		console.log(lname);
		console.log(email);
		console.log(phone);
		console.log(address);
		console.log(age);
		console.log(adult);
		console.log(isminor);
		console.log(guardian);
		console.log(fine);
		if(fine){
			krunners_submit(event);
		}
	});
});
