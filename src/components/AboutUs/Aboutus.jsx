import React from "react";
import "./aboutus.scss";
import Footers from "../Footers/Footers";

const Aboutus = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="about-page">
        <header className="header">
          <div className="header-content">
            <h1>About</h1>
            <p>About Us</p>
          </div>
        </header>

        <div className="content">
          <aside className="sidebar">
            <h2>More About Us</h2>
            <ul>
              <li onClick={() => scrollToSection("accessibility")}>Accessibility</li>
              <li onClick={() => scrollToSection("child-ambassador")}>Child Ambassador</li>
              <li onClick={() => scrollToSection("women-empowerment")}>Women Empowerment</li>
              <li onClick={() => scrollToSection("data-protection")}>Data Protection</li>
              <li onClick={() => scrollToSection("diversity")}>Diversity</li>
              <li onClick={() => scrollToSection("legal-advisors")}>Legal Advisors</li>
              <li onClick={() => scrollToSection("our-board")}>Our Board</li>
              <li onClick={() => scrollToSection("fundraising-promise")}>Our Fundraising Promise</li>
              <li onClick={() => scrollToSection("medical-advisor")}>Our Medical Advisor</li>
              <li onClick={() => scrollToSection("our-patron")}>Our Patron</li>
              <li onClick={() => scrollToSection("our-values")}>Our Values</li>
              <li onClick={() => scrollToSection("standards")}>Standards</li>
              <li onClick={() => scrollToSection("terms-of-use")}>Terms of Use</li>
            </ul>
          </aside>

          <main className="main-content">
            <blockquote>
              "You are providing a wonderful service and help. The world needs
              great souls like yours now more than ever. Thank you for caring
              and sharing!"
            </blockquote>
            <p>
              haziel foundation provides support for families to help their
              children with disabilities and sickness.
            </p>
            <p>
              haziel foundation is passionate about the relief of sickness and
              preservation of good physical and mental health of children and
              young people under the age of 25 years resident in Africa, Nigeria
              in particular, and without limitation, by providing and assisting
              in the provision of services and grants to enable them to obtain
              medical treatment, therapies and equipment which would not
              otherwise be available to them.
            </p>
            <div className="video-container">
              <video controls width="100%" height="auto">
                <source src="/images/charity2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <blockquote>
              haziel provides fundraising support for families in these areas:
            </blockquote>
            <p>
              Among its primary initiatives are mental health support,
              advocating for human rights, advancing education, and promoting
              women's empowerment. Through these efforts, the foundation aims to
              address systemic issues and uplift marginalized communities, both
              in urban centers and rural areas. Central to its mission is
              fostering community engagement and encouraging healthy living
              practices.
            </p>
            <blockquote className="highlight">
              By empowering local residents and promoting collective action, the
              foundation seeks to create sustainable change from the ground up.
              Governed by a constitution grounded in principles of integrity,
              transparency, and accountability, Haziel Charity Foundation
              operates with a commitment to ethical stewardship of resources and
              partnerships. Through strategic planning and collaboration, the
              foundation not only provides immediate assistance to those in need
              but also invests in long-term solutions. By empowering individuals
              with the skills and resources necessary for self-sufficiency, it
              aims to create lasting impact and build a more equitable society
              for future generations.
            </blockquote>
            <p>
              If we can help you further please contact us on our Freephone
              number: <a href="tel:+2348035963834">+2348035963834</a>
            </p>
            <div className="image-cards">
              <div className="card">
                <img src="/images/aboutimg1.jpeg" alt="Our Values" />
                <div className="card-title">Our Values</div>
              </div>
              <div className="card">
                <img src="/images/aboutimg2.jpeg" alt="Accessibility" />
                <div className="card-title">Accessibility</div>
              </div>
              <div className="card">
                <img src="/images/aboutimg3.jpeg" alt="Child Ambassador" />
                <div className="card-title">Child Ambassador</div>
              </div>
              <div className="card">
                <img src="/images/aboutimg4.jpeg" alt="Legal Advisors" />
                <div className="card-title">Legal Advisors</div>
              </div>
            </div>

            {/* Additional Sections */}
            <section id="accessibility" className="content-section">
              <h2>Accessibility</h2>
              <p>
                Haziel Charity Foundation is committed to ensuring that all our services, programs, and resources are accessible to everyone, regardless of their abilities or circumstances. We strive to remove barriers and create inclusive environments where all individuals can participate fully in our programs and access the support they need.
              </p>
            </section>

            <section id="child-ambassador" className="content-section">
              <h2>Child Ambassador</h2>
              <p>
                Our Child Ambassador program empowers young voices to advocate for children's rights and well-being. These ambassadors represent the foundation at various events and help raise awareness about the challenges facing children in underserved communities. They serve as role models and inspire other children to reach their full potential.
              </p>
            </section>

            <section id="women-empowerment" className="content-section">
              <h2>Women Empowerment</h2>
              <p>
                We believe in the transformative power of empowering women. Through skills training, educational opportunities, and economic support, we help women become self-sufficient and contribute meaningfully to their communities. Our programs focus on vocational training, entrepreneurship, and leadership development to create lasting change.
              </p>
            </section>

            <section id="data-protection" className="content-section">
              <h2>Data Protection</h2>
              <p>
                Haziel Charity Foundation takes data protection seriously. We are committed to protecting the privacy and confidentiality of all personal information entrusted to us. We comply with all relevant data protection regulations and implement robust security measures to safeguard sensitive information.
              </p>
            </section>

            <section id="diversity" className="content-section">
              <h2>Diversity</h2>
              <p>
                Diversity and inclusion are at the heart of our foundation. We celebrate the rich diversity of the communities we serve and are committed to creating an inclusive environment where everyone feels valued and respected. Our programs are designed to serve people from all backgrounds, cultures, and walks of life.
              </p>
            </section>

            <section id="legal-advisors" className="content-section">
              <h2>Legal Advisors</h2>
              <p>
                Our team of experienced legal advisors ensures that all our operations comply with relevant laws and regulations. They provide guidance on governance, compliance, and legal matters, helping us maintain the highest standards of integrity and accountability in everything we do.
              </p>
            </section>

            <section id="our-board" className="content-section">
              <h2>Our Board</h2>
              <p>
                The Haziel Charity Foundation Board of Directors consists of dedicated individuals who bring diverse expertise and experience to guide our strategic direction. They provide oversight, ensure accountability, and help us stay true to our mission of serving communities in need.
              </p>
            </section>

            <section id="fundraising-promise" className="content-section">
              <h2>Our Fundraising Promise</h2>
              <p>
                We promise to use your donations responsibly and transparently. Every contribution goes directly toward supporting our programs and services. We are committed to maintaining the highest standards of financial accountability and regularly report on how funds are used to make a positive impact in the communities we serve.
              </p>
            </section>

            <section id="medical-advisor" className="content-section">
              <h2>Our Medical Advisor</h2>
              <p>
                Our medical advisor provides expert guidance on health-related programs and initiatives. They help ensure that our medical outreach programs, health education, and support services meet the highest standards and effectively address the health needs of the communities we serve.
              </p>
            </section>

            <section id="our-patron" className="content-section">
              <h2>Our Patron</h2>
              <p>
                Our patron provides invaluable support and guidance to the foundation. Their leadership and commitment to our cause help us reach more people and make a greater impact. We are honored to have their support in our mission to serve communities in need.
              </p>
            </section>

            <section id="our-values" className="content-section">
              <h2>Our Values</h2>
              <p>
                Integrity, compassion, transparency, and accountability are the core values that guide everything we do. We believe in treating everyone with dignity and respect, being honest and transparent in all our dealings, and taking responsibility for our actions. These values shape our programs, our partnerships, and our commitment to making a positive difference.
              </p>
            </section>

            <section id="standards" className="content-section">
              <h2>Standards</h2>
              <p>
                Haziel Charity Foundation maintains the highest standards in all our operations. We adhere to best practices in governance, program delivery, and financial management. Our commitment to excellence ensures that we deliver quality services and maximize the impact of every resource entrusted to us.
              </p>
            </section>

            <section id="terms-of-use" className="content-section">
              <h2>Terms of Use</h2>
              <p>
                By using our website and services, you agree to comply with our terms of use. We reserve the right to update these terms as needed. For any questions or concerns about our terms of use, please contact us at <a href="tel:+2348035963834">+2348035963834</a> or through our contact page.
              </p>
            </section>
          </main>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Aboutus;
