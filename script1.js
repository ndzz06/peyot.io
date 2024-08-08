document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const loveEffect = document.getElementById('loveEffect');

    // Tampilkan pesan dengan delay
    setTimeout(() => {
        message.style.opacity = 1;
    }, 500);

    // Buat efek love
    createLoveEffect();

    function createLoveEffect() {
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.width = Math.random() * 60 + 30 + 'px';
            heart.style.height = heart.style.width;
            loveEffect.appendChild(heart);

            // Hapus hati setelah animasi selesai
            setTimeout(() => heart.remove(), 5000);
        }
    }
});
