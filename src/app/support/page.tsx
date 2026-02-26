import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

export default function SupportPage() {
  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-[20px] p-8 md:p-12 mb-10 mt-8">
          <h1
            className={cn([
              integralCF.className,
              "font-bold text-[32px] md:text-[48px] text-white uppercase mb-4",
            ])}
          >
            Customer Support
          </h1>
          <p className="text-white/80 text-lg max-w-3xl">
            We're here to help! Get in touch with us anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#F0F0F0] rounded-[20px] p-6 text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-3xl">📧</span>
            </div>
            <h3 className="font-bold text-lg text-black mb-2">Email Us</h3>
            <p className="text-black/60 text-sm mb-3">Get response within 24 hours</p>
            <a href="mailto:support@vastraa.com" className="text-black font-medium hover:underline">
              support@vastraa.com
            </a>
          </div>
          
          <div className="bg-[#F0F0F0] rounded-[20px] p-6 text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-3xl">📞</span>
            </div>
            <h3 className="font-bold text-lg text-black mb-2">Call Us</h3>
            <p className="text-black/60 text-sm mb-3">Mon-Sat, 9 AM - 6 PM IST</p>
            <a href="tel:+919876543210" className="text-black font-medium hover:underline">
              +91 98765 43210
            </a>
          </div>
          
          <div className="bg-[#F0F0F0] rounded-[20px] p-6 text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-3xl">📍</span>
            </div>
            <h3 className="font-bold text-lg text-black mb-2">Visit Us</h3>
            <p className="text-black/60 text-sm mb-3">Our Store Location</p>
            <p className="text-black font-medium text-sm">
              MG Road, Bengaluru<br/>Karnataka 560001
            </p>
          </div>
        </div>
        
        <div className="bg-white border border-black/10 rounded-[20px] p-8 md:p-10">
          <h2 className="text-3xl font-bold text-black mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "How do I track my order?",
                a: "Once your order is shipped, you will receive a tracking number via email and SMS. You can use this number to track your package in real-time on our website or the courier's website."
              },
              {
                q: "What is your return policy?",
                a: "We offer a 30-day return policy for all unused items in their original packaging with tags attached. Please contact our support team to initiate a return. Refunds are processed within 7-10 business days."
              },
              {
                q: "Do you offer international shipping?",
                a: "Currently, we only ship within India. We are working on expanding our shipping options to international destinations in the near future. Stay tuned for updates!"
              },
              {
                q: "How can I change or cancel my order?",
                a: "Please contact us immediately at support@vastraa.com or call us if you need to make changes to your order. We'll do our best to accommodate your request if the order hasn't been shipped yet."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit/debit cards, UPI, net banking, and cash on delivery (COD). All payments are processed securely through our payment gateway."
              },
              {
                q: "How long does delivery take?",
                a: "Delivery typically takes 2-3 business days for metro cities, 4-6 days for other cities, and 7-10 days for remote areas. We offer free shipping on all orders!"
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#F0F0F0] rounded-[20px] p-6">
                <h3 className="font-bold text-lg text-black mb-3 flex items-start">
                  <span className="text-black/40 mr-3">Q{idx + 1}.</span>
                  {faq.q}
                </h3>
                <p className="text-black/70 leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
