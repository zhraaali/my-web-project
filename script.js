// الانتظار حتى تحميل عناصر الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {

    // === 1. تفاعل الصفحة الأولى: تبديل الوضع الداكن ===
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            // تغيير نص الزر بناءً على الوضع الحالي
            if (document.body.classList.contains('dark-theme')) {
                themeBtn.innerText = '💡 الوضع النهاري';
            } else {
                themeBtn.innerText = '🌙 الوضع الليلي';
            }
        });
    }

    // === 2. تفاعل الصفحة الثانية: قراءة المزيد في المدونة ===
    const blogButtons = document.querySelectorAll('.read-more-btn');
    blogButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const articleTitle = e.target.getAttribute('data-title');
            alert(`أنت تحاول الآن قراءة مقال: "${articleTitle}"\nسيتم فتح المقال كاملاً قريباً!`);
        });
    });

    // === 3. تفاعل الصفحة الثالثة: عداد متجر المنتجات ===
    let cartCount = 0;
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartBadge = document.getElementById('cartCounter');

    if (cartBadge) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                cartCount++;
                cartBadge.innerText = cartCount;
                
                // تأثير بصري خفيف للتنبيه
                alert('🎉 تم إضافة المنتج بنجاح إلى السلة!');
            });
        });
    }

    // === 4. تفاعل الصفحة الخامسة: التحقق من نموذج الاستشارة ===
    const contactForm = document.getElementById('consultationForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const nameInput = document.getElementById('fullName').value.trim();
            const emailInput = document.getElementById('emailAddress').value.trim();
            const messageInput = document.getElementById('messageText').value.trim();

            if (nameInput === '' || emailInput === '' || messageInput === '') {
                e.preventDefault(); // منع إرسال النموذج
                alert('❌ يرجى ملء جميع الحقول المطلوبة قبل الإرسال.');
            } else {
                e.preventDefault(); // للمحاكاة فقط منعنا الإرسال الحقيقي
                alert(`Thank you, ${nameInput}! تم استلام طلبك بنجاح وسنتواصل معك.`);
                contactForm.reset();
            }
        });
    }
});

// === 5. تفاعل الصفحة الرابعة: منطق الحاسبة (خارج الـ DOMContentLoaded ليسهل استدعاؤه من الـ HTML)
const calcDisplay = document.getElementById('calcInput');

function appendValue(val) {
    if (calcDisplay) {
        calcDisplay.value += val;
    }
}

function clearCalc() {
    if (calcDisplay) {
        calcDisplay.value = '';
    }
}

function calculateResult() {
    if (calcDisplay && calcDisplay.value !== '') {
        try {
            // استخدام eval مبسط ومناسب لمشروع تدريبي مبتدئ
            calcDisplay.value = eval(calcDisplay.value);
        } catch (error) {
            alert('عملية حسابية غير صحيحة');
            clearCalc();
        }
    }
}