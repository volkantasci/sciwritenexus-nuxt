<template>
  <section class="process" id="process" :class="{ dark: isDarkMode }">
    <div class="container">
      <div class="section-header">
        <h2 v-if="language === 'tr'">Nasıl Çalışıyoruz?</h2>
        <h2 v-else>How We Work?</h2>
        <p v-if="language === 'tr'">4 adımda sistematik akademik gelişim süreci</p>
        <p v-else>Systematic academic development process in 4 steps</p>
      </div>
      <div class="process-steps">
        <div class="process-step" v-for="step in steps" :key="step.id" :class="{ dark: isDarkMode }">
          <div class="step-icon">
            <i :class="step.icon"></i>
          </div>
          <h3 class="step-title">{{ getStepTitle(step) }}</h3>
          <p class="step-description">{{ getStepDescription(step) }}</p>
          <div class="step-duration">
            <span v-if="language === 'tr'">Süre: </span>
            <span v-else>Duration: </span>
            {{ getStepDuration(step) }}
          </div>
        </div>
      </div>
      <div class="process-cta">
        <button class="btn btn-primary" v-if="language === 'tr'" @click="scrollToSection('contact')">Sürecimizi Detaylı İnceleyin</button>
        <button class="btn btn-primary" v-else @click="scrollToSection('contact')">Detailed Review of Our Process</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Process',
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
      steps: [
        {
          id: 1,
          icon: 'fas fa-search',
          title: {
            tr: 'İlk İnceleme ve Analiz',
            en: 'Initial Review and Analysis'
          },
          description: {
            tr: 'Projenizin kapsamını belirliyor, ihtiyaçlarınızı analiz ediyoruz. Size özel gelişim planı hazırlıyoruz.',
            en: 'We determine the scope of your project and analyze your needs. We prepare a customized development plan for you.'
          },
          duration: {
            tr: '24-48 saat içinde',
            en: 'Within 24-48 hours'
          }
        },
        {
          id: 2,
          icon: 'fas fa-calendar-alt',
          title: {
            tr: 'Kişisel Gelişim Stratejisi',
            en: 'Personal Development Strategy'
          },
          description: {
            tr: 'Akademik hedeflerinize uygun detaylı çalışma planı oluşturuyoruz. Öncelik sıralaması ve zaman çizelgesi belirliyoruz.',
            en: 'We create a detailed work plan suitable for your academic goals. We determine priority ranking and timeline.'
          },
          duration: {
            tr: '2-3 iş günü',
            en: '2-3 business days'
          }
        },
        {
          id: 3,
          icon: 'fas fa-users',
          title: {
            tr: 'Aktif Geliştirme Süreci',
            en: 'Active Development Process'
          },
          description: {
            tr: 'Alanında uzman akademisyenlerle çalışarak, sistematik geliştirme sürecini yürütüyoruz. Sürekli geri bildirim sağlıyoruz.',
            en: 'We carry out the systematic development process by working with academicians who are experts in their field. We provide continuous feedback.'
          },
          duration: {
            tr: 'Proje kapsamına göre',
            en: 'Depending on project scope'
          }
        },
        {
          id: 4,
          icon: 'fas fa-flag-checkered',
          title: {
            tr: 'Son Kontrol ve Destek',
            en: 'Final Check and Support'
          },
          description: {
            tr: 'Tüm geliştirmeleri final kontrolden geçiriyoruz. Detaylı rapor hazırlıyoruz. 30 gün ücretsiz danışmanlık desteği sağlıyoruz.',
            en: 'We put all developments through final control. We prepare a detailed report. We provide 30 days of free consulting support.'
          },
          duration: {
            tr: 'Garanti: 30 gün sonrası destek',
            en: 'Guarantee: Support after 30 days'
          }
        }
      ]
    }
  },
  methods: {
    getStepTitle(step) {
      return this.language === 'tr' ? step.title.tr : step.title.en;
    },
    getStepDescription(step) {
      return this.language === 'tr' ? step.description.tr : step.description.en;
    },
    getStepDuration(step) {
      return this.language === 'tr' ? step.duration.tr : step.duration.en;
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Adjust for header height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>
.process {
  padding: 5rem 0;
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.process::before {
  content: '';
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.process-step {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.process-step:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.step-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #3498db;
}

.step-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.step-description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
}

.step-duration {
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background: rgba(52, 152, 219, 0.2);
}

.process-cta {
  text-align: center;
}

.btn-primary {
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  color: #1976d2;
  border: 2px solid transparent;
  padding: 1rem 2.2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 6px 20px rgba(25, 118, 210, 0.3);
  letter-spacing: 0.1px;
  text-shadow: 0 1px 1px rgba(255,255,255,0.8);
}

.btn-primary:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 12px 30px rgba(25, 118, 210, 0.4);
  background: linear-gradient(135deg, #ffffff 0%, #bbdefb 100%);
}

/* Dark mode styles */
body.dark .process {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
}

body.dark .process::before {
  opacity: 0.2;
}

body.dark .process .process-step {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
}

body.dark .process .process-step:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #e0e0e0;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
  transform: translateY(-5px);
}

body.dark .process .step-icon {
  color: #b0b0b0;
}

body.dark .process .step-duration {
  background: rgba(224, 224, 224, 0.2);
  color: #e0e0e0;
  font-weight: 600;
}

body.dark .process .btn-primary {
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  color: #ffffff;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

body.dark .process .btn-primary:hover {
  background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Ensure text readability */
body.dark .process .section-header h2,
body.dark .process .section-header p,
body.dark .process .step-title,
body.dark .process .step-description {
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

body.dark .process .step-description {
  color: #cccccc;
}

/* Responsive design */
@media (max-width: 1200px) {
  .process-steps {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .process-step {
    padding: 1.5rem;
  }
  
  .step-icon {
    font-size: 2.5rem;
  }
  
  .step-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 992px) {
  .process {
    padding: 4rem 0;
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
  
  .section-header h2 {
    font-size: 2.2rem;
  }
  
  .section-header p {
    font-size: 1.15rem;
  }
}

@media (max-width: 768px) {
  .process-steps {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  
  .process {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .section-header p {
    font-size: 1.1rem;
  }
  
  .process-step {
    padding: 1.5rem;
  }
  
  .step-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .step-title {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
  
  .step-description {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }
  
  .btn-primary {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .process {
    padding: 2.5rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
  
  .section-header p {
    font-size: 1rem;
  }
  
  .process-step {
    padding: 1.2rem;
  }
  
  .step-icon {
    font-size: 2rem;
  }
  
  .step-title {
    font-size: 1.1rem;
  }
  
  .step-description {
    font-size: 0.9rem;
  }
  
  .step-duration {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
  
  .btn-primary {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>