import enDictionary from "@/lib/dictionaries/en";
import esDictionary from "@/lib/dictionaries/es";
import { Locale } from "@/lib/types";

export type Dictionary = typeof esDictionary;

export function getDictionary(lang: Locale): Dictionary {
  return lang === "en" ? enDictionary : esDictionary;
}
