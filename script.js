document.querySelectorAll(".phone-link").forEach(el => {
    el.href = `tel:${siteConfig.contact.phone}`;
});
document.querySelectorAll(".whatsapp-link").forEach(el => {
    el.href = `https://wa.me/${siteConfig.contact.whatsapp}`;
});
document.querySelectorAll(".phone-text").forEach(el => {
    el.textContent = siteConfig.contact.phone;
});
document.querySelectorAll(".email-link").forEach(el => {
    el.href = `mailto:${siteConfig.contact.email}`;
    el.textContent = siteConfig.contact.email;
});
document.querySelectorAll(".developer-link").forEach(el => {
    el.href = `https://wa.me/${siteConfig.developer.whatsapp}`;
});
function gtag_report_conversion() {
            gtag('event', 'conversion', {
                'send_to': 'AW-18092937491/n1KrCK_qpKkcEJOisbND'
            });
            gtag('event', 'contact_click', {
                'send_to': 'G-NDR5MHCCXX',
                'event_category': 'Engagement',
                'event_label': 'WhatsApp/Phone'
            });
            console.log("تم إرسال الإحالة بنجاح!");
            return true; 
        }
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = "10px 5%";
        header.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
        header.style.padding = "15px 5%";
        header.style.background = "#ffffff";
    }
});


const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.company-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.nav-overlay');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const allLinks = document.querySelectorAll('.nav-links a');

   
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            toggleMenu();
        });
    }
    if (overlay) {
        overlay.addEventListener('click', () => {
            closeMenu();
        });
    }

    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768 && link.classList.contains('dropdown-toggle')) {
                return; 
            }
            closeMenu(); 
        });
    });

    
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('open');
            }
        });
    }
    
  
    
    function toggleMenu() {
        navLinks.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
        updateIcon();
    }

    function closeMenu() {
        navLinks.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        updateIcon();
    }

    function updateIcon() {
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
    if (overlay) {
    overlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');

        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
}
});



const container = document.getElementById('snowflakes');

if (container) {
    for(let i = 0; i < 20; i++){
        const el = document.createElement('i');
        el.className = 'snowflake fas fa-snowflake';
        el.style.cssText = `
            left: ${Math.random()*100}%;
            font-size: ${0.8 + Math.random()*1.5}rem;
            animation-duration: ${5 + Math.random()*10}s;
            animation-delay: ${Math.random()*10}s;
            opacity: ${0.2 + Math.random()*0.4};
        `;
        container.appendChild(el);
    }
}

   
    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if(e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer1.observe(el));
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});