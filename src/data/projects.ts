export interface Technology {
  name: string;
  icon: string;
  color: string;
  description?: string;
}

export interface ProjectImage {
  url: string;
  caption: string;
  isMain?: boolean;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  client?: string;
  date: string;
  duration?: string;
  category: "E-commerce" | "SaaS" | "Application" | "Dashboard" | "Mobile" | "API";
  status: "Terminé" | "En cours" | "En production";
  
  // Images
  mainImage: string;
  gallery: ProjectImage[];
  
  // Technologies
  technologies: Technology[];
  
  // Features
  keyFeatures: ProjectFeature[];
  
  // Challenges & Solutions
  challenges: {
    problem: string;
    solution: string;
  }[];
  
  // Links
  demoUrl?: string;
  githubUrl?: string;
  caseStudy?: string;
  
  // Stats
  stats?: {
    label: string;
    value: string;
  }[];
  
  // Team
  team?: {
    role: string;
    members: number;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "ecommerce-dynamique",
    title: "E-commerce Dynamique",
    shortDescription: "Plateforme e-commerce complète avec paiement Stripe, panier d'achat et dashboard admin.",
    fullDescription: `Une plateforme e-commerce moderne et performante développée pour une marque de vêtements en pleine expansion. 
    L'application permet une gestion complète des produits, des commandes et des clients, avec une interface d'administration intuitive.
    
    Le projet a été pensé pour offrir une expérience d'achat fluide et sécurisée, avec une attention particulière portée à la vitesse de chargement et à l'expérience mobile.`,
    
    client: "FashionStore Inc.",
    date: "2023",
    duration: "4 mois",
    category: "E-commerce",
    status: "En production",
    
    mainImage: "/assets/images/profile.jpg",
    gallery: [
      {
        url: "/assets/images/profile.jpg",
        caption: "Aperçu du projet",
        isMain: true
      }
    ],
    
    technologies: [
      { 
        name: "Laravel", 
        icon: "SiLaravel", 
        color: "#FF2D20",
        description: "Framework PHP pour le développement web"
      },
      { 
        name: "Blade", 
        icon: "SiBlade", 
        color: "#F05353",
        description: "Moteur de template pour Laravel"
      },
      { 
        name: "TailwindCSS", 
        icon: "SiTailwindcss", 
        color: "#38B2AC",
        description: "Framework CSS pour un design moderne"
      },
      { 
        name: "Node.js", 
        icon: "SiNodedotjs", 
        color: "#339933",
        description: "Runtime JavaScript pour le backend"
      },
      { 
        name: "MySQL", 
        icon: "SiMysql", 
        color: "#4479A1",
        description: "Base de données relationnelle"
      },
      { 
        name: "Stripe", 
        icon: "SiStripe", 
        color: "#008CDD",
        description: "Intégration des paiements"
      },
      { 
        name: "Redis", 
        icon: "SiRedis", 
        color: "#DC382D",
        description: "Cache et gestion des sessions"
      },
      { 
        name: "Docker", 
        icon: "SiDocker", 
        color: "#2496ED",
        description: "Conteneurisation de l'application"
      }
    ],
    
    keyFeatures: [
      {
        title: "Paiement sécurisé",
        description: "Intégration complète de Stripe pour les paiements par carte, avec support des paiements en plusieurs fois"
      },
      {
        title: "Dashboard admin",
        description: "Interface d'administration complète pour gérer les produits, les commandes et les utilisateurs"
      },
      {
        title: "Recherche avancée",
        description: "Moteur de recherche avec filtres multiples et suggestions en temps réel"
      },
      {
        title: "Notifications en temps réel",
        description: "Notifications pour les nouvelles commandes et les mises à jour de statut via WebSockets"
      },
      {
        title: "Gestion des stocks",
        description: "Système de gestion des stocks avec alertes automatiques quand un produit est en rupture"
      },
      {
        title: "Mobile-first",
        description: "Design entièrement responsive optimisé pour tous les appareils"
      }
    ],
    
    challenges: [
      {
        problem: "Gestion des stocks en temps réel avec forte concurrence",
        solution: "Implémentation de verrous optimistes et de transactions ACID pour éviter les surventes"
      },
      {
        problem: "Performance des pages produits avec nombreuses images",
        solution: "Utilisation de Next.js Image optimization, lazy loading et CDN pour les assets"
      },
      {
        problem: "Sécurité des paiements",
        solution: "Intégration PCI-DSS compliant via Stripe, pas de stockage de données sensibles"
      }
    ],
    
    demoUrl: "https://demo.ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce",
    caseStudy: "/case-studies/ecommerce",
    
    stats: [
      { label: "Utilisateurs actifs", value: "10k+" },
      { label: "Commandes/jour", value: "150+" },
      { label: "Temps de chargement", value: "< 1.5s" },
      { label: "Pages indexées", value: "500+" }
    ],
    
    team: {
      role: "Lead Developer",
      members: 4
    }
  },
  {
    id: 2,
    slug: "saas-analytics",
    title: "SaaS Analytics",
    shortDescription: "Dashboard analytics en temps réel avec graphiques interactifs et export de données.",
    fullDescription: `Une plateforme SaaS d'analytics conçue pour aider les équipes marketing à visualiser et analyser leurs données en temps réel.
    
    L'application offre des dashboards personnalisables, des rapports automatisés et des alertes intelligentes basées sur les KPIs.`,
    
    client: "DataViz Solutions",
    date: "2023",
    duration: "6 mois",
    category: "SaaS",
    status: "En production",
    
    mainImage: "/assets/images/profile.jpg",
    gallery: [
      {
        url: "/assets/images/profile.jpg",
        caption: "Dashboard analytics",
        isMain: true
      }
    ],
    
    technologies: [
      { name: "React", icon: "SiReact", color: "#61DAFB" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
      { name: "D3.js", icon: "SiD3", color: "#F9A03C" },
      { name: "Express", icon: "SiExpress", color: "#000000" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
      { name: "Socket.io", icon: "SiSocketdotio", color: "#010101" },
      { name: "Redis", icon: "SiRedis", color: "#DC382D" },
      { name: "AWS", icon: "SiGooglecloud", color: "#FF9900" }
    ],
    
    keyFeatures: [
      {
        title: "Temps réel",
        description: "Mise à jour des données en temps réel via WebSockets"
      },
      {
        title: "Export multi-format",
        description: "Export des données en PDF, Excel, CSV et JSON"
      },
      {
        title: "Alertes intelligentes",
        description: "Système d'alertes personnalisables basé sur des seuils"
      },
      {
        title: "API RESTful",
        description: "API complète pour l'intégration avec d'autres services"
      }
    ],
    
    challenges: [
      {
        problem: "Performance avec gros volumes de données",
        solution: "Implémentation de pagination, virtual scrolling et agrégation en temps réel"
      }
    ],
    
    demoUrl: "https://demo.analytics.com",
    githubUrl: "https://github.com/username/analytics",
    
    stats: [
      { label: "Données traitées", value: "1M+/jour" },
      { label: "Temps réel", value: "< 100ms" },
      { label: "Intégrations", value: "15+" }
    ]
  },
  {
    id: 3,
    slug: "gestion-taches",
    title: "Application de Gestion",
    shortDescription: "Application de gestion de tâches collaborative avec notifications en temps réel.",
    fullDescription: `Une application de gestion de projet collaborative inspirée des méthodologies agiles.
    
    L'outil permet aux équipes de créer des tableaux Kanban, de suivre le temps passé, et de collaborer en temps réel.`,
    
    client: "AgileSoft",
    date: "2022",
    duration: "3 mois",
    category: "Application",
    status: "Terminé",
    
    mainImage: "/assets/images/profile.jpg",
    gallery: [
      {
        url: "/assets/images/profile.jpg",
        caption: "Interface de gestion des tâches",
        isMain: true
      }
    ],
    
    technologies: [
      { name: "Vue.js", icon: "SiVuedotjs", color: "#4FC08D" },
      { name: "Vuex", icon: "SiVuedotjs", color: "#4FC08D" },
      { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
      { name: "Socket.io", icon: "SiSocketdotio", color: "#010101" },
      { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
      { name: "TailwindCSS", icon: "SiTailwindcss", color: "#06B6D4" }
    ],
    
    keyFeatures: [
      {
        title: "Drag & Drop",
        description: "Interface intuitive avec glisser-déposer pour les tâches"
      },
      {
        title: "Temps réel",
        description: "Mise à jour instantanée pour tous les utilisateurs"
      },
      {
        title: "Notifications",
        description: "Notifications email et in-app pour les mises à jour"
      }
    ],
    
    challenges: [
      {
        problem: "Synchronisation temps réel",
        solution: "Utilisation de Socket.io avec fallback sur long-polling"
      }
    ],
    
    githubUrl: "https://github.com/username/task-manager",
    
    stats: [
      { label: "Utilisateurs", value: "500+" },
      { label: "Tâches créées", value: "50k+" }
    ]
  },
  {
    id: 4,
    slug: "budget-familial-cfa",
    title: "Budget familial CFA",
    shortDescription: "App mobile/web de suivi de budget en FCFA avec catégories personnalisables, graphiques mensuels et export PDF.",
    fullDescription: `Application mobile et web pour la gestion des dépenses personnelles en franc CFA.
    
    L'outil permet d'ajouter ou de retirer des dépenses, de créer des catégories (transport, nourriture, crédit MoMo/Orange Money, etc.),
    et de visualiser l'évolution du budget à l'aide de graphiques mensuels générés avec Chart.js. Le stockage peut se faire en local ou via Firebase,
    offrant une synchronisation entre appareils et un mode hors-ligne.`,
    
    date: "2025",
    duration: "2 mois",
    category: "Mobile",
    status: "Terminé",
    
    mainImage: "/assets/images/profile.jpg",
    gallery: [
      {
        url: "/assets/images/profile.jpg",
        caption: "Suivi du budget familial",
        isMain: true
      }
    ],
    
    technologies: [
      { name: "React Native", icon: "SiReact", color: "#61DAFB", description: "Framework pour applications mobiles" },
      { name: "React", icon: "SiReact", color: "#61DAFB", description: "Base pour l'interface web" },
      { name: "Firebase", icon: "SiFirebase", color: "#FFCA28", description: "Backend BaaS avec Firestore et Auth" },
      { name: "Chart.js", icon: "SiChartdotjs", color: "#F16533", description: "Bibliothèque de graphiques" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6", description: "Typage statique" },
      { name: "Expo", icon: "SiExpo", color: "#000000", description: "Outils pour React Native" }
    ],
    
    keyFeatures: [
      {
        title: "Suivi des dépenses",
        description: "Ajout et suppression faciles des transactions"
      },
      {
        title: "Catégories personnalisables",
        description: "Transport, nourriture, crédit MoMo/Orange Money, etc."
      },
      {
        title: "Graphiques mensuels",
        description: "Visualisation des dépenses via Chart.js"
      },
      {
        title: "Stockage synchronisé",
        description: "Options de stockage local ou Firebase avec mode hors-ligne"
      },
      {
        title: "Export PDF",
        description: "Génération et partage de rapports en PDF"
      }
    ],
    
    challenges: [
      {
        problem: "Synchronisation multi-appareils et mode hors-ligne",
        solution: "Utilisation de Firebase Firestore avec persistance locale et règles de priorité"
      },
      {
        problem: "Export PDF performant sur mobile",
        solution: "Intégration d'une librairie native pour la génération de PDF et compression" 
      }
    ],
    
    githubUrl: "https://github.com/username/budget-familial-cfa",
    stats: [
      { label: "Dépenses suivies", value: "10k+" },
      { label: "Catégories créées", value: "50+" }
    ]
  },
  {
    id: 5,
    slug: "convertisseur-devises",
    title: "Convertisseur de devises + Calculateur de frais",
    shortDescription: "Outil web/mobile de conversion devises (CFA ↔ EUR/USD) + estimateur frais Mobile Money. API intégrée + mode hors-ligne.",
    fullDescription: `Application web et mobile pour la conversion de devises en temps réel et le calcul des frais de transfert Mobile Money.
    
    L'outil permet de convertir rapidement entre CFA, EUR, USD et autres devises en utilisant une API gratuite (exchangerate-api),
    et d'estimer les frais pour les transferts MoMo, Orange Money et Wave. L'historique des conversions et transferts est conservé,
    et l'application fonctionne en mode hors-ligne avec synchronisation des données.`,
    
    date: "2025",
    duration: "1.5 mois",
    category: "Mobile",
    status: "En production",
    
    mainImage: "/assets/images/profile.jpg",
    gallery: [
      {
        url: "/assets/images/profile.jpg",
        caption: "Convertisseur de devises et calculateur de frais",
        isMain: true
      }
    ],
    
    technologies: [
      { name: "React Native", icon: "SiReact", color: "#61DAFB", description: "Framework mobile cross-platform" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E", description: "Langage de base" },
      { name: "Axios", icon: "SiAxios", color: "#5A29E4", description: "Client HTTP pour les API" },
      { name: "exchangerate-api", icon: "SiApiai", color: "#00C853", description: "API taux de change en temps réel" },
      { name: "AsyncStorage", icon: "SiReact", color: "#61DAFB", description: "Stockage local persistant" },
      { name: "Expo", icon: "SiExpo", color: "#000000", description: "Outils pour React Native" }
    ],
    
    keyFeatures: [
      {
        title: "Conversion en temps réel",
        description: "Taux de change actualisés via exchangerate-api avec support de multiples devises"
      },
      {
        title: "Estimateur frais Mobile Money",
        description: "Calcul automatique des frais pour MoMo, Orange Money et Wave selon le montant"
      },
      {
        title: "Historique de conversions",
        description: "Suivi des dernières conversions avec horodatage et devises utilisées"
      },
      {
        title: "Mode hors-ligne",
        description: "Utilisation des derniers taux en cache quand la connexion n'est pas disponible"
      },
      {
        title: "Interface intuitive",
        description: "Design simple et rapide pour conversions et calculs immédiats"
      }
    ],
    
    challenges: [
      {
        problem: "Fiabilité du taux de change sans connexion",
        solution: "Mise en cache local des taux avec horodatage et fallback sur les derniers taux connus"
      },
      {
        problem: "Calcul précis des frais selon les opérateurs",
        solution: "Base de données locale avec barèmes actualisables manuellement pour chaque opérateur"
      }
    ],
    
    githubUrl: "https://github.com/username/convertisseur-devises",
    demoUrl: "https://convertisseur-devises.app",
    stats: [
      { label: "Conversions/jour", value: "5k+" },
      { label: "Devises supportées", value: "50+" },
      { label: "Opérateurs Mobile Money", value: "10+" }
    ]
  }
];