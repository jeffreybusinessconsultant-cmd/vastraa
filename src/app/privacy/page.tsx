import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-white/80 text-sm">Last updated: February 2026</p>
        </div>
        
        <div className="bg-white border border-black/10 rounded-[20px] p-8 md:p-10">
          <div className="bg-[#F0F0F0] rounded-[20px] p-6 mb-8">
            <p className="text-lg text-black/70">
              Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                title: "1. Information We Collect",
                icon: "📋",
                items: [
                  "Name and contact information (email, phone number)",
                  "Shipping and billing addresses",
                  "Payment information (processed securely)",
                  "Order history and shopping preferences",
                  "Device and browser information",
                  "IP address and location data"
                ]
              },
              {
                title: "2. How We Use Your Information",
                icon: "🎯",
                items: [
                  "Process and fulfill your orders",
                  "Communicate about your orders and account",
                  "Send promotional emails (with your consent)",
                  "Improve our website and services",
                  "Prevent fraud and enhance security",
                  "Comply with legal obligations"
                ]
              },
              {
                title: "3. Information Sharing",
                icon: "🤝",
                content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with:",
                items: [
                  "Delivery partners to fulfill your orders",
                  "Payment processors to handle transactions",
                  "Service providers who assist in operations",
                  "Law enforcement when required by law"
                ]
              },
              {
                title: "4. Data Security",
                icon: "🔒",
                content: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes:",
                items: [
                  "SSL encryption for data transmission",
                  "Secure payment gateways",
                  "Regular security audits",
                  "Access controls and authentication",
                  "Data backup and recovery systems"
                ]
              },
              {
                title: "5. Cookies and Tracking",
                icon: "🍪",
                content: "We use cookies and similar technologies to:",
                items: [
                  "Remember your preferences and settings",
                  "Analyze site traffic and usage patterns",
                  "Personalize content and advertisements",
                  "Improve user experience"
                ]
              },
              {
                title: "6. Your Rights",
                icon: "⚖️",
                content: "You have the right to:",
                items: [
                  "Access your personal information",
                  "Correct inaccurate information",
                  "Request deletion of your data",
                  "Opt-out of marketing communications",
                  "Withdraw consent at any time",
                  "Data portability"
                ]
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-[#F0F0F0] rounded-[20px] p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <span className="text-2xl">{section.icon}</span>
                  <h2 className="text-xl font-bold text-black">{section.title}</h2>
                </div>
                {section.content && (
                  <p className="text-black/70 mb-3">{section.content}</p>
                )}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-black/40 mt-1">•</span>
                        <span className="text-black/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            
            <div className="bg-[#F0F0F0] rounded-[20px] p-6">
              <div className="flex items-start space-x-3 mb-4">
                <span className="text-2xl">📝</span>
                <h2 className="text-xl font-bold text-black">7. Changes to This Policy</h2>
              </div>
              <p className="text-black/70">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
          
          <div className="mt-10 bg-black rounded-[20px] p-6 text-white">
            <h3 className="font-bold text-lg mb-3">Questions About Privacy?</h3>
            <p className="text-white/80 mb-4">
              If you have any questions or concerns about our Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="space-y-2">
              <a href="mailto:privacy@vastraa.com" className="block text-white hover:underline">
                📧 privacy@vastraa.com
              </a>
              <a href="mailto:support@vastraa.com" className="block text-white hover:underline">
                📧 support@vastraa.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
