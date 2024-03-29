import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {},
    "index": {
        "overflow-x": "hidden"
    },
    "vacancies": {},
    "vacancies/technology-evangelistdeveloper-advocate": {},
    "vacancies/pr-menedzher": {},
    "vacancies/back-end-razrabotchik-php": {},
    "vacancies/specialist-po-seo-optimizacii-sajtov": {},
    "vacancies/sborka-sajtov-na-konstruktore-sajtov-ukit": {},
    "vacancies/sborshik-sajtov-na-konstruktorah-ucozuweb": {},
    "vacancies/junior-nodejs-razrabotchik": {},
    "vacancies/menedzher-dizajner-shablonov": {},
    "vacancies/specialist-sluzhby-tehnicheskoj-podderzhki": {},
    "vacancies/senior-nodejs-engineer": {},
    "vacancies/programmist-perl": {},
    "vacancies/specialist-sluzhby-tehnicheskoj-podderzhki1": {},
    "vacancies/pr-menedzher1": {},
    "uteam": {},
    "resume": {},
    "contacts": {}
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
