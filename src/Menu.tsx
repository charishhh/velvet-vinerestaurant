import React, { useState } from 'react';
import { ArrowLeft, Star } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  image: string;
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
  const [activeCategory, setActiveCategory] = useState('All Items');
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
      { name: 'Roti, Sabji', price: '80', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Traditional Indian bread served with seasonal vegetables', isVeg: true },
      { name: 'Puri, Sabji', price: '100', image: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Deep-fried bread with spiced vegetables', isVeg: true },
      { name: 'Plain Paratha, Sabji', price: '120', image: 'https://images.unsplash.com/photo-1574653771117-7ce7a4b86ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Layered flatbread with mixed vegetables', isVeg: true },
      { name: 'Aloo Paratha, Curd', price: '70', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Potato-stuffed paratha served with fresh yogurt', isVeg: true },
      { name: 'Paneer Paratha, Achar', price: '80', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Cottage cheese stuffed paratha with pickle', isVeg: true },
      { name: 'Laccha Paratha, Achar', price: '40', image: 'https://images.unsplash.com/photo-1574653771117-7ce7a4b86ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Multi-layered paratha with pickle', isVeg: true },
      { name: 'Keema Paratha, Achar', price: '90', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Minced meat stuffed paratha with pickle', isVeg: false },
      { name: 'Omelette', price: '30', image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Classic egg omelette', isVeg: false },
      { name: 'Masala Omelette', price: '50', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Spiced omelette with onions and chilies', isVeg: false },
      { name: 'French Toast', price: '150', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Sweet bread soaked in egg and fried', isVeg: false },
      { name: 'Egg Toast', price: '80', image: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Toasted bread with egg', isVeg: false },
      { name: 'Butter Toast', price: '60', image: 'https://images.unsplash.com/photo-1554520735-0a6b81e0d4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Crispy toast with butter', isVeg: true },
      { name: 'Banana Pancake', price: '180', image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Fluffy pancakes with fresh banana', isVeg: true },
      { name: 'Chocolate Pancake', price: '200', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Rich chocolate pancakes', isVeg: true },
      { name: 'Plain Pancake', price: '150', image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Classic fluffy pancakes', isVeg: true },
      { name: 'Chicken Platter', price: '250', image: 'https://images.unsplash.com/photo-1598514983318-2f64c8cd3fc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Grilled chicken with sides', isVeg: false },
      { name: 'Poha', price: '60', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Traditional flattened rice dish', isVeg: true },
      { name: 'Upma', price: '60', image: 'https://images.unsplash.com/photo-1621510456681-2330135e5871?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Savory semolina porridge', isVeg: true },
      { name: 'Maggi', price: '50', image: 'https://images.unsplash.com/photo-1571197749437-4d30e23316f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Instant noodles', isVeg: true },
      { name: 'Mix Veg Maggi', price: '80', image: 'https://images.unsplash.com/photo-1571197749437-4d30e23316f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Noodles with mixed vegetables', isVeg: true },
      { name: 'Masala Maggi', price: '70', image: 'https://images.unsplash.com/photo-1571197749437-4d30e23316f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Spicy masala noodles', isVeg: true }
    ],
    
    lunch: [
      { name: 'Dal Rice', price: '130', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Comfort food with lentils and rice', isVeg: true },
      { name: 'Sambar Rice', price: '130', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'South Indian rice with sambar', isVeg: true },
      { name: 'Curd Rice', price: '90', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Cooling rice with yogurt', isVeg: true },
      { name: 'Plain Rice', price: '50', image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Steamed white rice', isVeg: true },
      { name: 'Jeera Rice', price: '70', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Cumin flavored rice', isVeg: true },
      { name: 'Veg Fried Rice', price: '180', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Colorful fried rice with mixed vegetables', isVeg: true },
  { name: 'Chicken Fried Rice', price: '220', image: 'https://images.pexels.com/photos/3577563/pexels-photo-3577563.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2', description: 'Wok-tossed rice with chicken and vegetables', isVeg: false },
      { name: 'Egg Fried Rice', price: '200', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Fried rice with scrambled eggs', isVeg: false },
      { name: 'Veg Biryani', price: '200', image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Aromatic rice with mixed vegetables and spices', isVeg: true },
      { name: 'Chicken Biryani', price: '250', image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Tender Chicken layered with fragrant Basmati Rice and slow-cooked with aromatic Spices, creating a rich and flavorful Biryani that\'s simply irresistible.', isVeg: false },
      { name: 'Mutton Biryani', price: '300', image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Premium mutton cooked with basmati rice', isVeg: false },
      { name: 'Veg Pulao', price: '180', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Fragrant rice with vegetables', isVeg: true },
      { name: 'Chicken Pulao', price: '220', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Aromatic rice with chicken', isVeg: false },
      { name: 'Rajma Rice', price: '160', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Kidney beans curry with rice', isVeg: true },
      { name: 'Chhole Rice', price: '160', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Chickpea curry with rice', isVeg: true },
      { name: 'Paneer Butter Masala', price: '220', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Creamy paneer in tomato-based gravy', isVeg: true },
      { name: 'Dal Makhani', price: '180', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Rich and creamy black lentils', isVeg: true },
      { name: 'Mix Veg', price: '160', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Mixed seasonal vegetables', isVeg: true },
      { name: 'Chicken Curry', price: '240', image: 'https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Traditional chicken curry with aromatic spices', isVeg: false },
      { name: 'Mutton Curry', price: '300', image: 'https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Tender mutton in rich, spiced gravy', isVeg: false },
      { name: 'Fish Curry', price: '280', image: 'https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Fresh fish in traditional curry', isVeg: false }
    ],

    dinner: [
      { name: 'Roti', price: '15', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Traditional whole wheat bread', isVeg: true },
      { name: 'Butter Roti', price: '20', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Roti with butter', isVeg: true },
      { name: 'Butter Naan', price: '50', image: 'https://images.unsplash.com/photo-1574653771117-7ce7a4b86ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Soft leavened bread with butter', isVeg: true },
      { name: 'Garlic Naan', price: '60', image: 'https://images.unsplash.com/photo-1574653771117-7ce7a4b86ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Naan topped with fresh garlic', isVeg: true },
      { name: 'Laccha Paratha', price: '40', image: 'https://images.unsplash.com/photo-1574653771117-7ce7a4b86ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Multi-layered flaky paratha', isVeg: true },
      { name: 'Plain Paratha', price: '30', image: 'https://images.unsplash.com/photo-1574653771117-7ce7a4b86ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Simple layered flatbread', isVeg: true },
      { name: 'Hakka Noodles', price: '180', image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Stir-fried noodles with vegetables', isVeg: true },
      { name: 'Chicken Hakka Noodles', price: '220', image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Hakka noodles with chicken', isVeg: false },
      { name: 'Schezwan Noodles', price: '200', image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Spicy schezwan flavored noodles', isVeg: true },
      { name: 'Chicken Schezwan Noodles', price: '240', image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Spicy noodles with chicken', isVeg: false },
      { name: 'Chilli Chicken', price: '280', image: 'https://images.unsplash.com/photo-1598514983318-2f64c8cd3fc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Indo-Chinese style spicy chicken', isVeg: false },
      { name: 'Chicken Manchurian', price: '280', image: 'https://images.unsplash.com/photo-1598514983318-2f64c8cd3fc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Chicken in sweet and sour sauce', isVeg: false },
      { name: 'Veg Manchurian', price: '220', image: 'https://images.unsplash.com/photo-1574653771117-7ce7a4b86ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Vegetable balls in manchurian sauce', isVeg: true },
      { name: 'Paneer Chilli', price: '250', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Spicy paneer with bell peppers', isVeg: true },
      { name: 'Gobi Chilli', price: '200', image: 'https://images.unsplash.com/photo-1574653771117-7ce7a4b86ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Spicy cauliflower dish', isVeg: true },
      { name: 'Mixed Fried Rice', price: '240', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Fried rice with mixed ingredients', isVeg: false },
      { name: 'Triple Rice', price: '280', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Special rice with triple flavors', isVeg: false },
      { name: 'Chicken 65', price: '300', image: 'https://images.unsplash.com/photo-1598514983318-2f64c8cd3fc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Spicy deep-fried chicken appetizer', isVeg: false },
      { name: 'Chicken Lollipop', price: '320', image: 'https://images.unsplash.com/photo-1598514983318-2f64c8cd3fc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Chicken drumsticks in lollipop style', isVeg: false },
      { name: 'Fish Fry', price: '280', image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Crispy fried fish', isVeg: false },
      { name: 'Prawns Fry', price: '350', image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Delicious fried prawns', isVeg: false }
    ]
  };

  const categories = [
    'All Items',
    'Breakfast',
    'Lunch',
    'Dinner'
  ];

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
    let items = activeCategory === 'All Items' 
      ? getAllItems() 
      : menuData[activeCategory.toLowerCase()] || [];

    if (filterType === 'veg') {
      items = items.filter(item => item.isVeg);
    } else if (filterType === 'non-veg') {
      items = items.filter(item => !item.isVeg);
    }

    return items;
  };

  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{
      fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Header */}
      <div className="bg-black shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleBack}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors text-white"
              >
                <ArrowLeft size={24} />
              </button>
              <div className="flex items-center space-x-3">
                <img
                  src="/M2sKshMbSqqkTuxP2bVeBQ.webp"
                  alt="Velvet & Vine"
                  className="h-12 w-auto"
                />
                <div>
                  <h1 className="text-xl font-bold text-white">Velvet & Vine</h1>
                  <p className="text-sm text-gray-300">Menu List</p>
                </div>
              </div>
            </div>
            
            {/* Call Details */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-white">
                <div className="bg-red-500 p-2 rounded-full">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-red-500 text-sm font-semibold">Call Now</p>
                  <div className="text-sm font-medium">
                    <a href="tel:+8260506650" className="hover:text-red-400 transition-colors duration-300">
                      +91-8260506650
                    </a>
                  </div>
                </div>
              </div>
              
              <button className="bg-red-600 hover:bg-red-700 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent flex-1"></div>
            <span className="text-yellow-600 text-sm uppercase tracking-wider font-semibold">Menu List</span>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent flex-1"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu List</h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <button
              onClick={() => setFilterType('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                filterType === 'all' 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setFilterType('veg')}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${
                filterType === 'veg' 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-green-500 hover:bg-green-50'
              }`}
            >
              <span className="w-3 h-3 border border-green-500 bg-green-500 rounded-sm"></span>
              <span>Vegetarian</span>
            </button>
            <button
              onClick={() => setFilterType('non-veg')}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${
                filterType === 'non-veg' 
                ? 'bg-red-500 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-red-500 hover:bg-red-50'
              }`}
            >
              <span className="w-3 h-3 border border-red-500 bg-red-500 rounded-sm"></span>
              <span>Non-Vegetarian</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category
                ? 'bg-yellow-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-yellow-50 border border-gray-300'
              }`}
            >
              {category}
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
            
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {activeCategory === 'All Items' ? 'All Menu Items' : formatCategoryName(activeCategory)}
              </h2>
              
              <div className="space-y-1">
                {getFilteredItems().map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors rounded-lg px-4">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="text-gray-500 font-medium min-w-[40px]">
                        {String(index + 1).padStart(2, '0')}.
                      </div>
                      
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                          {item.isVeg !== undefined && (
                            <div className={`w-4 h-4 border-2 ${item.isVeg ? 'border-green-500' : 'border-red-500'} rounded-sm flex items-center justify-center`}>
                              <div className={`w-2 h-2 ${item.isVeg ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></div>
                            </div>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm text-gray-600">{item.description}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 mx-6 border-b border-dotted border-gray-300 min-w-[50px]"></div>

                    <div className="text-right">
                      <span className="text-xl font-bold text-orange-600">₹{item.price}</span>
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
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found for the selected filter.</p>
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={handleBack}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;