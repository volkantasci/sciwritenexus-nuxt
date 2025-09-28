<template>
  <footer>
    <div class="footer-content">
      <div class="contact-form" id="contact">
        <h3>{{ getFormTitle() }}</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">{{ getNameLabel() }}</label>
            <input type="text" id="name" name="name" v-model="formData.name" required>
          </div>
          <div class="form-group">
            <label for="email">{{ getEmailLabel() }}</label>
            <input type="email" id="email" name="email" v-model="formData.email" required>
          </div>
          <div class="form-group">
            <label for="subject">{{ getSubjectLabel() }}</label>
            <input type="text" id="subject" name="subject" v-model="formData.subject" required>
          </div>
          <div class="form-group">
            <label for="message">{{ getMessageLabel() }}</label>
            <textarea id="message" name="message" v-model="formData.message" :placeholder="getMessagePlaceholder()" required></textarea>
          </div>
          <button type="submit" class="submit-btn">{{ getSubmitButtonText() }}</button>
        </form>
      </div>
      
      <div class="social-section">
        <div class="footer-logo-container">
          <img
            :src="isDarkMode ? '/images/nexus-logo-dark.svg' : '/images/nexus-logo-light.svg'"
            alt="SciWrite Nexus"
            class="footer-logo"
          >
        </div>
        <h3>{{ getSocialTitle() }}</h3>
        <div class="social-links">
          <a href="#" :title="getSocialLinkTitle('twitter')">🐦</a>
          <a href="#" :title="getSocialLinkTitle('linkedin')">💼</a>
          <a href="#" :title="getSocialLinkTitle('researchgate')">🔬</a>
          <a href="#" :title="getSocialLinkTitle('orcid')">📚</a>
        </div>
        
        <div style="margin-top: 2rem;">
          <h4 style="margin-bottom: 1rem; color: var(--accent-color);">{{ getContactInfoTitle() }}</h4>
          <p style="margin-bottom: 0.5rem;">📧 {{ getEmail() }}</p>
          <p>📍 {{ getLocation() }}</p>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <div class="footer-links">
          <a :href="`/${language}/privacy-policy`">{{ getPrivacyLink() }}</a>
          <a :href="`/${language}/terms-of-service`">{{ getTermsLink() }}</a>
          <a :href="`/${language}/data-protection-policy`">{{ getDataProtectionLink() }}</a>
          <a :href="`/${language}/academic-services-disclaimer`">{{ getDisclaimerLink() }}</a>
        </div>
        <div class="copyright">
          <p>{{ getCopyrightText() }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Contact',
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
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      content: {
        formTitle: {
          tr: 'Ücretsiz Değerlendirme Alın',
          en: 'Get Your Free Evaluation'
        },
        nameLabel: {
          tr: 'Ad Soyad',
          en: 'Name Surname'
        },
        emailLabel: {
          tr: 'E-posta',
          en: 'Email'
        },
        subjectLabel: {
          tr: 'Konu',
          en: 'Subject'
        },
        messageLabel: {
          tr: 'Mesaj',
          en: 'Message'
        },
        messagePlaceholder: {
          tr: 'Projenizi ve gereksinimlerinizi açıklayın...',
          en: 'Describe your project and requirements...'
        },
        submitButton: {
          tr: 'Mesaj Gönder',
          en: 'Send Message'
        },
        socialTitle: {
          tr: 'Bizimle Bağlantı Kurun',
          en: 'Connect With Us'
        },
        contactInfoTitle: {
          tr: 'İletişim Bilgileri',
          en: 'Contact Information'
        },
        email: {
          tr: 'info@sciwritenexus.com',
          en: 'info@sciwritenexus.com'
        },
        location: {
          tr: 'İstanbul, Türkiye',
          en: 'Istanbul, Turkey'
        },
        privacy: {
          tr: 'Gizlilik Politikası',
          en: 'Privacy Policy'
        },
        terms: {
          tr: 'Hizmet Şartları',
          en: 'Terms of Service'
        },
        dataProtection: {
          tr: 'Veri Koruma Politikası',
          en: 'Data Protection Policy'
        },
        disclaimer: {
          tr: 'Akademik Hizmetler Sorumluluk Reddi',
          en: 'Academic Services Disclaimer'
        },
        copyright: {
          tr: '© 2025 SciWriteNexus. Tüm hakları saklıdır.',
          en: '© 2025 SciWriteNexus. All rights reserved.'
        }
      }
    }
  },
  methods: {
    getFormTitle() {
      return this.language === 'tr' ? this.content.formTitle.tr : this.content.formTitle.en;
    },
    getNameLabel() {
      return this.language === 'tr' ? this.content.nameLabel.tr : this.content.nameLabel.en;
    },
    getEmailLabel() {
      return this.language === 'tr' ? this.content.emailLabel.tr : this.content.emailLabel.en;
    },
    getSubjectLabel() {
      return this.language === 'tr' ? this.content.subjectLabel.tr : this.content.subjectLabel.en;
    },
    getMessageLabel() {
      return this.language === 'tr' ? this.content.messageLabel.tr : this.content.messageLabel.en;
    },
    getMessagePlaceholder() {
      return this.language === 'tr' ? this.content.messagePlaceholder.tr : this.content.messagePlaceholder.en;
    },
    getSubmitButtonText() {
      return this.language === 'tr' ? this.content.submitButton.tr : this.content.submitButton.en;
    },
    getSocialTitle() {
      return this.language === 'tr' ? this.content.socialTitle.tr : this.content.socialTitle.en;
    },
    getContactInfoTitle() {
      return this.language === 'tr' ? this.content.contactInfoTitle.tr : this.content.contactInfoTitle.en;
    },
    getEmail() {
      return this.language === 'tr' ? this.content.email.tr : this.content.email.en;
    },
    getPhone() {
      return this.language === 'tr' ? this.content.phone.tr : this.content.phone.en;
    },
    getLocation() {
      return this.language === 'tr' ? this.content.location.tr : this.content.location.en;
    },
    getPrivacyLink() {
      return this.language === 'tr' ? this.content.privacy.tr : this.content.privacy.en;
    },
    getTermsLink() {
      return this.language === 'tr' ? this.content.terms.tr : this.content.terms.en;
    },
    getDataProtectionLink() {
      return this.language === 'tr' ? this.content.dataProtection.tr : this.content.dataProtection.en;
    },
    getDisclaimerLink() {
      return this.language === 'tr' ? this.content.disclaimer.tr : this.content.disclaimer.en;
    },
    getCopyrightText() {
      return this.language === 'tr' ? this.content.copyright.tr : this.content.copyright.en;
    },
    getSocialLinkTitle(platform) {
      const titles = {
        twitter: { tr: 'Twitter/X', en: 'Twitter/X' },
        linkedin: { tr: 'LinkedIn', en: 'LinkedIn' },
        researchgate: { tr: 'ResearchGate', en: 'ResearchGate' },
        orcid: { tr: 'ORCID', en: 'ORCID' }
      };
      return this.language === 'tr' ? titles[platform].tr : titles[platform].en;
    },
    handleSubmit() {
      alert(this.language === 'tr' 
        ? 'Teşekkür ederiz! Mesajınızı aldık. 24 saat içinde sizinle iletişime geçeceğiz.' 
        : 'Thank you for your inquiry! We will contact you within 24 hours with a free evaluation of your project.'
      );
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
footer {
  background: var(--dark-bg);
  color: white;
  padding: 4rem 2rem 2rem;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.contact-form {
  background: rgba(255,255,255,0.05);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.1);
}

.contact-form h3 {
  margin-bottom: 2rem;
  font-size: 1.8rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #cbd5e0;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);
  color: white;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
  background: rgba(255,255,255,0.1);
  transform: translateY(-2px);
}

.form-group textarea {
  resize: vertical;
  min-height: 130px;
}

.submit-btn {
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.5);
}

.social-section {
  text-align: center;
}

.footer-logo-container {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.footer-logo {
  height: 100px;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;
}

.social-section h3 {
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s;
  text-decoration: none;
  border: 2px solid rgba(255,255,255,0.1);
}

.social-links a:hover {
  background: var(--secondary-color);
  transform: translateY(-5px) rotate(360deg);
  border-color: var(--secondary-color);
}

.footer-bottom {
  background: rgba(0,0,0,0.3);
  margin: 0 -2rem -2rem;
  padding: 2rem;
}

.footer-bottom-content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--accent-color);
}

.copyright {
  color: #94a3b8;
  font-size: 0.9rem;
}

/* Dark mode styles */
body.dark .contact-form {
  background: rgba(0,0,0,0.3);
}

body.dark .form-group input,
body.dark .form-group textarea {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.2);
}

body.dark .social-links a {
  background: rgba(255,255,255,0.15);
  border-color: rgba(255,255,255,0.2);
}

/* Responsive design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-form {
    padding: 2rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-links {
    justify-content: center;
  }
  
  .social-links {
    gap: 1rem;
  }
  
  .social-links a {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  footer {
    padding: 3rem 1rem 1rem;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
  
  .contact-form h3 {
    font-size: 1.5rem;
  }
  
  .social-section h3 {
    font-size: 1.5rem;
  }
  
  .footer-links {
    gap: 1rem;
  }
  
  .footer-links a {
    font-size: 0.8rem;
  }
}
</style>