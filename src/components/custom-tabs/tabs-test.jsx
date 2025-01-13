import Tabs from "./tabs";
import "./tabs.css";
import RandomComponent from "./randomtab";

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(_currentTabIndex) {
    console.log(_currentTabIndex);
  }

  return <Tabs onChange={handleChange} tabsContent={tabs} />;
}
