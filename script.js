(function () {
    // Get form elements
    var pictureInput = document.getElementById('pictureInput');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var addressInput = document.getElementById('address');
    var linkedinInput = document.getElementById('linkedin');
    var educationInput = document.getElementById('education');
    var experienceInput = document.getElementById('experience');
    var skillsInput = document.getElementById('skills');
    var projectsInput = document.getElementById('projects');
    var generateResumeButton = document.getElementById('generateResumeButton');
    var resumeSection = document.getElementById('resumeSection');
    var resumeContent = document.getElementById('resumeContent');
    generateResumeButton.addEventListener('click', generateResume);
    function generateResume() {
        var _a;
        // Create a new FileReader instance to read the image file
        var fileReader = new FileReader();
        var file = (_a = pictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        // Read the image file as a data URL
        if (file) {
            fileReader.readAsDataURL(file);
            fileReader.onload = function (event) {
                var _a;
                var imageUrl = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                displayResume(imageUrl);
            };
        }
        else {
            displayResume(null);
        }
    }
    function displayResume(imageUrl) {
        // Create the resume content using form values
        var skillsArray = skillsInput.value.split('\n').map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
        var resumeHTML = "\n            <div class=\"resume\">\n                <div class=\"resume-left\">\n                    ".concat(imageUrl ? "<img src=\"".concat(imageUrl, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : '', "\n                    <h3>").concat(nameInput.value, "</h3>\n                    <div class=\"contact-info\"><i class=\"fas fa-envelope\"></i><p>").concat(emailInput.value, "</p></div>\n                    <div class=\"contact-info\"><i class=\"fas fa-phone\"></i><p>").concat(phoneInput.value, "</p></div>\n                    <div class=\"contact-info\"><i class=\"fas fa-map-marker-alt\"></i><p>").concat(addressInput.value, "</p></div>\n                    <div class=\"contact-info\"><i class=\"fab fa-linkedin\"></i><p>").concat(linkedinInput.value, "</p></div>\n                </div>\n                <div class=\"resume-right\">\n                    <div>\n                        <h3>Education</h3>\n                        <p>").concat(educationInput.value, "</p>\n                    </div>\n                    <div>\n                        <h3>Experience</h3>\n                        <p>").concat(experienceInput.value, "</p>\n                    </div>\n                    <div>\n                        <h3>Projects</h3>\n                        <p>").concat(projectsInput.value, "</p>\n                    </div>\n                    <div>\n                        <h3>Skills</h3>\n                        <ul class=\"skills-list\">").concat(skillsArray, "</ul>\n                    </div>\n                </div>\n            </div>\n        ");
        resumeContent.innerHTML = resumeHTML;
        resumeSection.style.display = 'block';
    }
})();
