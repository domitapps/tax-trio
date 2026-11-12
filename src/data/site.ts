// Wszystkie dane, które zmieniają się najczęściej, są w tym jednym pliku.
// Pozycje oznaczone "TODO" trzeba uzupełnić przed publikacją.

export const site = {
  name: 'Tax Trio',
  fullName: 'Tax Trio – Biuro Rachunkowe',
  city: 'Inowrocław',
  url: 'https://taxtrio.pl',
  email: 'kontakt@taxtrio.pl',
  phone: '+48 600 000 000', // TODO: wspólny numer biura
  hours: 'pon.–pt. 8:00–16:00',
  company: {
    legalName: 'Tax Trio s.c.', // TODO: potwierdzić formę prawną
    nip: 'TODO',
    regon: 'TODO',
  },
  // Klucz dostępu Web3Forms (https://web3forms.com) — TODO: wygenerować dla kontakt@taxtrio.pl
  web3formsKey: 'TODO-WEB3FORMS-ACCESS-KEY',
  serviceArea: [
    'Inowrocław',
    'Kruszwica',
    'Gniewkowo',
    'Janikowo',
    'Pakość',
    'Bydgoszcz',
    'Toruń',
  ],
};

export type Partner = {
  name: string;
  role: string;
  experience: string;
  bio: string;
  phone: string;
  photo?: string; // ścieżka w /public, np. '/team/anna.jpg'
};

export const partners: Partner[] = [
  {
    name: 'Imię Nazwisko', // TODO
    role: 'Pełna księgowość',
    experience: 'TODO lat doświadczenia',
    bio: 'Księgi rachunkowe spółek, sprawozdania finansowe, rozliczenia CIT i VAT.',
    phone: '+48 600 000 001', // TODO
  },
  {
    name: 'Imię Nazwisko', // TODO
    role: 'Pełna księgowość',
    experience: 'TODO lat doświadczenia',
    bio: 'Księgi rachunkowe, KPiR i ryczałt, reprezentacja przed urzędem skarbowym.',
    phone: '+48 600 000 002', // TODO
  },
  {
    name: 'Imię Nazwisko', // TODO
    role: 'Kadry i płace',
    experience: 'TODO lat doświadczenia',
    bio: 'Umowy, listy płac, rozliczenia ZUS i PIT pracowników, dokumentacja kadrowa.',
    phone: '+48 600 000 003', // TODO
  },
];

export const services = [
  {
    title: 'Pełna księgowość',
    text: 'Księgi rachunkowe spółek z o.o. i firm, które przekroczyły limit KPiR. Sprawozdania finansowe, CIT, VAT, JPK. Nasza główna specjalizacja.',
    featured: true,
  },
  {
    title: 'KPiR',
    text: 'Podatkowa księga przychodów i rozchodów dla jednoosobowych działalności. PIT, VAT, JPK, środki trwałe.',
  },
  {
    title: 'Ryczałt',
    text: 'Ewidencja przychodów, wybór właściwej stawki ryczałtu, deklaracje i rozliczenie roczne.',
  },
  {
    title: 'Kadry i płace',
    text: 'Umowy o pracę i cywilnoprawne, listy płac, urlopy, zwolnienia, PIT-11, dokumentacja pracownicza.',
  },
  {
    title: 'Rozliczenia ZUS',
    text: 'Deklaracje i składki właściciela oraz pracowników, zgłoszenia, korekty, wnioski o ulgi.',
  },
  {
    title: 'Reprezentacja przed urzędami',
    text: 'Na podstawie pełnomocnictwa występujemy w Państwa imieniu przed urzędem skarbowym i ZUS.',
  },
  {
    title: 'Obsługa administracyjna',
    text: 'Przygotowanie i realizacja przelewów (podatki, ZUS, kontrahenci) oraz pilnowanie terminów płatności.',
  },
  {
    title: 'PIT roczny',
    text: 'Sezonowo rozliczamy zeznania roczne osób prywatnych: ulgi, wspólne rozliczenie, przychody z zagranicy.',
  },
];

// TODO: ceny do zatwierdzenia przez Wspólniczki przed publikacją.
export const pricing = [
  { service: 'Ryczałt', price: 'od 250 zł', unit: 'netto / mies.' },
  { service: 'KPiR', price: 'od 350 zł', unit: 'netto / mies.' },
  { service: 'Pełna księgowość', price: 'od 1 000 zł', unit: 'netto / mies.', featured: true },
  { service: 'Kadry i płace', price: 'od 70 zł', unit: 'netto / pracownik / mies.' },
  { service: 'PIT roczny (osoba prywatna)', price: 'od 120 zł', unit: 'brutto' },
  { service: 'Obsługa administracyjna', price: 'wycena', unit: 'indywidualna' },
];

export const faq = [
  {
    q: 'Jak przekazuję dokumenty, skoro nie macie biura stacjonarnego?',
    a: 'Najwygodniej e-mailem: skan lub zdjęcie z telefonu wystarczy. Jeśli wolą Państwo papier, przy wizycie odbierzemy dokumenty osobiście.',
  },
  {
    q: 'Czy dojeżdżacie do klienta?',
    a: `Tak. Na terenie Inowrocławia i okolic (m.in. Kruszwica, Gniewkowo, Janikowo, Pakość, Bydgoszcz, Toruń) przyjedziemy do Państwa siedziby. Firmy z dalszych miejscowości obsługujemy w pełni zdalnie.`,
  },
  {
    q: 'Z kim będę współpracować?',
    a: 'Z trzema właścicielkami biura. Nie zatrudniamy pracowników. Państwa firmę znają wszystkie trzy, więc dzwonią Państwo do której chcą i zawsze rozmawiają z kimś, kto zna sprawę.',
  },
  {
    q: 'Co się stanie, gdy jedna z Was będzie na urlopie lub zachoruje?',
    a: 'Nic złego. Pracujemy wspólnie nad każdym klientem, więc pozostałe dwie Wspólniczki znają Państwa sprawy i pilnują terminów.',
  },
  {
    q: 'Czy mogę zmienić biuro rachunkowe w trakcie roku?',
    a: 'Tak. Pomożemy przejąć dokumentację od poprzedniego biura i sprawdzimy, czy dotychczasowe rozliczenia są poprawne, zanim przejmiemy księgowość.',
  },
  {
    q: 'Jak liczona jest cena?',
    a: 'Zależy przede wszystkim od formy księgowości, liczby dokumentów w miesiącu i liczby pracowników. Ceny w cenniku to dolne granice. Dokładną wycenę przygotujemy po krótkiej rozmowie lub na podstawie formularza.',
  },
  {
    q: 'Co jeśli urząd skarbowy lub ZUS wezwie mnie do wyjaśnień?',
    a: 'Na podstawie pełnomocnictwa możemy reprezentować Państwa przed urzędem: przygotujemy odpowiedź, wyjaśnienia i potrzebne dokumenty.',
  },
  {
    q: 'Jak dbacie o to, żeby nie było błędów?',
    a: 'Każdą deklarację i każde zamknięcie miesiąca sprawdza druga Wspólniczka przed wysłaniem. Dwie pary oczu to nasza stała zasada, a nie wyjątek.',
  },
];
