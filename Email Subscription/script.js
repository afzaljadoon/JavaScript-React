const scriptURL = 'https://script.google.com/macros/s/AKfycbzBXe2UfdbRk-ntS3N7SARAAnatrCy9oCp79Es4Y1xZez_scGQsyCbvT4gfwpG_cfE/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
       msg.innerHTML = "Thank  You For Subscribing!";
       setTimeout(function() {
        msg.innerHTML = ""
       }, 5000);
       form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })