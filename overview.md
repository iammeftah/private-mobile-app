# Private Couples Mobile App - Project Overview

## 🎯 Project Goal
Build a **private mobile application** for **two users only** (you and your wife) that runs on:
- **Your iPhone** (iOS)
- **Your wife's Android phone**

**Key Requirements:**
- ✅ No App Store or Play Store publishing
- ✅ No server hosting costs
- ✅ No monthly fees
- ✅ 100% free forever (using Firebase free tier)
- ✅ Manual APK/IPA installation on devices

---

## 🛠 Tech Stack (CONFIRMED WORKING)

### **Frontend**
- **React Native** with **Expo** (~54.0.25) ✅
- **React Navigation v6** for navigation ✅
- **NativeWind v2** (Tailwind CSS for React Native) ✅
- **TypeScript** for type safety ✅

### **Backend (Serverless - FREE) - TODO**
- **Firebase Authentication** - Login system for 2 users
- **Firestore Database** - Real-time data sync (posts, messages, user data)
- **Firebase Storage** - Image/video uploads
- **No servers required** - Completely serverless architecture

### **Key Dependencies (WORKING VERSIONS)**
```json
{
  "expo": "~54.0.25",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "expo-status-bar": "~3.0.8",
  "@react-navigation/native": "^6.1.18",
  "@react-navigation/bottom-tabs": "^6.6.1",
  "@react-navigation/native-stack": "^6.11.0",
  "react-native-gesture-handler": "~2.28.0",
  "react-native-safe-area-context": "^4.14.1",
  "react-native-screens": "~4.16.0",
  "nativewind": "^2.0.11",
  "tailwindcss": "^3.3.2"
}
```

**IMPORTANT NOTES:**
- React Navigation v7 does NOT work with Expo 54 - causes "Unable to convert string to floating point" errors
- Must use React Navigation v6.x for compatibility
- NativeWind v2 requires cache clearing after adding new directories

---

## 📱 App Features (Planned)

### **Phase 1: Core Features (Current Focus)**
1. ✅ **Project Setup & Navigation** (COMPLETED)
   - Expo project initialized
   - React Navigation v6 configured
   - Bottom dock navigation with 4 tabs
   - Separate screen files organized in `/src` folder
   - NativeWind v2 styling working

2. 🚧 **Authentication System** (NEXT)
   - Email/password login
   - User registration
   - Password reset
   - Profile management

3. 🚧 **Private Chat**
   - Real-time 1-on-1 messaging
   - Send text messages
   - Send photos/videos
   - Read receipts
   - Message history

4. 🚧 **Photo Feed**
   - Instagram-like feed for sharing moments
   - Like and comment on posts
   - Upload multiple photos
   - Private photo gallery

5. 🚧 **User Profile**
   - Edit profile information
   - Update profile picture
   - View shared statistics
   - Account settings

### **Phase 2: Advanced Features (Future)**
- 📅 Shared calendar for date planning
- 📝 Shared to-do lists
- 💝 Love notes/quick messages
- 🎯 Bucket list tracker
- 📊 Relationship milestones
- 🎂 Anniversary reminders

---

## 📂 Project Structure (CURRENT)
```
private-couples-app/
├── src/
│   ├── navigation/
│   │   └── routes.tsx              # Route definitions & types ✅
│   ├── components/
│   │   └── ui/
│   │       └── Dock.tsx            # Bottom tab navigation ✅
│   └── screens/
│       ├── HomeScreen.tsx          # Dashboard ✅
│       ├── ChatScreen.tsx          # Messages placeholder ✅
│       ├── PhotosScreen.tsx        # Photo gallery placeholder ✅
│       └── ProfileScreen.tsx       # User profile placeholder ✅
│
├── App.tsx                         # Main app entry ✅
├── index.ts                        # Root component registration ✅
├── app.json                        # Expo configuration ✅
├── babel.config.js                 # Babel config with NativeWind ✅
├── tailwind.config.js              # Tailwind CSS config ✅
├── tsconfig.json                   # TypeScript config ✅
├── package.json                    # Dependencies ✅
└── Overview.md                     # This file ✅
```

**Files to be created:**
```
├── services/                       # Backend services (TODO)
│   ├── firebase.ts                 # Firebase initialization
│   ├── auth.ts                     # Authentication service
│   ├── firestore.ts                # Database operations
│   ├── storage.ts                  # File uploads
│   └── types.ts                    # TypeScript types
│
├── hooks/                          # Custom React hooks (TODO)
│   ├── useAuth.ts                  # Auth state management
│   └── usePosts.ts                 # Posts data
│
├── store/                          # State management (TODO)
│   ├── authStore.ts                # Global auth state
│   └── postStore.ts                # Posts state
│
├── utils/                          # Helper functions (TODO)
│   └── validation.ts               # Form validation
│
└── .env                            # Firebase credentials (TODO)
```

---

## 🔧 Current Progress

### ✅ **Phase 1 - COMPLETED**
1. **Project Setup**
   - ✅ Expo project created with TypeScript template
   - ✅ All dependencies installed with correct versions
   - ✅ TypeScript configured
   - ✅ NativeWind v2 (Tailwind) set up and working
   - ✅ Babel configuration for NativeWind

2. **Navigation System**
   - ✅ React Navigation v6 installed (v7 incompatible)
   - ✅ Bottom tab navigator (Dock) created
   - ✅ 4 main screens created: Home, Chat, Photos, Profile
   - ✅ Navigation working between all tabs
   - ✅ Organized file structure with `/src` folder

3. **UI Components**
   - ✅ HomeScreen with styled placeholders
   - ✅ ChatScreen with message UI mockup
   - ✅ PhotosScreen with photo grid layout
   - ✅ ProfileScreen with user info and settings
   - ✅ Bottom dock with emoji labels (🏠💬📸👤)
   - ✅ Tailwind CSS classes working in all screens

4. **Styling System**
   - ✅ NativeWind v2 integrated
   - ✅ Tailwind config pointing to `/src` folder
   - ✅ All screens using Tailwind utility classes
   - ✅ Color schemes: Blue, Pink, Purple for sections

### 🚧 **Phase 2 - IN PROGRESS / TODO**

#### **NEXT IMMEDIATE STEPS:**
1. **Firebase Backend Setup**
   - 🚧 Create Firebase project
   - 🚧 Get Firebase credentials
   - 🚧 Create `.env` file with credentials
   - 🚧 Initialize Firebase SDK
   - 🚧 Set up Authentication
   - 🚧 Configure Firestore database
   - 🚧 Configure Firebase Storage

2. **Authentication Screens**
   - 🚧 Create LoginScreen.tsx
   - 🚧 Create SignupScreen.tsx
   - 🚧 Create ForgotPasswordScreen.tsx
   - 🚧 Build login form UI
   - 🚧 Build signup form UI
   - 🚧 Connect to Firebase Auth service
   - 🚧 Add form validation

3. **State Management**
   - 🚧 Install Zustand for state management
   - 🚧 Create auth store
   - 🚧 Create useAuth hook
   - 🚧 Implement auth persistence

4. **Chat Feature**
   - 🚧 Design real-time messaging UI
   - 🚧 Create Firestore chat service
   - 🚧 Implement message sending/receiving
   - 🚧 Add image/video upload in chat
   - 🚧 Add message notifications

5. **Photo Feed**
   - 🚧 Create post creation UI
   - 🚧 Integrate image picker
   - 🚧 Implement Firebase Storage upload
   - 🚧 Build feed display with infinite scroll
   - 🚧 Add like/comment functionality

---

## 🚀 Build & Deployment Strategy

### **Development**
```bash
npx expo start          # Start dev server
npx expo start -c       # Start with cache clear (use after config changes)
```

### **Android Build (Wife's Phone)**
```bash
# Generate APK
npx expo run:android --variant release

# Or build locally
eas build --platform android --local
```

**Installation:**
- Transfer `.apk` file to wife's Android phone
- Enable "Install from Unknown Sources"
- Tap APK to install

### **iOS Build (Your iPhone)**
```bash
# Connect iPhone via USB
npx expo run:ios --configuration Release
```

**Installation:**
- Opens Xcode automatically
- Click "Run" in Xcode
- App installs directly to your iPhone
- No Apple Developer account needed for personal device

---

## 💰 Cost Analysis

| Service | Cost | Notes |
|---------|------|-------|
| Firebase Auth | **FREE** | Unlimited users |
| Firestore Database | **FREE** | 50K reads/day, 20K writes/day |
| Firebase Storage | **FREE** | 5GB storage, 1GB/day download |
| Expo Development | **FREE** | No EAS subscription needed |
| Hosting | **$0** | No servers required |
| **TOTAL** | **$0/month** | 2 users will NEVER exceed free limits |

---

## 🔧 Configuration Files

### **babel.config.js**
```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'],
  };
};
```

### **tailwind.config.js**
```js
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### **tsconfig.json**
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true
  }
}
```

---

## 🛑 Known Issues & Solutions

### **1. React Navigation v7 Incompatibility**
- **Error**: "Unable to convert string to floating point value: 'large'"
- **Solution**: Use React Navigation v6.x instead of v7
- **Status**: ✅ Fixed

### **2. NativeWind Not Working in /src Folder**
- **Error**: Tailwind classes not applying in screen files
- **Solution**: Add `"./src/**/*.{js,jsx,ts,tsx}"` to tailwind.config.js content array
- **Solution**: Run `npx expo start -c` to clear cache
- **Status**: ✅ Fixed

### **3. Gesture Handler Version Mismatch**
- **Error**: Peer dependency conflicts
- **Solution**: Use `react-native-gesture-handler@~2.28.0` for Expo 54
- **Status**: ✅ Fixed

### **4. React Native Screens Version**
- **Error**: Version conflicts with navigation
- **Solution**: Use `react-native-screens@~4.16.0` for best compatibility
- **Status**: ✅ Fixed

---

## 📚 Key Documentation

- **Expo**: https://docs.expo.dev/
- **React Navigation v6**: https://reactnavigation.org/docs/6.x/getting-started
- **NativeWind v2**: https://www.nativewind.dev/v2/overview
- **Firebase Web SDK**: https://firebase.google.com/docs/web/setup
- **React Native**: https://reactnative.dev/docs/getting-started

---

## 🎯 Success Criteria

### **Phase 1 (Setup) - ✅ COMPLETED**
- ✅ App runs on both iOS and Android via Expo Go
- ✅ Bottom navigation dock with 4 tabs working
- ✅ All screens accessible and styled with Tailwind
- ✅ No crashes or navigation errors

### **Phase 2 (Authentication) - IN PROGRESS**
- 🚧 Firebase backend initialized
- 🚧 Users can register with email/password
- 🚧 Users can login and logout
- 🚧 Auth state persists across app restarts

### **Phase 3 (Features) - TODO**
- 🚧 Real-time chat works between both devices
- 🚧 Photos can be uploaded and viewed by both users
- 🚧 Profile can be edited
- 🚧 App works offline with data sync when online

### **Final Goal**
- 🚧 Both users are happy with the experience!
- 🚧 No monthly costs incurred
- 🚧 App is stable and bug-free

---

## 🔐 Security Considerations (TODO)

1. **Firebase Rules**:
   - Set Firestore rules to allow only 2 authenticated users
   - Restrict Storage access to authenticated users only
   - Enable read/write only for user's own data

2. **Environment Variables**:
   - Store Firebase credentials in `.env` file
   - Add `.env` to `.gitignore`
   - Never commit credentials to version control

3. **Authentication**:
   - Email/password authentication only
   - Password reset via email
   - Secure token storage

---

## 📝 Development Commands Reference

```bash
# Start development server
npx expo start

# Start with cache clear (after config changes)
npx expo start -c

# Install dependencies
npm install

# Clear all caches (if having issues)
rm -rf node_modules/.cache
rm -rf .expo
npx expo start --clear

# Check package versions
npm list <package-name>

# Install specific version
npm install <package-name>@<version>
```

---

## 🎨 Current UI Color Scheme

- **Primary**: Blue (#3b82f6) - Navigation, CTAs
- **Secondary**: Pink (#ec4899) - Accents
- **Tertiary**: Purple (#a855f7) - Highlights
- **Text**: Gray-800 (#1f2937) - Headings
- **Text Secondary**: Gray-600 (#4b5563) - Body text
- **Background**: White (#ffffff)
- **Cards**: Gray-50 (#f9fafb)

---

**Last Updated**: November 24, 2025  
**Current Status**: ✅ Phase 1 Complete - Navigation & UI Setup Done  
**Next Milestone**: Firebase Backend Integration & Authentication System  
**Developer Notes**: All screens are placeholders with styled mockups. Ready for Firebase integration and real functionality implementation.
