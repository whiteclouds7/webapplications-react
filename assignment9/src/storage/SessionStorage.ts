const LOCALE = "locale";

const setLocale = (locale: string): void => {
    sessionStorage.setItem(LOCALE, locale);
};

const getLocale = (): string => {
    const data = sessionStorage.getItem(LOCALE);
    console.log("data", data);
    return data ? data : navigator.language.split(/[-_]/)[0]; // from: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-intl
}

export {setLocale, getLocale}
