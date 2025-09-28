<template>
  <div class="data-protection-policy">
    <Header :language="currentLanguage" @toggle-language="toggleLanguage" />
    
    <main class="policy-content">
      <div class="container">
        <div class="policy-header">
          <h1>Veri Koruma Politikası</h1>
          <p class="last-updated">Son güncelleme: 27 Eylül 2025</p>
        </div>

        <div class="policy-sections">
          <section class="policy-section">
            <h2>1. Giriş</h2>
            <p>RWNexus ("biz", "bizim" veya "şirket") olarak, müşterilerimizin ve web sitemiz ziyaretçilerinin gizliliğini ve kişisel verilerinin korunmasını ciddiye alıyoruz. Bu Veri Koruma Politikası, RWNexus'un kişisel verileri nasıl topladığını, kullandığını, paylaştığını ve koruduğunu açıklamaktadır.</p>
          </section>

          <section class="policy-section">
            <h2>2. Toplanan Veri Türleri</h2>
            <h3>2.1 Doğrudan Sağlanan Bilgiler</h3>
            <ul>
              <li>İletişim formları aracılığıyla: Ad, soyadı, e-posta adresi, telefon numarası</li>
              <li>Ücretsiz değerlendirme formları: Akademik geçmiş, proje detayları, dosya yüklemeleri</li>
              <li>İletişim bilgileri: E-posta abonelikleri, soru ve talepler</li>
            </ul>

            <h3>2.2 Otomatik Olarak Toplanan Bilgiler</h3>
            <ul>
              <li>IP adresi, tarayıcı türü, işletim sistemi</li>
              <li>Sayfa görüntüleme istatistikleri, site kullanım verileri</li>
              <li>Çerezler ve benzeri teknolojiler aracılığıyla toplanan veriler</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>3. Veri Kullanım Amaçları</h2>
            <p>Topladığımız verileri aşağıdaki amaçlarla kullanıyoruz:</p>
            <ul>
              <li>Akademik danışmanlık hizmetlerimizin sağlanması</li>
              <li>Müşteri taleplerine yanıt verme ve iletişim kurma</li>
              <li>Hizmet kalitemizi iyileştirme ve geliştirme</li>
              <li>Yasal yükümlülüklerimizi yerine getirme</li>
              <li>Güvenlik ve dolandırıcılık önleme</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>4. Veri Paylaşımı</h2>
            <p>Kişisel verilerinizi aşağıdaki durumlar dışında üçüncü şahıslarla paylaşmıyoruz:</p>
            <ul>
              <li>Size hizmet sağlamak için gerekli olan iş ortaklarımızla (sınırlı erişimle)</li>
              <li>Yasal zorunluluklar gereği yetkili makamlarla</li>
              <li>Şirket birleşme, devralma veya iflas durumlarında</li>
              <li>Açık onayınızla</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>5. Veri Saklama Süreleri</h2>
            <p>Kişisel verilerinizi, veri toplama amacının gerektirdiği süre boyunca saklıyoruz:</p>
            <ul>
              <li>Müşteri verileri: Hizmet ilişkisinin sona ermesinden itibaren 5 yıl</li>
              <li>Potansiyel müşteri verileri: Son iletişimden itibaren 2 yıl</li>
              <li>Yasal saklama yükümlülükleri: İlgili mevzuat gereği belirlenen süreler</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>6. Veri Güvenliği</h2>
            <p>Verilerinizin güvenliğini sağlamak için uygun teknik ve organizasyonel önlemler alıyoruz:</p>
            <ul>
              <li>SSL şifreleme teknolojisi</li>
              <li>Düzenli güvenlik denetimleri</li>
              <li>Erişim kontrolleri ve yetkilendirme sistemleri</li>
              <li>Personel gizlilik eğitimleri</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>7. Çerez Politikası</h2>
            <p>Web sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için çerezler kullanmaktadır. Çerez tercihlerinizi tarayıcı ayarlarından yönetebilirsiniz.</p>
          </section>

          <section class="policy-section">
            <h2>8. Haklarınız</h2>
            <p>Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:</p>
            <ul>
              <li>Verilerinize erişim hakkı</li>
              <li>Düzeltme ve güncelleme hakkı</li>
              <li>Silinme hakkı ("unutmaya hak")</li>
              <li>İşleme itiraz hakkı</li>
              <li>Veri taşınabilirliği hakkı</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>9. Uluslararası Veri Transferi</h2>
            <p>Verileriniz genellikle Türkiye sınırları içinde saklanmaktadır. Uluslararası transfer durumunda, uygun güvenlik önlemleri alınmaktadır.</p>
          </section>

          <section class="policy-section">
            <h2>10. Çocukların Gizliliği</h2>
            <p>Hizmetlerimiz 18 yaşın altındaki kişilere yönelik değildir. Bilmeden çocuklardan kişisel veri topladığımızı fark edersek, bu verileri derhal sileriz.</p>
          </section>

          <section class="policy-section">
            <h2>11. Politika Değişiklikleri</h2>
            <p>Bu politikayı zaman zaman güncelleyebiliriz. Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer.</p>
          </section>

          <section class="policy-section">
            <h2>12. İletişim</h2>
            <p>Veri koruma politikamızla ilgili sorularınız için:</p>
            <div class="contact-info">
              <p><strong>RWNexus</strong></p>
              <p>E-posta: info@rwnexus.com</p>
              <p>Telefon: +90 542 272 31 31</p>
            </div>
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
  name: 'DataProtectionPolicyTR',
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
      this.$router.push(`/${newLang}/data-protection-policy`);
    }
  }
}
</script>

<style scoped>
.data-protection-policy {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.policy-content {
  flex: 1;
  padding: 2rem 0;
  background: linear-gradient(135deg, #f8fbff 0%, #ffffff 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.policy-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e0e0e0;
}

.policy-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.last-updated {
  color: #7f8c8d;
  font-size: 1.1rem;
}

.policy-sections {
  line-height: 1.8;
}

.policy-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.policy-section h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  border-left: 4px solid #3498db;
  padding-left: 1rem;
}

.policy-section h3 {
  color: #34495e;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 1.2rem;
}

.policy-section p {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.policy-section ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.policy-section li {
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
body.dark .policy-content {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

body.dark .policy-header h1 {
  color: #ffffff;
}

body.dark .policy-section {
  background: #2d2d2d;
  box-shadow: 0 2px 10px rgba(255,255,255,0.1);
}

body.dark .policy-section h2 {
  color: #ffffff;
  border-left-color: #3498db;
}

body.dark .policy-section h3 {
  color: #e0e0e0;
}

body.dark .policy-section p,
body.dark .policy-section li {
  color: #cccccc;
}

body.dark .contact-info {
  background: #3a3a3a;
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .policy-header h1 {
    font-size: 2rem;
  }
  
  .policy-section {
    padding: 1rem;
    margin-bottom: 2rem;
  }
  
  .policy-section h2 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .policy-header h1 {
    font-size: 1.8rem;
  }
  
  .policy-section {
    padding: 0.8rem;
  }
  
  .policy-section ul {
    padding-left: 1.5rem;
  }
}
</style>