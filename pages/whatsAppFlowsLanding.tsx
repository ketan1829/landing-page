import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const flows = [
  {
    title: "Abandoned Cart Recovery",
    description: "Recover lost sales with automated WhatsApp reminders and discounts.",
    image: "/images/cart-recovery.png", // Placeholder (1200x800)
  },
  {
    title: "Cross-sell / Upsell",
    description: "Increase AOV by recommending products right after purchase.",
    image: "/images/upsell.png", // Placeholder (1200x800)
  },
  {
    title: "Product Launch Waitlist",
    description: "Build hype, collect leads, and convert on launch day.",
    image: "/images/launch-waitlist.png", // Placeholder (1200x800)
  },
  {
    title: "Lead Qualification",
    description: "Auto-qualify leads through smart WhatsApp flows.",
    image: "/images/lead-qualify.png", // Placeholder (1200x800)
  },
  {
    title: "Feedback & Reviews",
    description: "Capture NPS and drive 5-star reviews automatically.",
    image: "/images/reviews.png", // Placeholder (1200x800)
  },
  {
    title: "Loyalty & Referrals",
    description: "Reward customers who refer friends using gamified flows.",
    image: "/images/referral.png", // Placeholder (1200x800)
  },
];

const WhatsAppFlowsLanding: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 bg-gradient-to-b from-green-50 to-white">
        <motion.h1
          className="text-5xl font-bold max-w-3xl mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Supercharge Your Business with <span className="text-green-600">WhatsApp Automation</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Ready-to-deploy WhatsApp funnels for lead generation, sales recovery, and customer retention.
        </motion.p>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Button size="lg" className="px-8 py-4 text-lg rounded-2xl">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Included Flows</h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {flows.map((flow, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <img src={flow.image} alt={flow.title} className="w-full h-[240px] object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{flow.title}</h3>
                <p className="text-gray-600 mb-4">{flow.description}</p>
                <Button variant="outline">
                  View Demo <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-green-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Want to See it in Action?</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          We’ll help you set up your first automation for free. No code or tech skills required.
        </p>
        <Button size="lg" className="px-8 py-4 text-lg rounded-2xl">
          Book a Free Demo
        </Button>
      </section>
    </div>
  );
};

export default WhatsAppFlowsLanding;
