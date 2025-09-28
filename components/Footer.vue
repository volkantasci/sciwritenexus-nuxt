<template>
  <footer class="footer" :class="{ dark: isDarkMode }">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section about">
          <div class="logo-container">
            <img
              :src="isDarkMode ? '/images/nexus-logo-dark.svg' : '/images/nexus-logo-light.svg'"
              alt="RWNexus"
              class="footer-logo"
            >
          </div>
          <p v-if="language === 'tr'">
            Araştırmadan Yazmaya Köprü. Araştırma ile yazım arasındaki köprü. 
            Akademik yazım ve araştırma danışmanlığında güvenilir ortağınız.
          </p>
          <p v-else>
            Bridge from Research to Writing. The bridge between research and writing. 
            Your trusted partner in academic writing and research consultancy.
          </p>
        </div>
        
        <div class="footer-section links">
          <h4 v-if="language === 'tr'">Hızlı Bağlantılar</h4>
          <h4 v-else>Quick Links</h4>
          <ul>
            <li><a href="#" v-if="language === 'tr'">Ana Sayfa</a><a href="#" v-else>Home</a></li>
            <li><a href="#services" v-if="language === 'tr'">Hizmetler</a><a href="#services" v-else>Services</a></li>
            <li><a href="#" v-if="language === 'tr'">Hakkımızda</a><a href="#" v-else>About Us</a></li>
            <li><a href="#process" v-if="language === 'tr'">Süreç</a><a href="#process" v-else>Process</a></li>
            <li><a href="#" v-if="language === 'tr'">Fiyatlar</a><a href="#" v-else>Pricing</a></li>
            <li><a href="#contact" v-if="language === 'tr'">İletişim</a><a href="#contact" v-else>Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-section services">
          <h4 v-if="language === 'tr'">Hizmetlerimiz</h4>
          <h4 v-else>Our Services</h4>
          <ul>
            <li><a href="#" v-if="language === 'tr'">Akademik Yazım Danışmanlığı</a><a href="#" v-else>Academic Writing Consultancy</a></li>
            <li><a href="#" v-if="language === 'tr'">Veri Analizi ve Raporlama</a><a href="#" v-else>Data Analysis and Reporting</a></li>
            <li><a href="#" v-if="language === 'tr'">İngilizce Yazım Geliştirme</a><a href="#" v-else>English Writing Skills Development</a></li>
            <li><a href="#" v-if="language === 'tr'">Yayın Süreci Danışmanlığı</a><a href="#" v-else>Publication Process Consultancy</a></li>
          </ul>
        </div>
        
        <div class="footer-section contact-info">
          <h4 v-if="language === 'tr'">İletişim Bilgileri</h4>
          <h4 v-else>Contact Information</h4>
          <address>
            <p v-if="language === 'tr'">Adres: İstanbul, Türkiye</p>
            <p v-else>Address: Istanbul, Turkey</p>
            <p><i class="fas fa-envelope"></i> info@sciwritenexus.com</p>
            <p v-if="language === 'tr'"><i class="fas fa-clock"></i> Çalışma Saatleri: Pazartesi-Cuma 09:00-18:00</p>
            <p v-else><i class="fas fa-clock"></i> Working Hours: Monday-Friday 09:00-18:00</p>
          </address>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="social-media">
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
        </div>
        
        <div class="legal">
          <a :href="`/${language}/privacy-policy`" v-if="language === 'tr'">Gizlilik Politikası</a>
          <a :href="`/${language}/privacy-policy`" v-else>Privacy Policy</a>
          <a :href="`/${language}/terms-of-service`" v-if="language === 'tr'">Kullanım Şartları</a>
          <a :href="`/${language}/terms-of-service`" v-else>Terms of Service</a>
          <a :href="`/${language}/data-protection-policy`" v-if="language === 'tr'">Veri Koruma Politikası</a>
          <a :href="`/${language}/data-protection-policy`" v-else>Data Protection Policy</a>
          <a :href="`/${language}/academic-services-disclaimer`" v-if="language === 'tr'">Akademik Hizmetler Sorumluluk Reddi</a>
          <a :href="`/${language}/academic-services-disclaimer`" v-else>Academic Services Disclaimer</a>
        </div>
        
        <div class="copyright">
          <p>&copy; 2025 RWNexus. {{ language === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.' }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    language: {
      type: String,
      default: 'tr'
    },
    isDarkMode: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: #ecf0f1;
  padding: 3rem 0 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.footer::before {
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

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.logo-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
}

.footer-logo {
  height: 100px;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;
}

.footer-section h3,
.footer-section h4 {
  color: #3498db;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  transition: color 0.3s;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.8rem;
}

.footer-section ul li a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
  display: block;
}

.footer-section ul li a:hover {
  color: #3498db;
  transform: translateX(5px);
}

.footer-section.contact-info p {
  margin: 0.8rem 0;
  display: flex;
  align-items: center;
}

.footer-section.contact-info i {
  margin-right: 1rem;
  color: #3498db;
  width: 20px;
}

.footer-bottom {
  border-top: 1px solid #7f8c8d;
  padding-top: 2rem;
  text-align: center;
}

.social-media {
  margin-bottom: 1.5rem;
}

.social-media a {
  color: #bdc3c7;
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: color 0.3s, transform 0.3s;
}

.social-media a:hover {
  color: #3498db;
  transform: translateY(-3px);
}

.legal {
  margin-bottom: 1.5rem;
}

.legal a {
  color: #bdc3c7;
  text-decoration: none;
  margin: 0 1rem;
  transition: color 0.3s;
}

.legal a:hover {
  color: #3498db;
}

.copyright p {
  margin: 0;
  color: #7f8c8d;
  font-size: 0.9rem;
}

/* Dark mode styles */
body.dark .footer {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

body.dark .footer::before {
  opacity: 0.2;
}

body.dark .footer .footer-section h3,
body.dark .footer .footer-section h4 {
  color: #e0e0e0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

body.dark .footer .footer-section ul li a,
body.dark .footer .footer-section.contact-info p,
body.dark .footer .legal a {
  color: #cccccc;
  font-weight: 500;
}

body.dark .footer .footer-section ul li a:hover,
body.dark .footer .legal a:hover {
  color: #e0e0e0;
  transform: translateX(3px);
}

body.dark .footer .social-media a {
  color: #b0b0b0;
  background: rgba(176, 176, 176, 0.1);
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

body.dark .footer .social-media a:hover {
  color: #ffffff;
  background: rgba(176, 176, 176, 0.3);
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 4px 12px rgba(176, 176, 176, 0.4);
}

body.dark .footer .footer-section.contact-info i {
  color: #b0b0b0;
}

body.dark .footer .copyright p {
  color: #cccccc;
  font-weight: 500;
}

body.dark .footer .footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Ensure text contrast meets WCAG standards */
body.dark .footer .footer-section h3,
body.dark .footer .footer-section h4 {
  color: #e0e0e0; /* High contrast on #0a0a0a */
}


body.dark .footer .footer-section ul li a,
body.dark .footer .footer-section.contact-info p,
body.dark .footer .legal a,
body.dark .footer .copyright p {
  color: #cccccc; /* High contrast on #0a0a0a */
}

body.dark .footer .footer-section ul li a:hover,
body.dark .footer .legal a:hover {
  color: #e0e0e0; /* High contrast on #0a0a0a */
}

/* Responsive design */
@media (max-width: 1200px) {
  .footer-content {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-section.about {
    grid-column: 1 / -1;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .logo-container {
    justify-content: center;
  }
}

@media (max-width: 992px) {
  .footer {
    padding: 2.5rem 0 1rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .footer-section.about {
    grid-column: 1 / -1;
  }
  
  .footer-section h3,
  .footer-section h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  .footer-section p,
  .footer-section ul li a {
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer {
    padding: 2rem 0 1rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .footer-section h3,
  .footer-section h4 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  
  .footer-section p {
    font-size: 1rem;
    line-height: 1.6;
  }
  
  .footer-section ul li {
    margin-bottom: 0.6rem;
  }
  
  .footer-section ul li a {
    font-size: 0.95rem;
  }
  
  .footer-section.contact-info p {
    margin: 0.6rem 0;
    font-size: 0.95rem;
  }
  
  .social-media {
    margin-bottom: 1.2rem;
  }
  
  .social-media a {
    font-size: 1.3rem;
    margin: 0 0.8rem;
  }
  
  .legal {
    margin-bottom: 1.2rem;
  }
  
  .legal a {
    display: block;
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }
  
  .copyright p {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 0 0.8rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .footer-content {
    gap: 1.5rem;
  }
  
  .footer-section h3,
  .footer-section h4 {
    font-size: 1.2rem;
  }
  
  .footer-section p {
    font-size: 0.95rem;
  }
  
  .footer-section ul li a {
    font-size: 0.9rem;
  }
  
  .footer-section.contact-info p {
    font-size: 0.9rem;
  }
  
  .social-media a {
    font-size: 1.2rem;
    margin: 0 0.6rem;
  }
  
  .legal a {
    font-size: 0.85rem;
  }
  
  .copyright p {
    font-size: 0.8rem;
  }
}
</style>