// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // Mobile nav toggle
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#nav');
  if (btn) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Year
  const y = document.getElementById('y'); 
  if (y) y.textContent = new Date().getFullYear();

  // Reveal on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { 
      if (e.isIntersecting) e.target.classList.add('visible'); 
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Set minimum date for appointment to today
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // Phone number validation and formatting - ENHANCED
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    // Prevent non-numeric input on keypress
    phoneInput.addEventListener('keypress', function(e) {
      const char = String.fromCharCode(e.which);
      if (!/[0-9]/.test(char)) {
        e.preventDefault();
      }
    });

    // Remove non-digits on paste or input
    phoneInput.addEventListener('input', function(e) {
      let value = this.value.replace(/\D/g, '');
      if (value.length > 10) {
        value = value.slice(0, 10);
      }
      this.value = value;
    });

    // Prevent paste of non-numeric content
    phoneInput.addEventListener('paste', function(e) {
      e.preventDefault();
      const pastedText = (e.clipboardData || window.clipboardData).getData('text');
      const numericOnly = pastedText.replace(/\D/g, '').slice(0, 10);
      this.value = numericOnly;
    });
  }

  // Appointment form submission to WhatsApp
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    console.log('Form found, attaching event listener');
    
    appointmentForm.addEventListener('submit', function(e) {
      console.log('Form submitted');
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const date = document.getElementById('date').value;
      const reason = document.getElementById('reason').value;
      
      console.log('Form data:', { name, phone, date, reason });
      
      // Validation
      if (!name) {
        alert('Please enter your name');
        return;
      }
      
      if (!phone || phone.length !== 10) {
        alert('Please enter a valid 10-digit mobile number');
        return;
      }
      
      // Format date if provided
      let formattedDate = '';
      if (date) {
        const dateObj = new Date(date + 'T00:00:00');
        formattedDate = dateObj.toLocaleDateString('en-IN', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
      }
      
      // Format the WhatsApp message
      let message = '*New Appointment Request*\n\n';
      message += '*Name:* ' + name + '\n';
      message += '*Mobile:* +91 ' + phone + '\n';
      if (formattedDate) message += '*Preferred Date:* ' + formattedDate + '\n';
      if (reason) message += '*Reason:* ' + reason + '\n';
      message += '\n_Sent from Mukund Madhav Hospital website_';
      
      console.log('WhatsApp message:', message);
      
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Your WhatsApp number (with country code, no + or spaces)
      const whatsappNumber = '919890942257';
      
      // Create WhatsApp URL
      const whatsappURL = 'https://wa.me/' + whatsappNumber + '?text=' + encodedMessage;
      
      console.log('Opening WhatsApp URL:', whatsappURL);
      
      // Open WhatsApp
      window.open(whatsappURL, '_blank');
      
      // Reset form after submission
      setTimeout(() => {
        appointmentForm.reset();
      }, 500);
    });
  } else {
    console.error('Appointment form not found!');
  }

  // Smooth scroll for "Book Appointment" CTA
  document.querySelectorAll('a[href="#book"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const bookSection = document.getElementById('book');
      if (bookSection) {
        bookSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
