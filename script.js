// وظيفة تتبع التحويلات (Google Analytics/Ads)
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
// function gtag_report_conversion() {
//     if (typeof gtag === 'function') {
//         gtag('event', 'conversion', {
//             'send_to': 'AW-18092937491/n1KrCK_qpKkcEJOisbND'
//         });
//         console.log("تم تسجيل طلب تواصل بنجاح");
//     }
//     return true;
// }


// تأثير الهيدر عند التمرير
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

// إضافة تأثير الظهور التدريجي لكروت الشركات
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

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            console.log("Menu Clicked!"); // لو ظهرت الكلمة دي في الـ Inspect يبقى الكود شغال
            navLinks.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
            
            // تغيير الأيقونة
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    } else {
        console.error("لم يتم العثور على عنصر mobile-menu");
    }
});
if (overlay) {
    overlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');

        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
}