<template>
  <section class="main-section" :class="{ dark: isDarkMode }">
    <div class="background-pattern"></div>
    <div class="container">
      <div class="content">
        <h1 class="main-title" v-if="language === 'tr'">Araştırma ile Yazım Arasındaki Köprü</h1>
        <h1 class="main-title" v-else>The Bridge Between Research and Writing</h1>
        
        <!-- Key benefits with icons -->
        <div class="benefits-grid">
          <div class="benefit-item" v-for="(benefit, index) in benefits" :key="benefit.id" :style="{ animationDelay: `${index * 0.1}s` }">
            <span class="benefit-icon">{{ benefit.icon }}</span>
            <span class="benefit-text">{{ getBenefitText(benefit) }}</span>
          </div>
        </div>
        
        <p class="main-description" v-if="language === 'tr'">
          Makale yazımından tez hazırlığa, proje başvurularından hakem cevaplarına kadar tüm akademik yazım süreçlerinizde profesyonel danışmanlık hizmetleri.
        </p>
        <p class="main-description" v-else>
          Professional consulting services for all academic writing processes, from article writing to thesis preparation,
          from project applications to referee responses.
        </p>
        
        <div class="buttons">
          <button class="btn btn-primary" v-if="language === 'tr'" @click="scrollToSection('contact')">Projenizi Ücretsiz Değerlendirin</button>
          <button class="btn btn-primary" v-else @click="scrollToSection('contact')">Get Free Evaluation of Your Project</button>
          <button class="btn btn-secondary" v-if="language === 'tr'" @click="scrollToSection('services')">Hizmetleri İnceleyin</button>
          <button class="btn btn-secondary" v-else @click="scrollToSection('services')">Review Services</button>
        </div>
        
        <p class="support-text" v-if="language === 'tr'">
          Araştırma ilişkili yazımlarınızın sizin eseriniz olması çok önemlidir. Bu bilinçle SciWriteNexus olarak hiçbir zaman sizin yerinize yazım yapmayız;
          bunun yerine mevcut çalışmalarınızı geliştirmenize, güçlendirmenize ve optimize etmenize yardımcı oluruz.
        </p>
        <p class="support-text" v-else>
          It is very important that your research-related writings are your own work. With this awareness, at SciWriteNexus we never write in your place;
          instead, we help you develop, strengthen and optimize your existing work.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainSection',
  props: {
    language: {
      type: String,
      default: 'tr'
    },
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      benefits: [
        {
          id: 1,
          icon: '📝',
          text: {
            tr: 'Makale & Tez Yazımı',
            en: 'Article & Thesis Writing'
          }
        },
        {
          id: 2,
          icon: '📊',
          text: {
            tr: 'Veri Analizi & Raporlama',
            en: 'Data Analysis & Reporting'
          }
        },
        {
          id: 3,
          icon: '🌐',
          text: {
            tr: 'İngilizce Akademik Yazım',
            en: 'English Academic Writing'
          }
        },
        {
          id: 4,
          icon: '🔄',
          text: {
            tr: 'Yayın Süreci Danışmanlığı',
            en: 'Publication Process Consultancy'
          }
        }
      ]
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Adjust for header height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    },
    getBenefitText(benefit) {
      return this.language === 'tr' ? benefit.text.tr : benefit.text.en;
    }
  }
}
</script>

<style scoped>
.main-section {
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  transition: background 0.3s;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.3;
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
}

.main-title {
  font-size: 3.2rem;
  margin-bottom: 1.5rem;
  animation: fadeInDown 1s ease;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main-description {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  animation: fadeInUp 1s ease;
  font-weight: 400;
  letter-spacing: 0.1px;
  opacity: 0.95;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem auto 2.5rem;
  max-width: 600px;
  animation: fadeInUp 0.8s ease;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideInLeft 0.6s ease both;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.benefit-item:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.15);
}

.benefit-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

.benefit-text {
  font-size: 1.1rem;
  font-weight: 500;
  text-align: left;
  line-height: 1.3;
}

.buttons {
  margin-bottom: 2.5rem;
  animation: fadeIn 1.5s ease;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  letter-spacing: 0.2px;
  min-width: 220px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transform: translateZ(0);
}

.btn-primary {
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  color: #1976d2;
  font-weight: 700;
  border: 2px solid transparent;
  text-shadow: 0 1px 1px rgba(255,255,255,0.8);
}

.btn-primary:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 12px 30px rgba(25, 118, 210, 0.4);
  background: linear-gradient(135deg, #ffffff 0%, #bbdefb 100%);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 12px 30px rgba(255, 255, 255, 0.2);
  border-color: #bbdefb;
  color: #bbdefb;
}

.support-text {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.15rem;
  line-height: 1.8;
  opacity: 0.9;
  animation: fadeIn 2s ease;
  font-weight: 300;
  letter-spacing: 0.05px;
  font-style: italic;
}

/* Dark mode styles */
body.dark .main-section {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

body.dark .main-section .benefit-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

body.dark .main-section .benefit-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #e0e0e0;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
  transform: translateY(-2px);
}

body.dark .main-section .btn-primary {
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
}

body.dark .main-section .btn-primary:hover {
  background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%);
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

body.dark .main-section .btn-secondary {
  border-color: #e0e0e0;
  color: #e0e0e0;
  background: rgba(224, 224, 224, 0.1);
}

body.dark .main-section .btn-secondary:hover {
  background: rgba(224, 224, 224, 0.2);
  color: #ffffff;
  border-color: #ffffff;
  box-shadow: 0 8px 25px rgba(224, 224, 224, 0.3);
  transform: translateY(-2px);
}

body.dark .main-section .support-text {
  color: #cccccc;
  opacity: 0.9;
  font-weight: 400;
}

/* Ensure text readability in dark mode */
body.dark .main-section .main-title,
body.dark .main-section .main-description,
body.dark .main-section .benefit-text {
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

body.dark .main-section .benefit-icon {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive design */
@media (max-width: 1200px) {
  .main-section {
    padding: 4rem 1.5rem;
  }
  
  .main-title {
    font-size: 2.6rem;
  }
  
  .main-description {
    font-size: 1.15rem;
  }
  
  .btn {
    font-size: 1rem;
    padding: 0.9rem 1.8rem;
    min-width: 200px;
  }
}

@media (max-width: 992px) {
  .main-title {
    font-size: 2.3rem;
  }
  
  .main-description {
    font-size: 1.1rem;
  }
  
  .support-text {
    font-size: 1.05rem;
  }
}

@media (max-width: 992px) {
  .main-title {
    font-size: 2.4rem;
  }
  
  .main-description {
    font-size: 1.15rem;
    max-width: 600px;
  }
  
  .btn {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    min-width: 180px;
  }
}

@media (max-width: 768px) {
  .main-section {
    padding: 3rem 1.5rem;
  }
  
  .main-title {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 1.5rem auto 2rem;
  }
  
  .benefit-item {
    padding: 0.8rem;
  }
  
  .benefit-icon {
    font-size: 1.5rem;
  }
  
  .benefit-text {
    font-size: 1rem;
  }
  
  .main-description {
    font-size: 1.05rem;
    margin-bottom: 1.8rem;
    line-height: 1.6;
  }
  
  .buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
    margin: 0;
    padding: 0.9rem 1.5rem;
    font-size: 0.95rem;
    height: 46px;
  }
  
  .support-text {
    font-size: 0.95rem;
    line-height: 1.7;
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  .main-section {
    padding: 2.5rem 1rem;
  }
  
  .main-title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  .main-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .btn {
    max-width: 250px;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
    height: 42px;
  }
  
  .support-text {
    font-size: 0.9rem;
    max-width: 100%;
  }
}
</style>