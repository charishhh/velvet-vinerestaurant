import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Instagram, Mail, Star, Coffee, Utensils, Phone, MapPin, Plus, Minus } from 'lucide-react';
import Menu from './Menu';


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMenuPage, setShowMenuPage] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Where Taste Becomes Tradition.',
      subtitle: 'Where Every Bite Tells a Story of Tradition'
    },
    {
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Taste. Unwind. Repeat',
      subtitle: 'Crafted with Love, Served with Care'
    },
    {
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'No. 1 Nepali Style Food Restaurant',
      subtitle: 'Authentic Nepali & homely thali cuisine'
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const [testimonials, setTestimonials] = useState([
    {
      id: '1',
      name: 'David Rajput ',
      role: 'Founder',
      quote: 'Velvet & Vine is more than a restaurant—it\'s a community. We pour our hearts into every dish and every guest experience.',
      
    },
    {
      id: '2',
      name: 'Barsha Bhandari',
      role: 'Co-Founder & Operations',
      quote: 'Our mission is to create a space where everyone feels welcome and every meal feels like home.',
      
    },
    {
      id: '3',
      name:'P.Dhala',
      role: 'Marketing Manager',
      quote: 'The flavors, the ambiance, and the people—Velvet & Vine is a true labor of love.',
      
    }
  ]);

  // Load testimonials from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('testimonials');
    if (stored) {
      setTestimonials(JSON.parse(stored));
    }
  }, []);

  // Save testimonials to localStorage on change

  const handleBackFromMenu = () => {
    setShowMenuPage(false);
    requestAnimationFrame(() => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior:'smooth'});
      }
    });
  };

  // If showing menu page, render Menu component
  if (showMenuPage) {
    return <Menu onBack={handleBackFromMenu} />;
  }

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuCategories = [
    { name: 'Breakfast', icon: Coffee },
    { name: 'Lunch', icon: Utensils },
    { name: 'Dinner', icon: Utensils },
    { name: 'Coffee', icon: Coffee },
  ];

  const featuredItems = [
    {
      name: 'Chicken Fried Rice',
      price: '210.00',
      rating: 5,
      reviews: 32,
      description: 'Wok-tossed basmati rice with succulent chicken, crisp vegetables, and smoky soy seasoning finished with spring onions.',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Nepali Chicken Thali',
      price: '240.00',
      rating: 5,
      reviews: 28,
      description: 'Signature Velvet & Vine thali featuring aromatic rice, Nepali-style chicken curry, seasonal greens, pickles, and homemade condiments.',
  image: 'https://images.unsplash.com/photo-1588644525273-f37b60d78512?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVwYWxpJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600'
    },
    {
      name: 'Korean Chicken Ramen',
      price: '240.00',
      rating: 5,
      reviews: 20,
      description: 'Tender Chicken layered with fragrant Basmati Rice and slow-cooked with aromatic Spices, creating a rich and flavorful Biryani that\'s simply irresistible.',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const menuItems = {
    breakfast: [
      { name: 'Roti, Sabji', price: '80' },
      { name: 'Puri, Sabji', price: '100' },
      { name: 'Plain Paratha, Sabji', price: '120' },
      { name: 'Aloo Paratha, Curd', price: '70' },
      { name: 'Paneer Paratha, Achar', price: '80' }
    ]
  };

  const breakfastSubtitles = [
    'Flaky rotis paired with a spiced morning sabji.',
    'Golden puris served with homestyle potato curry.',
    'Buttery paratha layered with seasonal vegetable masala.',
    'Stuffed aloo paratha balanced with cooling curd.',
    'Paneer-filled paratha brightened with tangy achar.'
  ];

  const faqs = [
    {
      question: 'Why is Velvet & Vine a favourite in Siliguri?',
      answer: 'We blend soulful Nepali-style thalis with homely service, so every visit feels like sharing a meal with family. Guests love our cozy ambience, curated playlists, and lovingly cooked comfort food.'
    },
    {
      question: 'Can I book Velvet & Vine for intimate celebrations?',
      answer: 'Yes! Reach us on call or WhatsApp and we will arrange a private corner with décor, custom music, and a menu tailored to birthdays, anniversaries, or corporate dinners.'
    },
    {
      question: 'Do you serve vegetarian or vegan friendly dishes?',
      answer: 'Definitely. Our menu features vegetarian thalis, plant-forward snacks, and we gladly adapt recipes to suit vegan preferences when informed in advance.'
    },
    {
      question: 'Does Velvet & Vine offer takeaway or delivery?',
      answer: 'We prepare fresh takeaway boxes daily and coordinate delivery through reliable partners. Message us on WhatsApp to arrange doorstep delivery or quick pickup.'
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(prev => (prev === index ? null : index));
  };


  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu', action: 'scroll' },
    { name: 'About Us', href: '#about' },
    { name: 'Reservation', href: '#reservation' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (link: { name: string; href?: string; action?: string }) => {
    if (link.name === 'Menu') {
      scrollToMenu();
    } else if (link.href) {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  return (
    <div className="relative min-h-screen bg-white font-inter" style={{
      fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Top Bar with Opening Hours and Address */}
      <div className="bg-black text-white py-1.5 sm:py-2 px-3 sm:px-4 text-[10px] sm:text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-1 sm:space-y-1.5 md:space-y-0 gap-1 md:gap-0">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <span className="text-red-500 font-semibold">Opening Hour:</span>
            <span className="whitespace-nowrap">06.00 AM to 09.00 PM</span>
          </div>
          <div className="flex items-start md:items-center space-x-1.5 sm:space-x-2 text-center md:text-left">
            <MapPin size={12} className="text-red-500 flex-shrink-0 mt-0.5 md:mt-0" />
            <span className="text-[10px] sm:text-xs md:text-sm line-clamp-2 md:line-clamp-1">4th Floor, Home Square, near Salugara Monastery, Salugarh, Siliguri, West Bengal</span>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-40 bg-black shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 rounded-full overflow-hidden border-2 border-white/30 bg-white/10 shadow-md flex items-center justify-center">
                <img
                  src="/M2sKshMbSqqkTuxP2bVeBQ.webp"
                  alt="Velvet & Vine Restaurant"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="text-white hover:text-yellow-500 active:text-yellow-400 transition-all duration-300 font-semibold transform hover:scale-110 active:scale-105 px-2 lg:px-3 py-2 rounded-lg hover:bg-gray-800 cursor-pointer border-none bg-transparent uppercase text-xs lg:text-sm tracking-wide"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              {/* Call Details */}
              <div className="hidden xl:flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-white">
                  <div className="bg-red-500 p-2 rounded-full">
                    <Phone size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-red-500 text-xs font-semibold">Call Now</p>
                    <div className="text-sm font-medium space-y-1">
                      <a href="tel:+918260506650" className="block hover:text-red-500 transition-colors duration-300">
                        +91-8260506650
                      </a>
                      <a href="tel:+917029252941" className="block hover:text-red-500 transition-colors duration-300">
                        +91-7029252941
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Now Button */}
              <a
                href="https://wa.me/917029252941?text=Hi%20Velvet%20%26%20Vine%2C%20I%27d%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
              >
                Order Now
              </a>

              {/* Mobile Call & Order Buttons */}
              <div className="lg:hidden flex items-center space-x-2">
                <a
                  href="tel:+918260506650"
                  className="bg-red-500 text-black p-2 rounded-full hover:bg-red-400 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone size={20} />
                </a>
                <a
                  href="https://wa.me/917029252941?text=Hi%20Velvet%20%26%20Vine%2C%20I%27d%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white p-2 rounded-full hover:bg-red-500 transition-all duration-300 transform hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2C6.486 2 2 6.262 2 11.5c0 1.936.566 3.736 1.635 5.327L2 22l5.383-1.592C8.933 21.446 10.449 22 12 22c5.514 0 10-4.262 10-9.5S17.514 2 12 2Zm0 17c-1.373 0-2.73-.42-3.889-1.214l-.279-.186-3.19.944.938-3.02-.182-.292C4.502 13.935 4 12.749 4 11.5 4 7.916 7.364 5 12 5s8 2.916 8 6.5-3.364 7.5-8 7.5Zm4.422-4.133c-.242-.121-1.43-.703-1.651-.781-.221-.079-.382-.121-.543.121s-.623.781-.764.942-.28.18-.522.06c-.242-.121-1.024-.371-1.95-1.185-.72-.643-1.207-1.437-1.348-1.678-.14-.242-.015-.373.106-.494.109-.108.242-.28.362-.419.12-.14.161-.242.242-.403.08-.161.04-.302-.02-.423-.06-.121-.543-1.308-.744-1.789-.196-.47-.396-.406-.543-.413-.14-.007-.301-.009-.462-.009s-.422.06-.643.302c-.221.242-.843.824-.843 2.01s.864 2.332.984 2.494c.121.161 1.704 2.597 4.13 3.64.578.249 1.028.398 1.379.509.58.185 1.108.159 1.526.096.466-.069 1.43-.583 1.631-1.146.201-.563.201-1.045.141-1.146-.06-.101-.221-.161-.462-.282Z" />
                  </svg>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white"
              >
                {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-700">
            <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    handleNavClick(link);
                    setMobileMenuOpen(false);
                  }}
                  className="block text-white hover:text-yellow-500 active:text-yellow-400 transition-colors duration-300 py-2 sm:py-2.5 font-semibold w-full text-left border-none bg-transparent cursor-pointer uppercase text-xs sm:text-sm tracking-wide active:bg-gray-800 rounded-lg px-2"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Animated Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Background Slideshow */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        {/* Decorative Side Images with white borders */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="relative">
            <div className="w-32 h-32 xl:w-40 xl:h-40 rounded-full overflow-hidden border-4 md:border-8 border-white shadow-2xl transform hover:scale-110 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Dish 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="relative">
            <div className="w-32 h-32 xl:w-40 xl:h-40 rounded-full overflow-hidden border-4 md:border-8 border-white shadow-2xl transform hover:scale-110 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Dish 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
          {/* Welcome Badge - Changed to red */}
          <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 animate-fade-in-down">
            <div className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-transparent backdrop-blur-sm px-4 sm:px-5 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full border-2 border-red-600">
              <span className="text-red-600 text-[10px] sm:text-xs md:text-sm font-bold">✦</span>
              <span className="text-red-600 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">
                WELCOME TO VELVET & VINE
              </span>
              <span className="text-red-600 text-[10px] sm:text-xs md:text-sm font-bold">✦</span>
            </div>
          </div>

          {/* Animated Title - White color */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] 2xl:text-[58px] font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight md:leading-[1.15] animate-fade-in-up px-3 sm:px-4">
            {heroSlides[currentSlide].title.split(' ').map((word, i) => (
              <span
                key={i}
                className="inline-block animate-slide-in-word"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          {/* Subtitle - White color */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[22px] text-white mb-4 sm:mb-5 md:mb-6 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl animate-fade-in-up animation-delay-500 px-3 sm:px-4">
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* CTA Button - Changed to red */}
          <button 
             onClick={() => setShowMenuPage(true)}
            className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-300 shadow-xl hover:shadow-red-600/50 transform hover:scale-105 active:scale-100 animate-fade-in-up animation-delay-700 uppercase tracking-wide"
          >
            EXPLORE MENU 
          </button>

          <div className="mt-8 sm:mt-10 md:mt-12 animate-bounce flex flex-col items-center text-white">
            <span className="text-[10px] sm:text-xs md:text-sm mb-1 sm:mb-1.5 md:mb-2 font-semibold">Scroll Down</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Slide Indicators - Changed to red */}
          <div className="absolute bottom-8 sm:bottom-9 md:bottom-10 lg:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-2.5 md:space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 sm:h-2 md:h-2.5 lg:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-red-600 w-5 sm:w-6 md:w-8 lg:w-10' 
                    : 'w-1.5 sm:w-2 md:w-2.5 lg:w-3 bg-white/50 hover:bg-white/75 active:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories with Navigation to Detailed Menu */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {menuCategories.map((category, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg transition-all duration-300 cursor-pointer transform hover:scale-110 active:scale-95 bg-transparent hover:bg-gray-800 hover:shadow-xl border-2 border-transparent hover:border-red-500 active:border-red-400"
                onClick={() => setShowMenuPage(true)}
              >
                <category.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 md:mb-4 text-white transition-transform duration-300 hover:rotate-12" strokeWidth={1.5} />
                <p className="text-white text-sm sm:text-base font-medium transition-all duration-300 hover:text-red-300">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-900 relative">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Restaurant Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
              Velvet&Vines Popular Items
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {featuredItems.map((item, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-black/70 active:bg-black/75 transition-all duration-300 group">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 bg-black/80 text-white px-2 sm:px-2.5 md:px-3 py-1 rounded-full flex items-center space-x-0.5 sm:space-x-1">
                    <div className="flex space-x-0.5 sm:space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ${i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm ml-1 sm:ml-1.5 md:ml-2">Review({item.reviews})</span>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-2.5 md:mb-3">{item.name}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 md:mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breakfast Menu */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 relative bg-gray-50" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-white/90"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <p className="text-red-600 text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-1.5 md:mb-2 font-semibold">Our Menu</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Breakfast Menu
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5 md:mb-6">Delicious Food Menu - Special Price</p>
            
            {/* Button to view full menu */}
            <button
              onClick={() => setShowMenuPage(true)}
              className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-5 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-100"
            >
              View Complete Menu →
            </button>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-5 md:p-6 lg:p-8">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {menuItems.breakfast.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 active:bg-gray-100 transition-colors duration-300 rounded-lg px-2 sm:px-3 md:px-4"
                >
                  <div className="flex items-center flex-1 mb-2 sm:mb-0">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 italic line-clamp-2">
                        {breakfastSubtitles[index] ?? 'Authentic Indian breakfast served fresh and hot'}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-1 mx-3 md:mx-4 lg:mx-6 border-b border-dotted border-gray-300"></div>

                  <div className="flex items-center justify-end sm:justify-start">
                    <span className="text-lg sm:text-xl font-bold text-orange-500">₹{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
              <div>
                <p className="text-red-600 text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-1.5 md:mb-2 font-semibold">About Us</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  About Velvet & Vine
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  At Velvet & Vine, we celebrate the timeless tradition of the thali. Our Nepali and Indian thalis are prepared with the utmost care, offering a fresh, wholesome, and soulful dining experience that nourishes you from the inside out.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Beyond our signature thalis, our menu features a curated selection of comforting Indian classics, popular Nepali dishes, and familiar Chinese cuisine.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                 
                  Step inside and feel the difference
                  Step inside and feel the difference
                  Velvet & Vine – where every meal is served with comfort.
                </p>
                <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 mb-6 sm:mb-7 md:mb-8 lg:mb-10">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-1 sm:mb-1.5 md:mb-2">50+</p>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">Menu Items</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-1 sm:mb-1.5 md:mb-2">100+</p>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">Happy Customers</p>
                  </div>
                </div>

                {/* Founders Section */}
                <div className="mt-4 sm:mt-6 md:mt-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">About the Founders</h3>
                  <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                      <p className="text-base sm:text-lg font-semibold text-gray-800">David Rajput</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Founder  </p>
                      <p className="text-gray-500 text-[10px] sm:text-xs mt-1 sm:mt-2 leading-relaxed">
                        David brings culinary experience and a passion for authentic flavors to Velvet & Vine.
                      </p>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
                      <p className="text-lg font-semibold text-gray-800">Barsha Bhandari</p>
                      <p className="text-gray-600 text-sm">Co-Founder & Operations</p>
                      <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                        Barsha ensures every guest feels at home, blending hospitality with a keen eye for detail and service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/M2sKshMbSqqkTuxP2bVeBQ.webp"
                  alt="Velvet & Vine Restaurant Logo"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Testimonials Section */}
      <section className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-12">
              <p className="text-red-500 uppercase tracking-wider font-semibold mb-2">Testimonials</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                What they're saying about us
              </h2>
              <div className="w-24 h-1 bg-yellow-500 rounded mt-2"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center border border-gray-700">
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-red-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 7h.01M15 7h.01M7 11h10M7 15h10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-gray-200 italic text-lg text-center">
                      " {testimonial.quote} "
                    </p>
                    <svg className="w-8 h-8 text-yellow-500 mt-2 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M15 17h.01M9 17h.01M7 13h10M7 9h10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-xl font-bold text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[#FBF5EB]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl faq-image-primary">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80"
                  alt="Signature grilled platter at Velvet & Vine"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            <div className="order-1 lg:order-2">
              <p className="text-red-600 text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2 sm:mb-3">FAQs</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6">Some Frequently Asked Questions</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-xl">
                Planning your visit to Velvet & Vine? Here are the answers to the questions our guests ask most about dining with us, celebrating special moments, and ordering from our kitchen.
              </p>

              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div
                      key={faq.question}
                      className={`rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                        isOpen ? 'border-red-300 bg-white shadow-lg' : 'border-transparent bg-white/80 hover:bg-white active:bg-white'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-3 sm:py-4 md:py-5 text-left group"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 pr-3 sm:pr-4 md:pr-6">{faq.question}</span>
                        <span className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-red-300 text-red-500 transition-transform duration-300 group-hover:scale-110 active:scale-105 group-hover:bg-red-50 flex-shrink-0 ${isOpen ? 'bg-red-50' : ''}`}>
                          {isOpen ? <Minus className="w-4 h-4 sm:w-5 sm:h-5" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5" />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-3 sm:px-4 md:px-5 lg:px-6 pb-3 sm:pb-4 md:pb-5 lg:pb-6 -mt-1 sm:-mt-2 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <p className="text-red-500 text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-1.5 md:mb-2 font-semibold">Reservation</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
              Book Your Table
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">Reserve your spot for an unforgettable dining experience</p>
          </div>

          <div className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-5 md:p-6 lg:p-8">
            <form className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <label className="block text-gray-300 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <label className="block text-gray-300 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">Date</label>
                  <input
                    type="date"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">Time</label>
                  <input
                    type="time"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">Number of Guests</label>
                <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-sm sm:text-base">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5+ People</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">Special Requests</label>
                <textarea
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
                  placeholder="Any special requirements?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white py-3 sm:py-3.5 md:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-100"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <p className="text-red-600 text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-1.5 md:mb-2 font-semibold">Contact Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Get In Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">Visit Us</h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Address</p>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">4th Floor, Home Square, near Salugara Monastery, Salugarh, Siliguri, West Bengal</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Phone</p>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">+91-8260506650</p>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">+91-7029252941</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Email</p>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">official.valvetvine@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 md:mt-8">
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Opening Hours</h4>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">Monday - Sunday: 06:00 AM - 09:00 PM</p>
              </div>

              <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6 md:mt-8">
                <a
                  href="https://www.instagram.com/velvet.vine_restaurant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white p-2.5 sm:p-3 rounded-full hover:bg-red-700 active:bg-red-800 transition-colors active:scale-95"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="mailto:official.valvetvine@gmail.com" className="bg-red-600 text-white p-2.5 sm:p-3 rounded-full hover:bg-red-700 active:bg-red-800 transition-colors active:scale-95" aria-label="Email">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            <div>
              <div className="bg-gray-100 rounded-lg h-64 sm:h-80 md:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.7504742445406!2d88.43252599999999!3d26.763439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441209b972e05%3A0x7902d56d088f2f07!2sHome%20Square!5e0!3m2!1sen!2sin!4v1730054400000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                  title="Velvet & Vine Restaurant at Home Square"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
            <div>
              <img
                src="/M2sKshMbSqqkTuxP2bVeBQ.webp"
                alt="Velvet & Vine"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full object-cover mb-3 sm:mb-4"
              />
              <p className="text-gray-400 text-xs sm:text-sm">
                Where every meal is served with comfort.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#menu" className="text-gray-400 hover:text-white transition-colors">Menu</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+91-8260506650</li>
                <li>+91-7029252941</li>
                <li>official.velvetvine@gmail.com</li>
                <li>4th Floor, Home Square</li>
                <li>Near Salugara Monastery</li>
                <li>Salugarh, Siliguri, West Bengal</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/velvet.vine_restaurant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a href="mailto:official.velvetvine@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Velvet & Vine. All rights reserved.</p>
            <p className="mt-2">
              Designed &amp; developed by{' '}
              <a
                href="https://www.linkedin.com/in/pmcharishmareddy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                pmcharishmareddy
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Add custom animations */}
      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-word {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-slide-in-word {
          animation: slide-in-word 0.6s ease-out;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
          animation-fill-mode: both;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
          animation-fill-mode: both;
        }

        .faq-image-primary,
        .faq-image-secondary,
        .faq-image-tertiary {
          animation: none;
        }
      `}</style>
    </div>
  );
}

export default App;