const dataPenimbangan = [100, 300, 220, 1000];
const dataPengukuran = [300, 720, 200, 253];

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    datasets: [
      {
        label: 'Penimbangan',
        data: dataPenimbangan,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
      },
      {
        label: 'Pengukuran',
        data: dataPengukuran,
        backgroundColor: '#101010',
        borderColor: '#101010',
        borderWidth: 1,
      },
    ],
  },
  options: {
    position: 'bottom',
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        display: true,
        ticks: { color: 'white', beginAtZero: true, min: 100, max: 1000 },
      },
      x: {
        display: true,
        ticks: { color: 'white', beginAtZero: true, min: 100, max: 1000 },
      },
    },
  },
});
