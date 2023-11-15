document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = {
    fullname: formData.get('user-name') + ' ' + formData.get('user-surname'),
    email: formData.get('user-email'),
    phone: formData.get('user-tel1') + formData.get('user-tel2') + formData.get('user-tel3'),
    subject: formData.get('msg-subj'),
    message: formData.get('msg').trim().replace(/\s+/g, ' ')
  };
  console.log(data);
});
