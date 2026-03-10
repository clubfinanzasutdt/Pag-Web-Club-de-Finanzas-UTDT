import "server-only";

import fs from "node:fs";
import path from "node:path";

const postsRoot = path.join(process.cwd(), "posts");
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const eventToStem: Record<string, string> = {
  "2025-11-18-federico-alcalde-bessia": "FedericoAlcaldeBessia-Galicia",
  "2025-11-14-paolo-rocca": "PaoloRocca-Techint",
  "2025-11-14-taller-trading-algoritmico": "Taller-TradingAlgoritmico-Lautaro",
  "2025-11-11-educacion-financiera-para-todas": "EducacionFinancieraParaTodas",
  "2025-11-02-pablo-di-michelis": "PabloMichelis-VistaEnergy",
  "2025-10-27-gabriel-rubinstein": "GabrielRubinstein-ViceMinEconomia",
  "2025-10-23-torneo-pre-electoral-cocos": "Torneo-Trading-PreElectoral",
  "2025-10-21-nacho-abuchdid": "NachoAbuchdid-IEB",
  "2025-10-17-gustavo-grobocopatel": "GustavoGrobocopatel",
  "2025-08-29-pierpaolo-barbieri-uala": "PierpaoloBarbieriUala",
  "2025-08-22-alejandro-schuvaks": "AlejandroSchuvaks-ARGIS",
  "2025-08-06-educacion-financiera-para-todas-edicion-especial": "EducacionFinancieraParaTodas",
  "2025-06-10-facundo-gomez-minujin": "FacundoGomezMinujin-JPMorgan",
  "2025-05-30-jose-luis-daza": "JoseLuisDaza-ViceMinEconomia",
  "2025-05-10-isela-costantini": "IselaCostantini-GST",
  "2025-05-10-ariel-sbdar": "ArielSbdar2025",
  "2025-03-12-pablo-quirno": "PabloQuirno-SecFinanzas",
  "2024-11-11-nicolas-merener": "NicolasMerener-Commodities",
  "2024-11-08-modulos-mercado-de-capitales": "ModulosMercadoCapitales",
  "2024-10-28-ignacio-noel": "IgnacioNoel-PE",
  "2024-10-24-nicolas-dujovne": "NicolasDujovne",
  "2024-10-10-jorge-lonegro": "JorgeLonegro-Citi",
  "2024-09-30-visita-adcap": "Visita-AdCap",
  "2024-09-12-competencia-bymalab": "Competencia-BYMALAB",
  "2024-09-03-diego-pando": "DiegoPando-Brubank",
  "2024-06-07-visita-globant": "Visita-Globant",
  "2024-06-04-alfonso-prat-gay": "AlfonsoPratGay",
  "2024-05-30-visita-allaria-bcba": "Visita-Allaria-AdelmoGabbi-BCBA",
  "2024-05-23-claudio-zuchovicki": "ClaudioZuchovicki",
  "2024-05-21-visita-cocos": "Visita-CocosCap",
  "2024-04-12-martin-redrado": "MartinRedrado",
  "2024-03-25-postales-bausili": "SantiagoBausili-BCRA_recap",
  "2024-03-15-santiago-bausili": "SantiagoBausili-BCRA",
  "2024-03-07-pierpaolo-barbieri": "PierpaoloBarbieri",
  "2023-10-27-teofilo-lacroze-raizen": "TeofiloLacroze-Shell",
  "2023-10-25-ariel-sbdar-innovacion": "ArielSbdar-CocosCap",
  "2023-10-02-luis-caputo": "LuisCaputo-Toto",
  "2023-08-22-melina-di-napoli-balanz": "MilenaDiNapoli-Balanz",
  "2023-06-09-ramiro-marra": "RamiroMarra",
  "2023-05-31-gerardo-hsbc": "GabrielMartino-HSBC",
  "2022-11-16-cierre-de-ano": "JulioFermo-LopezIsnardi",
  "2022-11-11-matias-minnini": "Taller-MatiasMinnini-Balanz",
  "2022-10-24-caso-nubank-ipo": "Nubank-IPO",
  "2022-10-17-university-trading-challenge": "UTC2022",
  "2022-10-14-ignacio-hecquet": "IgnacioHecquet-EY-MA",
  "2022-10-12-mcgill-portfolio-challenge": "McGill-Challenge",
  "2022-08-11-startups-episodio-4": "Bootcamp-Startups-Cap4-Legal",
  "2022-06-21-ciclo-venture-capital": "Bootcamp-Startups-EarlyStage",
  "2022-05-12-jp-morgan-careers": "JPMorgan",
  "2021-11-10-python-en-finanzas": "Taller-Python-Balanz",
  "2021-11-02-utc-2021": "UTC2021",
  "2021-07-29-bancos-cripto-fintech": "Panel-Bancos-Fintechs-Crypto",
  "2020-10-27-desafio-inversiones-eeuu": "UTC"
};

const mediaUrl = (absolutePath: string) => {
  const relativePath = path.relative(postsRoot, absolutePath);
  const slug = relativePath.split(path.sep).map(encodeURIComponent).join("/");
  return `/post-media/${slug}`;
};

const stemIndex = (() => {
  const index: Record<string, string[]> = {};

  if (!fs.existsSync(postsRoot)) {
    return index;
  }

  for (const directory of fs.readdirSync(postsRoot)) {
    const fullDirectory = path.join(postsRoot, directory);
    if (!fs.statSync(fullDirectory).isDirectory()) {
      continue;
    }

    for (const fileName of fs.readdirSync(fullDirectory)) {
      const extension = path.extname(fileName).toLowerCase();
      if (!imageExtensions.has(extension)) {
        continue;
      }

      const stem = path.basename(fileName, extension).replace(/_\d+$/, "");
      const absolutePath = path.join(fullDirectory, fileName);
      index[stem] ??= [];
      index[stem].push(absolutePath);
    }
  }

  for (const stem of Object.keys(index)) {
    index[stem].sort((left, right) => {
      const leftMatch = left.match(/_(\d+)\.[^.]+$/);
      const rightMatch = right.match(/_(\d+)\.[^.]+$/);
      return Number(leftMatch?.[1] ?? 0) - Number(rightMatch?.[1] ?? 0);
    });
  }

  return index;
})();

export const galleryForArchiveEvent = (eventId: string) => {
  const stem = eventToStem[eventId];
  if (!stem) {
    return [];
  }

  return (stemIndex[stem] ?? []).map(mediaUrl);
};
