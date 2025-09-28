<template>
  <div class="academic-disclaimer">
    <Header :language="currentLanguage" @toggle-language="toggleLanguage" />
    
    <main class="disclaimer-content">
      <div class="container">
        <div class="disclaimer-header">
          <h1>Akademik Hizmetler Sorumluluk Reddi</h1>
          <p class="last-updated">Son güncelleme: 27 Eylül 2025</p>
        </div>

        <div class="disclaimer-sections">
          <section class="disclaimer-section">
            <h2>1. Hizmetlerimizin Doğası</h2>
            <p>RWNexus olarak sunduğumuz akademik danışmanlık hizmetleri, akademik çalışmalarınızın geliştirilmesi, iyileştirilmesi ve akademik standartlara uygun hale getirilmesi amacıyla tasarlanmıştır. Hizmetlerimiz:</p>
            <ul>
              <li>Akademik yazım becerilerinizi geliştirmeyi</li>
              <li>Mevcut çalışmalarınızın kalitesini artırmayı</li>
              <li>Akademik süreçlerde rehberlik sağlamayı</li>
              <li>Profesyonel geri bildirim sunmayı</li>
            </ul>
            <p><strong>Hizmetlerimiz asla sizin yerinize yazım yapmayı veya akademik çalışmalarınızı sizin adınıza hazırlamayı içermez.</strong></p>
          </section>

          <section class="disclaimer-section">
            <h2>2. Akademik Dürüstlük İlkeleri</h2>
            <p>RWNexus olarak akademik dürüstlüğe ve etik değerlere büyük önem veriyoruz:</p>
            <ul>
              <li>Tüm çalışmalar orijinal olmalı ve intihal içermemelidir</li>
              <li>Referanslar uygun şekilde belirtilmelidir</li>
              <li>Akademik kurumların dürüstlük politikalarına uyulmalıdır</li>
              <li>Danışmanlık hizmetleri, öğrenci veya araştırmacının kendi çalışması olarak sunulmamalıdır</li>
            </ul>
          </section>

          <section class="disclaimer-section">
            <h2>3. Sorumluluk Sınırlamaları</h2>
            <h3>3.1 Akademik Başarı Garantisi</h3>
            <p>RWNexus, hizmetlerimizin kullanımı sonucunda elde edilecek akademik başarılar için herhangi bir garanti vermez. Başarı, bireysel çaba, yetenek ve diğer faktörlere bağlıdır.</p>

            <h3>3.2 Yayın Kabulü</h3>
            <p>Dergi yayın kabulü veya tez onayı gibi sonuçlar için garanti vermiyoruz. Bu kararlar tamamen ilgili akademik kurumların inisiyatifindedir.</p>

            <h3>3.3 Zaman Çizelgeleri</h3>
            <p>Belirtilen zaman çizelgeleri tahmini olup, müşteri işbirliği ve proje karmaşıklığı gibi faktörlere bağlı olarak değişebilir.</p>
          </section>

          <section class="disclaimer-section">
            <h2>4. Müşteri Sorumlulukları</h2>
            <p>Hizmetlerimizden en iyi şekilde yararlanmak için müşterilerimizin aşağıdaki sorumlulukları yerine getirmesi beklenir:</p>
            <ul>
              <li>Doğru ve eksiksiz bilgi sağlama</li>
              <li>Zamanında geri bildirim ve onay verme</li>
              <li>Akademik kurumların politikalarına uyma</li>
              <li>Nihai çalışmayı kontrol etme ve onaylama</li>
              <li>Telif hakları ve akademik etik kurallarına uyma</li>
            </ul>
          </section>

          <section class="disclaimer-section">
            <h2>5. Fikri Mülkiyet Hakları</h2>
            <p>Müşteriler tarafından sağlanan tüm içeriklerin fikri mülkiyet hakları müşteriye aittir. RWNexus:</p>
            <ul>
              <li>Müşteri çalışmalarının gizliliğini korur</li>
              <li>İçerikleri üçüncü şahıslarla paylaşmaz</li>
              <li>Müşteri izni olmadan çalışmaları kullanmaz</li>
              <li>Danışmanlık hizmetlerinin fikri mülkiyetini saklı tutar</li>
            </ul>
          </section>

          <section class="disclaimer-section">
            <h2>6. Hizmet Kapsamı Dışındaki Alanlar</h2>
            <p>RWNexus aşağıdaki hizmetleri sağlamaz:</p>
            <ul>
              <li>Akademik sınavlara hazırlık veya sınav soruları</li>
              <li>Ödev veya projelerin tamamlanması</li>
              <li>Akademik derece veya sertifika sağlanması</li>
              <li>Yasal veya tıbbi tavsiyeler</li>
              <li>Finansal yatırım danışmanlığı</li>
            </ul>
          </section>

          <section class="disclaimer-section">
            <h2>7. Ücret ve Ödeme Politikası</h2>
            <p>Hizmet ücretleri hizmet kapsamına ve karmaşıklığına göre belirlenir:</p>
            <ul>
              <li>Ücretsiz değerlendirme sonrasında teklif sunulur</li>
              <li>Ödemeler hizmet başlamadan önce yapılır</li>
              <li>İade politikası hizmet koşullarına tabidir</li>
              <li>Fiyat değişikliği hakkı saklıdır</li>
            </ul>
          </section>

          <section class="disclaimer-section">
            <h2>8. İletişim ve Destek</h2>
            <p>Hizmetlerimizle ilgili sorularınız için:</p>
            <div class="contact-info">
              <p><strong>RWNexus Akademik Danışmanlık</strong></p>
              <p>E-posta: info@rwnexus.com</p>
              <p>Telefon: +90 542 272 31 31</p>
              <p>Çalışma Saatleri: Pazartesi-Cuma 09:00-18:00</p>
            </div>
          </section>

          <section class="disclaimer-section">
            <h2>9. Yasal Uyarı</h2>
            <p>Bu sorumluluk reddi, RWNexus'un yasal yükümlülüklerini sınırlamaz. Müşteriler, hizmet koşullarını kabul ederek bu politikayı onaylamış sayılır.</p>
          </section>
        </div>
      </div>
    </main>

    <Footer :language="currentLanguage" />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'AcademicServicesDisclaimerTR',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      currentLanguage: 'tr'
    }
  },
  methods: {
    toggleLanguage() {
      const newLang = this.currentLanguage === 'tr' ? 'en' : 'tr';
      this.currentLanguage = newLang;
      this.$router.push(`/${newLang}/academic-services-disclaimer`);
    }
  }
}
</script>

<style scoped>
.academic-disclaimer {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.disclaimer-content {
  flex: 1;
  padding: 2rem 0;
  background: linear-gradient(135deg, #f8fbff 0%, #ffffff 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.disclaimer-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e0e0e0;
}

.disclaimer-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.last-updated {
  color: #7f8c8d;
  font-size: 1.1rem;
}

.disclaimer-sections {
  line-height: 1.8;
}

.disclaimer-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.disclaimer-section h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  border-left: 4px solid #e74c3c;
  padding-left: 1rem;
}

.disclaimer-section h3 {
  color: #34495e;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 1.2rem;
}

.disclaimer-section p {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.disclaimer-section strong {
  color: #e74c3c;
  font-weight: 600;
}

.disclaimer-section ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.disclaimer-section li {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.contact-info {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.contact-info p {
  margin-bottom: 0.5rem;
}

/* Dark mode styles */
body.dark .disclaimer-content {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

body.dark .disclaimer-header h1 {
  color: #ffffff;
}

body.dark .disclaimer-section {
  background: #2d2d2d;
  box-shadow: 0 2px 10px rgba(255,255,255,0.1);
}

body.dark .disclaimer-section h2 {
  color: #ffffff;
  border-left-color: #e74c3c;
}

body.dark .disclaimer-section h3 {
  color: #e0e0e0;
}

body.dark .disclaimer-section p,
body.dark .disclaimer-section li {
  color: #cccccc;
}

body.dark .disclaimer-section strong {
  color: #e74c3c;
}

body.dark .contact-info {
  background: #3a3a3a;
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .disclaimer-header h1 {
    font-size: 2rem;
  }
  
  .disclaimer-section {
    padding: 1rem;
    margin-bottom: 2rem;
  }
  
  .disclaimer-section h2 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .disclaimer-header h1 {
    font-size: 1.8rem;
  }
  
  .disclaimer-section {
    padding: 0.8rem;
  }
  
  .disclaimer-section ul {
    padding-left: 1.5rem;
  }
}
</style>