import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

export default function TermsPage() {
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
            Terms & Conditions
          </h1>
          <p className="text-white/80 text-sm">Last updated: February 2026</p>
        </div>
        
        <div className="bg-white border border-black/10 rounded-[20px] p-8 md:p-10">
          <p className="text-lg text-black/70 mb-8">
            Please read these terms and conditions carefully before using our website and services.
          </p>
          
          <div className="space-y-8">
            {[
              {
                title: "1. Acceptance of Terms",
                content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our website."
              },
              {
                title: "2. Use of Website",
                content: "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website."
              },
              {
                title: "3. Product Information",
                content: "We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. If a product offered by us is not as described, your sole remedy is to return it in unused condition."
              },
              {
                title: "4. Pricing and Payment",
                content: "All prices are listed in Indian Rupees (₹) and are inclusive of applicable taxes. We reserve the right to change prices at any time without prior notice. Payment must be received by us before we dispatch your order. We accept various payment methods including credit/debit cards, UPI, net banking, and cash on delivery."
              },
              {
                title: "5. Orders and Delivery",
                content: "All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or problems identified by our fraud detection systems."
              },
              {
                title: "6. Returns and Refunds",
                content: "We offer a 30-day return policy for unused items in original packaging with all tags attached. Refunds will be processed within 7-10 business days after receiving and inspecting the returned item. Shipping charges are non-refundable. Please contact our customer support to initiate a return."
              },
              {
                title: "7. Intellectual Property",
                content: "All content on this website, including text, graphics, logos, images, and software, is the property of Vastraa or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission."
              },
              {
                title: "8. Limitation of Liability",
                content: "We shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the website or products, even if we have been advised of the possibility of such damages. Our total liability shall not exceed the amount paid by you for the product."
              },
              {
                title: "9. Governing Law",
                content: "These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of India."
              },
              {
                title: "10. Changes to Terms",
                content: "We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of changes constitutes your acceptance of such changes."
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-[#F0F0F0] rounded-[20px] p-6">
                <h2 className="text-xl font-bold text-black mb-3">{section.title}</h2>
                <p className="text-black/70 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-black rounded-[20px] p-6 text-white">
            <h3 className="font-bold text-lg mb-3">Questions About Our Terms?</h3>
            <p className="text-white/80 mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <a href="mailto:support@vastraa.com" className="text-white hover:underline">
              support@vastraa.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
