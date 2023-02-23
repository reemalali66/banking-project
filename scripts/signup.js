allAccounts = [
    {
        id: 1,
        name: "Current Account",
        accounttype: "It's the account that's as flexible as you need it to be.",
        image: "current.webp"
       
    },
    {
        id: 2,
        name: "Saving Account",
        accounttype:"It's the savings account you can open, operate and manage from the comfort of home.",
        image: "saving.webp"
       
    },
    {
        id: 3,
        name: "Minor Account",
        accounttype:"Simple, fun and designed for tomorrow, open a Minor account for your child today.",
        image: "minor.webp"
    }
];

content = ``;

allAccounts.forEach(account => {
    account = `<div class="col">
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                        style="background-image: url('${account.image}');">
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${account.name}</h3>
                            <p>  ${account.accounttype}</p>
                            <p id="p_${account.id}"></p>
                            <button id="lmore" > Learn More</button>
                           
                          
                           
                            
                        </div>
                    </div>
            </div>`;
    content += account;
});

document.getElementById("accountList").innerHTML = content;

allButtons = document.querySelectorAll("button");

/* Hand Writing Scripts */
var hdwrite = {
    
    line: function(start, end, strokeStyle='black', lineWidth=2) {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeStyle;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        ctx.closePath();
    },
    getMousePos: function(cs, evt) {
        var rect = cs.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
    },
    
}
/* Hand Writing Scripts */
var hdwrite = {
    
    clear: function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
}
/* Hand Writing Scripts */
var hdwrite = {
    download: function() {
        var myImage = canvas.toDataURL("image/png");
        var img = document.getElementById('hdwrite-image');
        img.src = myImage;
        var link = document.getElementById('link');
        link.setAttribute('download', 'hdwrite.png');
        link.setAttribute('href', myImage.replace("image/png", "image/octet-stream"));
        link.click();
    },
    
}



function validateForm(){
    let firstName = document.forms["loginForm"]["firstName"].value;
    if(firstName.length==0){
        document.getElementById("firstNameError").innerText = "Please enter your First Name.";
        return false;
    
    } 
    else if(firstName.length<=3 || firstName.length >=20){
        document.getElementById("firstNameError").innerText = "Please enter a name between 3 and 20 characters";
        return false;
    }

    let lastName = document.forms["loginForm"]["lastName"].value;
    if(lastName.length==0){
        document.getElementById("lastNameError").innerText = "Please enter your Last Name.";
        return false;
    
    }

    let userPhone = document.forms["loginForm"]["Telephone"].value;
    if(userPhone.length==0){
        document.getElementById("userPhoneError").innerText = "Please enter your Phone number."
        return false;
    }
    else if (userPhone.length<12 && userPhone.length>12){
        document.getElementById("userPhoneError").innerText = "the length should be 12 (start with 971)."
    }
   
    let userEmail = document.forms["loginForm"]["TuserEmail"].value;
    if(userEmail.length==0){
        document.getElementById("userEmailError").innerText = "Please enter your Email."
        return false;
    }

    let birthDate = document.forms["loginForm"]["Date"].value;
    if(birthDate.length==0){
        document.getElementById("DateError").innerText = "Please select your date of birth."
        return false;
    }
    else {
        let today=new Date();
        if (
            today.getFullYear() - birthDate.getFullYear() < 18 
        )
        {
            document.getElementById("DateError").innerText = "To open an account your age shoud be 18 or above"
        }
    }

    var radios = document.getElementsByName("payment");
    var formValid = false;
    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid){
    alert("Must check some option!");
    return formValid;
    }


    let cBox = document.forms["loginForm"]["checkbox"].value;
    if(!this.form.checkbox.checked)
    {
     alert('You must agree to the terms first.');
     return false;
    }

}





