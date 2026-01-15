import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  return (
    <Layout>
      <SEO
        title="Refund & Cancellation Policy | HpyRide.Com - Fair Refund Guidelines"
        description="Understand HpyRide.Com's refund and cancellation policies for cab bookings, car pooling, driver pooling, car rentals, and pre-owned car transactions."
        keywords="HpyRide refund policy, cancellation policy, ride sharing refund, car pooling cancellation, HpyRide.Com"
        canonicalUrl="https://hpyride.com/refund-policy"
      />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Refund & Cancellation Policy</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Effective Date: 01/01/2026 | Applicable Regions: India & Worldwide
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              {/* 4.1 General Principles */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4.1 General Principles</h2>
                <p className="text-muted-foreground">
                  Refund and cancellation rules vary by service type and booking stage.
                </p>
              </div>

              {/* 4.2 HpyCabs & Car Pooling */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4.2 HpyCabs & Car Pooling</h2>
                <p className="text-muted-foreground mb-2">(Including In-City & 2-Wheeler Pooling)</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Free cancellation may be allowed before driver or pool match confirmation (where applicable)</li>
                  <li>Late cancellations may incur charges</li>
                  <li>No-show may result in full or partial fare being charged</li>
                  <li>Pooling rides are subject to availability of nearby riders and vehicles</li>
                  <li>Free cancellation allowed before driver assignment (where applicable)</li>
                </ul>
              </div>

              {/* 4.3 Driver Pooling */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4.3 Driver Pooling</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Cancellations before driver dispatch may be refunded</li>
                  <li>Once service starts, refunds are not guaranteed</li>
                </ul>
              </div>

              {/* 4.4 Car Rentals */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4.4 Car Rentals</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Cancellation charges depend on rental partner policies</li>
                  <li>Advance payments may be partially refundable</li>
                  <li>Damage or late returns may incur penalties</li>
                </ul>
              </div>

              {/* 4.5 Pre-Owned Cars */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4.5 Pre-Owned Cars</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>HpyRide.Com acts as a listing platform</li>
                  <li>Refunds are subject to seller terms and legal agreements</li>
                </ul>
              </div>

              {/* 4.6 Refund Processing */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4.6 Refund Processing</h2>
                <p className="text-muted-foreground">
                  Approved refunds are processed through the original payment method within <strong>5–10 working days</strong>, subject to bank timelines.
                </p>
              </div>

              {/* 4.7 Dispute Resolution */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4.7 Dispute Resolution</h2>
                <p className="text-muted-foreground">
                  Users may raise disputes via in-app support or email. All complaints are reviewed fairly and transparently.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Need Assistance?</h2>
                <p className="text-muted-foreground mb-4">For refund queries or disputes, contact us:</p>
                <p className="text-muted-foreground"><strong>Support Email:</strong> hpyrideindia@gmail.com</p>
                <p className="text-muted-foreground"><strong>Grievance Email:</strong> hpyride.dcgroup@gmail.com</p>
                <p className="text-muted-foreground"><strong>WhatsApp Support:</strong> +91 88976 11021</p>
              </div>

              {/* Final Note */}
              <div className="bg-secondary/30 rounded-xl p-6 border border-border text-center">
                <p className="text-lg text-foreground font-medium">
                  By using HpyRide.Com, you agree to these policies.
                </p>
                <p className="text-muted-foreground mt-2">
                  Ride safely. Ride responsibly. Ride with HpyRide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RefundPolicy;
