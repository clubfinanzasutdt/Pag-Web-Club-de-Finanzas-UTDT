import enDictionary from "@/lib/dictionaries/en";
import esDictionary from "@/lib/dictionaries/es";
import { Locale } from "@/lib/types";

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

export type Dictionary = DeepStringify<typeof esDictionary>;

// Compile-time structural check: errors if en dictionary is missing keys present in es
const _typeCheck: Dictionary = enDictionary;
void _typeCheck;

export function getDictionary(lang: Locale): Dictionary {
  return lang === "en" ? enDictionary : esDictionary;
}
