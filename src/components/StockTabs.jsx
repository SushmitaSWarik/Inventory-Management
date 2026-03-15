import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StockTabs({
  activeTab,
  setActiveTab,
  setSelectedItem,
}) {
  return (
    <Tabs
      value={activeTab}
      onValueChange={value => {
        setActiveTab(value);
        setSelectedItem(null);
      }}
    >
      <TabsList className="grid grid-cols-2 w-full">
        <TabsTrigger value="materials">Raw Materials</TabsTrigger>

        <TabsTrigger value="products">Products</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
