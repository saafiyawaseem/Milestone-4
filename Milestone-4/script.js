var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//now will be form submit
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page will be reload
    //collect  user input data;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate resume dynamically;
    var resumeHTML = "\n<h2><b> Editable Resume</b></h2>\n\n<h3>Personal Information</h3>\n\n<p><b>Name:</b><span contenteditable =\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable =\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b><span contenteditable =\"true\">").concat(phone, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable =\"true\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p contenteditable =\"true\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable =\"true\">").concat(skills, "</p>\n");
    //display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing');
    }
});
