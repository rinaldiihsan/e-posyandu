document.getElementById('logout-button').addEventListener('click', function () {
  if (confirm('Apakah Anda yakin ingin keluar?')) {
    alert('Anda berhasil logout!');
  } else {
    alert('Anda membatalkan logout.');
  }
});
