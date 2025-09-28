<template>
  <section class="hero" id="home">
    <div class="hero-content">
      <h1>{{ getHeroTitle() }}</h1>
      <p class="tagline">{{ getTagline() }}</p>
      <p>{{ getHeroDescription() }}</p>
      <div class="cta-buttons">
        <a href="#contact" class="btn btn-primary" @click="scrollToSection('contact')">{{ getPrimaryButtonText() }}</a>
        <a href="#consultancy" class="btn btn-secondary" @click="scrollToSection('consultancy')">{{ getSecondaryButtonText() }}</a>
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
    }
  },
  data() {
    return {
      heroContent: {
        title: {
          tr: 'Araştırma ile Yayın Mükemmelliği Arasındaki Köprü',
          en: 'The Bridge Between Research and Publication Excellence'
        },
        tagline: {
          tr: 'Öncü Akademik Danışmanlık Hizmetleri',
          en: 'Premier Academic Consulting Services'
        },
        description: {
          tr: 'İlk makale hazırlığından başarılı yayına kadar kapsamlı destek - hakem değerlendirmesi, revizyonlar ve yayın sürecinin her adımında uzman rehberlik.',
          en: 'Comprehensive support for your academic journey - from initial manuscript preparation to successful publication in high-impact journals. Expert guidance through peer review, revisions, and every step of the publication process.'
        },
        primaryButton: {
          tr: 'Ücretsiz Değerlendirme Alın',
          en: 'Get Free Evaluation'
        },
        secondaryButton: {
          tr: 'Hizmetleri Keşfedin',
          en: 'Explore Services'
        }
      }
    }
  },
  methods: {
    getHeroTitle() {
      return this.language === 'tr' ? this.heroContent.title.tr : this.heroContent.title.en;
    },
    getTagline() {
      return this.language === 'tr' ? this.heroContent.tagline.tr : this.heroContent.tagline.en;
    },
    getHeroDescription() {
      return this.language === 'tr' ? this.heroContent.description.tr : this.heroContent.description.en;
    },
    getPrimaryButtonText() {
      return this.language === 'tr' ? this.heroContent.primaryButton.tr : this.heroContent.primaryButton.en;
    },
    getSecondaryButtonText() {
      return this.language === 'tr' ? this.heroContent.secondaryButton.tr : this.heroContent.secondaryButton.en;
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
.hero {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 10rem 2rem 5rem;
  margin-top: 80px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/></svg>');
  background-size: 100px 100px;
  animation: float 20s linear infinite;
}

@keyframes float {
  0% { transform: translate(0, 0); }
  100% { transform: translate(100px, 100px); }
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.8s ease;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero .tagline {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  animation: fadeInUp 1s ease;
  font-weight: 500;
}

.hero p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  opacity: 0.9;
  animation: fadeInUp 1.2s ease;
  line-height: 1.7;
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

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
  animation: fadeInUp 1.4s ease;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: white;
  color: var(--primary-color);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(0,0,0,0.25);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: var(--primary-color);
  transform: translateY(-3px);
}

/* Dark mode styles */
body.dark .hero {
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-bg-surface) 100%);
}

body.dark .hero::before {
  opacity: 0.05;
}

body.dark .btn-primary {
  background: var(--dark-text-primary);
  color: var(--dark-bg);
}

body.dark .btn-primary:hover {
  background: white;
  color: var(--dark-bg);
}

body.dark .btn-secondary {
  border-color: var(--dark-text-primary);
  color: var(--dark-text-primary);
}

body.dark .btn-secondary:hover {
  background: var(--dark-text-primary);
  color: var(--dark-bg);
}

/* Responsive design */
@media (max-width: 768px) {
  .hero {
    padding: 8rem 1rem 4rem;
    margin-top: 70px;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero .tagline {
    font-size: 1.3rem;
  }
  
  .hero p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .btn {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 6rem 1rem 3rem;
  }
  
  .hero h1 {
    font-size: 1.8rem;
  }
  
  .hero .tagline {
    font-size: 1.2rem;
  }
  
  .hero p {
    font-size: 0.95rem;
  }
  
  .btn {
    padding: 0.8rem 1.8rem;
    font-size: 0.95rem;
  }
}
</style>