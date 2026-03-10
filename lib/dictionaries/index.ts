import enDictionary from "@/lib/dictionaries/en";
import esDictionary from "@/lib/dictionaries/es";
import { Locale } from "@/lib/types";

// Create a deep writable version of the dictionary type to allow different string values
type DeepWritable<T> = {
  -readonly [P in keyof T]: T[P] extends object ? DeepWritable<T[P]> : T[P] extends string ? string : T[P];
};

export type Dictionary = DeepWritable<typeof esDictionary>;

export function getDictionary(lang: Locale): Dictionary {
  return lang === "en" ? enDictionary : esDictionary;
}
