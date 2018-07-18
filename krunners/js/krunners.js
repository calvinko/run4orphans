function krunners_submit(e) {
    console.log("krunners submit");
}

jQuery(document).ready(function($) {
    jQuery("#runner-register-btn").click(krunners_submit);
});
