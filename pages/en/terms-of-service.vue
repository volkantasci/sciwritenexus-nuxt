<template>
  <div class="terms-page">
    <Header :language="currentLanguage" @toggle-language="toggleLanguage" />
    
    <main class="terms-content">
      <div class="container">
        <div class="terms-header">
          <h1>Terms of Service</h1>
          <p class="effective-date">Effective Date: September 27, 2025</p>
        </div>

        <div class="terms-body">
          <section class="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>These Terms of Service ("Terms", "Agreement") constitute a legally binding agreement between you ("User", "you", "your") and RWNexus ("Platform", "we", "us", "our"), governing your access to and use of the http://rwnexus.com/ website and all associated services, features, and content.</p>
          </section>

          <section class="terms-section">
            <h2>2. Platform Description and Eligibility</h2>
            <p>RWNexus is a specialized academic support platform designed to assist researchers, scholars, and scientific professionals in enhancing their written communications. Our services encompass manuscript editing, statistical analysis support, academic English instruction, and related educational resources tailored to the needs of the global research community.</p>
          </section>

          <section class="terms-section">
            <h2>3. Intellectual Property Rights</h2>
            <p>All content available on RWNexus, including but not limited to text, graphics, logos, images, audio clips, video materials, data compilations, software, and the compilation of all content on the Platform, is the exclusive property of RWNexus or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.</p>
          </section>

          <section class="terms-section">
            <h2>4. User-Generated Content and Submissions</h2>
            <p>When you submit content to RWNexus, including but not limited to research manuscripts, data sets, comments, feedback, or any other materials ("User Content"), you retain ownership of your intellectual property rights in such content.</p>
          </section>

          <section class="terms-section">
            <h2>5. Prohibited Uses and Conduct</h2>
            <p>You agree not to engage in any of the following prohibited activities in connection with your use of RWNexus: Violating any applicable laws, regulations, or third-party rights; using the Platform for any unlawful, harmful, fraudulent, or malicious purpose; attempting to interfere with, compromise the system integrity or security of, or decipher any transmissions to or from the servers running the Platform.</p>
          </section>

          <section class="terms-section">
            <h2>6. Payment Terms and Refund Policy</h2>
            <p>Certain services offered through RWNexus require payment. By purchasing our services, you agree to pay all applicable fees as described on the Platform at the time of purchase. All prices are in U.S. dollars unless otherwise specified.</p>
          </section>

          <section class="terms-section">
            <h2>7. Disclaimers and Limitation of Liability</h2>
            <p>RWNexus provides all services and content on an "as is" and "as available" basis without warranties of any kind, either express or implied. We specifically disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising from course of dealing or usage of trade.</p>
          </section>

          <section class="terms-section">
            <h2>8. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless RWNexus, its affiliates, and their respective officers, directors, employees, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms.</p>
          </section>

          <section class="terms-section">
            <h2>9. Account Termination and Suspension</h2>
            <p>We reserve the right to suspend or terminate your account and access to the Platform at any time, with or without cause, with or without notice. Causes for termination may include, but are not limited to, breach of these Terms, extended periods of inactivity, requests by law enforcement or government agencies, technical or security issues, or suspected fraudulent or illegal activities.</p>
          </section>

          <section class="terms-section">
            <h2>10. Privacy and Data Protection</h2>
            <p>Your use of RWNexus is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Platform, you consent to our collection, use, and disclosure of information as described in the Privacy Policy.</p>
          </section>

          <section class="terms-section">
            <h2>11. Third-Party Links and Services</h2>
            <p>The Platform may contain links to third-party websites, services, or resources that are not owned or controlled by RWNexus. We provide these links for your convenience, but we do not endorse and are not responsible for the content, products, or services offered by third parties.</p>
          </section>

          <section class="terms-section">
            <h2>12. Governing Law and Dispute Resolution</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction to be specified], without regard to its conflict of law provisions. You agree that any dispute arising from or relating to these Terms or your use of the Platform shall be resolved exclusively through binding arbitration.</p>
          </section>

          <section class="terms-section">
            <h2>13. General Provisions</h2>
            <p>These Terms constitute the entire agreement between you and RWNexus regarding your use of the Platform and supersede all prior agreements and understandings. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
          </section>

          <section class="terms-section">
            <h2>14. Contact Information</h2>
            <p>If you have any questions, concerns, or comments about these Terms of Service, please contact us at:</p>
            <p><strong>RWNexus</strong></p>
            <p><strong>Email:</strong> support@rwnexus.com</p>
            <p><strong>Legal Inquiries:</strong> legal@rwnexus.com</p>
            <p><strong>Website:</strong> http://rwnexus.com/</p>
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
  name: 'TermsOfServiceEN',
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
      this.$router.push(`/${newLang}/terms-of-service`);
    }
  }
}
</script>

<style scoped>
.terms-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.terms-content {
  padding: 2rem 0;
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.terms-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  border-radius: 15px;
  margin-top: 2rem;
}

.terms-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.effective-date {
  font-size: 1.1rem;
  opacity: 0.9;
  font-style: italic;
}

.terms-body {
  max-width: 900px;
  margin: 0 auto;
}

.terms-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #e74c3c;
}

.terms-section h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 0.5rem;
}

.terms-section p {
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.terms-section strong {
  color: #2c3e50;
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .terms-header {
    margin-top: 1rem;
    padding: 1.5rem 1rem;
  }
  
  .terms-header h1 {
    font-size: 2rem;
  }
  
  .terms-section {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .terms-section h2 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .terms-content {
    padding: 1rem 0;
  }
  
  .terms-header h1 {
    font-size: 1.8rem;
  }
  
  .terms-section {
    padding: 1rem;
  }
  
  .terms-section h2 {
    font-size: 1.2rem;
  }
  
  .terms-section p {
    font-size: 1rem;
  }
}
</style>