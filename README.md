# Tax Trio – strona internetowa

Statyczna strona biura rachunkowego, zbudowana w [Astro](https://astro.build). Słownik pojęć domenowych znajduje się w [GLOSSARY.md](GLOSSARY.md).

## Uruchomienie

```bash
npm install
npm run dev      # podgląd z odświeżaniem: http://localhost:4321
npm run build    # wynik w dist/
```

## Publikacja

Strona jest publikowana na GitHub Pages: https://domitapps.github.io/tax-trio/
Każdy push na `main` uruchamia workflow `.github/workflows/deploy.yml`, który buduje i wdraża stronę.

Własna domena (np. `taxtrio.pl`): dodaj ją w Settings → Pages → Custom domain, a w workflow ustaw
`SITE: https://taxtrio.pl` i `BASE_PATH: /`.

## Gdzie co zmieniać

- `src/data/site.ts`: kontakt, dane firmy, profile Wspólniczek, usługi, cennik, FAQ.
- `src/components/`: sekcje strony głównej (Hero, Why, Services, Team, Process, Pricing, Faq, Contact).
- `src/styles/global.css`: kolory, czcionki i wspólne style.
- Zdjęcia Wspólniczek wrzuć do `public/team/` i ustaw pole `photo` w `site.ts`.

## Przed publikacją (TODO)

- [ ] Imiona, nazwiska, lata doświadczenia, telefony i zdjęcia Wspólniczek
- [ ] Wspólny telefon biura, forma prawna, NIP, REGON
- [ ] Zatwierdzenie cen przez Wspólniczki (obecne są propozycją)
- [ ] Klucz Web3Forms (`web3formsKey`) wygenerowany dla adresu e-mail biura
- [ ] Domena (roboczo `taxtrio.pl`): zmień ją w `site.ts` oraz w workflow (patrz „Publikacja”)
- [ ] Weryfikacja treści polityki prywatności
- [ ] Profil Firmy w Google (biuro bez adresu, obszar obsługi: Inowrocław i okolice)
