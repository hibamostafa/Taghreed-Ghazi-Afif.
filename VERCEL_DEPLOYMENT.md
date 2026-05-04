# 🚀 دليل الرفع على Vercel

## خطوات الرفع على Vercel

### 1️⃣ إنشاء حساب Vercel
- توجه إلى [vercel.com](https://vercel.com)
- اضغط على "Sign Up"
- اختر "GitHub" للتسجيل السريع

### 2️⃣ ربط مشروعك على GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 3️⃣ الرفع على Vercel
**الطريقة الأولى (الأسهل):**
1. اذهب إلى [vercel.com/new](https://vercel.com/new)
2. اختر "Import Git Repository"
3. ربط مشروعك من GitHub
4. اضغط "Deploy"

**الطريقة الثانية (عبر CLI):**
```bash
npm install -g vercel
vercel
```

### 4️⃣ إعدادات المشروع في Vercel
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 5️⃣ متغيرات البيئة (إذا لزم الأمر)
في لوحة Vercel:
- اذهب إلى Settings → Environment Variables
- أضف أي متغيرات بيئة مطلوبة

---

## معلومات المشروع 📋

### عن المطور:
✅ **يمكنني بناء موقع ويب كامل** - مع جميع الميزات الحديثة والتصميم المتجاوب
✅ **تطبيق موبايل كامل** - تطبيق متكامل لـ iOS و Android مع Firebase

### تقنيات المشروع:
- React مع TypeScript
- Tailwind CSS للتصميم
- Vite كأداة البناء
- shadcn/ui للمكونات
- استجابة كاملة (Responsive Design)

### المميزات:
🎨 تصميم عصري وجميل
⚡ أداء سريع جداً
📱 يعمل على جميع الأجهزة
🔧 كود نظيف وقابل للصيانة
🎯 تجربة مستخدم ممتازة

---

## أوامر مفيدة 🛠️

```bash
# تشغيل في بيئة التطوير
npm run dev

# بناء للإنتاج
npm run build

# معاينة النسخة المُبنية
npm run preview

# التحقق من الأخطاء
npm run lint
```

---

## الدعم
إذا واجهت أي مشكلة أثناء الرفع، تواصل مع فريق دعم Vercel على:
[https://vercel.com/support](https://vercel.com/support)

---

**تم إعداده بواسطة:** المطور  
**التاريخ:** 2025
**الحالة:** جاهز للرفع ✅
