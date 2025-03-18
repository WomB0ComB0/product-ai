import { Brain, Layout, MessageSquare, Settings, TrendingUp } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Layout, text: 'Dashboard' },
    { icon: Brain, text: 'AI Insights' },
    { icon: TrendingUp, text: 'Analytics' },
    { icon: MessageSquare, text: 'Communication' },
    { icon: Settings, text: 'Settings' },
  ];

  return (
    <div className="absolute inset-y-0 left-0 w-64 px-2 space-y-6 transition duration-200 ease-in-out transform -translate-x-full bg-white shadow-lg py-7 md:relative md:translate-x-0">
      <div className="flex items-center justify-center">
        <Brain className="w-8 h-8 text-indigo-600" />
        <span className="ml-2 text-2xl font-semibold text-gray-800">ProductAI</span>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center px-4 py-3 space-x-3 text-gray-600 transition-colors duration-200 rounded-lg hover:bg-indigo-50 hover:text-indigo-600"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.text}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;