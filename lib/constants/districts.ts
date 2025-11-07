export const BUDAPEST_DISTRICTS = [
  { 
    id: 8, 
    name: "District VIII", 
    fullName: "Józsefváros", 
    status: "available" as const,
    color: "bg-green-500"
  },
  { 
    id: 5, 
    name: "District V", 
    fullName: "Belváros", 
    status: "coming" as const,
    date: "Next Month",
    color: "bg-yellow-500"
  },
  { 
    id: 7, 
    name: "District VII", 
    fullName: "Erzsébetváros", 
    status: "coming" as const,
    date: "Q1 2026",
    color: "bg-yellow-500"
  },
  { 
    id: 6, 
    name: "District VI", 
    fullName: "Terézváros", 
    status: "coming" as const,
    date: "Q1 2026",
    color: "bg-yellow-500"
  },
  { 
    id: 9, 
    name: "District IX", 
    fullName: "Ferencváros", 
    status: "coming" as const,
    date: "Q2 2026",
    color: "bg-gray-400"
  },
  { 
    id: 13, 
    name: "District XIII", 
    fullName: "Újlipótváros", 
    status: "coming" as const,
    date: "Q2 2026",
    color: "bg-gray-400"
  },
] as const;

export type District = typeof BUDAPEST_DISTRICTS[number];
