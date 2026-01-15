import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Mail, Clock, Shield, Trash2 } from "lucide-react";

const AccountDeletion = () => {
  return (
    <Layout>
      <SEO
        title="Account Deletion Policy | HpyRide.Com - Delete Your Account"
        description="Learn how to delete your HpyRide.Com account. We respect your right to data privacy. Request permanent account deletion anytime via email."
        keywords="HpyRide account deletion, delete HpyRide account, data deletion, privacy rights, HpyRide.Com"
        canonicalUrl="https://hpyride.com/account-deletion"
      />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Account Deletion Policy</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Play Store Compliance | Effective Date: 01/01/2026
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              {/* 3.1 User Right to Delete Account */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-brand-pink/10">
                    <Shield className="w-6 h-6 text-brand-pink" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">3.1 User Right to Delete Account</h2>
                </div>
                <p className="text-muted-foreground">
                  Users may request permanent deletion of their HpyRide.Com account at any time.
                </p>
              </div>

              {/* 3.2 How to Delete Your Account */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-brand-purple/10">
                    <Mail className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">3.2 How to Delete Your Account</h2>
                </div>
                <p className="text-muted-foreground mb-4">Send an email to request account deletion:</p>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-foreground font-medium">Email: hpyrideindia@gmail.com</p>
                  <p className="text-muted-foreground mt-2">Subject: Account Deletion Request</p>
                </div>
                <p className="text-muted-foreground mt-4">
                  Please include your registered mobile number and email address in the request for verification.
                </p>
              </div>

              {/* 3.3 What Happens After Deletion */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-brand-pink/10">
                    <Trash2 className="w-6 h-6 text-brand-pink" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">3.3 What Happens After Deletion</h2>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Personal profile data will be permanently deleted</li>
                  <li>Ride history may be anonymized</li>
                  <li>Some data may be retained if legally required</li>
                </ul>
              </div>

              {/* 3.4 Processing Time */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-brand-purple/10">
                    <Clock className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">3.4 Processing Time</h2>
                </div>
                <p className="text-muted-foreground">
                  Deletion requests are processed within <strong>7–30 working days</strong> after verification.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 rounded-xl p-6 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Need Help?</h2>
                <p className="text-muted-foreground mb-4">Contact our support team for any questions about account deletion:</p>
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

export default AccountDeletion;
