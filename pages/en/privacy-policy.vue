<template>
  <div class="policy-page">
    <Header :language="currentLanguage" @toggle-language="toggleLanguage" />
    
    <main class="policy-content">
      <div class="container">
        <div class="policy-header">
          <h1>Privacy Policy</h1>
          <p class="effective-date">Effective Date: September 27, 2025</p>
        </div>

        <div class="policy-body">
          <section class="policy-section">
            <h2>1. Introduction</h2>
            <p>SciWriteNexus ("Platform", "we", "us", "our") is committed to protecting the privacy and confidentiality of all users ("you", "your", "user") who access our services at http://sciwritenexus.com/. This Privacy Policy constitutes a binding agreement between SciWriteNexus and its users, outlining our practices regarding the collection, use, disclosure, and protection of personal information obtained through our platform.</p>
          </section>

          <section class="policy-section">
            <h2>2. Scope and Applicability</h2>
            <p>This Privacy Policy applies to all information collected through the SciWriteNexus platform, including data gathered via our website, mobile applications, email communications, and any other digital interfaces we operate.</p>
          </section>

          <section class="policy-section">
            <h2>3. Information We Collect</h2>
            <p>SciWriteNexus collects various types of information to provide and improve our services. Personal information refers to data that can identify you as an individual, including your full name, academic title, institutional affiliation, email address, and payment information.</p>
          </section>

          <section class="policy-section">
            <h2>4. How We Collect Information</h2>
            <p>Information collection occurs through multiple channels to ensure comprehensive service delivery. Direct collection happens when you voluntarily provide information while creating an account, updating your profile, submitting manuscripts for editing, requesting statistical analysis services, enrolling in educational programs, or communicating with our support team.</p>
          </section>

          <section class="policy-section">
            <h2>5. Use of Collected Information</h2>
            <p>SciWriteNexus utilizes collected information primarily to deliver and enhance our core services. This includes processing manuscript editing requests, conducting statistical analyses, providing educational content, managing user accounts, and facilitating communication between users and our expert team.</p>
          </section>

          <section class="policy-section">
            <h2>6. Information Sharing and Disclosure</h2>
            <p>SciWriteNexus maintains strict controls over information sharing. We do not sell, rent, or trade your personal information to third parties for their marketing purposes. Your research content and personal data remain confidential unless you explicitly authorize sharing or publication.</p>
          </section>

          <section class="policy-section">
            <h2>7. Data Security Measures</h2>
            <p>Protecting your information is paramount to SciWriteNexus operations. We implement multiple layers of security to safeguard data against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section class="policy-section">
            <h2>8. Your Rights and Choices</h2>
            <p>SciWriteNexus respects your autonomy over personal information. You have the right to access the personal information we hold about you, which can be exercised through your account settings or by contacting our privacy team.</p>
          </section>

          <section class="policy-section">
            <h2>9. International Data Transfers</h2>
            <p>SciWriteNexus serves researchers globally, necessitating international data transfers. When we transfer personal information across borders, we ensure appropriate safeguards are in place.</p>
          </section>

          <section class="policy-section">
            <h2>10. Cookies and Tracking Technologies</h2>
            <p>Our use of cookies and similar technologies enhances your experience on SciWriteNexus. Essential cookies enable core functionalities such as maintaining your login session, remembering your language preferences, and ensuring secure connections.</p>
          </section>

          <section class="policy-section">
            <h2>11. Children's Privacy</h2>
            <p>SciWriteNexus is designed for adult researchers and academic professionals. We do not knowingly collect personal information from individuals under the age of 18.</p>
          </section>

          <section class="policy-section">
            <h2>12. Changes to This Policy</h2>
            <p>This Privacy Policy may be updated periodically to reflect changes in our practices, technologies, legal requirements, or business operations.</p>
          </section>

          <section class="policy-section">
            <h2>13. Contact Information</h2>
            <p>SciWriteNexus welcomes questions, concerns, and feedback regarding this Privacy Policy and our data practices. You may contact our dedicated privacy team through multiple channels for prompt assistance.</p>
            <p><strong>Email:</strong> privacy@sciwritenexus.com</p>
            <p><strong>Data Protection Officer:</strong> dpo@sciwritenexus.com</p>
          </section>
        </div>
      </div>
    </main>
    
    <Footer :language="currentLanguage" />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: 'PrivacyPolicyEN',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      currentLanguage: 'en'
    }
  },
  methods: {
    toggleLanguage() {
      const newLang = this.currentLanguage === 'tr' ? 'en' : 'tr';
      this.currentLanguage = newLang;
      this.$router.push(`/${newLang}/privacy-policy`);
    }
  }
}
</script>

<style scoped>
.policy-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.policy-content {
  padding: 2rem 0;
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.policy-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  border-radius: 15px;
  margin-top: 2rem;
}

.policy-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.effective-date {
  font-size: 1.1rem;
  opacity: 0.9;
  font-style: italic;
}

.policy-body {
  max-width: 900px;
  margin: 0 auto;
}

.policy-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
}

.policy-section h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 0.5rem;
}

.policy-section p {
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.policy-section strong {
  color: #2c3e50;
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .policy-header {
    margin-top: 1rem;
    padding: 1.5rem 1rem;
  }
  
  .policy-header h1 {
    font-size: 2rem;
  }
  
  .policy-section {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .policy-section h2 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .policy-content {
    padding: 1rem 0;
  }
  
  .policy-header h1 {
    font-size: 1.8rem;
  }
  
  .policy-section {
    padding: 1rem;
  }
  
  .policy-section h2 {
    font-size: 1.2rem;
  }
  
  .policy-section p {
    font-size: 1rem;
  }
}
</style>