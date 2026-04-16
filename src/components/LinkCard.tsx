import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";

interface LinkCardProps {
  title: string;
  url: string;
  icon: string;
  index: number;
  key?: string | number;
}

export function LinkCard({ title, url, icon, index }: LinkCardProps) {
  // Dynamically get the icon component from Lucide
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Link;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="aspect-square"
    >
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full h-full group"
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-4 border-2 border-primary/30 bg-card hover:border-primary hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all duration-300 rounded-xl relative overflow-hidden">
          {/* Neon Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="mb-3 text-primary/70 group-hover:text-primary transition-colors">
            <IconComponent size={48} strokeWidth={1.5} />
          </div>
          
          <h3 className="text-[10px] md:text-xs font-medium tracking-widest text-center text-muted-foreground group-hover:text-primary transition-colors uppercase">
            {title}
          </h3>
          
          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-all" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/50 transition-all" />
        </div>
      </a>
    </motion.div>
  );
}
