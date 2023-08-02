import FXE_language_tr from "../data/language_tr.json"
import FXE_language_en from "../data/language_en.json"
import FXE_language_sw from "../data/language_sw.json"
import FXE_language_de from "../data/language_de.json"

export function FXE_language(data) {


    const SwitchLanguage = (lang) => {

        if (lang === "tr") {
            return FXE_language_tr[data] === undefined ? data : FXE_language_tr[data]
        }

        if (lang === "en") {
            return FXE_language_en[data] === undefined ? data : FXE_language_en[data]
        }

        if (lang === "de") {
            return FXE_language_de[data] === undefined ? data : FXE_language_de[data]
        }

        if (lang === "sw") {
            return FXE_language_sw[data] === undefined ? data : FXE_language_sw[data]
        }
    }
    return SwitchLanguage("tr");
}