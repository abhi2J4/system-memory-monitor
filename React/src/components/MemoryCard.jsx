
import React from "react";

export function MemoryCard({
  title,
  value,
  subtitle,
  icon: Icon
}) {
  return (
    <div className="memory-card">

      <div className="card-top">
        <span>{title}</span>
        <Icon size={22} />
      </div>

      <h2>{value}</h2>

      <p>{subtitle}</p>

    </div>
  );
}
