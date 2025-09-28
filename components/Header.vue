
<template>
  <header id="header" :class="{ scrolled: isScrolled, dark: isDarkMode }">
    <div class="animated-bg"></div>
    <div class="header-container">
      <div class="logo" @click="goToHomepage">
        <img
          :src="isDarkMode ? '/images/nexus-logo-dark.svg' : '/images/nexus-logo-light.svg'"
          alt="Science-Writing Nexus"
          class="logo-image"
        >
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav id="nav-menu">
        <ul>
          <li><a href="#home" @click="scrollToSection('home')">{{ getNavText('home') }}</a></li>
          <li class="dropdown">
            <a href="#consultancy">{{ getNavText('consultancy') }} ▼</a>
            <div class="dropdown-content">
              <a href="#english-editing" @click="scrollToSection('consultancy')">{{ getDropdownText('english-editing') }}</a>
              <a href="#article-writing" @click="scrollToSection('consultancy')">{{ getDropdownText('article-writing') }}</a>
              <a href="#thesis-writing" @click="scrollToSection('consultancy')">{{ getDropdownText('thesis-writing') }}</a>
              <a href="#peer-review" @click="scrollToSection('consultancy')">{{ getDropdownText('peer-review') }}</a>
              <a href="#revision-support" @click="scrollToSection('consultancy')">{{ getDropdownText('revision-support') }}</a>
              <a href="#publication-support" @click="scrollToSection('consultancy')">{{ getDropdownText('publication-support') }}</a>
              <a href="#project-writing" @click="scrollToSection('consultancy')">{{ getDropdownText('project-writing') }}</a>
              <a href="#data-analysis" @click="scrollToSection('consultancy')">{{ getDropdownText('data-analysis') }}</a>
            </div>
          </li>
          <li class="dropdown">
            <a href="#training">{{ getNavText('training') }} ▼</a>
            <div class="dropdown-content">
              <a href="#individual-training" @click="scrollToSection('training')">{{ getDropdownText('individual-training') }}</a>
              <a href="#group-training" @click="scrollToSection('training')">{{ getDropdownText('group-training') }}</a>
            </div>
          </li>
          <li><a href="#about" @click="scrollToSection('about')">{{ getNavText('about') }}</a></li>
          <li><a href="#contact" class="nav-cta" @click="scrollToSection('contact')">{{ getNavText('contact') }}</a></li>
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
      </div>
    </div>
  </header>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';
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
    const isScrolled = ref(false);
    
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      updateBodyTheme();
    });
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    
    return {
      isDarkMode,
      toggleTheme,
      updateBodyTheme,
      isScrolled
    };
  },
  data() {
    return {
      navItems: {
        home: {
          tr: 'Ana Sayfa',
          en: 'Home'
        },
        consultancy: {
          tr: 'Danışmanlık',
          en: 'Consultancy'
        },
        training: {
          tr: 'Eğitim',
          en: 'Training'
        },
        about: {
          tr: 'Hakkımızda',
          en: 'About'
        },
        contact: {
          tr: 'Ücretsiz Değerlendirme',
          en: 'Get Free Evaluation'
        }
      },
      dropdownItems: {
        'english-editing': {
          tr: 'Akademik İngilizce Düzenleme',
          en: 'Academic English Editing'
        },
        'article-writing': {
          tr: 'Makale Yazımı ve Düzenleme',
          en: 'Article Writing and Editing'
        },
        'thesis-writing': {
          tr: 'Tez Yazımı ve Düzenleme',
          en: 'Thesis Writing and Editing'
        },
        'peer-review': {
          tr: 'Ön Gönderim Hakem Değerlendirmesi',
          en: 'Pre-submission Peer Review'
        },
        'revision-support': {
          tr: 'Revizyon Destek Hizmetleri',
          en: 'Revision Support Services'
        },
        'publication-support': {
          tr: 'Yayın Süreci Desteği',
          en: 'Publication Process Support'
        },
        'project-writing': {
          tr: 'Proje Yazımı ve Düzenleme',
          en: 'Project Writing and Editing'
        },
        'data-analysis': {
          tr: 'Veri Analizi ve Görselleştirme',
          en: 'Data Analysis and Visualization'
        },
        'individual-training': {
          tr: 'Bireysel Eğitim',
          en: 'Individual Training'
        },
        'group-training': {
          tr: 'Grup Eğitimi',
          en: 'Group Training'
        }
      }
    }
  },
  methods: {
    getNavText(key) {
      return this.language === 'tr' ? this.navItems[key].tr : this.navItems[key].en;
    },
    getDropdownText(key) {
      return this.language === 'tr' ? this.dropdownItems[key].tr : this.dropdownItems[key].en;
    },
    toggleLanguage() {
      const newLang = this.language === 'tr' ? 'en' : 'tr';
      this.$router.push(`/${newLang}`);
    },
    scrollToSection(sectionId) {
      if (sectionId === 'blog') {
        this.$router.push(`/${this.language}/blog`);
        return;
      }
      
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        // Close mobile menu if open
        const nav = document.getElementById('nav-menu');
        nav.classList.remove('active');
      }
    },
    goToHomepage() {
      this.$router.push(`/${this.language}`);
    },
    toggleMenu() {
      const nav = document.getElementById('nav-menu');
      nav.classList.toggle('active');
    }
  }
}
</script>

<style scoped>
header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0.05;
}

.animated-bg::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  animation: rotate 30s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logo-image {
  height: 80px;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

nav ul {
  list-style: none;
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  transition: all 0.3s;
  position: relative;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--secondary-color);
  transition: width 0.3s;
}

nav a:hover::after {
  width: 100%;
}

.nav-cta {
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  color: white !important;
  padding: 0.7rem 1.8rem;
  border-radius: 50px;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.nav-cta::after {
  display: none;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background: white;
  min-width: 320px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  z-index: 1;
  top: 100%;
  left: -50px;
  margin-top: 15px;
  border-radius: 12px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s;
}

/* Fix for dropdown gap - create invisible area to maintain hover state */
.dropdown::after {
  content: '';
  position: absolute;
  top: 100%;
  left: -50px;
  width: 320px;
  height: 15px;
  background: transparent;
}

.dropdown:hover .dropdown-content {
  display: block;
  opacity: 1;
  transform: translateY(0);
  animation: fadeInDown 0.3s ease;
}

.dropdown:hover::after {
  display: block;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-content a {
  display: block;
  padding: 1rem 1.5rem;
  color: var(--text-dark);
  transition: all 0.3s;
  font-size: 0.95rem;
  border-left: 3px solid transparent;
}

.dropdown-content a:hover {
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.1), transparent);
  color: var(--primary-color);
  border-left-color: var(--secondary-color);
  padding-left: 2rem;
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
  color: var(--text-dark);
  border: 1px solid rgba(30, 41, 59, 0.15);
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
}

.control-button:hover {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-3px) scale(1.05);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--primary-color);
  margin: 3px 0;
  transition: all 0.3s;
}

/* Dark mode styles */
header.dark {
  background: rgba(15, 23, 42, 0.95);
  box-shadow: 0 4px 20px rgba(0,0,0,0.8);
}

header.dark.scrolled {
  background: rgba(15, 23, 42, 0.98);
  box-shadow: 0 8px 30px rgba(0,0,0,0.9);
}

header.dark nav a {
  color: var(--dark-text-primary);
}

header.dark .dropdown-content {
  background: var(--dark-bg-surface);
  box-shadow: 0 10px 30px rgba(0,0,0,0.8);
}

header.dark .dropdown-content a {
  color: var(--dark-text-primary);
}

header.dark .dropdown-content a:hover {
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.2), transparent);
  color: var(--dark-accent);
}

header.dark .control-button {
  background: rgba(255, 255, 255, 0.12);
  color: var(--dark-text-primary);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

header.dark .control-button:hover {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
  color: var(--dark-text-primary);
}

/* Responsive */
@media (max-width: 768px) {
  .header-container {
    padding: 1rem;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  nav {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    background: white;
    transition: left 0.3s;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  
  nav.active {
    left: 0;
  }
  
  nav ul {
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
  }
  
  .dropdown-content {
    position: static;
    display: block;
    box-shadow: none;
    margin-top: 0;
    opacity: 1;
    transform: none;
    background: var(--light-bg);
    min-width: 100%;
  }
  
  header.dark nav {
    background: var(--dark-bg-surface);
  }
  
  header.dark .dropdown-content {
    background: var(--dark-bg);
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0.8rem;
  }
  
  .logo {
    font-size: 1.3rem;
  }
  
  .logo svg {
    width: 40px;
    height: 40px;
  }
  
  .control-button {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    height: 36px;
    min-width: 35px;
  }
  
  .nav-cta {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
}
