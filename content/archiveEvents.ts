import { Activity, ActivityType, LocaleString } from "@/lib/types";
import { galleryForArchiveEvent } from "@/content/archiveGalleries";
import { archiveDescriptionOverrides } from "@/content/archiveDescriptions";

type Seed = readonly [id: string, date: string, page: number, type: ActivityType, caption: string];

type Override = {
  title?: string;
  speaker?: string;
  speakerRole?: string;
  company?: string;
  location?: string;
};

const bi = (text: string): LocaleString => ({ es: text, en: text });

const archiveSeeds: readonly Seed[] = [
  [
    "2025-11-18-federico-alcalde-bessia",
    "2025-11-18",
    1,
    "charla",
    "Charla con Federico Alcalde Bessia – Banco Galicia. El próximo martes nos metemos en el corazón de una mesa de Trading & Global Markets: cómo se organiza, cómo operan los mercados de deuda y qué skills se buscan para crecer en un trading desk. Antes del encuentro hubo coffee & networking entre estudiantes de grado y de la Maestría en Finanzas. Sobre el disertante: Federico Alcalde Bessia, actuario UBA y CFA Charterholder, es Head of Trading & Global Markets en Grupo Financiero Galicia y profesor de la Maestría en Finanzas de la UTDT."
  ],
  [
    "2025-11-14-paolo-rocca",
    "2025-11-14",
    2,
    "charla",
    "El lunes tuvimos el enorme privilegio de recibir a Paolo Rocca, Presidente del Grupo Techint, en una conversación exclusiva de nuestro ciclo de charlas. Compartió su mirada sobre los desafíos estructurales de la Argentina, el rol de la industria en la productividad, la estabilidad macroeconómica, la inversión y el capital humano. También reflexionó sobre liderazgo en contextos de volatilidad y sobre las oportunidades que abre la transición energética."
  ],
  [
    "2025-11-14-taller-trading-algoritmico",
    "2025-11-14",
    5,
    "educacion",
    "Los invitamos a un taller de trading algorítmico desde cero con @lautaro_trader. La actividad se realizó en SV106 a las 19:00."
  ],
  [
    "2025-11-11-educacion-financiera-para-todas",
    "2025-11-11",
    7,
    "educacion",
    "Segunda edición del taller Educación Financiera para Todas con @ainifreile. La actividad se realizó el jueves 6 de noviembre a las 19:00 en SV105."
  ],
  [
    "2025-11-02-pablo-di-michelis",
    "2025-11-02",
    9,
    "charla",
    "Charla con @pablidemichelis, Head of M&A and Corporate Finance en Vista Energy. La conversación recorrió el potencial del Oil & Gas en Argentina, la gestión de un M&A desde el buy side y la trayectoria profesional del speaker."
  ],
  [
    "2025-10-27-gabriel-rubinstein",
    "2025-10-27",
    10,
    "charla",
    "Junto al CEDIT recibimos a Gabriel Rubinstein, economista y viceministro de Economía entre 2022 y 2023, para hacer un análisis pre-electoral del panorama económico frente a las elecciones legislativas."
  ],
  [
    "2025-10-23-torneo-pre-electoral-cocos",
    "2025-10-23",
    12,
    "competencia",
    "Nueva edición del torneo de paper-trading del Di Tella Finance Club. El desafío arrancó con un capital inicial ficticio de $2.000.000 y el acompañamiento de Cocos en una edición enfocada en el contexto pre-electoral."
  ],
  [
    "2025-10-21-nacho-abuchdid",
    "2025-10-21",
    16,
    "charla",
    "El Club de Finanzas y el CEDIT invitaron a una charla con el presidente y fundador del grupo IEB, @nachoabuchdid, en el Aula A4 de UTDT."
  ],
  [
    "2025-10-17-gustavo-grobocopatel",
    "2025-10-17",
    18,
    "charla",
    "El Di Tella Finance Club, junto al CEDIT y Agro UTDT, invitó a una charla con @gustavogrobocopatel para conversar sobre liderazgo, agroindustria y negocios en Argentina."
  ],
  [
    "2025-08-29-pierpaolo-barbieri-uala",
    "2025-08-29",
    20,
    "charla",
    "El Club de Finanzas y la Maestría en Finanzas UTDT invitaron a Pierpaolo Barbieri para conversar sobre su trayectoria como CEO y fundador de Ualá y sobre 17Sigma, fondo de venture capital en la región. La actividad se dio en el marco de la materia Venture Capital y el Ecosistema en América Latina."
  ],
  [
    "2025-08-22-alejandro-schuvaks",
    "2025-08-22",
    22,
    "charla",
    "Próxima charla con Alejandro Schuvaks, fundador y socio director de ARGIS, realizada en SV402."
  ],
  [
    "2025-08-06-educacion-financiera-para-todas-edicion-especial",
    "2025-08-06",
    23,
    "educacion",
    "Edición especial de Educación Financiera para TODAS junto con el Club de Finanzas Di Tella. El taller gratuito estuvo especialmente diseñado para mujeres que querían empezar a organizar sus finanzas personales y dar sus primeros pasos en el mundo financiero."
  ],
  [
    "2025-06-10-facundo-gomez-minujin",
    "2025-06-10",
    25,
    "charla",
    "Charla con Facundo Gómez Minujin, CEO de J.P. Morgan Argentina y presidente de AmCham Argentina."
  ],
  [
    "2025-05-30-jose-luis-daza",
    "2025-05-30",
    26,
    "charla",
    "El Di Tella Finance Club y el CEDIT invitaron a una charla con José Luis Daza, viceministro de Economía de la Nación."
  ],
  [
    "2025-05-10-isela-costantini",
    "2025-05-10",
    30,
    "charla",
    "El rol de las mujeres en el mundo financiero. Charla con Isela Costantini, CEO de GST Grupo Financiero y una de las ejecutivas más influyentes de América Latina, sobre liderazgo, transformación organizacional y carrera profesional."
  ],
  [
    "2025-05-10-ariel-sbdar",
    "2025-05-10",
    32,
    "charla",
    "Primera charla del año con @sbdar, CEO de Cocos Capital."
  ],
  [
    "2025-03-12-pablo-quirno",
    "2025-03-12",
    32,
    "charla",
    "El Di Tella Finance Club y el Centro de Estudiantes de Di Tella invitaron a una charla con Pablo Quirno, Secretario de Finanzas de la República Argentina."
  ],
  [
    "2024-11-11-nicolas-merener",
    "2024-11-11",
    34,
    "charla",
    "Charla con Nicolás Merener, especialista en mercados de commodities, sobre commodities agrícolas, variables, riesgos y tendencias."
  ],
  [
    "2024-11-08-modulos-mercado-de-capitales",
    "2024-11-08",
    36,
    "educacion",
    "Serie gratuita de módulos con profesionales financieros para introducirse y profundizar en el mercado de capitales."
  ],
  [
    "2024-10-28-ignacio-noel",
    "2024-10-28",
    39,
    "charla",
    "Charla con Ignacio Noel en el marco de la materia Private Equity, sin inscripción previa."
  ],
  [
    "2024-10-24-nicolas-dujovne",
    "2024-10-24",
    41,
    "charla",
    "El Di Tella Finance Club y el CEDIT invitaron a una charla con Nicolás Dujovne, ex ministro de Hacienda."
  ],
  [
    "2024-10-10-jorge-lonegro",
    "2024-10-10",
    43,
    "charla",
    "Charla con Jorge Lonegro, Markets and Corporate Sales Head para el Cono Sur en Citi y profesor de la Maestría en Finanzas UTDT, sobre mesa de dinero, monedas y tasas de interés."
  ],
  [
    "2024-09-30-visita-adcap",
    "2024-09-30",
    45,
    "visita",
    "Visita a las oficinas de ADCAP para charlar con referentes de distintas áreas de la firma."
  ],
  [
    "2024-09-12-competencia-bymalab",
    "2024-09-12",
    51,
    "competencia",
    "Primer torneo de inversiones exclusivo para alumnos de Di Tella, organizado en conjunto con BYMA y desarrollado sobre la plataforma BYMALAB."
  ],
  [
    "2024-09-03-diego-pando",
    "2024-09-03",
    52,
    "charla",
    "Encuentro con Diego Pando, fundador de Brubank y CEO de Digital House, para conversar sobre emprendimiento, liderazgo y los desafíos de construir empresas en Argentina."
  ],
  [
    "2024-06-07-visita-globant",
    "2024-06-07",
    54,
    "visita",
    "Visita a las oficinas de Globant. El club tuvo una charla con Pablo Ponce, Melissa y Tomás de recruiting y recorrió la Globant Tower."
  ],
  [
    "2024-06-04-alfonso-prat-gay",
    "2024-06-04",
    59,
    "charla",
    "Junto al CEDIT abrimos una charla con Alfonso Prat-Gay, ex J.P. Morgan, expresidente del BCRA y ex ministro de Hacienda y Finanzas Públicas."
  ],
  [
    "2024-05-30-visita-allaria-bcba",
    "2024-05-30",
    61,
    "visita",
    "Visita a las oficinas de Allaria y luego a la Bolsa de Comercio de Buenos Aires, donde el grupo fue recibido por Adelmo Gabbi."
  ],
  [
    "2024-05-23-claudio-zuchovicki",
    "2024-05-23",
    68,
    "charla",
    "Nueva oportunidad de charlar mano a mano con Claudio Zuchovicki."
  ],
  [
    "2024-05-21-visita-cocos",
    "2024-05-21",
    70,
    "visita",
    "Visita a las oficinas de Cocos Capital para conocer por dentro una empresa líder del sector y ver cómo se opera cotidianamente."
  ],
  [
    "2024-04-12-martin-redrado",
    "2024-04-12",
    76,
    "charla",
    "Próximo evento con Martín Redrado, expresidente del Banco Central, para recorrer su trayectoria en cargos públicos y el panorama argentino."
  ],
  [
    "2024-03-25-postales-bausili",
    "2024-03-25",
    78,
    "charla",
    "Postales de una charla épica con Santiago Bausili."
  ],
  [
    "2024-03-15-santiago-bausili",
    "2024-03-15",
    83,
    "charla",
    "Primera charla del año con Santiago Bausili, actual presidente del Banco Central."
  ],
  [
    "2024-03-07-pierpaolo-barbieri",
    "2024-03-07",
    85,
    "charla",
    "El Club de Finanzas y el CEDIT invitaron a escuchar y conversar con el empresario Pierpaolo Barbieri."
  ],
  [
    "2023-10-27-teofilo-lacroze-raizen",
    "2023-10-27",
    86,
    "charla",
    "Encuentro con el CEO de Raízen para discutir cómo competir y negociar en la industria energética argentina."
  ],
  [
    "2023-10-25-ariel-sbdar-innovacion",
    "2023-10-25",
    88,
    "charla",
    "Innovación en el mercado de capitales argentino. Charla con Ariel Sbdar sobre fintech, desarrollo de Cocos Capital e innovación en mercados."
  ],
  [
    "2023-10-02-luis-caputo",
    "2023-10-02",
    90,
    "charla",
    "Charla con Luis Toto Caputo, ex presidente del BCRA y ex ministro de Finanzas."
  ],
  [
    "2023-08-22-melina-di-napoli-balanz",
    "2023-08-22",
    92,
    "educacion",
    "Primer evento del segundo semestre: charla informativa con Balanz Capital a cargo de Milena Di Napoli sobre emisiones de obligaciones negociables."
  ],
  [
    "2023-08-17-quotes-ramiro-marra",
    "2023-08-17",
    94,
    "charla",
    "Quotes y recap de la charla con Ramiro Marra."
  ],
  [
    "2023-06-09-ramiro-marra",
    "2023-06-09",
    97,
    "charla",
    "Charla con Ramiro Marra sobre mercado financiero argentino y su impacto en un año electoral."
  ],
  [
    "2023-06-02-gabriel-martino",
    "2023-06-02",
    99,
    "charla",
    "Mensajes clave después de la charla con Gabriel Martino."
  ],
  [
    "2023-05-31-gerardo-hsbc",
    "2023-05-31",
    103,
    "charla",
    "Mano a mano con Gerardo, ex CEO de HSBC, para conversar sobre el día a día de alguien que trabaja y emprende en finanzas."
  ],
  [
    "2023-05-23-isabel-botta",
    "2023-05-23",
    105,
    "charla",
    "Key takeaways de la charla con Isabel Botta, Head Sales Trader en Balanz Capital."
  ],
  [
    "2023-04-17-julio-fermo-maria-lopez-isnardi",
    "2023-04-17",
    108,
    "charla",
    "Cierre del año con Julio Fermo y María Eugenia López Isnardi, resumido en un post de key takeaways."
  ],
  [
    "2022-11-16-cierre-de-ano",
    "2022-11-16",
    113,
    "charla",
    "Invitación al evento de cierre de año del club."
  ],
  [
    "2022-11-11-matias-minnini",
    "2022-11-11",
    115,
    "educacion",
    "Taller de análisis técnico con Matías Minnini, especialista de Balanz."
  ],
  [
    "2022-10-26-ignacio-hecquet-recap",
    "2022-10-26",
    117,
    "charla",
    "Recap de la charla con Ignacio Hecquet, con un repaso de lo que dejó el encuentro."
  ],
  [
    "2022-10-24-caso-nubank-ipo",
    "2022-10-24",
    121,
    "educacion",
    "Charla sobre el caso de Nubank y el proceso de IPO."
  ],
  [
    "2022-10-17-university-trading-challenge",
    "2022-10-17",
    123,
    "competencia",
    "Nueva edición del University Trading Challenge para competir, aprender haciendo y disputar premios."
  ],
  [
    "2022-10-14-ignacio-hecquet",
    "2022-10-14",
    125,
    "charla",
    "Charla con Ignacio Hecquet, socio de EY, sobre M&A."
  ],
  [
    "2022-10-12-mcgill-portfolio-challenge",
    "2022-10-12",
    127,
    "competencia",
    "Reunión informativa del McGill International Portfolio Challenge, una de las competencias globales más exigentes de asset management."
  ],
  [
    "2022-08-11-startups-episodio-4",
    "2022-08-11",
    129,
    "educacion",
    "Episodio 4 del ciclo sobre startups y ecosistema emprendedor, centrado en aspectos legales de rondas, term sheets, due diligence y governance rights."
  ],
  [
    "2022-08-08-lucas-yatche",
    "2022-08-08",
    132,
    "charla",
    "Lucas Yatche ayudó a entender la coyuntura macro y financiera argentina, las noticias del día a día y las estrategias de inversión posibles en ese contexto."
  ],
  [
    "2022-08-01-startups-episodio-3",
    "2022-08-01",
    133,
    "educacion",
    "Episodio 3 del ciclo sobre startups y venture capital con founders, CFOs e inversores que ya habían transitado múltiples rondas de inversión."
  ],
  [
    "2022-06-21-ciclo-venture-capital",
    "2022-06-21",
    134,
    "educacion",
    "Presentación general del ciclo sobre venture capital y emprendedurismo, con foco financiero para emprendedores, managers y alumnos interesados."
  ],
  [
    "2022-06-05-juan-politi",
    "2022-06-05",
    137,
    "charla",
    "Charla mano a mano con Juan Politi, VP de Allaria Ledesma, sobre trayectoria profesional, coyuntura y preguntas abiertas con estudiantes."
  ],
  [
    "2022-05-30-primer-evento-presencial-balanz",
    "2022-05-30",
    138,
    "charla",
    "Primer evento presencial del año con foco en el día a día de un Head Sales Trader de Balanz y una introducción directa al mundo de las finanzas."
  ],
  [
    "2022-05-12-jp-morgan-careers",
    "2022-05-12",
    139,
    "charla",
    "Encuentro presencial con J.P. Morgan para conocer trayectorias de directores con experiencia internacional, el negocio de la firma y oportunidades de carrera."
  ],
  [
    "2022-03-15-emprendedores-ditellianos",
    "2022-03-15",
    141,
    "charla",
    "Encuentro con dos emprendedores ditellianos: Ariel Sbdar, fundador de Cocos Capital, y Andrés Dorfman, fundador de Glamit."
  ],
  [
    "2021-11-19-cristian-lopez-consultatio",
    "2021-11-19",
    143,
    "charla",
    "Evento sobre la trampa de retorno y la gestión del riesgo en inversiones financieras con Cristian López, CEO de Consultatio Financial Services."
  ],
  [
    "2021-11-10-python-en-finanzas",
    "2021-11-10",
    144,
    "educacion",
    "Evento junto al Club de Innovación Tecnológica para explorar los usos de Python en finanzas, desde fundamentos del lenguaje hasta trading algorítmico."
  ],
  [
    "2021-11-02-utc-2021",
    "2021-11-02",
    146,
    "competencia",
    "Convocatoria al UTC 2021."
  ],
  [
    "2021-10-04-cedears-pablo-haro",
    "2021-10-04",
    149,
    "educacion",
    "Charla sobre CEDEARs con Pablo Haro, gerente de banca privada en Grupo SBS, para entender cómo invertir en acciones internacionales desde Argentina."
  ],
  [
    "2021-09-10-rentas-fijas-balanz",
    "2021-09-10",
    150,
    "educacion",
    "Evento sobre rentas fijas junto a Balanz Capital con Gonzalo Mendive para entender el instrumento, sus características y cómo operarlo."
  ],
  [
    "2021-09-06-ezequiel-starobinsky",
    "2021-09-06",
    151,
    "educacion",
    "Conversación con Ezequiel Starobinsky, líder de Liebre Capital, sobre comportamiento financiero y toma de decisiones de inversión."
  ],
  [
    "2021-08-31-investment-banking-analyst-experience",
    "2021-08-31",
    153,
    "charla",
    "Investment Banking: The Analyst Experience, con Francisco Cappelletti y Ornella Bottin contando su experiencia como analysts en Lazard."
  ],
  [
    "2021-08-13-criptomonedas-fernando-corvaro",
    "2021-08-13",
    154,
    "educacion",
    "Charla con Fernando Corvaro sobre criptomonedas como new asset class y sobre la disrupción tecnológica en la industria financiera."
  ],
  [
    "2021-08-04-global-investment-research-challenge",
    "2021-08-04",
    155,
    "competencia",
    "Reunión informativa del Global Investment Research Challenge, la competencia global del CFA Institute centrada en research de equity."
  ],
  [
    "2021-07-30-mcgill-portfolio-challenge",
    "2021-07-30",
    156,
    "competencia",
    "Convocatoria al McGill International Portfolio Challenge, con UTDT como primera universidad de América del Sur en participar."
  ],
  [
    "2021-07-29-bancos-cripto-fintech",
    "2021-07-29",
    158,
    "educacion",
    "Evento organizado por la Escuela de Negocios y el MBA para conversar sobre acercamiento entre bancos y criptomonedas, y el rol de las fintech."
  ],
  [
    "2021-06-28-diego-baragano-futuros",
    "2021-06-28",
    159,
    "educacion",
    "Capacitación sobre futuros con Diego Baragaño, Sales Trader de Balanz, para entender el instrumento, el mercado y la cobertura cambiaria."
  ],
  [
    "2021-05-20-portfolio-management-andres-sicouri",
    "2021-05-20",
    160,
    "educacion",
    "Charla sobre portfolio management con Andrés Sicouri para entender cómo se arma una cartera financiera según perfil y objetivos."
  ],
  [
    "2021-05-11-neurociencia-inteligencia-artificial",
    "2021-05-11",
    161,
    "charla",
    "Actividad recomendada sobre neurociencias e inteligencia artificial con Joaquín Navajas y Agustín Gravano."
  ],
  [
    "2021-05-04-valuacion-empresas-mateo-sarsur",
    "2021-05-04",
    162,
    "educacion",
    "Primer evento del año sobre análisis fundamental y valuación de empresas con Mateo Sarsur, Sales Trader de Balanz."
  ],
  [
    "2021-04-12-orlando-chiossone",
    "2021-04-12",
    163,
    "charla",
    "Evento sobre reestructuraciones de deuda con Orlando Chiossone, fundador y Managing Director de BroadSpan Capital."
  ],
  [
    "2020-10-27-desafio-inversiones-eeuu",
    "2020-10-27",
    164,
    "competencia",
    "Desafío para invertir USD 100.000 virtuales en la bolsa de Estados Unidos y competir con alumnos de otras universidades argentinas."
  ],
  [
    "2020-09-28-investment-banking-kick-off",
    "2020-09-28",
    167,
    "educacion",
    "Investment Banking Kick-Off con Julio Fermo como invitado especial para introducir una de las áreas más desafiantes de la industria financiera."
  ]
] as const;

const overrides: Record<string, Override> = {
  "2025-11-18-federico-alcalde-bessia": {
    title: "Trading & Global Markets con Federico Alcalde Bessia",
    speaker: "Federico Alcalde Bessia",
    speakerRole: "Head of Trading & Global Markets",
    company: "Grupo Financiero Galicia",
    location: "UTDT"
  },
  "2025-11-14-paolo-rocca": {
    title: "Conversación con Paolo Rocca",
    speaker: "Paolo Rocca",
    speakerRole: "Presidente",
    company: "Grupo Techint",
    location: "UTDT"
  },
  "2025-11-14-taller-trading-algoritmico": {
    title: "Taller de trading algorítmico desde cero",
    speaker: "Lautaro Trader",
    company: "Club de Finanzas UTDT",
    location: "UTDT"
  },
  "2025-11-11-educacion-financiera-para-todas": {
    title: "Educación Financiera para Todas",
    speaker: "Aini Freile",
    company: "Club de Finanzas UTDT",
    location: "UTDT"
  },
  "2025-11-02-pablo-di-michelis": {
    title: "Oil & Gas y M&A con Vista Energy",
    speaker: "Pablo Di Michelis",
    speakerRole: "Head of M&A and Corporate Finance",
    company: "Vista Energy",
    location: "UTDT"
  },
  "2025-10-27-gabriel-rubinstein": {
    title: "Análisis pre-electoral con Gabriel Rubinstein",
    speaker: "Gabriel Rubinstein",
    speakerRole: "Economista y ex viceministro",
    company: "Ministerio de Economía",
    location: "UTDT"
  },
  "2025-10-23-torneo-pre-electoral-cocos": {
    title: "Torneo de Trading - Edición Pre-Electoral",
    company: "Cocos Capital"
  },
  "2025-10-21-nacho-abuchdid": {
    title: "Encuentro con Nacho Abuchdid",
    speaker: "Nacho Abuchdid",
    speakerRole: "Presidente y fundador",
    company: "Grupo IEB",
    location: "UTDT"
  },
  "2025-10-17-gustavo-grobocopatel": {
    title: "Charla con Gustavo Grobocopatel",
    speaker: "Gustavo Grobocopatel",
    company: "Agro / Los Grobo",
    location: "UTDT"
  },
  "2025-08-29-pierpaolo-barbieri-uala": {
    title: "Pierpaolo Barbieri: Ualá y venture capital",
    speaker: "Pierpaolo Barbieri",
    speakerRole: "CEO y fundador",
    company: "Ualá / 17Sigma",
    location: "Zoom"
  },
  "2025-08-22-alejandro-schuvaks": {
    title: "Charla con Alejandro Schuvaks",
    speaker: "Alejandro Schuvaks",
    speakerRole: "Fundador y socio director",
    company: "ARGIS",
    location: "UTDT"
  },
  "2025-06-10-facundo-gomez-minujin": {
    title: "Charla con Facundo Gómez Minujin",
    speaker: "Facundo Gómez Minujin",
    speakerRole: "CEO",
    company: "J.P. Morgan Argentina",
    location: "UTDT"
  },
  "2025-05-30-jose-luis-daza": {
    title: "José Luis Daza: viceministro de Economía",
    speaker: "José Luis Daza",
    speakerRole: "Viceministro de Economía",
    company: "Ministerio de Economía",
    location: "UTDT"
  },
  "2025-05-10-isela-costantini": {
    title: "El rol de las mujeres en el mundo financiero",
    speaker: "Isela Costantini",
    speakerRole: "CEO",
    company: "GST Grupo Financiero",
    location: "UTDT"
  },
  "2025-05-10-ariel-sbdar": {
    title: "Primera charla del año con Ariel Sbdar",
    speaker: "Ariel Sbdar",
    speakerRole: "CEO",
    company: "Cocos Capital",
    location: "UTDT"
  },
  "2025-03-12-pablo-quirno": {
    title: "Charla con Pablo Quirno",
    speaker: "Pablo Quirno",
    speakerRole: "Secretario de Finanzas",
    company: "República Argentina",
    location: "UTDT"
  },
  "2024-11-11-nicolas-merener": {
    title: "Commodities agrícolas con Nicolás Merener",
    speaker: "Nicolás Merener",
    speakerRole: "Especialista en commodities",
    location: "UTDT"
  },
  "2024-10-28-ignacio-noel": {
    title: "Private Equity con Ignacio Noel",
    speaker: "Ignacio Noel",
    location: "UTDT"
  },
  "2024-10-24-nicolas-dujovne": {
    title: "Charla con Nicolás Dujovne",
    speaker: "Nicolás Dujovne",
    speakerRole: "Ex ministro de Hacienda",
    company: "República Argentina",
    location: "UTDT"
  },
  "2024-10-10-jorge-lonegro": {
    title: "Mercados y sales corporativos con Jorge Lonegro",
    speaker: "Jorge Lonegro",
    speakerRole: "Markets and Corporate Sales Head",
    company: "Citi",
    location: "UTDT"
  },
  "2024-09-30-visita-adcap": {
    company: "Adcap",
    location: "Oficinas de Adcap"
  },
  "2024-09-12-competencia-bymalab": {
    title: "Competencia de inversiones con BYMALAB",
    company: "BYMA / BYMALAB"
  },
  "2024-09-03-diego-pando": {
    title: "Diego Pando: emprender y liderar en Argentina",
    speaker: "Diego Pando",
    speakerRole: "Fundador de Brubank y CEO de Digital House",
    company: "Brubank / Digital House",
    location: "UTDT"
  },
  "2024-06-07-visita-globant": {
    title: "Visita a Globant Tower",
    speaker: "Pablo Ponce, Melissa y Tomás",
    speakerRole: "Recruiting y equipo anfitrión",
    company: "Globant",
    location: "Globant Tower"
  },
  "2024-06-04-alfonso-prat-gay": {
    title: "Charla con Alfonso Prat-Gay",
    speaker: "Alfonso Prat-Gay",
    speakerRole: "Economista y ex ministro",
    company: "República Argentina",
    location: "UTDT"
  },
  "2024-05-30-visita-allaria-bcba": {
    title: "Visita a Allaria y a la Bolsa de Comercio",
    speaker: "Adelmo Gabbi",
    speakerRole: "Presidente de la BCBA",
    company: "Allaria / BCBA",
    location: "Allaria y Bolsa de Comercio"
  },
  "2024-05-23-claudio-zuchovicki": {
    title: "Charla con Claudio Zuchovicki",
    speaker: "Claudio Zuchovicki",
    location: "UTDT"
  },
  "2024-05-21-visita-cocos": {
    title: "Visita a las oficinas de Cocos",
    company: "Cocos Capital",
    location: "Oficinas de Cocos"
  },
  "2024-04-12-martin-redrado": {
    title: "Martín Redrado en UTDT",
    speaker: "Martín Redrado",
    speakerRole: "Expresidente del BCRA",
    company: "Banco Central",
    location: "UTDT"
  },
  "2024-03-25-postales-bausili": {
    title: "Postales de la charla con Santiago Bausili",
    speaker: "Santiago Bausili",
    company: "Banco Central"
  },
  "2024-03-15-santiago-bausili": {
    title: "Primera charla del año con Santiago Bausili",
    speaker: "Santiago Bausili",
    speakerRole: "Presidente del BCRA",
    company: "Banco Central",
    location: "UTDT"
  },
  "2024-03-07-pierpaolo-barbieri": {
    title: "Charla con Pierpaolo Barbieri",
    speaker: "Pierpaolo Barbieri",
    speakerRole: "Fundador",
    company: "Ualá",
    location: "UTDT"
  },
  "2023-10-27-teofilo-lacroze-raizen": {
    title: "Competir y negociar en la industria energética",
    speaker: "Teófilo Lacroze",
    speakerRole: "CEO",
    company: "Raízen",
    location: "UTDT"
  },
  "2023-10-25-ariel-sbdar-innovacion": {
    title: "Innovación en el mercado de capitales argentino",
    speaker: "Ariel Sbdar",
    speakerRole: "Fundador",
    company: "Cocos Capital",
    location: "UTDT"
  },
  "2023-10-02-luis-caputo": {
    title: "Charla con Luis Toto Caputo",
    speaker: "Luis Toto Caputo",
    speakerRole: "Ex presidente del BCRA y ex ministro",
    company: "Anker",
    location: "UTDT"
  },
  "2023-08-22-melina-di-napoli-balanz": {
    title: "Emisiones de ONs con Balanz",
    speaker: "Milena Di Napoli",
    speakerRole: "Speaker invitada",
    company: "Balanz Capital",
    location: "UTDT"
  },
  "2023-08-17-quotes-ramiro-marra": {
    title: "Recap de la charla con Ramiro Marra",
    speaker: "Ramiro Marra",
    company: "La Libertad Avanza"
  },
  "2023-06-09-ramiro-marra": {
    speaker: "Ramiro Marra",
    company: "La Libertad Avanza",
    location: "UTDT"
  },
  "2023-06-02-gabriel-martino": {
    title: "Mensajes clave de la charla con Gabriel Martino",
    speaker: "Gabriel Martino"
  },
  "2023-05-31-gerardo-hsbc": {
    title: "Mano a mano con el ex CEO de HSBC",
    speaker: "Gerardo",
    company: "HSBC",
    location: "UTDT"
  },
  "2023-05-23-isabel-botta": {
    speaker: "Isabel Botta",
    speakerRole: "Head Sales Trader",
    company: "Balanz Capital"
  },
  "2023-04-17-julio-fermo-maria-lopez-isnardi": {
    title: "Cierre del año con Julio Fermo y María Eugenia López Isnardi",
    speaker: "Julio Fermo y María Eugenia López Isnardi",
    company: "Maestría en Finanzas UTDT"
  },
  "2022-11-11-matias-minnini": {
    speaker: "Matías Minnini",
    speakerRole: "Especialista",
    company: "Balanz"
  },
  "2022-10-26-ignacio-hecquet-recap": {
    title: "Recap de la charla con Ignacio Hecquet",
    speaker: "Ignacio Hecquet",
    company: "EY"
  },
  "2022-10-24-caso-nubank-ipo": {
    title: "Caso Nubank y proceso de IPO",
    company: "Nubank",
    location: "UTDT"
  },
  "2022-10-17-university-trading-challenge": {
    company: "University Trading Challenge"
  },
  "2022-10-14-ignacio-hecquet": {
    speaker: "Ignacio Hecquet",
    speakerRole: "Socio",
    company: "EY",
    location: "UTDT"
  },
  "2022-10-12-mcgill-portfolio-challenge": {
    company: "McGill University"
  },
  "2022-08-08-lucas-yatche": {
    title: "Coyuntura macro y estrategias de inversión",
    speaker: "Lucas Yatche"
  },
  "2022-06-05-juan-politi": {
    speaker: "Juan Politi",
    speakerRole: "VP",
    company: "Allaria Ledesma"
  },
  "2022-05-30-primer-evento-presencial-balanz": {
    title: "Primer evento presencial del año con Balanz",
    company: "Balanz"
  },
  "2022-05-12-jp-morgan-careers": {
    title: "Encuentro presencial con J.P. Morgan",
    company: "J.P. Morgan"
  },
  "2022-03-15-emprendedores-ditellianos": {
    title: "Emprendedores ditellianos: Cocos y Glamit",
    speaker: "Ariel Sbdar y Andrés Dorfman",
    company: "Cocos Capital / Glamit"
  },
  "2021-11-19-cristian-lopez-consultatio": {
    title: "Trampa de retorno y gestión del riesgo",
    speaker: "Cristian López",
    speakerRole: "CEO",
    company: "Consultatio Financial Services"
  },
  "2021-11-10-python-en-finanzas": {
    title: "Python en finanzas",
    speaker: "María José Luna"
  },
  "2021-10-04-cedears-pablo-haro": {
    title: "CEDEARs con Pablo Haro",
    speaker: "Pablo Haro",
    speakerRole: "Gerente de banca privada",
    company: "Grupo SBS"
  },
  "2021-09-10-rentas-fijas-balanz": {
    title: "Rentas fijas junto a Balanz",
    speaker: "Gonzalo Mendive",
    speakerRole: "Team Leader",
    company: "Balanz Capital"
  },
  "2021-09-06-ezequiel-starobinsky": {
    title: "Comportamiento financiero y decisiones de inversión",
    speaker: "Ezequiel Starobinsky",
    company: "Liebre Capital"
  },
  "2021-08-31-investment-banking-analyst-experience": {
    speaker: "Francisco Cappelletti y Ornella Bottin",
    company: "Lazard"
  },
  "2021-08-13-criptomonedas-fernando-corvaro": {
    title: "Criptomonedas como asset class",
    speaker: "Fernando Corvaro",
    speakerRole: "Profesor de Asset Management",
    company: "UTDT"
  },
  "2021-08-04-global-investment-research-challenge": {
    title: "Global Investment Research Challenge",
    company: "CFA Institute"
  },
  "2021-07-30-mcgill-portfolio-challenge": {
    title: "McGill International Portfolio Challenge",
    company: "McGill University"
  },
  "2021-06-28-diego-baragano-futuros": {
    title: "Capacitación de futuros con Diego Baragaño",
    speaker: "Diego Baragaño",
    speakerRole: "Sales Trader",
    company: "Balanz"
  },
  "2021-05-20-portfolio-management-andres-sicouri": {
    title: "Portfolio management con Andrés Sicouri",
    speaker: "Andrés Sicouri",
    speakerRole: "Portfolio Manager",
    company: "Zurich Seguros"
  },
  "2021-05-11-neurociencia-inteligencia-artificial": {
    title: "Neurociencia e inteligencia artificial",
    speaker: "Joaquín Navajas y Agustín Gravano",
    company: "UTDT"
  },
  "2021-05-04-valuacion-empresas-mateo-sarsur": {
    title: "Análisis fundamental y valuación de empresas",
    speaker: "Mateo Sarsur",
    speakerRole: "Sales Trader",
    company: "Balanz"
  },
  "2021-04-12-orlando-chiossone": {
    speaker: "Orlando Chiossone",
    speakerRole: "Founder & Managing Director",
    company: "BroadSpan Capital"
  },
  "2020-09-28-investment-banking-kick-off": {
    speaker: "Julio Fermo",
    speakerRole: "Invitado especial",
    company: "Columbus Zuma / UTDT"
  }
};

const companyKeywords: Array<[string, string]> = [
  ["grupo financiero galicia", "Grupo Financiero Galicia"],
  ["banco galicia", "Banco Galicia"],
  ["techint", "Grupo Techint"],
  ["vista energy", "Vista Energy"],
  ["cocos", "Cocos Capital"],
  ["ieb", "Grupo IEB"],
  ["uala", "Ualá"],
  ["17sigma", "17Sigma"],
  ["argis", "ARGIS"],
  ["jpmorgan", "J.P. Morgan Argentina"],
  ["jp morgan", "J.P. Morgan Argentina"],
  ["balanz", "Balanz Capital"],
  ["citi", "Citi"],
  ["adcap", "Adcap"],
  ["byma", "BYMA / BYMALAB"],
  ["globant", "Globant"],
  ["allaria", "Allaria"],
  ["bcba", "Bolsa de Comercio de Buenos Aires"],
  ["banco central", "Banco Central"],
  ["raízen", "Raízen"],
  ["raizen", "Raízen"],
  ["hsbc", "HSBC"],
  ["ey", "EY"],
  ["nubank", "Nubank"],
  ["consultatio", "Consultatio Financial Services"],
  ["sbs", "Grupo SBS"],
  ["lazard", "Lazard"],
  ["zurich", "Zurich Seguros"],
  ["broadspan", "BroadSpan Capital"],
  ["cfa institute", "CFA Institute"],
  ["mcgill", "McGill University"]
];

const titleFromCaption = (caption: string, type: ActivityType, company?: string, speaker?: string) => {
  if (/investment banking kick-off/i.test(caption)) {
    return "Investment Banking Kick-Off";
  }

  if (/mcgill international portfolio challenge/i.test(caption)) {
    return "McGill International Portfolio Challenge";
  }

  if (/global investment research challenge/i.test(caption)) {
    return "Global Investment Research Challenge";
  }

  if (/university trading challenge/i.test(caption)) {
    return "University Trading Challenge";
  }

  if (/educaci[oó]n financiera para todas/i.test(caption)) {
    return "Educación Financiera para Todas";
  }

  const charlaMatch = caption.match(/charla con ([^.]+)/i);
  if (charlaMatch?.[1]) {
    return `Charla con ${cleanEntity(charlaMatch[1])}`;
  }

  const recibimosMatch = caption.match(/recibimos a ([^,.]+)/i);
  if (recibimosMatch?.[1]) {
    return `Encuentro con ${cleanEntity(recibimosMatch[1])}`;
  }

  const tallerMatch = caption.match(/taller de ([^.]+)/i);
  if (tallerMatch?.[1]) {
    return `Taller de ${cleanEntity(tallerMatch[1])}`;
  }

  if (type === "visita" && company) {
    return `Visita a ${company}`;
  }

  if (type === "competencia" && company) {
    return `Competencia con ${company}`;
  }

  if (speaker) {
    return type === "educacion" ? `Sesión con ${speaker}` : `Encuentro con ${speaker}`;
  }

  return caption.slice(0, 72).trim();
};

const cleanEntity = (value: string) =>
  value
    .replace(/@\S+/g, "")
    .replace(/[()]/g, "")
    .replace(/\s+/g, " ")
    .replace(/^el |^la /i, "")
    .trim();

const summarize = (caption: string) => {
  const cleaned = caption
    .replace(/@\S+/g, "")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/0:00\/\s*0:\d+/g, "")
    .replace(/\b(link( de)? (inscripci[oó]n )?en (la )?bio|link in bio)\b/gi, "")
    .replace(/ﬁ/g, "fi")
    .replace(/\s+/g, " ")
    .trim();

  const sentences = cleaned
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  const summary = sentences.slice(0, 2).join(" ");
  return summary.length > 260 ? `${summary.slice(0, 257).trim()}...` : summary;
};

const inferCompany = (caption: string) => {
  const normalized = caption.toLowerCase();
  const match = companyKeywords.find(([keyword]) => normalized.includes(keyword));
  return match?.[1];
};

const inferSpeaker = (caption: string) => {
  const patterns = [
    /charla con ([^.]+)/i,
    /recibimos a ([^,.]+)/i,
    /conversaci[oó]n con ([^,.]+)/i,
    /a cargo de ([^,.]+)/i,
    /invitado especial[: ]+([^,.]+)/i,
    /tendremos de invitados? a ([^.]+)/i,
    /presencia de ([^,.]+)/i
  ];

  for (const pattern of patterns) {
    const match = caption.match(pattern);
    if (match?.[1]) {
      const candidate = cleanEntity(match[1]);
      if (candidate.length > 1) {
        return candidate;
      }
    }
  }

  return undefined;
};

const pageImage = (page: number) => `/images/archive-posts/page-${String(page).padStart(3, "0")}.jpg`;

export const archiveEvents: Activity[] = archiveSeeds.map(([id, date, page, type, caption]) => {
  const override = overrides[id];
  const speaker = override?.speaker ?? inferSpeaker(caption);
  const company = override?.company ?? inferCompany(caption);
  const title = override?.title ?? titleFromCaption(caption, type, company, speaker);
  const gallery = galleryForArchiveEvent(id);

  return {
    id,
    title: bi(title),
    type,
    date,
    description: archiveDescriptionOverrides[id] ?? bi(summarize(caption)),
    speaker,
    speakerRole: override?.speakerRole ? bi(override.speakerRole) : undefined,
    company,
    location: override?.location,
    image: gallery[0] ?? pageImage(page),
    gallery,
    status: "past"
  };
});
