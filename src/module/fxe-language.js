import FXE_language_tr from "../data/language_tr.json"
import FXE_language_en from "../data/language_en.json"
import FXE_language_sw from "../data/language_sw.json"
import FXE_language_de from "../data/language_de.json"

export function FXE_language(data) {

    const SwitchLanguage = (lang) => {
        const toCapitalize = (e) => {
            return e.charAt(0).toUpperCase() + e.slice(1);
        }
        if (lang === "tr") {
            return FXE_language_tr[data.toLowerCase()] === undefined ? FXE_language_tr[toCapitalize(data)] === undefined ? data : FXE_language_tr[toCapitalize(data)] : FXE_language_tr[data.toLowerCase()]
        }

        if (lang === "en") {
            return FXE_language_en[data.toLowerCase()] === undefined ? FXE_language_en[toCapitalize(data)] === undefined ? data : FXE_language_en[toCapitalize(data)] : FXE_language_en[data.toLowerCase()]
        }

        if (lang === "de") {
            return FXE_language_de[data.toLowerCase()] === undefined ? FXE_language_de[toCapitalize(data)] === undefined ? data : FXE_language_de[toCapitalize(data)] : FXE_language_de[data.toLowerCase()]
        }

        if (lang === "sw") {
            return FXE_language_sw[data.toLowerCase()] === undefined ? FXE_language_sw[toCapitalize(data)] === undefined ? data : FXE_language_sw[toCapitalize(data)] : FXE_language_sw[data.toLowerCase()]
        }
    }
    return SwitchLanguage("tr");
}