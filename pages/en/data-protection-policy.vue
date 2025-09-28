<template>
  <div class="data-protection-policy">
    <Header :language="currentLanguage" @toggle-language="toggleLanguage" />
    
    <main class="policy-content">
      <div class="container">
        <div class="policy-header">
          <h1>Data Protection Policy</h1>
          <p class="last-updated">Last updated: September 27, 2025</p>
        </div>

        <div class="policy-sections">
          <section class="policy-section">
            <h2>1. Introduction</h2>
            <p>SciWriteNexus ("we", "our", or "the company") takes the privacy of our customers and website visitors seriously. This Data Protection Policy explains how SciWriteNexus collects, uses, shares, and protects personal data.</p>
          </section>

          <section class="policy-section">
            <h2>2. Types of Data Collected</h2>
            <h3>2.1 Information Provided Directly</h3>
            <ul>
              <li>Through contact forms: Name, surname, email address</li>
              <li>Free evaluation forms: Academic background, project details, file uploads</li>
              <li>Contact information: Email subscriptions, questions and requests</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <ul>
              <li>IP address, browser type, operating system</li>
              <li>Page view statistics, site usage data</li>
              <li>Data collected through cookies and similar technologies</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>3. Purposes of Data Use</h2>
            <p>We use the data we collect for the following purposes:</p>
            <ul>
              <li>Providing academic consulting services</li>
              <li>Responding to customer inquiries and communication</li>
              <li>Improving and enhancing our service quality</li>
              <li>Fulfilling our legal obligations</li>
              <li>Security and fraud prevention</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>4. Data Sharing</h2>
            <p>We do not share your personal data with third parties except in the following circumstances:</p>
            <ul>
              <li>With our business partners necessary to provide services to you (with limited access)</li>
              <li>With authorized authorities as required by legal obligations</li>
              <li>In case of company merger, acquisition, or bankruptcy</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>5. Data Retention Periods</h2>
            <p>We retain your personal data for the period required by the purpose of data collection:</p>
            <ul>
              <li>Customer data: 5 years from the end of service relationship</li>
              <li>Potential customer data: 2 years from last communication</li>
              <li>Legal retention obligations: Periods determined by relevant legislation</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>6. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to ensure the security of your data:</p>
            <ul>
              <li>SSL encryption technology</li>
              <li>Regular security audits</li>
              <li>Access controls and authorization systems</li>
              <li>Staff privacy training</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>7. Cookie Policy</h2>
            <p>Our website uses cookies to improve user experience and analyze site traffic. You can manage your cookie preferences through browser settings.</p>
          </section>

          <section class="policy-section">
            <h2>8. Your Rights</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul>
              <li>Right to access your data</li>
              <li>Right to rectification and updating</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to object to processing</li>
              <li>Right to data portability</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>9. International Data Transfer</h2>
            <p>Your data is generally stored within Turkey's borders. In case of international transfer, appropriate security measures are taken.</p>
          </section>

          <section class="policy-section">
            <h2>10. Children's Privacy</h2>
            <p>Our services are not directed at individuals under 18 years of age. If we discover that we have collected personal data from children unknowingly, we will delete such data immediately.</p>
          </section>

          <section class="policy-section">
            <h2>11. Policy Changes</h2>
            <p>We may update this policy from time to time. Changes take effect immediately upon publication on our website.</p>
          </section>

          <section class="policy-section">
            <h2>12. Contact</h2>
            <p>For questions regarding our data protection policy:</p>
            <div class="contact-info">
              <p><strong>SciWriteNexus</strong></p>
              <p>Email: info@sciwritenexus.com</p>
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
  name: 'DataProtectionPolicyEN',
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