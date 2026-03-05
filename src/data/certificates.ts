export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  type: "diploma" | "certification" | "training";
  badgeColor: string;
  credential?: string;
  downloadUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Licence en Informatique",
    issuer: "ESATIC",
    date: "2021 - 2024",
    image: "/assets/certificates/diploma1.jpg",
    type: "diploma",
    badgeColor: "bg-blue-500/20 border-blue-500/50 text-blue-300",
    credential: "https://credential.com/123",
    downloadUrl: "/licence.pdf"
  },
  {
    id: 2,
    title: "Maitriser Laravel avec un projet professionnel",
    issuer: "Udemy",
    date: "2025",
    image: "/assets/certificates/cert1.jpg",
    type: "certification",
    badgeColor: "bg-orange-500/20 border-orange-500/50 text-orange-300",
    credential: "https://credential.com/456",
    downloadUrl: "/laravel.pdf"
  },
  {
    id: 3,
    title: "React JS pour TOUS - L'Ultime Formation | 71 heures | 2025",
    issuer: "Udemy",
    date: "2025 - 2026",
    image: "/assets/certificates/cert2.jpg",
    type: "certification",
    badgeColor: "bg-pink-500/20 border-pink-500/50 text-pink-300",
    credential: "https://credential.com/789",
    downloadUrl: "/cv.pdf"
  }
];