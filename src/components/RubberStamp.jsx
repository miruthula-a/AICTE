import React from 'react';

export function RubberStamp({ 
  label = "ON TRACK", 
  variant = "pine", 
  rotation = -2,
  size = "md",
  className = ""
}) {
  const sizeClasses = {
    sm: "text-[10px] px-2.5 py-0.5 tracking-wider",
    md: "text-xs px-3 py-1 tracking-widest",
    lg: "text-sm md:text-base px-4 py-1.5 tracking-widest",
  }[size] || "text-xs px-3 py-1 tracking-widest";

  const colorClasses = {
    pine: "stamp-mark-pine",
    vermilion: "stamp-mark-vermilion",
    ochre: "stamp-mark-ochre",
    ink: "stamp-mark-ink",
  }[variant] || "stamp-mark-pine";

  return (
    <div
      style={{ '--stamp-rot': `${rotation}deg` }}
      className={`stamp-mark ${sizeClasses} ${colorClasses} rounded-lg ${className}`}
      title={`AICTE Status Stamp: ${label}`}
    >
      <span className="relative z-10 font-mono font-bold leading-none select-none inline-flex items-center gap-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full border border-current opacity-70"></span>
        {label}
        <span className="inline-block w-1.5 h-1.5 rounded-full border border-current opacity-70"></span>
      </span>
    </div>
  );
}

export function PaperSticker({ 
  children, 
  variant = "ochre", 
  rotation = 1.2,
  className = ""
}) {
  const colors = {
    ochre: "bg-[#FBF5E9] text-[#92671E] border-[#E2D2B0]",
    vermilion: "bg-[#FAECE9] text-[#C8321E] border-[#E8BFB8]",
    pine: "bg-[#EBF2EE] text-[#2F5D46] border-[#BCD4C5]",
    kraft: "bg-[#EFE8DC] text-[#4F545E] border-[#D6CEBF]"
  }[variant] || "bg-[#FBF5E9] text-[#92671E] border-[#E2D2B0]";

  return (
    <span 
      style={{ '--sticker-rot': `${rotation}deg` }}
      className={`paper-sticker rounded-md ${colors} ${className}`}
    >
      {children}
    </span>
  );
}
