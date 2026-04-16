import linksData from "./data/links.json";
import { LinkCard } from "./components/LinkCard";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-8 max-w-[1600px] mx-auto">
        {linksData.map((link, index) => (
          <LinkCard
            key={link.id}
            index={index}
            title={link.title}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </div>
    </div>
  );
}
