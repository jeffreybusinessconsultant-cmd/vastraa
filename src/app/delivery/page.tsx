import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

export default function DeliveryPage() {
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
            Delivery Details
          </h1>
          <p className="text-white/80 text-lg max-w-3xl">
            Fast, reliable, and free shipping on all orders
          </p>
        </div>
        
        <div className="bg-black rounded-[20px] p-8 md:p-10 mb-10 text-center">
          <div className="inline-block bg-white rounded-full px-6 py-3 mb-4">
            <span className="text-3xl">🎉</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">FREE SHIPPING</h2>
          <p className="text-white/80 text-lg">On all orders! No minimum purchase required.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#F0F0F0] rounded-[20px] p-6">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-xl">🏙️</span>
            </div>
            <h3 className="font-bold text-xl text-black mb-2">Metro Cities</h3>
            <p className="text-3xl font-bold text-black mb-2">2-3 Days</p>
            <p className="text-black/60 text-sm">Fast delivery to major cities</p>
          </div>
          
          <div className="bg-[#F0F0F0] rounded-[20px] p-6">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-xl">🏘️</span>
            </div>
            <h3 className="font-bold text-xl text-black mb-2">Other Cities</h3>
            <p className="text-3xl font-bold text-black mb-2">4-6 Days</p>
            <p className="text-black/60 text-sm">Reliable delivery nationwide</p>
          </div>
          
          <div className="bg-[#F0F0F0] rounded-[20px] p-6">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-xl">🏔️</span>
            </div>
            <h3 className="font-bold text-xl text-black mb-2">Remote Areas</h3>
            <p className="text-3xl font-bold text-black mb-2">7-10 Days</p>
            <p className="text-black/60 text-sm">We deliver everywhere</p>
          </div>
        </div>
        
        <div className="bg-white border border-black/10 rounded-[20px] p-8 md:p-10 mb-10">
          <h2 className="text-3xl font-bold text-black mb-6">Order Tracking</h2>
          <div className="flex items-start space-x-4 mb-6">
            <div className="text-4xl">📦</div>
            <div>
              <p className="text-black/70 leading-relaxed mb-4">
                Once your order is dispatched, you will receive a tracking number via email and SMS. You can use this number to track your package in real-time.
              </p>
              <div className="bg-[#F0F0F0] rounded-[20px] p-4">
                <p className="text-sm text-black/60 mb-2">Track your order:</p>
                <div className="flex gap-3">
                  <input 
                    type="text" 
                    placeholder="Enter tracking number" 
                    className="flex-1 px-4 py-2 rounded-full border border-black/10 focus:outline-none focus:border-black"
                  />
                  <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-black/80 transition-colors">
                    Track
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-black/10 rounded-[20px] p-8 md:p-10">
          <h2 className="text-3xl font-bold text-black mb-6">Our Delivery Partners</h2>
          <p className="text-black/70 mb-6">We work with trusted delivery partners to ensure your orders reach you safely:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Blue Dart", "Delhivery", "DTDC", "India Post"].map((partner, idx) => (
              <div key={idx} className="bg-[#F0F0F0] rounded-[20px] p-4 text-center">
                <div className="text-2xl mb-2">🚚</div>
                <p className="font-medium text-black">{partner}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-[#F0F0F0] rounded-[20px] p-6">
            <h3 className="font-bold text-lg text-black mb-3">Need Help?</h3>
            <p className="text-black/70 mb-4">
              If you face any issues with your delivery, please contact our customer support team.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:support@vastraa.com" className="text-black hover:underline">
                📧 support@vastraa.com
              </a>
              <a href="tel:+919876543210" className="text-black hover:underline">
                📞 +91 98765 43210
              </a>
            </div>
            <div className="mt-4 pt-4 border-t border-black/10">
              <p className="text-sm text-black/60 mb-2">Corporate Office:</p>
              <p className="text-black/70 text-sm">
                Innovation Ghar Pvt Ltd<br/>
                123, MG Road, Bengaluru<br/>
                Karnataka 560001, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
