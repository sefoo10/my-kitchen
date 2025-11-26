// قاعدة البيانات - تخزين محلي
let products = JSON.parse(localStorage.getItem('products')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// دالة حفظ البيانات
function saveData() {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('orders', JSON.stringify(orders));
}

// بيانات أولية للاختبار (اختياري)
if (products.length === 0) {
    products = [
        {
            id: 1,
            name: "كشري",
            description: "أرز وشعرية وعدس بصلصة طماطم",
            price: 50,
            image: "🍛",
            available: true,
            featured: true,
            createdAt: new Date().toISOString()
        },
        {
            id: 2,
            name: "مكرونة بشاميل",
            description: "مكرونة باللحمة المفرومة والبشاميل",
            price: 80,
            image: "🍝",
            available: true,
            featured: true,
            createdAt: new Date().toISOString()
        }
    ];
    saveData();
}