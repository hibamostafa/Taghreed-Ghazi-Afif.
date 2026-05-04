# 🔥 إعداد Firebase للتطبيق

## الخطوة 1: إنشاء مشروع Firebase

1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. اضغط على "Add project" أو "Create a project"
3. أدخل اسم المشروع
4. اتبع الخطوات لإكمال إنشاء المشروع

## الخطوة 2: إضافة تطبيق Android

1. في لوحة Firebase، اضغط على أيقونة Android
2. أدخل:
   - **Package name**: `com.example.portfolio_mobile_app` (أو اسم package خاص بك)
   - **App nickname**: (اختياري)
   - **Debug signing certificate SHA-1**: (اختياري - للحصول عليه استخدم `keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android`)
3. اضغط "Register app"
4. حمل ملف `google-services.json`
5. ضع الملف في: `mobile-app/android/app/google-services.json`

## الخطوة 3: إضافة تطبيق iOS

1. في لوحة Firebase، اضغط على أيقونة iOS
2. أدخل:
   - **Bundle ID**: `com.example.portfolioMobileApp` (أو Bundle ID خاص بك)
   - **App nickname**: (اختياري)
3. اضغط "Register app"
4. حمل ملف `GoogleService-Info.plist`
5. ضع الملف في: `mobile-app/ios/Runner/GoogleService-Info.plist`

## الخطوة 4: تفعيل Firebase Services

### Authentication
1. في Firebase Console، اذهب إلى **Authentication**
2. اضغط "Get started"
3. في تبويب "Sign-in method"، فعّل:
   - **Email/Password**
   - أي طرق أخرى تريد استخدامها

### Cloud Firestore
1. في Firebase Console، اذهب إلى **Firestore Database**
2. اضغط "Create database"
3. اختر:
   - **Start in test mode** (للاختبار)
   - أو **Start in production mode** (للإنتاج)
4. اختر موقع قاعدة البيانات
5. اضغط "Enable"

### Firebase Storage
1. في Firebase Console، اذهب إلى **Storage**
2. اضغط "Get started"
3. اتبع الخطوات لتفعيل Storage

## الخطوة 5: تحديث ملفات Android

### android/build.gradle
تأكد من وجود:
```gradle
buildscript {
    dependencies {
        classpath 'com.google.gms:google-services:4.4.0'
    }
}
```

### android/app/build.gradle
في نهاية الملف، أضف:
```gradle
apply plugin: 'com.google.gms.google-services'
```

## الخطوة 6: تحديث ملفات iOS

### ios/Podfile
تأكد من وجود:
```ruby
platform :ios, '12.0'
```

ثم قم بتشغيل:
```bash
cd ios
pod install
cd ..
```

## الخطوة 7: اختبار الإعداد

1. قم بتشغيل التطبيق:
```bash
flutter run
```

2. جرّب تسجيل الدخول والتسجيل

## 📝 ملاحظات مهمة

- **لا ترفع** ملفات `google-services.json` و `GoogleService-Info.plist` إلى GitHub (تم إضافتها إلى .gitignore)
- استخدم متغيرات البيئة للمعلومات الحساسة
- راجع قواعد الأمان في Firebase Console قبل النشر

## 🔗 روابط مفيدة

- [Firebase Documentation](https://firebase.google.com/docs)
- [FlutterFire Documentation](https://firebase.flutter.dev/)
- [Firebase Console](https://console.firebase.google.com/)

