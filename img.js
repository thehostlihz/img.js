
        const content = document.getElementById('content');
        content.addEventListener('submit', (e) => {
            e.preventDefault();
            // Mengumpulkan semua elemen input dalam form
            const formData = new FormData(content);
            // Membuat objek untuk menampung data
            const data = {};
            // Mengonversi FormData ke objek
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Membuat URLSearchParams untuk mengonversi data ke dalam format x-www-form-urlencoded
            const urlSearchParams = new URLSearchParams();
            for (const key in data) {
                urlSearchParams.append(key, data[key]);
            }

            // Ganti url ini dengan url domain kalian 
            fetch(`https://gapihxhdhjd.meso.my.id/index.php`, 
{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                // Menggunakan URLSearchParams untuk membuat body request
                body: urlSearchParams.toString()
            })
            .then(response => response.text())
            .then(data => {
                document.getElementById('result').innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    
