import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  isVeg?: boolean;
}

interface MenuData {
  [key: string]: MenuItem[];
}

interface MenuProps {
  onBack?: () => void;
}

const Menu: React.FC<MenuProps> = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterType, setFilterType] = useState('all'); // 'all', 'veg', 'non-veg'

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.href = '/';
    }
  };

  const menuData: MenuData = {
  breakfast: [
    { name: 'Roti Sabji', price: '80', isVeg: true },
    { name: 'Puri Sabji', price: '100', isVeg: true },
    { name: 'Plain Paratha Sabji', price: '120', isVeg: true },
    { name: 'Aloo Paratha, Curd', price: '70', isVeg: true },
    { name: 'Paneer Paratha, Achar', price: '80', isVeg: true },
    { name: 'Laccha Paratha, Achar', price: '40', isVeg: true },
    { name: 'Keema Paratha, Achar', price: '90', isVeg: false },
    { name: 'Omelette', price: '30', isVeg: false },
    { name: 'Masala Omelette', price: '50', isVeg: false },
    { name: 'French Toast', price: '150', isVeg: false },
    { name: 'Egg Toast', price: '80', isVeg: false },
    { name: 'Butter Toast', price: '60', isVeg: true },
    { name: 'Banana Pancake', price: '180', isVeg: true },
    { name: 'Chocolate Pancake', price: '200', isVeg: true },
    { name: 'Plain Pancake', price: '150', isVeg: true },
  ],

  soup: [
    { name: 'Chicken Soup', price: '150', isVeg: false },
    { name: 'Chicken Hot and Sour', price: '180', isVeg: false },
    { name: 'Veg Soup', price: '120', isVeg: true },
  ],

  sandwich: [
    { name: 'Cheese Sandwich', price: '150', isVeg: true },
    { name: 'Chilly Cheese Sandwich', price: '180', isVeg: true },
    { name: 'Chicken Cheese Sandwich', price: '200', isVeg: false },
    { name: 'BBQ Chicken Sandwich', price: '220', isVeg: false },
    { name: 'Paneer Sandwich', price: '200', isVeg: true },
    { name: 'BBQ Paneer Sandwich', price: '220', isVeg: true },
  ],

  meals: [
    { name: 'Veg Thali', price: '220', isVeg: true },
    { name: 'Chicken Thali', price: '250', isVeg: false },
    { name: 'Nepali Chicken Thali', price: '280', isVeg: false },
    { name: 'Omelette Thali', price: '280', isVeg: false },
    { name: 'Fish Thali', price: '300', isVeg: false },
    { name: 'Veg Fried Rice', price: '150', isVeg: true },
    { name: 'Mixed Fried Rice', price: '220', isVeg: false },
    { name: 'Chicken Fried Rice', price: '200', isVeg: false },
    { name: 'Jeera Rice', price: '140', isVeg: true },
    { name: 'Plain Rice Half', price: '60', isVeg: true },
    { name: 'Plain Rice Full', price: '120', isVeg: true },
    { name: 'Roti', price: '20', isVeg: true },
    { name: 'Butter Roti', price: '30', isVeg: true },
  ],

  noodlesThukpa: [
    { name: 'Veg Chow', price: '150', isVeg: true },
    { name: 'Chicken Chow', price: '200', isVeg: false },
    { name: 'Egg Chow', price: '180', isVeg: false },
    { name: 'Mixed Chow', price: '220', isVeg: false },
    { name: 'Veg Thukpa', price: '150', isVeg: true },
    { name: 'Maggie', price: '60', isVeg: true },
    { name: 'Veg Maggie', price: '80', isVeg: true },
    { name: 'Egg Maggie', price: '100', isVeg: false },
    { name: 'Mixed Maggie', price: '120', isVeg: false },
    { name: 'Veg Cheese Maggie', price: '150', isVeg: true },
    { name: 'Hot Soup Wai Wai', price: '80', isVeg: true },
    { name: 'Egg Wai Wai', price: '100', isVeg: false },
    { name: 'Korean Chicken Ramen', price: '240', isVeg: false },
    { name: 'Korean Veg Ramen', price: '200', isVeg: true },
  ],

  drinksCoffeeTea: [
    { name: 'Black Tea', price: '20', isVeg: true },
    { name: 'Milk Tea', price: '30', isVeg: true },
    { name: 'Hot Lemon Honey Tea', price: '70', isVeg: true },
    { name: 'Ginger Lemon Honey Tea', price: '90', isVeg: true },
    { name: 'Ginger Tea', price: '40', isVeg: true },
    { name: 'Milk Coffee', price: '60', isVeg: true },
    { name: 'Black Coffee', price: '50', isVeg: true },
    { name: 'Peach Ice Tea', price: '100', isVeg: true },
    { name: 'Lemon Ice Tea', price: '100', isVeg: true },
    { name: 'Lime Soda', price: '100', isVeg: true },
    { name: 'Chocolate Milkshake', price: '100', isVeg: true },
    { name: 'Oreo Milkshake', price: '120', isVeg: true },
    { name: 'Cold Coffee', price: '100', isVeg: true },
    { name: 'Virgin Mojito', price: '100', isVeg: true },
  ],

  cravesMore: [
    { name: 'Dal Fry', price: '120', isVeg: true },
    { name: 'Aloo Jeera', price: '120', isVeg: true },
    { name: 'Chicken Curry', price: '200', isVeg: false },
    { name: 'Chicken Chilly Dry', price: '220', isVeg: false },
    { name: 'Chicken Chilly Gravy', price: '250', isVeg: false },
    { name: 'Paneer Chilly', price: '220', isVeg: true },
    { name: 'Matar Paneer', price: '250', isVeg: true },
    { name: 'Chicken Sadheko', price: '220', isVeg: false },
    { name: 'Aloo Bhaji', price: '100', isVeg: true },
    { name: 'Fish Fry', price: '120', isVeg: false },
    { name: 'Fish Curry', price: '180', isVeg: false },
  ]
};

  const menuItemDescriptions: Record<string, string> = {
    'Roti Sabji': 'Soft rotis served with homestyle vegetable curry.',
    'Puri Sabji': 'Crisp, puffed puris paired with spiced potato sabji.',
    'Plain Paratha Sabji': 'Golden paratha folded around comforting seasonal sabji.',
    'Aloo Paratha, Curd': 'Stuffed aloo paratha finished with chilled curd.',
    'Paneer Paratha, Achar': 'Paneer-stuffed paratha with tangy house pickle.',
    'Laccha Paratha, Achar': 'Flaky laccha paratha served alongside spicy achar.',
    'Keema Paratha, Achar': 'Hearty keema filling wrapped in buttery paratha.',
    Omelette: 'Classic two-egg omelette cooked soft and fluffy.',
    'Masala Omelette': 'Onion and chilli masala omelette with fresh herbs.',
    'French Toast': 'Cinnamon-kissed French toast with sweet drizzle.',
    'Egg Toast': 'Buttered toast topped with seasoned fried egg.',
    'Butter Toast': 'Warm toast brushed generously with butter.',
    'Banana Pancake': 'Caramelised banana pancake dusted with sugar.',
    'Chocolate Pancake': 'Rich cocoa pancake with velvety chocolate notes.',
    'Plain Pancake': 'Fluffy pancake finished with a touch of honey.',
    'Chicken Soup': 'Slow-simmered chicken broth with warming spices.',
    'Chicken Hot and Sour': 'Bold chicken soup balancing heat and tang.',
    'Veg Soup': 'Fresh vegetable soup brightened with herbs.',
    'Cheese Sandwich': 'Melted cheese tucked inside toasted bread.',
    'Chilly Cheese Sandwich': 'Cheesy toast with green chilli zing.',
    'Chicken Cheese Sandwich': 'Roasted chicken and cheese on griddled bread.',
    'BBQ Chicken Sandwich': 'Smoky BBQ chicken layered in a soft bun.',
    'Paneer Sandwich': 'Paneer cubes tossed in spices and crisp veggies.',
    'BBQ Paneer Sandwich': 'Charred paneer with BBQ glaze in a toasted sandwich.',
    'Veg Thali': 'Complete vegetarian platter with dal, sabji, and rice.',
    'Chicken Thali': 'Nepali-style chicken curry thali with accompaniments.',
  'Nepali Chicken Thali': 'Traditional Nepali chicken thali with rice, gundruk, achar, and seasonal sides.',
    'Omelette Thali': 'Protein-packed omelette served with thali sides.',
    'Fish Thali': 'Regional fish curry thali with traditional condiments.',
    'Veg Fried Rice': 'Wok-tossed rice with garden vegetables and soy.',
    'Mixed Fried Rice': 'Rice tossed with chicken, egg, and crunchy veggies.',
    'Chicken Fried Rice': 'Smoky fried rice loaded with diced chicken.',
    'Jeera Rice': 'Fragrant basmati tempered with cumin seeds.',
    'Plain Rice Half': 'Steamed basmati served in a light portion.',
    'Plain Rice Full': 'Generous helping of fluffy steamed basmati.',
    Roti: 'Whole wheat roti cooked on a hot tawa.',
    'Butter Roti': 'Tawa roti brushed with melting butter.',
    'Veg Chow': 'Street-style veg chowmein with crunchy greens.',
    'Chicken Chow': 'Stir-fried noodles loaded with chicken strips.',
    'Egg Chow': 'Egg-tossed noodles with pepper and scallions.',
    'Mixed Chow': 'Noodles featuring chicken, egg, and vegetables.',
    'Veg Thukpa': 'Brothy veg thukpa with handmade noodles.',
    Maggie: 'Comforting masala Maggi cooked café style.',
    'Veg Maggie': 'Vegetable-loaded Maggi with house spices.',
    'Egg Maggie': 'Maggi noodles topped with scrambled egg.',
    'Mixed Maggie': 'Maggi infused with chicken, egg, and veggies.',
    'Veg Cheese Maggie': 'Cheesy Maggi with sautéed vegetables.',
    'Hot Soup Wai Wai': 'Steaming Wai Wai noodles in spiced broth.',
    'Egg Wai Wai': 'Egg-finished Wai Wai with chilli oil.',
    'Korean Chicken Ramen': 'Spicy Korean ramen crowned with chicken.',
    'Korean Veg Ramen': 'Gochujang-inspired ramen with crisp veggies.',
    'Black Tea': 'Robust black tea brewed the traditional way.',
    'Milk Tea': 'Creamy milk tea simmered with Assam leaves.',
    'Hot Lemon Honey Tea': 'Soothing lemon tea sweetened with wild honey.',
    'Ginger Lemon Honey Tea': 'Ginger-forward tea layered with lemon and honey.',
    'Ginger Tea': 'Spicy ginger brew perfect for cool evenings.',
    'Milk Coffee': 'Milky filter-style coffee with toasted notes.',
    'Black Coffee': 'Bold black coffee for a pure caffeine kick.',
    'Peach Ice Tea': 'Chilled peach iced tea with fruity finish.',
    'Lemon Ice Tea': 'Bright lemon iced tea with gentle sweetness.',
    'Lime Soda': 'Sparkling lime soda with a pinch of salt.',
    'Chocolate Milkshake': 'Thick chocolate shake blended with ice cream.',
    'Oreo Milkshake': 'Creamy Oreo shake with crunchy crumbs.',
    'Cold Coffee': 'Iced coffee shaken with milk and sugar.',
    'Virgin Mojito': 'Mint-lime refresher topped with soda.',
    'Dal Fry': 'Tempered yellow dal finished with ghee.',
    'Aloo Jeera': 'Potatoes tossed with roasted cumin and chilli.',
    'Chicken Curry': 'Slow-cooked chicken curry with homestyle gravy.',
    'Chicken Chilly Dry': 'Crisp chicken bites glazed in chilli sauce.',
    'Chicken Chilly Gravy': 'Saucy chilli chicken perfect with fried rice.',
    'Paneer Chilly': 'Paneer cubes wok-tossed in Indo-Chinese spices.',
    'Matar Paneer': 'Paneer and peas simmered in tomato-onion gravy.',
    'Chicken Sadheko': 'Nepali-style shredded chicken with mustard oil.',
    'Aloo Bhaji': 'Spiced baby potatoes finished with coriander.',
    'Fish Fry': 'Shallow-fried fish coated in house masala.',
    'Fish Curry': 'Tangy fish curry with coastal-style spices.'
  };

  const categories = [
    { key: 'all', label: 'All Items' },
    { key: 'breakfast', label: 'Breakfast' },
    { key: 'soup', label: 'Soup' },
    { key: 'sandwich', label: 'Sandwich' },
    { key: 'meals', label: 'Meals' },
    { key: 'noodlesThukpa', label: 'Noodles & Thukpa' },
    { key: 'drinksCoffeeTea', label: 'Drinks, Coffee & Tea' },
    { key: 'cravesMore', label: 'Craves More' }
  ];

  const handleCategoryChange = (categoryKey: string) => {
    setActiveCategory(categoryKey);
    setFilterType('all');
  };

  const getItemDescription = (item: MenuItem) => {
    if (item.description) {
      return item.description;
    }
    return menuItemDescriptions[item.name] || `Signature ${item.name} prepared fresh at Velvet & Vine with our trusted flavors.`;
  };

  const getAllItems = () => {
    let allItems: (MenuItem & { category: string })[] = [];
    Object.entries(menuData).forEach(([category, items]) => {
      items.forEach(item => {
        allItems.push({ ...item, category });
      });
    });
    return allItems;
  };

  const getFilteredItems = () => {
    let items = activeCategory === 'all'
      ? getAllItems()
      : menuData[activeCategory] || [];

    if (filterType === 'veg') {
      items = items.filter(item => item.isVeg);
    } else if (filterType === 'non-veg') {
      items = items.filter(item => !item.isVeg);
    }

    return items;
  };

  return (
  <div className="min-h-screen bg-gray-50" style={{
      fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Header */}
      <div className="bg-black shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button 
                onClick={handleBack}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors text-white active:scale-95"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img
                  src="/M2sKshMbSqqkTuxP2bVeBQ.webp"
                  alt="Velvet & Vine"
                  className="h-8 sm:h-10 md:h-12 w-auto"
                />
                <div>
                  <h1 className="text-sm sm:text-lg md:text-xl font-bold text-white">Velvet & Vine</h1>
                  <p className="text-xs sm:text-sm text-gray-300">Menu List</p>
                </div>
              </div>
            </div>
            
            {/* Call Details */}
            <div className="hidden lg:flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-white">
                <div className="bg-red-500 p-2 rounded-full">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-red-500 text-sm font-semibold">Call Now</p>
                  <div className="text-sm font-medium space-y-0.5">
                    <a href="tel:+918260506650" className="block hover:text-red-400 transition-colors duration-300">
                      +91-8260506650
                    </a>
                    <a href="tel:+917029252941" className="block hover:text-red-400 transition-colors duration-300">
                      +91-7029252941
                    </a>
                  </div>
                </div>
              </div>
              
              <a
                href="https://wa.me/917029252941?text=Hi%20Velvet%20%26%20Vine%2C%20I%27d%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile contact & WhatsApp CTA */}
      <div className="lg:hidden bg-black text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-3">
          <div>
            <p className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">Call Now</p>
            <div className="text-xs sm:text-sm font-medium space-y-0.5">
              <a href="tel:+918260506650" className="block hover:text-red-400 transition-colors duration-300 active:text-red-300">
                +91-8260506650
              </a>
              <a href="tel:+917029252941" className="block hover:text-red-400 transition-colors duration-300 active:text-red-300">
                +91-7029252941
              </a>
            </div>
          </div>
          <a
            href="https://wa.me/917029252941?text=Hi%20Velvet%20%26%20Vine%2C%20I%27d%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 active:scale-95"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
        {/* Page Title */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center justify-center space-x-2 mb-2 sm:mb-3 md:mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent flex-1"></div>
            <span className="text-yellow-600 text-xs sm:text-sm uppercase tracking-wider font-semibold">Menu List</span>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent flex-1"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Our Menu List</h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-medium transition-all active:scale-95 ${
                filterType === 'all' 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setFilterType('veg')}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-medium transition-all flex items-center space-x-1.5 sm:space-x-2 active:scale-95 ${
                filterType === 'veg' 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-green-500 hover:bg-green-50'
              }`}
            >
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 border border-green-500 bg-green-500 rounded-sm"></span>
              <span>Veg</span>
            </button>
            <button
              onClick={() => setFilterType('non-veg')}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-medium transition-all flex items-center space-x-1.5 sm:space-x-2 active:scale-95 ${
                filterType === 'non-veg' 
                ? 'bg-red-500 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-red-500 hover:bg-red-50'
              }`}
            >
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 border border-red-500 bg-red-500 rounded-sm"></span>
              <span>Non-Veg</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => handleCategoryChange(category.key)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg text-xs sm:text-sm md:text-base font-medium transition-all active:scale-95 ${
                activeCategory === category.key
                ? 'bg-yellow-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-yellow-50 active:bg-yellow-100 border border-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Decorative corners */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-16 h-16">
              <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-600 opacity-20">
                <path d="M0,0 Q50,0 50,50 Q0,50 0,0" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 transform rotate-90">
              <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-600 opacity-20">
                <path d="M0,0 Q50,0 50,50 Q0,50 0,0" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="p-3 sm:p-5 md:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 text-center">
                {activeCategory === 'all'
                  ? 'All Menu Items'
                  : categories.find((category) => category.key === activeCategory)?.label || 'Menu Items'}
              </h2>
              
              <div className="space-y-1">
                {getFilteredItems().map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 active:bg-gray-100 transition-colors rounded-lg px-2 sm:px-3 md:px-4">
                    <div className="flex items-start sm:items-center space-x-2 sm:space-x-3 md:space-x-4 flex-1 mb-2 sm:mb-0">
                      <div className="text-gray-500 font-medium min-w-[30px] sm:min-w-[40px] text-xs sm:text-sm">
                        {String(index + 1).padStart(2, '0')}.
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 mb-1">
                          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">{item.name}</h3>
                          {item.isVeg !== undefined && (
                            <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 ${item.isVeg ? 'border-green-500' : 'border-red-500'} rounded-sm flex items-center justify-center flex-shrink-0`}>
                              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${item.isVeg ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></div>
                            </div>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{getItemDescription(item)}</p>
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-1 mx-3 md:mx-6 border-b border-dotted border-gray-300 min-w-[30px] md:min-w-[50px]"></div>

                    <div className="text-left sm:text-right ml-8 sm:ml-0">
                      <span className="text-base sm:text-lg md:text-xl font-bold text-orange-600">₹{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom decorative corners */}
            <div className="absolute bottom-0 left-0 w-16 h-16 transform rotate-270">
              <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-600 opacity-20">
                <path d="M0,0 Q50,0 50,50 Q0,50 0,0" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 transform rotate-180">
              <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-600 opacity-20">
                <path d="M0,0 Q50,0 50,50 Q0,50 0,0" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>

        {getFilteredItems().length === 0 && (
          <div className="text-center py-8 sm:py-10 md:py-12">
            <p className="text-gray-500 text-sm sm:text-base md:text-lg">No items found for the selected filter.</p>
          </div>
        )}

        <div className="mt-4 sm:mt-6 md:mt-8 text-center">
          <button
            onClick={handleBack}
            className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all active:scale-95"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;