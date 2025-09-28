<template>
  <section class="consultancy-section" id="consultancy">
    <h2 class="section-title">{{ getSectionTitle() }}</h2>
    <p class="section-subtitle">{{ getSectionSubtitle() }}</p>
    <div class="services-grid">
      <div class="service-card" v-for="service in services" :key="service.id" :class="{ featured: service.featured }">
        <div>
          <h3><span class="icon">{{ service.icon }}</span>{{ getServiceTitle(service) }}</h3>
          <p>{{ getServiceDescription(service) }}</p>
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">{{ getFeatureText(feature) }}</li>
          </ul>
        </div>
        <a href="#contact" class="card-link" @click="scrollToSection('contact')">{{ getButtonText() }}</a>
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
    }
  },
  data() {
    return {
      sectionContent: {
        title: {
          tr: 'Danışmanlık Hizmetlerimiz',
          en: 'Our Consultancy Services'
        },
        subtitle: {
          tr: 'Araştırma ihtiyaçlarınıza özel kapsamlı akademik destek',
          en: 'Comprehensive academic support tailored to your research needs'
        },
        button: {
          tr: 'Ücretsiz Değerlendirme Alın',
          en: 'Get Free Evaluation'
        }
      },
      services: [
        {
          id: 1,
          icon: '🌐',
          title: {
            tr: 'Akademik İngilizce Düzenleme',
            en: 'Academic English Editing'
          },
          description: {
            tr: 'Profesyonel İngilizce dil düzenleme ve proofreading hizmetleri, uluslararası yayınlar için netlik, tutarlılık ve akademik stil uyumu sağlar.',
            en: 'Professional English language editing and proofreading services ensuring clarity, coherence, and academic style compliance for international publications.'
          },
          features: [
            {
              tr: 'Anadil konuşmacı kalitesinde geliştirme',
              en: 'Native-speaker quality enhancement'
            },
            {
              tr: 'Dilbilgisi ve sözdizimi mükemmelleştirme',
              en: 'Grammar and syntax perfection'
            },
            {
              tr: 'Akademik terminoloji optimizasyonu',
              en: 'Academic terminology optimization'
            }
          ],
          featured: false
        },
        {
          id: 2,
          icon: '📝',
          title: {
            tr: 'Makale Yazımı ve Düzenleme',
            en: 'Article Writing and Editing'
          },
          description: {
            tr: 'Yapı geliştirmeden son düzenlemeye kadar araştırma makaleleri için kapsamlı destek, çalışmanızın yüksek etkili dergi standartlarını karşılamasını sağlar.',
            en: 'Comprehensive support for research articles from structure development to final editing, ensuring your work meets high-impact journal standards.'
          },
          features: [
            {
              tr: 'IMRAD yapısı optimizasyonu',
              en: 'IMRAD structure optimization'
            },
            {
              tr: 'Kritik analiz geliştirme',
              en: 'Critical analysis enhancement'
            },
            {
              tr: 'Referans formatlama',
              en: 'Reference formatting'
            }
          ],
          featured: false
        },
        {
          id: 3,
          icon: '📖',
          title: {
            tr: 'Tez Yazımı ve Düzenleme',
            en: 'Thesis Writing and Editing'
          },
          description: {
            tr: 'Yüksek lisans ve doktora tezleri için uzman rehberlik. Öneriden savunmaya kadar tam destek, akademik mükemmelliği garanti eder.',
            en: 'Expert guidance for master\'s and doctoral theses. Complete support from proposal to defense, ensuring academic excellence.'
          },
          features: [
            {
              tr: 'Bölüm bazlı geliştirme',
              en: 'Chapter-by-chapter development'
            },
            {
              tr: 'Metodoloji iyileştirme',
              en: 'Methodology refinement'
            },
            {
              tr: 'Savunma hazırlık desteği',
              en: 'Defense preparation support'
            }
          ],
          featured: false
        },
        {
          id: 4,
          icon: '🔍',
          title: {
            tr: 'Ön Gönderim Hakem Değerlendirmesi',
            en: 'Pre-submission Peer Review'
          },
          description: {
            tr: 'Dergi gönderimi öncesi profesyonel hakem değerlendirmesi. Potansiyel zayıflıkları belirleyin ve ele alın, makalenizin yayına hazır olmasını sağlayın.',
            en: 'Professional peer review evaluation before journal submission. Identify and address potential weaknesses, ensuring your manuscript is publication-ready.'
          },
          features: [
            {
              tr: 'Kapsamlı makale değerlendirmesi',
              en: 'Comprehensive manuscript evaluation'
            },
            {
              tr: 'Detaylı hakem tarzı geri bildirim',
              en: 'Detailed reviewer-style feedback'
            },
            {
              tr: 'Kritik zayıflık tanımlama',
              en: 'Critical weakness identification'
            },
            {
              tr: 'İyileştirme önerileri',
              en: 'Improvement recommendations'
            }
          ],
          featured: true
        },
        {
          id: 5,
          icon: '✏️',
          title: {
            tr: 'Revizyon Destek Hizmetleri',
            en: 'Revision Support Services'
          },
          description: {
            tr: 'Büyük ve küçük revizyonlarda uzman yardımı. Hakem yorumlarını etkili şekilde yönetin ve kabul şansınızı artırın.',
            en: 'Expert assistance with major and minor revisions. Navigate referee comments effectively and increase your chances of acceptance.'
          },
          features: [
            {
              tr: 'Hakem yorumu yorumlama',
              en: 'Referee comment interpretation'
            },
            {
              tr: 'Yanıt mektubu hazırlama',
              en: 'Response letter preparation'
            },
            {
              tr: 'Büyük revizyon yeniden yapılandırma',
              en: 'Major revision restructuring'
            },
            {
              tr: 'Nokta bazlı yanıt rehberliği',
              en: 'Point-by-point response guidance'
            }
          ],
          featured: true
        },
        {
          id: 6,
          icon: '📄',
          title: {
            tr: 'Yayın Süreci Desteği',
            en: 'Publication Process Support'
          },
          description: {
            tr: 'Dergi seçiminden gönderim hazırlığına ve revizyon yönetimine kadar tüm yayın yolculuğunda stratejik rehberlik.',
            en: 'Strategic guidance through the entire publication journey including journal selection, submission preparation, and revision management.'
          },
          features: [
            {
              tr: 'Hedef dergi seçimi',
              en: 'Target journal selection'
            },
            {
              tr: 'Kapak mektubu hazırlama',
              en: 'Cover letter preparation'
            },
            {
              tr: 'Gönderim sistemi navigasyonu',
              en: 'Submission system navigation'
            }
          ],
          featured: false
        },
        {
          id: 7,
          icon: '📋',
          title: {
            tr: 'Proje Yazımı ve Düzenleme',
            en: 'Project Writing and Editing'
          },
          description: {
            tr: 'Hibe önerileri, araştırma projeleri ve fon başvuruları için uzman yardımı, onay şansınızı maksimize eder.',
            en: 'Expert assistance with grant proposals, research projects, and funding applications to maximize your approval chances.'
          },
          features: [
            {
              tr: 'Hibe önerisi geliştirme',
              en: 'Grant proposal development'
            },
            {
              tr: 'Bütçe gerekçelendirme',
              en: 'Budget justification'
            },
            {
              tr: 'Etki beyanı oluşturma',
              en: 'Impact statement creation'
            }
          ],
          featured: false
        },
        {
          id: 8,
          icon: '📊',
          title: {
            tr: 'Veri Analizi ve Görselleştirme',
            en: 'Data Analysis and Visualization'
          },
          description: {
            tr: 'İleri istatistiksel analiz, veri görselleştirme ve yorumlama hizmetleri, araştırmanız için yayına hazır çıktılar oluşturur.',
            en: 'Advanced statistical analysis, data visualization, and interpretation services creating publication-ready outputs for your research.'
          },
          features: [
            {
              tr: 'İstatistiksel test seçimi',
              en: 'Statistical test selection'
            },
            {
              tr: 'Yayın kalitesinde şekiller',
              en: 'Publication-quality figures'
            },
            {
              tr: 'Sonuç yorumlama',
              en: 'Results interpretation'
            }
          ],
          featured: false
        }
      ]
    }
  },
  methods: {
    getSectionTitle() {
      return this.language === 'tr' ? this.sectionContent.title.tr : this.sectionContent.title.en;
    },
    getSectionSubtitle() {
      return this.language === 'tr' ? this.sectionContent.subtitle.tr : this.sectionContent.subtitle.en;
    },
    getServiceTitle(service) {
      return this.language === 'tr' ? service.title.tr : service.title.en;
    },
    getServiceDescription(service) {
      return this.language === 'tr' ? service.description.tr : service.description.en;
    },
    getFeatureText(feature) {
      return this.language === 'tr' ? feature.tr : feature.en;
    },
    getButtonText() {
      return this.language === 'tr' ? this.sectionContent.button.tr : this.sectionContent.button.en;
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
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
.consultancy-section {
  padding: 5rem 0;
  background: var(--light-bg);
}

.section-title {
  text-align: center;
  font-size: 2.8rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
  transform: scaleX(0);
  transition: transform 0.3s;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

.service-card.featured {
  border: 2px solid var(--secondary-color);
  position: relative;
}

.service-card.featured::after {
  content: 'YENİ';
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, var(--warning-color), #f97316);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.service-card h3 {
  font-size: 1.4rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.service-card .icon {
  font-size: 1.8rem;
  margin-right: 12px;
  display: inline-block;
  animation: rotate-icon 3s ease-in-out infinite;
}

@keyframes rotate-icon {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

.service-card p {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  margin: 1rem 0 1.5rem;
}

.service-features li {
  padding: 0.5rem 0;
  color: var(--text-light);
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.95rem;
}

.service-features li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--success-color);
  font-weight: bold;
}

.card-link {
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s;
  font-size: 0.95rem;
  display: inline-block;
  align-self: flex-start;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
}

.card-link:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

/* Dark mode styles */
body.dark .consultancy-section {
  background: var(--dark-bg);
}

body.dark .section-title {
  background: linear-gradient(135deg, var(--dark-primary), var(--dark-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

body.dark .section-subtitle {
  color: var(--dark-text-secondary);
}

body.dark .service-card {
  background: var(--dark-bg-surface);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

body.dark .service-card:hover {
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

body.dark .service-card h3 {
  color: var(--dark-primary);
}

body.dark .service-card p,
body.dark .service-features li {
  color: var(--dark-text-secondary);
}

body.dark .service-card.featured {
  border-color: var(--dark-accent);
}

/* Responsive design */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  
  .service-card {
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
}

@media (max-width: 480px) {
  .consultancy-section {
    padding: 3rem 0;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .service-card h3 {
    font-size: 1.2rem;
  }
  
  .service-card .icon {
    font-size: 1.5rem;
  }
}
</style>