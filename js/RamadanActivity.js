// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    function submitForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const helpOrganize = document.getElementById('helpOrganize').value;
      const dietaryRequirements = document.getElementById('dietaryRequirements').value;
      const attendees = document.getElementById('attendees').value;
  
      const volunteerData = {
        name,
        email,
        phone,
        helpOrganize,
        dietaryRequirements,
        attendees
      };
      localStorage.setItem('volunteerData', JSON.stringify(volunteerData));
  
      const successMessage = document.getElementById('successMessage');
      successMessage.style.display = 'block';
  
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000); 
  
      const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
      modal.hide();
  
      document.getElementById('volunteerForm').reset();
    }
  
    const submitButton = document.querySelector('.btn');
    if (submitButton) {
      submitButton.onclick = submitForm;
    }
  });