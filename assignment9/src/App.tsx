import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavigationBar from "./components/NavigationBar";
import Numbers from "./sites/Numbers";
import Text from "./sites/Text";
import Date from "./sites/Date";
import {IntlProvider} from "react-intl";
import {getLocale, setLocale} from "./storage/SessionStorage";

const messages = {
    en: {
        cake_eaten: "I ate {itemCount, plural, =0 {no cake 😔} one {one cake 😃} other {{itemCount} cakes 🤗}}.",
        cake_baked: "{gender, select, male {He} female {She} other {They}} baked a cake today."
    },
    de: {
        cake_eaten: "Ich habe heute {itemCount, plural, =0 {keinen Kuchen 😔} one {einen Kuchen 😃} other {{itemCount} Kuchen 🤗}} gegessen.",
        cake_baked: "{gender, select, male {Er hat} female {Sie hat} other {Sie haben}} heute einen Kuchen gebacken."
    },
    fr: {
        cake_eaten: "{itemCount, plural, =0 {Je n'ai pas mangé de gâtau 😔} one {J'ai mangé un gateau 😃} other {J'ai mangé {itemCount} gâteaux 🤗}} aujourd'hui.",
        cake_baked: "{gender, select, male {Il a} female {Elle a } other {Vous avez}} fait un gâteau aujourd'hui."
    }
};

const App = (): JSX.Element => {
    const [language, setLanguage] = useState(getLocale);
    const navigationItems = [
        {
            label: "Numbers",
            to: "/numbers"
        },
        {
            label: "Date",
            to: "/date"

        },
        {
            label: "Text",
            to: "/text"

        },
    ];

    const handleLanguageChance = (locale: string): void => {
        setLanguage(locale);
        setLocale(locale);
    }

    const localeMessage = language === "de" ? messages.de : language === "fr" ? messages.fr : messages.en;
    return (
    <>
      <Router>
          <NavigationBar tabs={navigationItems} handleLocalChance={handleLanguageChance}/>
          <Switch>
              <IntlProvider locale={language} messages={localeMessage}>
              <Route path="/numbers">
                  <Numbers/>
              </Route>
              <Route path="/date">
                  <Date/>
              </Route>
              <Route path="/text">
                  <Text/>
              </Route>
              </IntlProvider>
          </Switch>
      </Router>
    </>
  );
};

export default App;
