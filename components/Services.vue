<template>
  <section class="services" id="services" :class="{ dark: isDarkMode }">
    <div class="container">
      <div class="section-header">
        <h2 v-if="language === 'tr'">Akademik Kariyerinizin Her Aşamasında Yanınızda</h2>
        <h2 v-else>By Your Side at Every Stage of Your Academic Career</h2>
        <p v-if="language === 'tr'">
          Makale yazımından tez hazırlığa, proje başvurularından hakem cevaplarına kadar tüm akademik yazım süreçlerinizde profesyonel destek
        </p>
        <p v-else>
          Professional support for all academic writing processes, from article writing to thesis preparation, from project applications to referee responses
        </p>
      </div>
      <div class="service-cards">
        <div class="service-card" v-for="service in services" :key="service.id">
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3 class="service-title">{{ getServiceTitle(service) }}</h3>
          <p class="service-description">{{ getServiceDescription(service) }}</p>
          <ul class="service-subitems">
            <li v-for="subitem in service.subitems" :key="subitem">{{ getSubitemText(subitem) }}</li>
          </ul>
          <button class="btn btn-secondary" @click="scrollToSection('contact')">{{ getButtonText() }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
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
      services: [
        {
          id: 1,
          icon: 'fas fa-pen-alt',
          title: {
            tr: 'Kapsamlı Akademik Yazım Danışmanlığı',
            en: 'Comprehensive Academic Writing Consultancy'
          },
          description: {
            tr: 'Mevcut metinlerinizi akademik standartlara uygun şekilde geliştiriyoruz. Makale, tez, proje başvurusu, rapor - tüm akademik yazım türlerinizde profesyonel destek sağlıyoruz.',
            en: 'We develop your existing texts in accordance with academic standards. We provide professional support for all your academic writing types - articles, theses, project proposals, reports.'
          },
          subitems: [
            {
              tr: 'Q1-Q4 dergi makalesi geliştirme',
              en: 'Q1-Q4 journal article development'
            },
            {
              tr: 'Tez yazımı danışmanlığı (YL/DR)',
              en: 'Thesis writing consultancy (MA/PhD)'
            },
            {
              tr: 'Araştırma projesi ve hibe başvuruları',
              en: 'Research project and grant applications'
            },
            {
              tr: 'Akademik rapor düzenleme',
              en: 'Academic report editing'
            }
          ]
        },
        {
          id: 2,
          icon: 'fas fa-chart-bar',
          title: {
            tr: 'Veri Analizi ve Bilimsel Raporlama Danışmanlığı',
            en: 'Data Analysis and Scientific Reporting Consultancy'
          },
          description: {
            tr: 'Araştırma verilerinizin analizi, yorumlanması ve raporlanması süreçlerinde kapsamlı destek sağlıyoruz. İstatistiksel analizlerinizi güçlendiriyor, bulgularınızı etkili şekilde görselleştiriyoruz.',
            en: 'We provide comprehensive support in the analysis, interpretation and reporting of your research data. We strengthen your statistical analyses and effectively visualize your findings.'
          },
          subitems: [
            {
              tr: 'İstatistiksel analiz danışmanlığı',
              en: 'Statistical analysis consultancy'
            },
            {
              tr: 'Veri görselleştirme ve grafik tasarımı',
              en: 'Data visualization and chart design'
            },
            {
              tr: 'Bulgular bölümü raporlama',
              en: 'Findings section reporting'
            },
            {
              tr: 'Meta-analiz ve sistematik derleme',
              en: 'Meta-analysis and systematic review'
            }
          ]
        },
        {
          id: 3,
          icon: 'fas fa-globe',
          title: {
            tr: 'İngilizce Akademik Yazım Beceri Geliştirme',
            en: 'English Academic Writing Skills Development'
          },
          description: {
            tr: 'Akademik İngilizce yazım becerilerinizi profesyonel düzeye çıkarıyoruz. Bilimsel terminoloji ve akademik yazım konvansiyonlarında uzmanlaşmanızı sağlıyoruz.',
            en: 'We take your academic English writing skills to a professional level. We help you specialize in scientific terminology and academic writing conventions.'
          },
          subitems: [
            {
              tr: 'Bilimsel İngilizce eğitimi',
              en: 'Scientific English training'
            },
            {
              tr: 'Akademik terminoloji geliştirme',
              en: 'Academic terminology development'
            },
            {
              tr: 'Sunum ve poster hazırlığı',
              en: 'Presentation and poster preparation'
            },
            {
              tr: 'Bireysel koçluk programları',
              en: 'Individual coaching programs'
            }
          ]
        },
        {
          id: 4,
          icon: 'fas fa-sync-alt',
          title: {
            tr: 'Yayın Süreci ve Hakem Değerlendirme Danışmanlığı',
            en: 'Publication Process and Referee Evaluation Consultancy'
          },
          description: {
            tr: 'Yayın sürecinin her aşamasında rehberlik sağlıyoruz. Dergi seçiminden hakem cevaplarına, revizyon süreçlerinden nihai kabule kadar tüm aşamalarda stratejik destek sunuyoruz.',
            en: 'We provide guidance at every stage of the publication process. We offer strategic support from journal selection to referee responses, revision processes to final acceptance.'
          },
          subitems: [
            {
              tr: 'Hakem yorumlarına yanıt hazırlama',
              en: 'Preparing responses to referee comments'
            },
            {
              tr: 'Dergi seçimi ve editör mektubu',
              en: 'Journal selection and editor letter'
            },
            {
              tr: 'Revizyon süreçlerinde danışmanlık',
              en: 'Consultancy in revision processes'
            },
            {
              tr: 'Yayın stratejisi geliştirme',
              en: 'Publication strategy development'
            }
          ]
        }
      ]
    }
  },
  methods: {
    getServiceTitle(service) {
      return this.language === 'tr' ? service.title.tr : service.title.en;
    },
    getServiceDescription(service) {
      return this.language === 'tr' ? service.description.tr : service.description.en;
    },
    getSubitemText(subitem) {
      return this.language === 'tr' ? subitem.tr : subitem.en;
    },
    getButtonText() {
      return this.language === 'tr' ? 'Detayları İncele' : 'View Details';
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
.services {
  padding: 5rem 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8fbff 50%, #ffffff 100%);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.services::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25,25 L35,35' stroke='%233498db' stroke-opacity='0.1' stroke-width='1.5' fill='none'/%3E%3Cpath d='M45,25 L55,35' stroke='%233498db' stroke-opacity='0.1' stroke-width='1.5' fill='none'/%3E%3Cpath d='M65,25 L75,35' stroke='%233498db' stroke-opacity='0.1' stroke-width='1.5' fill='none'/%3E%3Cpath d='M25,45 L35,55' stroke='%233498db' stroke-opacity='0.1' stroke-width='1.5' fill='none'/%3E%3Cpath d='M45,45 L55,55' stroke='%233498db' stroke-opacity='0.1' stroke-width='1.5' fill='none'/%3E%3Cpath d='M65,45 L75,55' stroke='%233498db' stroke-opacity='0.1' stroke-width='1.5' fill='none'/%3E%3Cpath d='M25,65 L35,75' stroke='%233498db' stroke-opacity='0.1' stroke-width='1.5' fill='none'/%3E%3Cpath d='M45,65 L55,75' stroke='%233498db' stroke-opacity='0.1' stroke-width='1.5' fill='none'/%3E%3Cpath d='M65,65 L75,75' stroke='%233498db' stroke-opacity='0.1' stroke-width='1.5' fill='none'/%3E%3Ccircle cx='25' cy='25' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='45' cy='25' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='65' cy='25' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='25' cy='45' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='45' cy='45' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='65' cy='45' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='25' cy='65' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='45' cy='65' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='65' cy='65' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3C/svg%3E");
  opacity: 0.3;
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  transition: color 0.3s;
}

.section-header p {
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 700px;
  margin: 0 auto;
  transition: color 0.3s;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.service-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 1.2rem;
}

.service-title {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

.service-description {
  color: #7f8c8d;
  margin-bottom: 1.2rem;
  line-height: 1.5;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.service-subitems {
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.2rem;
  width: 100%;
  text-align: left;
}

.service-subitems li {
  position: relative;
  padding-left: 1.3rem;
  margin-bottom: 0.6rem;
  color: #7f8c8d;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.service-subitems li:before {
  content: "✓";
  color: #3498db;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.btn-secondary {
  background-color: transparent;
  color: #1976d2;
  border: 2px solid #1976d2;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
  margin-top: auto;
  font-size: 0.95rem;
  letter-spacing: 0.1px;
}

.btn-secondary:hover {
  background-color: #1976d2;
  color: white;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(25, 118, 210, 0.4);
  border-color: #1976d2;
}

/* Dark mode styles - using global CSS variables */
body.dark .services {
  background: linear-gradient(135deg, var(--dark-bg-primary) 0%, var(--dark-bg-surface) 50%, var(--dark-bg-primary) 100%);
}

body.dark .services::before {
  opacity: 0.2;
}

body.dark .services .section-header h2 {
  color: var(--dark-text-primary);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

body.dark .services .section-header p {
  color: var(--dark-text-secondary);
  font-weight: 500;
}

body.dark .services .service-card {
  background: var(--dark-bg-surface);
  border: 1px solid var(--dark-border);
  box-shadow: 0 10px 30px var(--dark-shadow);
}

body.dark .services .service-card:hover {
  background: #242424;
  border-color: var(--dark-primary);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
  transform: translateY(-5px);
}

body.dark .services .service-title {
  color: var(--dark-primary);
  font-weight: 600;
}

body.dark .services .service-description,
body.dark .services .service-subitems li {
  color: var(--dark-secondary);
}

body.dark .services .service-icon {
  color: var(--dark-secondary);
}

body.dark .services .service-subitems li:before {
  color: var(--dark-secondary);
}

body.dark .services .btn-secondary {
  color: var(--dark-primary);
  border-color: var(--dark-primary);
  background: rgba(224, 224, 224, 0.1);
}

body.dark .services .btn-secondary:hover {
  background-color: var(--dark-primary);
  color: var(--dark-bg-primary);
  box-shadow: 0 8px 20px rgba(224, 224, 224, 0.3);
  transform: translateY(-2px);
}

/* Responsive design */
@media (max-width: 1200px) {
  .service-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .service-card {
    padding: 1.2rem;
  }
  
  .service-icon {
    font-size: 2.2rem;
  }
  
  .service-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 992px) {
  .services {
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
  .service-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .services {
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
    max-width: 90%;
  }
  
  .service-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .service-title {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
  
  .service-description {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
  
  .service-subitems li {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
  
  .btn-secondary {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .services {
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
    max-width: 100%;
  }
  
  .service-card {
    padding: 1.2rem;
  }
  
  .service-icon {
    font-size: 2rem;
  }
  
  .service-title {
    font-size: 1.1rem;
  }
  
  .service-description {
    font-size: 0.9rem;
  }
  
  .service-subitems li {
    font-size: 0.8rem;
  }
}
</style>