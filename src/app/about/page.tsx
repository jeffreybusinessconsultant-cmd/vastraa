import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

export default function AboutPage() {
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
            About Us
          </h1>
          <p className="text-white/80 text-lg max-w-3xl">
            Your premier destination for quality fashion and style
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#F0F0F0] rounded-[20px] p-8">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
            <p className="text-black/70 leading-relaxed">
              Our mission is to provide high-quality, stylish clothing that makes you look and feel your best. We believe that fashion should be accessible to everyone, which is why we offer a wide range of products at competitive prices.
            </p>
          </div>
          
          <div className="bg-[#F0F0F0] rounded-[20px] p-8">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-2xl">👔</span>
            </div>
            <h2 className="text-2xl font-bold text-black mb-4">Our Story</h2>
            <p className="text-black/70 leading-relaxed">
              Founded in 2020 in Bengaluru, Innovation Ghar has grown to become a trusted name in online fashion retail across India. We carefully curate each piece to ensure it meets our high standards of quality and style, making premium fashion accessible to everyone.
            </p>
          </div>
        </div>
        
        <div className="bg-white border border-black/10 rounded-[20px] p-8 md:p-10 mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Founded in 2020 in the heart of Bengaluru, Innovation Ghar started with a simple vision: to make quality fashion accessible to everyone across India. What began as a small online store has grown into a trusted destination for thousands of fashion-conscious customers.
            </p>
            <p>
              Our team of fashion experts carefully curates each collection, ensuring that every piece meets our high standards of quality, style, and affordability. We work directly with manufacturers to bring you the best prices without compromising on quality.
            </p>
            <p>
              Today, we serve customers across India, from metro cities to remote towns, delivering happiness one package at a time. Our commitment to customer satisfaction and quality has made us one of the fastest-growing fashion e-commerce platforms in the country.
            </p>
          </div>
          
          <div className="mt-8 bg-[#F0F0F0] rounded-[20px] p-6">
            <h3 className="font-bold text-lg text-black mb-3">Visit Our Store</h3>
            <p className="text-black/70 mb-2">
              Innovation Ghar Pvt Ltd<br/>
              123, MG Road, Bengaluru<br/>
              Karnataka 560001, India
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="tel:+919876543210" className="text-black hover:underline">
                📞 +91 98765 43210
              </a>
              <a href="mailto:info@vastraa.com" className="text-black hover:underline">
                📧 info@vastraa.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-black/10 rounded-[20px] p-8 md:p-10 mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "👕", title: "Premium T-Shirts", desc: "Quality casual wear for everyday comfort" },
              { icon: "👔", title: "Formal Shirts", desc: "Professional business attire" },
              { icon: "👖", title: "Stylish Jeans", desc: "Trendy denim for all occasions" },
              { icon: "🧥", title: "Hoodies & Jackets", desc: "Comfortable outerwear" },
              { icon: "🩳", title: "Shorts", desc: "Perfect for casual and active wear" },
              { icon: "⭐", title: "New Arrivals", desc: "Latest fashion trends" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-sm text-black/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-black rounded-[20px] p-8 md:p-10 text-white">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "✨", title: "Premium Quality", desc: "High-quality materials and craftsmanship" },
              { icon: "💰", title: "Best Prices", desc: "Competitive pricing with regular discounts" },
              { icon: "🚚", title: "Fast Delivery", desc: "Quick and reliable shipping" },
              { icon: "🔄", title: "Easy Returns", desc: "Hassle-free returns and exchanges" },
              { icon: "💬", title: "Great Support", desc: "Excellent customer service" },
              { icon: "🔒", title: "Secure Shopping", desc: "Safe and secure payment options" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
