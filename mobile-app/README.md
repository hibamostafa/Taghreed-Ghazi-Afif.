
## 📱 عن التطبيق

تطبيق موبايل متكامل يعمل على iOS و Android مع Firebase للبيانات والـ Authentication.

## 🚀 التقنيات المستخدمة

- **Flutter** - Framework للتطوير
- **Dart** - لغة البرمجة
- **Firebase** - Backend Services
  - Authentication
  - Cloud Firestore
  - Firebase Storage
  - Cloud Messaging

## 📂 هيكل المشروع

```
mobile-app/
├── lib/
│   ├── main.dart
│   ├── models/
│   ├── screens/
│   ├── widgets/
│   ├── services/
│   │   └── firebase_service.dart
│   ├── utils/
│   └── constants/
├── android/
├── ios/
├── pubspec.yaml
└── README.md
```

## 🛠️ الإعداد والتشغيل

### المتطلبات:
- Flutter SDK (latest stable version)
- Android Studio / Xcode
- Firebase account

### خطوات الإعداد:

1. **تثبيت Flutter:**
```bash
flutter doctor
```

2. **تثبيت الحزم:**
```bash
cd mobile-app
flutter pub get
```

3. **إعداد Firebase:**
   - أنشئ مشروع جديد في [Firebase Console](https://console.firebase.google.com/)
   - أضف تطبيق Android/iOS
   - حمل ملفات التكوين:
     - `google-services.json` للمشروع Android
     - `GoogleService-Info.plist` للمشروع iOS
   - ضع الملفات في:
     - `android/app/google-services.json`
     - `ios/Runner/GoogleService-Info.plist`

4. **تشغيل التطبيق:**
```bash
flutter run
```

## 📦 الحزم المستخدمة

راجع ملف `pubspec.yaml` للحزم الكاملة.

## 🔧 الميزات

- ✅ Authentication (تسجيل الدخول والتسجيل)
- ✅ Cloud Firestore (قاعدة البيانات)
- ✅ Firebase Storage (تخزين الملفات)
- ✅ Real-time Updates
- ✅ Push Notifications

## 📝 ملاحظات

- تأكد من تحديث ملفات Firebase configuration
- أضف ملفات `.env` للمتغيرات الحساسة
- راجع ملف `firebase_service.dart` لإعدادات Firebase

