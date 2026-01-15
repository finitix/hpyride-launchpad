import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | HpyRide.Com - Your Data Protection & Privacy Rights"
        description="Read HpyRide.Com's comprehensive privacy policy. Learn how we collect, use, and protect your personal data across all our mobility services in India and worldwide."
        keywords="HpyRide privacy policy, data protection, user privacy, ride sharing privacy, car pooling data security, HpyRide.Com"
        canonicalUrl="https://hpyride.com/privacy-policy"
      />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Effective Date: 01/01/2026 | Applicable Regions: India & Worldwide
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              {/* 1.1 Introduction */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1.1 Introduction</h2>
                <p className="text-muted-foreground">
                  HpyRide.Com ("HpyRide", "we", "our", "us") is a global mobility and automobile services platform operating across India and internationally. We are committed to protecting user privacy and ensuring safety for all categories of users.
                </p>
                <p className="text-muted-foreground mt-4">
                  By using the HpyRide.Com app or website, you agree to this Privacy Policy.
                </p>
              </div>

              {/* 1.2 Services Covered */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1.2 Services Covered</h2>
                <p className="text-muted-foreground mb-4">This policy applies to all HpyRide.Com services:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>HpyCabs</strong> — Cab aggregation services for 2-wheelers, 3-wheelers, and 4-wheelers and above (4W+)</li>
                  <li><strong>Car Pooling / Ride Sharing</strong> — Shared rides using 2-wheelers and 4W+ vehicles, including in-city pooling and outstation pooling, and including white-plate and taxi-plate vehicles where permitted by law. This service is designed to reduce traffic congestion, fuel consumption, and environmental impact through shared mobility.</li>
                  <li><strong>Driver Pooling</strong> — Temporary drivers for city and outstation travel</li>
                  <li><strong>Car Rentals</strong> — Vehicles from verified owners and local rental partners</li>
                  <li><strong>Pre-Owned Cars</strong> — Buying and selling of used vehicles through verified sellers</li>
                </ul>
              </div>

              {/* 1.3 Information We Collect */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1.3 Information We Collect</h2>
                
                <h3 className="text-xl font-medium text-foreground mt-4 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Name</li>
                  <li>Mobile number</li>
                  <li>Email address</li>
                  <li>Profile photo (optional)</li>
                  <li>Identity documents where legally or operationally required</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mt-6 mb-2">Location Information (Sensitive)</h3>
                <p className="text-muted-foreground mb-2">Collected only during booking and active rides for:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Pickup and drop accuracy</li>
                  <li>Live trip tracking</li>
                  <li>Navigation</li>
                  <li>Safety monitoring, especially for women</li>
                  <li>SOS and emergency response</li>
                </ul>
                <p className="text-muted-foreground mt-2">Background location is used only during active trips and stops automatically after trip completion.</p>

                <h3 className="text-xl font-medium text-foreground mt-6 mb-2">Contact Access (Emergency Only)</h3>
                <p className="text-muted-foreground mb-2">Used only to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Select trusted emergency contacts</li>
                  <li>Send SOS alerts</li>
                  <li>Share trip status with trusted contacts</li>
                </ul>
                <p className="text-muted-foreground mt-2">Full contact lists are not stored or used for marketing.</p>

                <h3 className="text-xl font-medium text-foreground mt-6 mb-2">Vehicle & Driver Information</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Vehicle registration</li>
                  <li>Driving license</li>
                  <li>Insurance and compliance documents</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mt-6 mb-2">Payment Information</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Processed via secure third-party gateways</li>
                  <li>HpyRide does not store full card or banking details</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mt-6 mb-2">Technical & Usage Data</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>IP address</li>
                  <li>Device type and OS</li>
                  <li>App logs and crash reports</li>
                  <li>Booking and transaction history</li>
                </ul>
              </div>

              {/* 1.4 Purpose of Data Use */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1.4 Purpose of Data Use</h2>
                <p className="text-muted-foreground mb-2">Data is used only to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Provide and manage services</li>
                  <li>Ensure safety and fraud prevention</li>
                  <li>Enable SOS and emergency response</li>
                  <li>Provide customer support</li>
                  <li>Improve platform performance</li>
                  <li>Meet legal obligations</li>
                </ul>
              </div>

              {/* 1.5 Data Sharing */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1.5 Data Sharing</h2>
                <p className="text-muted-foreground mb-2">We do not sell personal data. Data may be shared only with:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Drivers, riders, owners, buyers, or sellers involved in a service</li>
                  <li>Payment processors and cloud service providers</li>
                  <li>Government authorities when legally required</li>
                </ul>
              </div>

              {/* 1.6 Data Security */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1.6 Data Security</h2>
                <p className="text-muted-foreground">
                  We use encrypted transmission, secure servers, and access controls. While no system is 100% secure, safety remains our highest priority.
                </p>
              </div>

              {/* 1.7 Data Retention & Deletion */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1.7 Data Retention & Deletion</h2>
                <p className="text-muted-foreground">
                  Data is retained only as long as necessary for service delivery and legal compliance. Users may request account deletion at any time.
                </p>
              </div>

              {/* 1.8 User Rights */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1.8 User Rights</h2>
                <p className="text-muted-foreground mb-2">Users may:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Access and update personal data</li>
                  <li>Control permissions via device settings</li>
                  <li>Withdraw consent</li>
                  <li>Request data deletion</li>
                </ul>
              </div>

              {/* 1.9 Children's Privacy */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1.9 Children's Privacy</h2>
                <p className="text-muted-foreground">
                  HpyRide is not intended for users under 18 years of age.
                </p>
              </div>

              {/* 1.10 Contact & Grievance */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1.10 Contact & Grievance</h2>
                <p className="text-muted-foreground"><strong>Company:</strong> HpyRide.Com</p>
                <p className="text-muted-foreground"><strong>Support Email:</strong> hpyrideindia@gmail.com</p>
                <p className="text-muted-foreground"><strong>Grievance Email:</strong> hpyride.dcgroup@gmail.com</p>
                <p className="text-muted-foreground"><strong>WhatsApp Support:</strong> +91 88976 11021</p>
                <p className="text-muted-foreground"><strong>Address:</strong> Hyderabad, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
