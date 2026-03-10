import { Activity } from "@/lib/types";

export const events: Activity[] = [
  {
    id: "balanz-leadership-talk",
    title: {
      es: "Charla con el liderazgo de Balanz sobre mercado de capitales argentino",
      en: "Conversation with Balanz leadership on Argentina’s capital markets"
    },
    type: "charla",
    date: "2026-02-18",
    description: {
      es: "Encuentro abierto con el equipo ejecutivo de Balanz para conversar sobre intermediación, inversión minorista y el rol de los ALyCs en el desarrollo del mercado local.",
      en: "An open session with Balanz’s leadership team on brokerage, retail investing, and the role of local broker-dealers in expanding Argentina’s capital markets."
    },
    speaker: "Equipo ejecutivo de Balanz",
    speakerRole: {
      es: "Liderazgo institucional",
      en: "Executive leadership"
    },
    company: "Balanz",
    location: "Campus Alcorta, UTDT",
    registrationLink: "https://www.instagram.com/finanzasditella/",
    image: "/images/placeholder-talk.svg",
    status: "featured",
    partnerTags: ["Balanz", "Capital Markets"]
  },
  {
    id: "galicia-trading-desk-visit",
    title: {
      es: "Visita a la mesa de dinero de Banco Galicia",
      en: "Visit to Banco Galicia’s trading desk"
    },
    type: "visita",
    date: "2025-11-12",
    description: {
      es: "Una recorrida por la operatoria diaria de la mesa, con foco en flujo, productos, cobertura y la interacción entre tesorería y mercado.",
      en: "A close look at the desk’s day-to-day operation, focused on flow, products, hedging, and the interaction between treasury and markets."
    },
    speaker: "Equipo de Mercado de Capitales",
    speakerRole: {
      es: "Mesa de Dinero y Tesorería",
      en: "Trading Desk & Treasury"
    },
    company: "Banco Galicia",
    location: "Torre Galicia, CABA",
    registrationLink: "https://www.instagram.com/finanzasditella/",
    image: "/images/placeholder-visit.svg",
    status: "featured",
    partnerTags: ["Banco Galicia", "Trading", "Treasury"]
  },
  {
    id: "byma-paper-trading-challenge",
    title: {
      es: "Torneo de paper trading con apoyo de BYMA",
      en: "Paper trading challenge supported by BYMA"
    },
    type: "competencia",
    date: "2025-09-25",
    description: {
      es: "Competencia de varias rondas para estudiantes con seguimiento de carteras, toma de decisiones bajo volatilidad y cierre con devolución profesional.",
      en: "A multi-round student competition focused on portfolio tracking, decision-making under volatility, and a final debrief with market professionals."
    },
    speaker: "Equipo educativo BYMA Lab",
    speakerRole: {
      es: "Mercado y formación",
      en: "Market education team"
    },
    company: "BYMA",
    location: "Formato híbrido",
    registrationLink: "https://www.instagram.com/finanzasditella/",
    image: "/images/placeholder-competition.svg",
    status: "featured",
    partnerTags: ["BYMA", "Competition", "Education"]
  },
  {
    id: "jpmorgan-argentina-visit",
    title: {
      es: "Visita institucional a J.P. Morgan Argentina",
      en: "Institutional visit to J.P. Morgan Argentina"
    },
    type: "visita",
    date: "2025-10-03",
    description: {
      es: "Conversación sobre banca, mercados globales y carreras en una firma internacional con exposición regional.",
      en: "A conversation on banking, global markets, and careers inside an international firm with strong regional exposure."
    },
    speaker: "Team J.P. Morgan Argentina",
    speakerRole: {
      es: "Corporate & Investment Bank",
      en: "Corporate & Investment Bank"
    },
    company: "J.P. Morgan Argentina",
    location: "Catalinas, CABA",
    registrationLink: "https://www.instagram.com/finanzasditella/",
    image: "/images/placeholder-visit.svg",
    status: "past",
    partnerTags: ["J.P. Morgan", "Investment Banking"]
  },
  {
    id: "mercado-libre-finance-careers",
    title: {
      es: "Charla sobre carreras en finanzas dentro de Mercado Libre",
      en: "Talk on finance careers at Mercado Libre"
    },
    type: "charla",
    date: "2025-08-21",
    description: {
      es: "Sesión enfocada en FP&A, business finance, métricas operativas y cómo se trabaja con escala en una compañía tecnológica regional.",
      en: "A session focused on FP&A, business finance, operating metrics, and how finance works at scale inside a regional technology company."
    },
    speaker: "Equipo de Finance",
    speakerRole: {
      es: "Business Finance y FP&A",
      en: "Business Finance & FP&A"
    },
    company: "Mercado Libre",
    location: "Campus Alcorta, UTDT",
    registrationLink: "https://www.instagram.com/finanzasditella/",
    image: "/images/placeholder-talk.svg",
    status: "past",
    partnerTags: ["Mercado Libre", "Careers", "Finance"]
  },
  {
    id: "valuation-bootcamp",
    title: {
      es: "Bootcamp de valuation y comparables",
      en: "Valuation and comparables bootcamp"
    },
    type: "educacion",
    date: "2025-07-09",
    description: {
      es: "Taller intensivo para alumnos interesados en aprender a pensar valor, drivers, múltiplos y presentación de una equity story convincente.",
      en: "An intensive workshop for students interested in valuation, key drivers, trading multiples, and building a convincing equity story."
    },
    speaker: "Equipo académico del club",
    speakerRole: {
      es: "Formación aplicada",
      en: "Applied education"
    },
    location: "Campus Alcorta, UTDT",
    registrationLink: "https://www.instagram.com/finanzasditella/",
    image: "/images/placeholder-education.svg",
    status: "past",
    partnerTags: ["Valuation", "Education"]
  },
  {
    id: "bice-infrastructure-finance",
    title: {
      es: "Charla con BICE sobre financiamiento productivo e infraestructura",
      en: "Talk with BICE on productive and infrastructure finance"
    },
    type: "charla",
    date: "2025-06-26",
    description: {
      es: "Un intercambio sobre banca de desarrollo, estructuración de proyectos y el vínculo entre financiamiento e inversión real.",
      en: "A discussion on development banking, project structuring, and the link between financing and real investment."
    },
    speaker: "Equipo BICE",
    speakerRole: {
      es: "Financiamiento estructurado",
      en: "Structured finance"
    },
    company: "BICE",
    location: "Campus Alcorta, UTDT",
    registrationLink: "https://www.instagram.com/finanzasditella/",
    image: "/images/placeholder-talk.svg",
    status: "past",
    partnerTags: ["BICE", "Infrastructure", "Development"]
  },
  {
    id: "tpcg-macro-outlook",
    title: {
      es: "Outlook macro y mercados con TPCG",
      en: "Macro and markets outlook with TPCG"
    },
    type: "charla",
    date: "2025-05-20",
    description: {
      es: "Lectura de escenario local, tasas, deuda soberana y cómo se traduce la macro en decisiones de inversión.",
      en: "A market-oriented discussion on the local macro environment, rates, sovereign debt, and how macro narratives translate into investment decisions."
    },
    speaker: "Equipo de Research",
    speakerRole: {
      es: "Research macro-financiero",
      en: "Macro-financial research"
    },
    company: "TPCG",
    location: "Campus Alcorta, UTDT",
    registrationLink: "https://www.instagram.com/finanzasditella/",
    image: "/images/placeholder-talk.svg",
    status: "past",
    partnerTags: ["TPCG", "Macro", "Research"]
  },
  {
    id: "byma-caja-visit",
    title: {
      es: "Visita a BYMA y Caja de Valores",
      en: "Visit to BYMA and Caja de Valores"
    },
    type: "visita",
    date: "2025-04-17",
    description: {
      es: "Recorrido por infraestructura de mercado para entender negociación, clearing, custodia y el back-end del sistema financiero local.",
      en: "A market infrastructure visit to understand trading, clearing, custody, and the institutional backbone of the local financial system."
    },
    speaker: "Equipos institucionales",
    speakerRole: {
      es: "Mercado e infraestructura",
      en: "Market infrastructure"
    },
    company: "BYMA",
    location: "Microcentro, CABA",
    registrationLink: "https://www.instagram.com/finanzasditella/",
    image: "/images/placeholder-visit.svg",
    status: "past",
    partnerTags: ["BYMA", "Caja de Valores", "Market Infrastructure"]
  },
  {
    id: "energy-research-initiative",
    title: {
      es: "Research club: energía argentina, YPF y Pampa Energía",
      en: "Research initiative: Argentine energy, YPF, and Pampa Energía"
    },
    type: "research",
    date: "2025-12-05",
    description: {
      es: "Presentación interna de un trabajo sobre drivers sectoriales, regulación, capacidad de generación y tesis de inversión en energía local.",
      en: "An internal presentation on sector drivers, regulation, generation capacity, and investment theses across Argentina’s energy space."
    },
    speaker: "Equipo de Research del club",
    speakerRole: {
      es: "Análisis sectorial",
      en: "Sector research"
    },
    company: "YPF / Pampa Energía",
    location: "UTDT",
    registrationLink: "https://www.instagram.com/finanzasditella/",
    image: "/images/placeholder-research.svg",
    status: "past",
    partnerTags: ["YPF", "Pampa Energía", "Research"]
  },
  {
    id: "ypf-corporate-finance-upcoming",
    title: {
      es: "Próxima charla con YPF sobre corporate finance y escala operativa",
      en: "Upcoming talk with YPF on corporate finance and operating scale"
    },
    type: "charla",
    date: "2026-04-09",
    description: {
      es: "Encuentro previsto para discutir asignación de capital, financiamiento, riesgos y toma de decisiones en una compañía estratégica para Argentina.",
      en: "An upcoming session on capital allocation, funding, risk, and decision-making inside one of Argentina’s most strategic companies."
    },
    speaker: "Equipo de Finanzas Corporativas",
    speakerRole: {
      es: "Corporate Finance",
      en: "Corporate Finance"
    },
    company: "YPF",
    location: "Campus Alcorta, UTDT",
    registrationLink: "https://www.instagram.com/finanzasditella/",
    image: "/images/placeholder-talk.svg",
    status: "upcoming",
    partnerTags: ["YPF", "Corporate Finance"]
  },
  {
    id: "mercado-libre-office-visit-upcoming",
    title: {
      es: "Próxima visita a oficinas de Mercado Libre",
      en: "Upcoming office visit to Mercado Libre"
    },
    type: "visita",
    date: "2026-04-24",
    description: {
      es: "Visita para conocer de cerca equipos de finanzas, investor relations y estrategia, con foco en procesos, métricas y coordinación cross-functional.",
      en: "A visit designed to expose students to finance, investor relations, and strategy teams, with a focus on processes, metrics, and cross-functional work."
    },
    speaker: "Equipos de Finance e IR",
    speakerRole: {
      es: "Finance e Investor Relations",
      en: "Finance & Investor Relations"
    },
    company: "Mercado Libre",
    location: "Saavedra, CABA",
    registrationLink: "https://www.instagram.com/finanzasditella/",
    image: "/images/placeholder-visit.svg",
    status: "upcoming",
    partnerTags: ["Mercado Libre", "Investor Relations"]
  }
];
