import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const availableLocales = ["en", "fr"];
export const defaultLocale = "fr";

export const getPreferredLocale = (request) => {
  const headers = { "accept-language": request.headers.get("accept-language") };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, availableLocales, defaultLocale);
};
