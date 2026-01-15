import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const TermsConditions = () => {
  return (
    <Layout>
      <SEO
        title="Terms & Conditions | HpyRide.Com - User Agreement & Platform Rules"
        description="Read HpyRide.Com's terms and conditions. Understand your rights, responsibilities, and our platform policies for ride sharing, car pooling, and mobility services."
        keywords="HpyRide terms and conditions, user agreement, ride sharing terms, car pooling rules, HpyRide.Com policy"
        canonicalUrl="https://hpyride.com/terms-conditions"
      />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Terms & Conditions</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Effective Date: 01/01/2026 | Applicable Regions: India & Worldwide
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              {/* 2.1 Eligibility */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2.1 Eligibility</h2>
                <p className="text-muted-foreground">
                  Users must be at least 18 years old. Drivers must possess valid licenses and documents.
                </p>
              </div>

              {/* 2.2 Account Responsibility */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2.2 Account Responsibility</h2>
                <p className="text-muted-foreground">
                  Users are responsible for maintaining account security and all activities under their account.
                </p>
              </div>

              {/* 2.3 Platform Role */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2.3 Platform Role</h2>
                <p className="text-muted-foreground">
                  HpyRide.Com is a technology platform connecting users. Drivers, car owners, and sellers are independent service providers.
                </p>
              </div>

              {/* 2.4 Payments */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2.4 Payments</h2>
                <p className="text-muted-foreground">
                  Payments are processed via third-party gateways. HpyRide.Com is not responsible for gateway failures.
                </p>
              </div>

              {/* 2.5 User Conduct */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2.5 User Conduct</h2>
                <p className="text-muted-foreground mb-2">Users must not:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Harass or threaten others</li>
                  <li>Carry illegal items</li>
                  <li>Damage property</li>
                  <li>Violate traffic or local laws</li>
                </ul>
              </div>

              {/* 2.6 Car Pooling Disclaimer */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2.6 Car Pooling Disclaimer & City Traffic Reduction</h2>
                <p className="text-muted-foreground mb-4">
                  HpyRide.Com promotes responsible ride sharing to reduce city traffic and pollution. Car pooling and 2-wheeler pooling are intended for cost sharing and convenience, not commercial transport, and are subject to local transport regulations.
                </p>
                <p className="text-muted-foreground mb-2">Users must ensure compliance with:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Local motor vehicle laws</li>
                  <li>Helmet and safety requirements</li>
                  <li>Passenger capacity limits</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  HpyRide.Com may restrict or suspend pooling services in locations where regulations do not permit such activity.
                </p>
                <p className="text-muted-foreground mt-2">
                  Private vehicle ride sharing is permitted only for cost sharing and not as commercial transport, subject to local transport laws.
                </p>
              </div>

              {/* 2.7 Limitation of Liability */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2.7 Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  HpyRide.Com is not liable for accidents, personal injuries, vehicle issues, or acts of independent service providers.
                </p>
              </div>

              {/* 2.8 Account Suspension */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2.8 Account Suspension</h2>
                <p className="text-muted-foreground">
                  Accounts may be suspended or terminated for safety violations, fraud, or misuse.
                </p>
              </div>

              {/* 2.9 Governing Law */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2.9 Governing Law</h2>
                <p className="text-muted-foreground">
                  For India, these terms are governed by Indian law. Courts at Hyderabad shall have jurisdiction.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground"><strong>Support Email:</strong> hpyrideindia@gmail.com</p>
                <p className="text-muted-foreground"><strong>Grievance Email:</strong> hpyride.dcgroup@gmail.com</p>
                <p className="text-muted-foreground"><strong>WhatsApp Support:</strong> +91 88976 11021</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
