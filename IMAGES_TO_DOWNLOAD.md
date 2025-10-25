# SoftXSol Website - Image Download Guide

## 🎯 **Exact Images to Download from https://softxsol.com/**

### **1. Hero Section Images:**
- **Main laptop/coding image** (center of hero section)
  - Save as: `src/assets/images/hero-laptop.jpg`
  - Used in: `Hero.js` component

### **2. Web Development Section:**
- **Web development service image** (right side of web dev section)
  - Save as: `src/assets/images/web-development.jpg`
  - Used in: `WebDevelopment.js` component

### **3. Team Section Images:**
- **Team member photos** (3 circular profile images)
  - Save as: `src/assets/images/team-member-1.jpg`
  - Save as: `src/assets/images/team-member-2.jpg`
  - Save as: `src/assets/images/team-member-3.jpg`
  - Used in: `Team.js` component

### **4. Process Section:**
- **Process workflow diagram/image**
  - Save as: `src/assets/images/process-workflow.jpg`
  - Used in: `Process.js` component

### **5. Services Section Images:**
- **Service card images** (if any specific images are used)
  - Save as: `src/assets/images/service-[name].jpg`

### **6. Logo & Branding:**
- **CXS Logo** (if available as separate file)
  - Save as: `src/assets/images/cxs-logo.svg` or `.png`

## 🎨 **Color Palette (Exact Match):**
- **Primary Orange:** `#FF4500` (OrangeRed)
- **Orange Light:** `#FF6B35`
- **Orange Dark:** `#E63900`
- **Black:** `#000000`
- **Gray:** `#1A1A1A`

## 🔄 **How to Replace Images:**

1. **Download images** from https://softxsol.com/
2. **Save them** in `my-app/src/assets/images/` with the exact names above
3. **Update component imports** if needed:
   ```javascript
   import heroImage from '../assets/images/hero-laptop.jpg';
   ```
4. **Replace ImagePlaceholder** components with actual img tags:
   ```javascript
   <img src={heroImage} alt="Hero" className="..." />
   ```

## 📱 **Responsive Image Guidelines:**
- **Hero images:** 1920x1080px minimum
- **Team photos:** 400x400px (square, will be cropped to circle)
- **Service images:** 800x600px
- **Process images:** 1200x600px

## ✅ **Current Implementation Status:**
- ✅ Exact color scheme implemented
- ✅ Responsive layout with Tailwind CSS
- ✅ Smooth scrolling navigation
- ✅ Logo hover effects with orange glow
- ✅ All sections structured as per SoftXSol design
- ✅ Single-page application (no routing)
- ⏳ **Need to add:** Actual images from website

## 🚀 **Final Steps:**
1. Download all images from SoftXSol website
2. Replace placeholder files
3. Test responsive behavior
4. Verify smooth scrolling works
5. Check logo hover glow effect