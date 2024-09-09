interface ITab {
  activeTab: string;
  handleTabClick: (tab: string) => void;
  tabName: string;
  tab: string;
}

export const Tab = ({
  activeTab,
  handleTabClick,
  tabName,
  tab
}: ITab) => {
  return (
    <button
      onClick={() => handleTabClick(tab)}
      className={`pt-2 text-sm uppercase font-barlow ${activeTab === tab ? 'border-b-2 border-yellow text-yellow font-bold' : 'text-gray-300'
        }`}
    >
      {tabName}
    </button>
  )
}
