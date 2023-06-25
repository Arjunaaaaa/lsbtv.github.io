  var iframe = document.getElementById('vidio');
    var offlineMessage = document.getElementById('offline-message');

    iframe.addEventListener('load', function() {
      // Fungsi ini akan dipanggil saat iframe selesai dimuat

      // Periksa status koneksi internet
      var online = navigator.onLine;

      if (!online) {
        // Tampilkan pesan jika tidak terhubung
        offlineMessage.style.display = 'block';
        iframe.style.display = 'none';
      }
    });

    // Periksa status koneksi saat memuat halaman
    var online = navigator.onLine;

    if (!online) {
      // Tampilkan pesan jika tidak terhubung
      offlineMessage.style.display = 'block';
      iframe.style.display = 'none';
    }
