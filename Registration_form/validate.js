// console.log("hello....");

//form validation function...
function validate() {
    // const fname = document.getElementById('fname');
    // const lname = document.getElementById('lname');
    // const email = document.getElementById('email');
    // const Mobile_num = document.getElementById('Mobile');


    var msg = "";
    console.log(myform.dob.value);


    var fname_rex = /^[a-zA-Z]\w*$/;
    var lname_rex = /^[a-zA-Z]\w*$/;
    var email_rex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var pcode_rex = /^\d{6}$/;
    var Mobile_rex = /^\d{10}$/;
    var dob_rex = /^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$/;

    if (!fname_rex.test(myform.fname.value))
        msg += "Invalid first name\n"
    if (!lname_rex.test(myform.lname.value))
        msg += "Invalid last name\n";
    if (!Mobile_rex.test(myform.Mobile.value))
        msg += "Invalid Mobile number\n";
    if (!pcode_rex.test(myform.Pincode.value))
        msg += "Invalid pincode\n";
    if (!email_rex.test(myform.email.value))
        msg += "Invalid email\n";
    if (!dob_rex.test(myform.dob.value))
        msg += "invalid date of birth\n";
    if (msg != "") {
        alert(msg);
        msg = [];
        // console.log("msg");
        return false;
    }
    return true;
}