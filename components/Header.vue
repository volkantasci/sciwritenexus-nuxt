<template>
  <header class="header" :class="{ dark: isDarkMode }">
    <div class="header-background"></div>
    <div class="container">
      <div class="logo" @click="goToHomepage">
        <img 
          :src="isDarkMode ? '/images/nexus-logo-dark.svg' : '/images/nexus-logo-light.svg'" 
          :alt="language === 'tr' ? 'SciWriteNexus Logo' : 'SciWriteNexus Logo'"
          class="logo-image"
        />
      </div>
      <nav class="main-nav">
        <ul>
          <li v-for="(item, index) in navItems" :key="item.id" :style="{ animationDelay: `${index * 0.1}s` }">
            <a :href="item.href" class="nav-link" @click="scrollToSection(item.sectionId)">
              <span v-if="language === 'tr'">{{ item.text.tr }}</span>
              <span v-else>{{ item.text.en }}</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="header-controls">
        <div class="control-buttons">
          <button
            @click="toggleLanguage"
            class="control-button language-button"
            :aria-label="language === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'"
          >
            {{ language === 'tr' ? 'EN' : 'TR' }}
          </button>
          
          <button
            @click="toggleTheme"
            class="control-button theme-button"
            :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            {{ isDarkMode ? '☀️' : '🌙' }}
          </button>
        </div>
        
        <div class="evaluation-btn">
          <button class="btn btn-primary" v-if="language === 'tr'" @click="scrollToSection('contact')">Ücretsiz Değerlendirme</button>
          <button class="btn btn-primary" v-else @click="scrollToSection('contact')">Free Evaluation</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { onMounted } from 'vue';
import { useTheme } from '../composables/useTheme';

export default {
  name: 'Header',
  props: {
    language: {
      type: String,
      default: 'tr'
    }
  },
  setup() {
    const { isDarkMode, toggleTheme, updateBodyTheme } = useTheme();
    
    return {
      isDarkMode,
      toggleTheme,
      updateBodyTheme
    };
  },
  data() {
    return {
      navItems: [
        {
          id: 1,
          text: {
            tr: 'Hizmetler',
            en: 'Services'
          },
          href: '#services',
          sectionId: 'services'
        },
        {
          id: 2,
          text: {
            tr: 'Süreç',
            en: 'Process'
          },
          href: '#process',
          sectionId: 'process'
        },
        {
          id: 3,
          text: {
            tr: 'Blog',
            en: 'Blog'
          },
          href: `/${this.language}/blog`,
          sectionId: 'blog'
        },
        {
          id: 4,
          text: {
            tr: 'İletişim',
            en: 'Contact'
          },
          href: '#contact',
          sectionId: 'contact'
        }
      ]
    }
  },
  methods: {
    toggleLanguage() {
      const newLang = this.language === 'tr' ? 'en' : 'tr';
      this.$router.push(`/${newLang}`);
    },
    scrollToSection(sectionId) {
      if (sectionId === 'blog') {
        // Navigate to blog page based on current language
        this.$router.push(`/${this.language}/blog`);
        return;
      }
      
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Adjust for header height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    },
    goToHomepage() {
      this.$router.push(`/${this.language}`);
    }
  }
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  box-shadow: 0 2px 30px rgba(0,0,0,0.1);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9 42.314 0h1.414zM16.686 0L10.2 6.485 11.616 7.9 17.686 0h-1.414zm24.97 0l6.486 6.485-1.414 1.415-7.9-7.9h2.828zM22.344 0L15.86 6.485l1.414 1.415 7.9-7.9h-2.83zm17.657 0L27.8 13.857l1.414 1.414 13.343-13.343h-2.556zM20 0L6.657 13.343 8.07 14.757 21.414 1.414 20 0zm12.686 0l-3.343 3.343-1.414-1.414L31.1 0h1.586zM27.314 0l3.343 3.343 1.414-1.414L28.9 0h-1.586zm-4.97 0l-2.343 2.343-1.414-1.414L20.9 0h1.414zM37.656 0l2.343 2.343 1.414-1.414L39.1 0h-1.414zM34.97 0l-1.343 1.343-1.414-1.414L33.556 0h1.414zM25.03 0l1.343 1.343 1.414-1.414L26.444 0H25.03z' fill='%233498db' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.4;
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  width: 100%;
}

.logo-image {
  height: 100px;
  width: auto;
  transition: all 0.3s ease;
}

.tagline {
  margin: 0;
  font-size: 0.95rem;
  color: #7f8c8d;
  transition: color 0.3s;
  font-weight: 400;
  letter-spacing: 0.3px;
  line-height: 1.3;
}

.main-nav ul {
  display: flex;
  list-style: none;
}

.main-nav li {
  margin: 0 1.2rem;
}

.nav-link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  font-size: 1.05rem;
  letter-spacing: 0.1px;
  padding: 0.5rem 0;
}

.nav-link:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 50%;
  background: linear-gradient(90deg, #3498db, #2c3e50);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: translateX(-50%);
}

.nav-link:hover:after {
  width: 100%;
}

.nav-link:hover {
  color: #3498db;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.control-buttons {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.control-button {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: #2c3e50;
  border: 1px solid rgba(44, 62, 80, 0.15);
  padding: 0.7rem 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  letter-spacing: 0.1px;
  transform: translateZ(0);
}

.control-button:hover {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-3px) scale(1.05);
}

.evaluation-btn .btn-primary {
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
  font-size: 1rem;
  letter-spacing: 0.2px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.evaluation-btn .btn-primary:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(52, 152, 219, 0.5);
}

/* Dark mode styles */
.dark {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.dark .header-background {
  opacity: 0.15;
}


.dark .tagline {
  color: #e3f2fd;
  font-weight: 500;
}

.dark .nav-link {
  color: #ffffff;
  font-weight: 600;
}

.dark .nav-link:hover {
  color: #e0e0e0;
  transform: translateY(-1px);
}

.dark .nav-link:after {
  background: linear-gradient(90deg, #e0e0e0, #cccccc);
}

.dark .control-button {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.dark .control-button:hover {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
  color: #ffffff;
  transform: translateY(-2px);
}

.dark .evaluation-btn .btn-primary {
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.dark .evaluation-btn .btn-primary:hover {
  background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%);
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Animations */
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.main-nav li {
  animation: slideInDown 0.6s ease both;
}

/* Responsive design */
@media (max-width: 1200px) {
  .header {
    padding: 1rem;
  }
  
  .main-nav li {
    margin: 0 0.8rem;
  }
  
  .logo-image {
    height: 55px;
  }
}

@media (max-width: 992px) {
  .main-nav li {
    margin: 0 0.6rem;
  }
  
  .nav-link {
    font-size: 0.95rem;
  }
  
}

@media (max-width: 992px) {
  .main-nav {
    display: none;
  }
  
  .header-controls {
    gap: 0.8rem;
  }
  
  .control-button {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    min-width: 35px;
  }
  
  .evaluation-btn .btn-primary {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 0.8rem 1rem;
    position: relative;
  }
  
  .container {
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
  
  .logo {
    text-align: left;
    flex: 1;
  }
  
  .logo-image {
    height: 50px;
  }
  
  .tagline {
    font-size: 0.8rem;
    display: none;
  }
  
  .header-controls {
    flex-direction: row;
    gap: 0.5rem;
    justify-content: flex-end;
  }
  
  .control-buttons {
    margin-bottom: 0;
    gap: 0.3rem;
  }
  
  .control-button {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    height: 36px;
    min-width: 32px;
  }
  
  .evaluation-btn .btn-primary {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    height: 36px;
    white-space: nowrap;
  }
  
  .theme-button {
    font-size: 1rem;
  }
  
}

@media (max-width: 480px) {
  .header {
    padding: 0.6rem 0.8rem;
  }
  
  .logo-image {
    height: 45px;
  }
  
  .control-button {
    padding: 0.4rem 0.6rem;
    font-size: 0.75rem;
    height: 32px;
  }
  
  .evaluation-btn .btn-primary {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    height: 32px;
  }
  
  .theme-button {
    font-size: 0.9rem;
  }
}
</style>