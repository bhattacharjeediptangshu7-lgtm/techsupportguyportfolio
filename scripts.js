```javascript
// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Download Resume Button
  const downloadResumeBtn = document.getElementById('download-resume');
  downloadResumeBtn.addEventListener('click', () => {
    window.location.href = 'path/to/your/resume.pdf';
  });

  // Email Form Submission
  const emailForm = document.getElementById('email-form');
  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(emailForm);
    fetch('/send-email', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error('Error:', error));
  });

  // GitHub Contribution Button
  const contributeBtn = document.getElementById('contribute-btn');
  contributeBtn.addEventListener('click', () => {
    window.location.href = 'https://github.com/yourusername';
  });

  // Research Funding Form Submission
  const researchForm = document.getElementById('research-form');
  researchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(researchForm);
    fetch('/fund-research', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error('Error:', error));
  });

  // Smooth Animations and Transitions
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.transform = 'scale(1.05)';
      section.style.transition = 'transform 0.3s ease';
    });
    section.addEventListener('mouseleave', () => {
      section.style.transform = 'scale(1)';
      section.style.transition = 'transform 0.3s ease';
    });
  });
});
```