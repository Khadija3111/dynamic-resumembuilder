(() => {
    // Get form elements
    const pictureInput = document.getElementById('pictureInput') as HTMLInputElement;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const addressInput = document.getElementById('address') as HTMLInputElement;
    const linkedinInput = document.getElementById('linkedin') as HTMLInputElement;
    const educationInput = document.getElementById('education') as HTMLTextAreaElement;
    const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
    const projectsInput = document.getElementById('projects') as HTMLTextAreaElement;

    const generateResumeButton = document.getElementById('generateResumeButton') as HTMLButtonElement;
    const resumeSection = document.getElementById('resumeSection') as HTMLDivElement;
    const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;

    generateResumeButton.addEventListener('click', generateResume);

    function generateResume(): void {
        // Create a new FileReader instance to read the image file
        const fileReader = new FileReader();
        const file = pictureInput.files?.[0];

        // Read the image file as a data URL
        if (file) {
            fileReader.readAsDataURL(file);
            fileReader.onload = function(event) {
                const imageUrl = event.target?.result as string;
                displayResume(imageUrl);
            };
        } else {
            displayResume(null);
        }
    }

    function displayResume(imageUrl: string | null): void {
        // Create the resume content using form values
        const skillsArray = skillsInput.value.split('\n').map(skill => `<li>${skill}</li>`).join('');

        const resumeHTML = `
            <div class="resume">
                <div class="resume-left">
                    ${imageUrl ? `<img src="${imageUrl}" alt="Profile Picture" class="profile-picture">` : ''}
                    <h3>${nameInput.value}</h3>
                    <div class="contact-info"><i class="fas fa-envelope"></i><p>${emailInput.value}</p></div>
                    <div class="contact-info"><i class="fas fa-phone"></i><p>${phoneInput.value}</p></div>
                    <div class="contact-info"><i class="fas fa-map-marker-alt"></i><p>${addressInput.value}</p></div>
                    <div class="contact-info"><i class="fab fa-linkedin"></i><p>${linkedinInput.value}</p></div>
                </div>
                <div class="resume-right">
                    <div>
                        <h3>Education</h3>
                        <p>${educationInput.value}</p>
                    </div>
                    <div>
                        <h3>Experience</h3>
                        <p>${experienceInput.value}</p>
                    </div>
                    <div>
                        <h3>Projects</h3>
                        <p>${projectsInput.value}</p>
                    </div>
                    <div>
                        <h3>Skills</h3>
                        <ul class="skills-list">${skillsArray}</ul>
                    </div>
                </div>
            </div>
        `;

        resumeContent.innerHTML = resumeHTML;
        resumeSection.style.display = 'block';
    }
})();
