<template>
  <section class="training-section" id="training">
    <div class="training-container">
      <h2 class="section-title">{{ getSectionTitle() }}</h2>
      <p class="section-subtitle">{{ getSectionSubtitle() }}</p>
      <div class="training-grid">
        <div class="training-card" v-for="program in trainingPrograms" :key="program.id">
          <div>
            <h3><span class="icon">{{ program.icon }}</span>{{ getProgramTitle(program) }}</h3>
            <p>{{ getProgramDescription(program) }}</p>
            <ul class="training-list">
              <li v-for="item in program.items" :key="item">{{ getTrainingItem(item) }}</li>
            </ul>
          </div>
          <a href="#contact" class="card-link" @click="scrollToSection('contact')">{{ getButtonText() }}</a>
        </div>
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
    }
  },
  data() {
    return {
      sectionContent: {
        title: {
          tr: 'Eğitim Programları',
          en: 'Training Programs'
        },
        subtitle: {
          tr: 'Akademik yazım ve araştırma becerilerinizi geliştirin',
          en: 'Enhance your academic writing and research skills'
        },
        button: {
          tr: 'Bilgi Talep Edin',
          en: 'Request Information'
        }
      },
      trainingPrograms: [
        {
          id: 1,
          icon: '👤',
          title: {
            tr: 'Bireysel Eğitim',
            en: 'Individual Training'
          },
          description: {
            tr: 'Özel akademik ihtiyaçlarınıza ve kariyer hedeflerinize uyarlanmış bire bir eğitim seansları.',
            en: 'Personalized one-on-one training sessions tailored to your specific academic needs and career goals.'
          },
          items: [
            {
              tr: 'Akademik Yazım Mentorluğu',
              en: 'Academic Writing Mentorship'
            },
            {
              tr: 'İstatistiksel Analiz Koçluğu',
              en: 'Statistical Analysis Coaching'
            },
            {
              tr: 'Yayın Stratejisi Geliştirme',
              en: 'Publication Strategy Development'
            },
            {
              tr: 'Tez Yazım Desteği',
              en: 'Thesis Writing Support'
            },
            {
              tr: 'Hibe Yazım Becerileri Geliştirme',
              en: 'Grant Writing Skills Development'
            },
            {
              tr: 'Hakem Yanıtı Eğitimi',
              en: 'Peer Review Response Training'
            },
            {
              tr: 'Araştırma Metodolojisi Geliştirme',
              en: 'Research Methodology Enhancement'
            }
          ]
        },
        {
          id: 2,
          icon: '👥',
          title: {
            tr: 'Grup Eğitimi',
            en: 'Group Training'
          },
          description: {
            tr: 'Araştırma ekipleri, bölümler ve akademik kurumlar için tasarlanmış interaktif atölyeler ve kurslar.',
            en: 'Interactive workshops and courses designed for research teams, departments, and academic institutions.'
          },
          items: [
            {
              tr: 'Akademik Yazım Temelleri',
              en: 'Academic Writing Fundamentals'
            },
            {
              tr: 'İleri Araştırma Yöntemleri',
              en: 'Advanced Research Methods'
            },
            {
              tr: 'Yüksek Etkili Dergilerde Yayınlama',
              en: 'Publishing in High-Impact Journals'
            },
            {
              tr: 'SPSS/R/Python ile Veri Analizi',
              en: 'Data Analysis with SPSS/R/Python'
            },
            {
              tr: 'Sistematik Derleme Metodolojisi',
              en: 'Systematic Review Methodology'
            },
            {
              tr: 'Araştırma Etiği ve Dürüstlük',
              en: 'Research Ethics and Integrity'
            },
            {
              tr: 'Hakem Değerlendirme Sürecini Yönetme',
              en: 'Handling Peer Review Process'
            }
          ]
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
    getProgramTitle(program) {
      return this.language === 'tr' ? program.title.tr : program.title.en;
    },
    getProgramDescription(program) {
      return this.language === 'tr' ? program.description.tr : program.description.en;
    },
    getTrainingItem(item) {
      return this.language === 'tr' ? item.tr : item.en;
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
.training-section {
  background: white;
  padding: 5rem 0;
}

.training-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
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

.training-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
}

.training-card {
  background: linear-gradient(135deg, #f8fafc, white);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.training-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent);
  transition: all 0.5s;
}

.training-card:hover::before {
  top: -25%;
  right: -25%;
}

.training-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

.training-card h3 {
  font-size: 1.6rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  position: relative;
}

.training-card p {
  color: var(--text-light);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.training-list {
  list-style: none;
  margin-bottom: 2rem;
}

.training-list li {
  padding: 1rem 0;
  color: var(--text-dark);
  border-bottom: 1px solid #e2e8f0;
  position: relative;
  padding-left: 2.5rem;
  transition: all 0.3s;
}

.training-list li:hover {
  padding-left: 3rem;
  color: var(--primary-color);
}

.training-list li:last-child {
  border-bottom: none;
}

.training-list li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 1.2rem;
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
body.dark .training-section {
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

body.dark .training-card {
  background: linear-gradient(135deg, var(--dark-bg-surface), var(--dark-bg));
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

body.dark .training-card:hover {
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

body.dark .training-card h3 {
  color: var(--dark-primary);
}

body.dark .training-card p {
  color: var(--dark-text-secondary);
}

body.dark .training-list li {
  color: var(--dark-text-primary);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

body.dark .training-list li:hover {
  color: var(--dark-accent);
}

body.dark .training-list li:before {
  color: var(--dark-accent);
}

/* Responsive design */
@media (max-width: 768px) {
  .training-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .training-card {
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
  
  .training-list li {
    padding-left: 2rem;
  }
  
  .training-list li:hover {
    padding-left: 2.5rem;
  }
}

@media (max-width: 480px) {
  .training-section {
    padding: 3rem 0;
  }
  
  .training-container {
    padding: 0 1rem;
  }
  
  .training-card {
    padding: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .training-card h3 {
    font-size: 1.3rem;
  }
  
  .training-list li {
    font-size: 0.9rem;
    padding-left: 1.5rem;
  }
  
  .training-list li:before {
    font-size: 1rem;
  }
}
</style>