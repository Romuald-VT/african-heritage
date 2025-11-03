
interface TabNavigationProps {
    tabs:Array<string>;
    activeTab:string;
    onTabChange:(tab:string)=>void
}

const TabNavigation:React.FC<TabNavigationProps> = ({ tabs, activeTab, onTabChange }) => (
  <div className="mb-6" data-aos="fade-up">
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${
              activeTab === tab
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  </div>
);

export default TabNavigation;