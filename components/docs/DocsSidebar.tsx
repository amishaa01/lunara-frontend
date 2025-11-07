"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const sections = [
  {
    title: "Getting Started",
    items: [
      { id: "introduction", label: "Introduction" },
      { id: "how-it-works", label: "How It Works" },
      { id: "quick-start", label: "Quick Start" },
    ],
  },
  {
    title: "Technical Details",
    items: [
      { id: "architecture", label: "System Architecture" },
      { id: "ml-models", label: "ML Models" },
      { id: "data-sources", label: "Data Sources" },
      { id: "performance", label: "Performance Metrics" },
    ],
  },
  {
    title: "Integration",
    items: [
      { id: "api-reference", label: "API Reference" },
      { id: "building-types", label: "Building Types" },
      { id: "district-coverage", label: "District Coverage" },
    ],
  },
  {
    title: "Resources",
    items: [
      { id: "faq", label: "FAQ" },
      { id: "case-studies", label: "Case Studies" },
      { id: "contact", label: "Contact & Support" },
    ],
  },
];

export default function DocsSidebar() {
  const [openSections, setOpenSections] = useState<string[]>(["Getting Started"]);
  const [activeItem, setActiveItem] = useState("introduction");

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-1">
        {sections.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {section.title}
              {openSections.includes(section.title) ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>

            {openSections.includes(section.title) && (
              <div className="ml-3 mt-1 space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      activeItem === item.id
                        ? "bg-green-50 text-green-600 font-medium"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
