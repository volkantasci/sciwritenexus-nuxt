<template>
  <section class="about-section" id="about">
    <div class="about-container">
      <h2 class="section-title">{{ getSectionTitle() }}</h2>
      
      <div class="about-content">
        <div class="about-card" v-for="card in aboutCards" :key="card.id">
          <h3>{{ getCardTitle(card) }}</h3>
          <p>{{ getCardDescription(card) }}</p>
        </div>
      </div>
      
      <div class="philosophy-quote">
        <p>{{ getPhilosophyQuote() }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
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
          tr: 'Science-Writing Nexus Hakkında',
          en: 'About Science-Writing Nexus'
        },
        philosophy: {
          tr: 'Araştırmanız sizin entelektüel yaratımınızdır. Science-Writing Nexus\'ta asla sizin yerinize yazmayız; bunun yerine, mevcut çalışmanızı en yüksek akademik standartları karşılayacak şekilde geliştirmeniz, güçlendirmeniz ve optimize etmeniz için size güç veririz.',
          en: '"Your research is your intellectual creation. At Science-Writing Nexus, we never write in your place; instead, we empower you to develop, strengthen, and optimize your existing work to meet the highest academic standards."'
        }
      },
      aboutCards: [
        {
          id: 1,
          title: {
            tr: 'Misyonumuz',
            en: 'Our Mission'
          },
          description: {
            tr: 'Bilimsel araştırma ile akademik yazım mükemmelliği arasındaki boşluğu kapatmak. Araştırmacıları, akademisyenleri ve öğrencileri, bulgularını küresel akademik toplulukta etkili bir şekilde iletebilmeleri için güçlendiriyoruz.',
            en: 'To bridge the gap between scientific research and academic writing excellence. We empower researchers, academicians, and students to communicate their findings effectively in the global academic community.'
          }
        },
        {
          id: 2,
          title: {
            tr: 'Yaklaşımımız',
            en: 'Our Approach'
          },
          description: {
            tr: 'İşbirlikçi ortaklığa inanıyoruz. Araştırmanız sizin entelektüel mülkiyetinizdir – benzersiz akademik sesinizi korurken çalışmanızı geliştirir, rafine eder ve optimize ederiz ve etik bütünlüğü sağlarız.',
            en: 'We believe in collaborative partnership. Your research is your intellectual property – we enhance, refine, and optimize your work while maintaining your unique academic voice and ensuring ethical integrity.'
          }
        },
        {
          id: 3,
          title: {
            tr: 'Uzmanlığımız',
            en: 'Our Expertise'
          },
          description: {
            tr: 'Tıp, bilim, psikoloji ve mühendislik alanlarında kapsamlı deneyimle, ekibimiz Q1 dergi yayınları, ileri istatistiksel analiz ve kapsamlı akademik destek konularında uzmanlaşmıştır.',
            en: 'With extensive experience in medicine, science, psychology, and engineering, our team specializes in Q1 journal publications, advanced statistical analysis, and comprehensive academic support.'
          }
        }
      ]
    }
  },
  methods: {
    getSectionTitle() {
      return this.language === 'tr' ? this.sectionContent.title.tr : this.sectionContent.title.en;
    },
    getCardTitle(card) {
      return this.language === 'tr' ? card.title.tr : card.title.en;
    },
    getCardDescription(card) {
      return this.language === 'tr' ? card.description.tr : card.description.en;
    },
    getPhilosophyQuote() {
      return this.language === 'tr' ? this.sectionContent.philosophy.tr : this.sectionContent.philosophy.en;
    }
  }
}
</script>

<style scoped>
.about-section {
  background: var(--light-bg);
  padding: 5rem 0;
}

.about-container {
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

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.about-card {
  text-align: center;
  padding: 3rem 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transition: all 0.4s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.12);
}

.about-card h3 {
  color: var(--primary-color);
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.about-card p {
  color: var(--text-light);
  line-height: 1.8;
}

.philosophy-quote {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  padding: 4rem;
  margin: 4rem 0;
  border-radius: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.philosophy-quote::before {
  content: '"';
  position: absolute;
  top: -20px;
  left: 30px;
  font-size: 8rem;
  color: rgba(255,255,255,0.1);
  font-family: Georgia, serif;
}

.philosophy-quote p {
  font-size: 1.3rem;
  font-style: italic;
  color: white;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Dark mode styles */
body.dark .about-section {
  background: var(--dark-bg);
}

body.dark .section-title {
  background: linear-gradient(135deg, var(--dark-primary), var(--dark-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

body.dark .about-card {
  background: var(--dark-bg-surface);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

body.dark .about-card:hover {
  box-shadow: 0 15px 40px rgba(0,0,0,0.5);
}

body.dark .about-card h3 {
  color: var(--dark-primary);
}

body.dark .about-card p {
  color: var(--dark-text-secondary);
}

body.dark .philosophy-quote {
  background: linear-gradient(135deg, var(--dark-primary), var(--dark-accent));
}

body.dark .philosophy-quote::before {
  color: rgba(255,255,255,0.05);
}

/* Responsive design */
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .about-card {
    padding: 2rem 1.5rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .philosophy-quote {
    padding: 3rem 2rem;
    margin: 3rem 0;
  }
  
  .philosophy-quote p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 3rem 0;
  }
  
  .about-container {
    padding: 0 1rem;
  }
  
  .about-card {
    padding: 1.5rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-card h3 {
    font-size: 1.3rem;
  }
  
  .about-card p {
    font-size: 0.95rem;
  }
  
  .philosophy-quote {
    padding: 2rem 1.5rem;
  }
  
  .philosophy-quote p {
    font-size: 1rem;
  }
  
  .philosophy-quote::before {
    font-size: 6rem;
    top: -10px;
    left: 15px;
  }
}
</style>