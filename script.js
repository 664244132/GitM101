document.addEventListener('DOMContentLoaded', () => {
    
    // --- Cart Logic ---
    let cartCount = 0;
    const cartCountEl = document.getElementById('cart-count');
    
    // Make addToCart globally accessible for inline onclick handlers
    window.addToCart = function() {
        cartCount++;
        cartCountEl.textContent = cartCount;
        
        // Simple animation
        cartCountEl.style.transform = 'scale(1.5)';
        cartCountEl.style.color = '#ff6b8b';
        setTimeout(() => {
            cartCountEl.style.transform = 'scale(1)';
            cartCountEl.style.color = 'inherit';
        }, 200);
        
        // Optional: show a mini toast
        const toast = document.createElement('div');
        toast.textContent = 'เพิ่มลงตะกร้าแล้ว! 🐰';
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.backgroundColor = '#ff85a1';
        toast.style.color = 'white';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '30px';
        toast.style.boxShadow = '0 4px 12px rgba(255, 133, 161, 0.4)';
        toast.style.zIndex = '1000';
        toast.style.fontWeight = '500';
        toast.style.transition = 'opacity 0.3s';
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 2000);
    };

    // --- Hero Slider Logic (Visual Only) ---
    const dots = document.querySelectorAll('.dot');
    const heroSection = document.querySelector('.hero-banner');
    const bgImages = [
        'images/hero.png',
        'images/pink_bunny.png',
        'images/white_bunny.png'
    ];
    const heroImageBg = document.querySelector('.hero-image-bg img');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Update active dot
            document.querySelector('.dot.active').classList.remove('active');
            dot.classList.add('active');
            
            // Update image (fade effect)
            if(heroImageBg) {
                heroImageBg.style.opacity = '0.5';
                setTimeout(() => {
                    heroImageBg.src = bgImages[index];
                    heroImageBg.style.opacity = '1';
                }, 150);
            }
        });
    });
    
});
