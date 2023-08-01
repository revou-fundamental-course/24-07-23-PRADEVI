function validateContactForm() {
      var yname = document.getElementById('yname').value;
      var email = document.getElementById('email').value;
      // var message = document.getElementById('message').value;

      // Cek apakah semua field telah diisi
      if (yname === '' || email === '') {
            // alert('Semua field harus diisi');
            return false;
      }

      // Cek apakah email valid menggunakan regular expression
      var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!email.match(emailRegex)) {
            // alert('Email tidak valid');
            return false;
      }

      // Jika semua validasi berhasil, maka form akan disubmit
      // alert('Form berhasil dikirim!');
      return true;
}