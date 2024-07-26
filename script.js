const jobTitles = [
    'Developer', 
    'Designer', 
    'Leader', 
    'Analyst', 
    'Engineer', 
    'Software Engineer', 
    'Data Scientist', 
    'Systems Architect', 
    'Database Administrator', 
    'Network Engineer', 
    'IT Consultant', 
    'Cybersecurity Specialist', 
    'Cloud Engineer', 
    'DevOps Engineer', 
    'AI/ML Engineer', 
    'UX/UI Designer', 
    'Quality Assurance Tester', 
    'IT Project Manager', 
    'Front-end Developer', 
    'Back-end Developer', 
    'Full Stack Developer', 
    'IT Support Specialist', 
    'Mobile App Developer', 
    'Blockchain Developer', 
    'Technical Writer'
  ];

let currentTitleIndex = 0;

function updateJobTitle() {
    const jobTitleElement = document.getElementById('job-title');
    jobTitleElement.style.opacity = 0; // Fade out effect

    setTimeout(() => {
        jobTitleElement.textContent = jobTitles[currentTitleIndex];
        jobTitleElement.style.opacity = 1; // Fade in effect

        currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
    }, 500); // Delay for fade out effect

    setTimeout(updateJobTitle, 2000); // Change title every 2 seconds
}

updateJobTitle();
