<template>
  <div class="academic-disclaimer">
    <Header :language="currentLanguage" @toggle-language="toggleLanguage" />
    
    <main class="disclaimer-content">
      <div class="container">
        <div class="disclaimer-header">
          <h1>Academic Services Disclaimer</h1>
          <p class="last-updated">Last updated: September 27, 2025</p>
        </div>

        <div class="disclaimer-sections">
          <section class="disclaimer-section">
            <h2>1. Nature of Our Services</h2>
            <p>The academic consulting services provided by RWNexus are designed to develop, improve, and bring your academic work in line with academic standards. Our services aim to:</p>
            <ul>
              <li>Enhance your academic writing skills</li>
              <li>Improve the quality of your existing work</li>
              <li>Provide guidance in academic processes</li>
              <li>Offer professional feedback</li>
            </ul>
            <p><strong>Our services never include writing on your behalf or preparing academic work in your name.</strong></p>
          </section>

          <section class="disclaimer-section">
            <h2>2. Academic Integrity Principles</h2>
            <p>RWNexus places great importance on academic integrity and ethical values:</p>
            <ul>
              <li>All work must be original and free of plagiarism</li>
              <li>References must be properly cited</li>
              <li>Academic institutions' integrity policies must be followed</li>
              <li>Consulting services should not be presented as the student's or researcher's own work</li>
            </ul>
          </section>

          <section class="disclaimer-section">
            <h2>3. Liability Limitations</h2>
            <h3>3.1 Academic Success Guarantee</h3>
            <p>RWNexus does not guarantee any academic achievements resulting from the use of our services. Success depends on individual effort, ability, and other factors.</p>

            <h3>3.2 Publication Acceptance</h3>
            <p>We do not guarantee journal publication acceptance or thesis approval. These decisions are entirely at the discretion of the relevant academic institutions.</p>

            <h3>3.3 Timelines</h3>
            <p>Stated timelines are estimates and may vary depending on factors such as client cooperation and project complexity.</p>
          </section>

          <section class="disclaimer-section">
            <h2>4. Client Responsibilities</h2>
            <p>To benefit optimally from our services, our clients are expected to fulfill the following responsibilities:</p>
            <ul>
              <li>Providing accurate and complete information</li>
              <li>Providing timely feedback and approval</li>
              <li>Complying with academic institutions' policies</li>
              <li>Reviewing and approving final work</li>
              <li>Adhering to copyright and academic ethics rules</li>
            </ul>
          </section>

          <section class="disclaimer-section">
            <h2>5. Intellectual Property Rights</h2>
            <p>All content provided by clients remains the intellectual property of the client. RWNexus:</p>
            <ul>
              <li>Protects the confidentiality of client work</li>
              <li>Does not share content with third parties</li>
              <li>Does not use work without client permission</li>
              <li>Retains intellectual property of consulting services</li>
            </ul>
          </section>

          <section class="disclaimer-section">
            <h2>6. Areas Outside Service Scope</h2>
            <p>RWNexus does not provide the following services:</p>
            <ul>
              <li>Exam preparation or exam questions</li>
              <li>Completing assignments or projects</li>
              <li>Providing academic degrees or certificates</li>
              <li>Legal or medical advice</li>
              <li>Financial investment consulting</li>
            </ul>
          </section>

          <section class="disclaimer-section">
            <h2>7. Fee and Payment Policy</h2>
            <p>Service fees are determined based on service scope and complexity:</p>
            <ul>
              <li>Quotation provided after free evaluation</li>
              <li>Payments made before service commencement</li>
              <li>Refund policy subject to service terms</li>
              <li>Price change rights reserved</li>
            </ul>
          </section>

          <section class="disclaimer-section">
            <h2>8. Contact and Support</h2>
            <p>For questions regarding our services:</p>
            <div class="contact-info">
              <p><strong>RWNexus Academic Consulting</strong></p>
              <p>Email: info@rwnexus.com</p>
              <p>Phone: +90 542 272 31 31</p>
              <p>Working Hours: Monday-Friday 09:00-18:00</p>
            </div>
          </section>

          <section class="disclaimer-section">
            <h2>9. Legal Notice</h2>
            <p>This disclaimer does not limit RWNexus's legal obligations. Clients are deemed to have approved this policy by accepting the service terms.</p>
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
  name: 'AcademicServicesDisclaimerEN',
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