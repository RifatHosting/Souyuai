import React, { useState } from 'react';
import { ShoppingCart, Server, Memory, ChevronRight } from 'lucide-react';

// Data produk
const products = [
  { id: 1, name: "Starter Pack", ram: "1 GB", cpu: "30%", disk: "10 GB", price: 15000, backup: 1 },
  { id: 2, name: "Basic Pack", ram: "2 GB", cpu: "60%", disk: "20 GB", price: 25000, backup: 2 },
  { id: 3, name: "Premium Pack", ram: "4 GB", cpu: "100%", disk: "40 GB", price: 45000, backup: 3 },
  { id: 4, name: "Business Pack", ram: "8 GB", cpu: "140%", disk: "80 GB", price: 80000, backup: 4 },
  { id: 5, name: "Enterprise Pack", ram: "16 GB", cpu: "200%", disk: "160 GB", price: 150000, backup: 5 },
  { id: 6, name: "Ultimate Pack", ram: "32 GB", cpu: "300%", disk: "320 GB", price: 280000, backup: 6 },
];

const PterodactylStore = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Fungsi untuk mengarahkan ke WhatsApp
  const handleBuy = (product) => {
    const message = `Halo, saya ingin membeli paket ${product.name} dengan spesifikasi:\n- RAM: ${product.ram}\n- CPU: ${product.cpu}\n- Disk: ${product.disk}\n- Harga: Rp ${product.price.toLocaleString('id-ID')}`;
    const whatsappURL = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: `url('/api/placeholder/1920/1080')`,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.6)'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Pterodactyl Game Panel
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              High-performance game hosting solution with advanced features and reliable support
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center gap-2">
              Get Started <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Choose Your Perfect Plan
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 border border-purple-500/20 hover:border-purple-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-purple-400">{product.name}</h3>
                  <p className="text-gray-400">Starting from</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">
                    Rp {product.price.toLocaleString('id-ID')}
                  </p>
                  <p className="text-gray-400">/month</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Memory className="w-5 h-5 text-purple-400" />
                  <span>RAM: {product.ram}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Server className="w-5 h-5 text-purple-400" />
                  <span>CPU: {product.cpu}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <ShoppingCart className="w-5 h-5 text-purple-400" />
                  <span>Storage: {product.disk}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Server className="w-5 h-5 text-purple-400" />
                  <span>{product.backup} Backups</span>
                </div>
              </div>

              <button
                onClick={() => handleBuy(product)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Why Choose Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-900">
              <h3 className="text-xl font-bold mb-4 text-purple-400">24/7 Support</h3>
              <p className="text-gray-300">Professional support team ready to help you anytime</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900">
              <h3 className="text-xl font-bold mb-4 text-purple-400">High Performance</h3>
              <p className="text-gray-300">Powered by latest generation hardware for optimal gaming experience</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900">
              <h3 className="text-xl font-bold mb-4 text-purple-400">DDoS Protection</h3>
              <p className="text-gray-300">Advanced protection against DDoS attacks included</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Pterodactyl Game Panel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PterodactylStore;