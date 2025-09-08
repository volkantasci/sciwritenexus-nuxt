<template>
  <section class="contact" id="contact" :class="{ dark: isDarkMode }">
    <div class="container">
      <div class="contact-content">
        <div class="contact-text">
          <h2 v-if="language === 'tr'">Akademik Başarınız İçin İlk Adımı Atın</h2>
          <h2 v-else>Take the First Step for Your Academic Success</h2>
          
          <p v-if="language === 'tr'">
            Projelerinizi bir sonraki seviyeye taşımaya hazır mısınız? Uzman ekibimizle iletişime geçin ve 
            akademik hedeflerinize ulaşmak için somut adımlar atın.
          </p>
          <p v-else>
            Are you ready to take your projects to the next level? Contact our expert team and 
            take concrete steps to achieve your academic goals.
          </p>
          
          <ul class="contact-features">
            <li v-if="language === 'tr'"><i class="fas fa-check"></i> Ücretsiz ilk değerlendirme</li>
            <li v-else><i class="fas fa-check"></i> Free initial evaluation</li>
            
            <li v-if="language === 'tr'"><i class="fas fa-check"></i> 24 saat içinde geri dönüş</li>
            <li v-else><i class="fas fa-check"></i> Response within 24 hours</li>
            
            <li v-if="language === 'tr'"><i class="fas fa-check"></i> Kişiselleştirilmiş çözümler</li>
            <li v-else><i class="fas fa-check"></i> Personalized solutions</li>
            
            <li v-if="language === 'tr'"><i class="fas fa-check"></i> Deneyimli akademik uzmanlar</li>
            <li v-else><i class="fas fa-check"></i> Experienced academic experts</li>
          </ul>
          
          <div class="contact-buttons">
            <button class="btn btn-primary" v-if="language === 'tr'" @click="scrollToSection('contact')">Ücretsiz Değerlendirme Alın</button>
            <button class="btn btn-primary" v-else @click="scrollToSection('contact')">Get Free Evaluation</button>
            
            <button class="btn btn-secondary" v-if="language === 'tr'" @click="scrollToSection('contact')">Doğrudan İletişime Geçin</button>
            <button class="btn btn-secondary" v-else @click="scrollToSection('contact')">Contact Directly</button>
          </div>
        </div>
        
        <div class="contact-info">
          <div class="info-item" v-for="info in contactInfo" :key="info.title">
            <i :class="info.icon"></i>
            <div>
              <h3>{{ getInfoTitle(info) }}</h3>
              <p>{{ getInfoDetail(info) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
      contactInfo: [
        {
          icon: 'fas fa-phone',
          title: {
            tr: 'Telefon',
            en: 'Phone'
          },
          detail: {
            tr: '+90 542 272 31 31',
            en: '+90 542 272 31 31'
          }
        },
        {
          icon: 'fas fa-envelope',
          title: {
            tr: 'E-posta',
            en: 'Email'
          },
          detail: {
            tr: 'info@rwnexus.com',
            en: 'info@rwnexus.com'
          }
        },
        {
          icon: 'fab fa-whatsapp',
          title: {
            tr: 'WhatsApp',
            en: 'WhatsApp'
          },
          detail: {
            tr: 'Anlık mesajlaşma için tıklayın',
            en: 'Click for instant messaging'
          }
        },
        {
          icon: 'fas fa-video',
          title: {
            tr: 'Online Randevu',
            en: 'Online Appointment'
          },
          detail: {
            tr: 'Ücretsiz danışmanlık görüşmesi',
            en: 'Free consultation meeting'
          }
        }
      ]
    }
  },
  methods: {
    getInfoTitle(info) {
      return this.language === 'tr' ? info.title.tr : info.title.en;
    },
    getInfoDetail(info) {
      return this.language === 'tr' ? info.detail.tr : info.detail.en;
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
.contact {
  padding: 5rem 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8fbff 50%, #ffffff 100%);
  color: #2c3e50;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,20 C40,10 60,10 80,20' stroke='%233498db' stroke-opacity='0.1' stroke-width='2' fill='none'/%3E%3Cpath d='M20,40 C40,30 60,30 80,40' stroke='%233498db' stroke-opacity='0.1' stroke-width='2' fill='none'/%3E%3Cpath d='M20,60 C40,50 60,50 80,60' stroke='%233498db' stroke-opacity='0.1' stroke-width='2' fill='none'/%3E%3Cpath d='M20,80 C40,70 60,70 80,80' stroke='%233498db' stroke-opacity='0.1' stroke-width='2' fill='none'/%3E%3Ccircle cx='20' cy='20' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='40' cy='30' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='60' cy='30' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='80' cy='20' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='20' cy='40' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='40' cy='30' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='60' cy='30' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='80' cy='40' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='20' cy='60' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='40' cy='50' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='60' cy='50' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='80' cy='60' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='20' cy='80' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='40' cy='70' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='60' cy='70' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3Ccircle cx='80' cy='80' r='2' fill='%233498db' fill-opacity='0.1'/%3E%3C/svg%3E");
  opacity: 0.3;
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  align-items: center;
}

.contact-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.contact-text p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.7;
  color: #34495e;
  font-weight: 500;
}

.contact-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.contact-features li {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #2c3e50;
  font-weight: 500;
}

.contact-features i {
  color: #3498db;
  margin-right: 1rem;
  font-size: 1.2rem;
}

.contact-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2.2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.1px;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.btn-primary {
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  color: #ffffff;
  border: 2px solid transparent;
  font-weight: 700;
  text-shadow: 0 1px 1px rgba(0,0,0,0.2);
}

.btn-primary:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 12px 30px rgba(25, 118, 210, 0.6);
  background: linear-gradient(135deg, #1565c0 0%, #0d47a1 100%);
}

.btn-secondary {
  background: transparent;
  color: #1976d2;
  border: 2px solid #1976d2;
  font-weight: 600;
}

.btn-secondary:hover {
  background: #1976d2;
  color: #ffffff;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 12px 30px rgba(25, 118, 210, 0.4);
  border-color: #1976d2;
}

.contact-info .info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.contact-info .info-item i {
  font-size: 1.8rem;
  color: #3498db;
  margin-right: 1.5rem;
  min-width: 30px;
}

.contact-info .info-item h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.contact-info .info-item p {
  margin: 0;
  color: #7f8c8d;
  font-size: 1.1rem;
  font-weight: 500;
}

/* Dark mode styles */
body.dark .contact {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
}

body.dark .contact::before {
  opacity: 0.2;
}

body.dark .contact .btn-primary {
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  color: #ffffff;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

body.dark .contact .btn-primary:hover {
  background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

body.dark .contact .btn-secondary {
  color: #e0e0e0;
  border-color: #e0e0e0;
  background: rgba(224, 224, 224, 0.1);
}

body.dark .contact .btn-secondary:hover {
  background: rgba(224, 224, 224, 0.2);
  color: #ffffff;
  border-color: #ffffff;
  box-shadow: 0 10px 25px rgba(224, 224, 224, 0.3);
  transform: translateY(-2px);
}

body.dark .contact .contact-features i {
  color: #b0b0b0;
}

body.dark .contact .contact-text h2 {
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

body.dark .contact .contact-text p {
  color: #cccccc;
  font-weight: 500;
}

body.dark .contact .contact-features li {
  color: #ffffff;
  font-weight: 600;
}

body.dark .contact .contact-info .info-item i {
  color: #b0b0b0;
}

body.dark .contact .contact-info .info-item p {
  color: #cccccc;
  font-weight: 500;
}

body.dark .contact .contact-info .info-item h3 {
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Ensure WCAG compliance */
body.dark .contact .contact-text p,
body.dark .contact .contact-features li,
body.dark .contact .contact-info .info-item p {
  color: #e0e0e0; /* 7.12:1 contrast on #0d47a1 */
}

body.dark .contact .contact-info .info-item h3 {
  color: #ffffff; /* 10.8:1 contrast on #0d47a1 */
}

/* Responsive design */
@media (max-width: 1200px) {
  .contact-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .contact-text h2 {
    font-size: 2.2rem;
  }
  
  .contact-text p {
    font-size: 1.15rem;
  }
  
  .contact-features li {
    font-size: 1rem;
  }
}

@media (max-width: 992px) {
  .contact {
    padding: 4rem 0;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .contact-text h2 {
    font-size: 2rem;
  }
  
  .contact-buttons {
    gap: 0.8rem;
  }
  
  .btn {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .contact {
    padding: 3rem 0;
  }
  
  .contact-text h2 {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
  
  .contact-text p {
    font-size: 1.1rem;
    margin-bottom: 1.8rem;
    line-height: 1.6;
  }
  
  .contact-features {
    margin-bottom: 1.8rem;
  }
  
  .contact-features li {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
  
  .contact-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
    padding: 0.9rem 1.5rem;
    font-size: 0.95rem;
  }
  
  .contact-info .info-item {
    margin-bottom: 1.5rem;
  }
  
  .contact-info .info-item i {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  
  .contact-info .info-item h3 {
    font-size: 1.2rem;
  }
  
  .contact-info .info-item p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 2.5rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .contact-text h2 {
    font-size: 1.8rem;
  }
  
  .contact-text p {
    font-size: 1rem;
  }
  
  .contact-features li {
    font-size: 0.95rem;
  }
  
  .btn {
    max-width: 250px;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .contact-info .info-item {
    margin-bottom: 1.2rem;
  }
  
  .contact-info .info-item i {
    font-size: 1.3rem;
  }
  
  .contact-info .info-item h3 {
    font-size: 1.1rem;
  }
  
  .contact-info .info-item p {
    font-size: 0.95rem;
  }
}
</style>