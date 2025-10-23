import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Instagram, Mail, Star, Coffee, Utensils, Phone, MapPin } from 'lucide-react';
import Menu from './Menu';


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMenuPage, setShowMenuPage] = useState(false);
  const [showTestimonialsManager, setShowTestimonialsManager] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
      title: 'Nature Meets Indulgence',
      subtitle: 'From Our Kitchen to Your Heart'
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
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: '2',
      name: 'Barsha Bhandari',
      role: 'Co-Founder & Operations',
      quote: 'Our mission is to create a space where everyone feels welcome and every meal feels like home.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: '3',
      name:'P.Dhala',
      role: 'Marketing Manager',
      quote: 'The flavors, the ambiance, and the people—Velvet & Vine is a true labor of love.',
      image: 'https://randomuser.me/api/portraits/men/31.jpg'
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
      name: 'Murgh Lajawab Tikka (Chicken Tikka)',
      price: '220.00',
      rating: 4,
      reviews: 20,
      description: 'Relish our juicy Chicken Tikka, marinated in a unique blend of aromatic spices and grilled to perfection.',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
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
      { name: 'Roti, Sabji', price: '80', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
      { name: 'Puri, Sabji', price: '100', image: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
      { name: 'Plain Paratha, Sabji', price: '120', image: 'https://images.unsplash.com/photo-1574653771117-7ce7a4b86ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
      { name: 'Aloo Paratha, Curd', price: '70', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
      { name: 'Paneer Paratha, Achar', price: '80', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
    ]
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
      {/* Admin Button - Hidden in top right */}
      <button
        onClick={() => setShowTestimonialsManager(true)}
        className="fixed top-24 right-4 z-50 bg-gray-800 text-white px-4 py-2 rounded-lg opacity-10 hover:opacity-100 transition-opacity text-xs"
        title="Manage Testimonials"
      >
        Admin
      </button>

      {/* Top Bar with Opening Hours and Address */}
      <div className="bg-black text-white py-2 px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-red-500 font-semibold">Opening Hour:</span>
            <span>11.00 AM to 11.00 PM</span>
          </div>
          <div className="flex items-center space-x-2 text-center md:text-left">
            <MapPin size={14} className="text-red-500 flex-shrink-0" />
            <span className="text-xs md:text-sm">Salugarh, Siliguri, West Bengal 734008, India</span>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-40 bg-black shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img
                src="/M2sKshMbSqqkTuxP2bVeBQ.webp"
                alt="Velvet & Vine Restaurant"
                className="h-16 w-auto"
              />
            </div>

            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="text-white hover:text-yellow-500 transition-all duration-300 font-semibold transform hover:scale-110 px-3 py-2 rounded-lg hover:bg-gray-800 cursor-pointer border-none bg-transparent uppercase text-sm tracking-wide"
                >
                  {link.name}
                </button>
              ))}
            </div>

          <div className="flex items-center space-x-4">
      {/* Call Details */}
      <div className="hidden lg:flex items-center space-x-3">
    <div className="flex items-center space-x-2 text-white">
      <div className="bg-red-500 p-2 rounded-full">
        <Phone size={20} className="text-black" />
      </div>
      <div>
        <p className="text-red-500 text-xs font-semibold">Call Now</p>
        <div className="text-sm font-medium">
          <a href="tel:+918260506650" className="hover:text-red-500 transition-colors duration-300">
            +91-8260506650

                      </a>
                    </div>
                  </div>
                </div>
              </div>

            {/* Order Now Button */}
           <button className="hidden lg:block bg-red-600 hover:bg-red-700 text-black px-6 py-2 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
      Order Now
</button>

{/* Mobile Call Button */}
<div className="lg:hidden flex items-center space-x-2">
  <a 
    href="tel:+918260506650" 
    className="bg-red-500 text-black p-2 rounded-full hover:bg-red-400 transition-all duration-300 transform hover:scale-105"
  >
    <Phone size={20} />
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
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    handleNavClick(link);
                    setMobileMenuOpen(false);
                  }}
                  className="block text-white hover:text-yellow-500 transition-colors duration-300 py-2 font-semibold w-full text-left border-none bg-transparent cursor-pointer uppercase text-sm"
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
          <div className="mb-6 md:mb-8 animate-fade-in-down">
            <div className="inline-flex items-center space-x-2 bg-transparent backdrop-blur-sm px-6 md:px-8 py-2 md:py-3 rounded-full border-2 border-red-600">
              <span className="text-red-600 text-xs md:text-sm font-bold">✦</span>
              <span className="text-red-600 text-xs md:text-sm font-bold uppercase tracking-wider">
                WELCOME TO VELVET & VINE
              </span>
              <span className="text-red-600 text-xs md:text-sm font-bold">✦</span>
            </div>
          </div>

          {/* Animated Title - White color */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight animate-fade-in-up px-4">
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
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 max-w-xl md:max-w-2xl lg:max-w-3xl animate-fade-in-up animation-delay-500 px-4">
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* CTA Button - Changed to red */}
           <button 
             onClick={() => setShowMenuPage(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-red-600/50 transform hover:scale-110 animate-fade-in-up animation-delay-700 uppercase tracking-wider"
          >
            EXPLORE MENU 
          </button>

          <div className="mt-12 animate-bounce flex flex-col items-center text-white">
            <span className="text-xs md:text-sm mb-2 font-semibold">Scroll Down</span>
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Slide Indicators - Changed to red */}
          <div className="absolute bottom-10 md:bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-red-600 w-6 md:w-10' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories with Navigation to Detailed Menu */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {menuCategories.map((category, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg transition-all duration-300 cursor-pointer transform hover:scale-110 active:scale-95 bg-transparent hover:bg-gray-800 hover:shadow-xl border-2 border-transparent hover:border-red-500"
                onClick={() => setShowMenuPage(true)}
              >
                <category.icon className="w-12 h-12 mx-auto mb-4 text-white transition-transform duration-300 hover:rotate-12" strokeWidth={1.5} />
                <p className="text-white font-medium transition-all duration-300 hover:text-red-300">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20 bg-gray-900 relative">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Restaurant Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Velvet&Vines Popular Items
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-black/70 transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full flex items-center space-x-1">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={`${i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm ml-2">Review({item.reviews})</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{item.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breakfast Menu */}
      <section className="py-20 relative bg-gray-50" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-white/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-red-600 text-sm uppercase tracking-wider mb-2 font-semibold">Our Menu</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Breakfast Menu
            </h2>
            <p className="text-gray-600 mb-6">Delicious Food Menu - Special Price</p>
            
            {/* Button to view full menu */}
            <button
              onClick={() => setShowMenuPage(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              View Complete Menu →
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              {menuItems.breakfast.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-300 rounded-lg px-4"
                >
                  <div className="flex items-center flex-1">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-500 italic">
                        Authentic Indian breakfast served fresh and hot
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 mx-6 border-b border-dotted border-gray-300"></div>

                  <div className="flex items-center">
                    <span className="text-xl font-bold text-orange-500">₹{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-red-600 text-sm uppercase tracking-wider mb-2 font-semibold">About Us</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About Velvet & Vine
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At Velvet & Vine, we celebrate the timeless tradition of the thali. Our Nepali and Indian thalis are prepared with the utmost care, offering a fresh, wholesome, and soulful dining experience that nourishes you from the inside out.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Beyond our signature thalis, our menu features a curated selection of comforting Indian classics, popular Nepali dishes, and familiar Chinese cuisine.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                 
                  Step inside and feel the difference
                  Step inside and feel the difference
                  Velvet & Vine – where every meal is served with comfort.
                </p>
                <div className="flex items-center space-x-8 mb-10">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-red-600 mb-2">5+</p>
                    <p className="text-gray-600">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-red-600 mb-2">50+</p>
                    <p className="text-gray-600">Menu Items</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-red-600 mb-2">100+</p>
                    <p className="text-gray-600">Happy Customers</p>
                  </div>
                </div>

                {/* Founders Section */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Founders</h3>
                  <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
                    <div className="flex items-center space-x-4">
                      <img
                       
                        alt="David Rajput"
                        className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
                      />
                      <div>
                        <p className="text-lg font-semibold text-gray-800">David Rajput</p>
                        <p className="text-gray-600 text-sm">Co-Founder & Head Chef</p>
                        <p className="text-gray-500 text-xs mt-1">David brings over 15 years of culinary experience and a passion for authentic flavors to Velvet & Vine.</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img
                        alt="Barsha Bhandari"
                        className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
                      />
                      <div>
                        <p className="text-lg font-semibold text-gray-800">Barsha Bhandari</p>
                        <p className="text-gray-600 text-sm">Co-Founder & Operations</p>
                        <p className="text-gray-500 text-xs mt-1">Barsha ensures every guest feels at home, blending hospitality with a keen eye for detail and service.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="About"
                  className="w-full rounded-lg shadow-2xl"
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
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full border-4 border-yellow-500 shadow-lg mb-4 object-cover"
                  />
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-red-500 text-sm uppercase tracking-wider mb-2 font-semibold">Reservation</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your Table
            </h2>
            <p className="text-gray-300">Reserve your spot for an unforgettable dining experience</p>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Number of Guests</label>
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5+ People</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Special Requests</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Any special requirements?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-600 text-sm uppercase tracking-wider mb-2 font-semibold">Contact Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Us</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Salugarh, Siliguri, West Bengal 734008, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91-8260506650</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">official.valvetvine@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Opening Hours</h4>
                <p className="text-gray-600">Monday - Sunday: 11:00 AM - 11:00 PM</p>
              </div>

              <div className="flex space-x-4 mt-8">
                <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="mailto:official.valvetvine@gmail.com" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <div className="bg-gray-100 rounded-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5!2d88.4!3d26.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQyJzAwLjAiTiA4OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img
                src="/M2sKshMbSqqkTuxP2bVeBQ.webp"
                alt="Velvet & Vine"
                className="h-16 mb-4"
              />
              <p className="text-gray-400 text-sm">
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
                <li>official.valvetvine@gmail.com</li>
                <li>Salugarh, Siliguri</li>
                <li>West Bengal 734008</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="mailto:official.valvetvine@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Velvet & Vine. All rights reserved.</p>
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
      `}</style>
    </div>
  );
}

export default App;