// components/landing/Testimonials.tsx
'use client';

import Image from 'next/image';
import { Container } from './Container';
import { useTranslation } from '../i18n/useTranslation'; // Import the custom translation hook

const testimonials = [
    [
        {
            content:
            'Najlepsze lekcje z języka angielskiego…\n' +
                'Najlepsze lekcje z języka angielskiego jakie miałam, a próbowałam wielokrotnie u niejednego nauczyciela. W bardzo krótkim czasie otworzyłam się na mowę angielską i teraz już bez obaw rozmawiam będąc za granicą. Joel naprawdę bardzo się stara, aby nauczyć mnie jak najwięcej, ma świetne pomysły i jest zawsze doskonale przygotowany do naszej lekcji, chyba nawet bardziej niż ja sama. Naprawdę nie zawiedziesz się podejmując naukę w tej szkole, polecam z całego serca.',
            author: {
                name: 'Wioletta Ozgowicz',
                image: '/reviews/wj.png',
                rating: 5,
            },
        },
        {
            content:
            'Polecam serdecznie. Moja córeczka uczy się języka angielskiego poprzez luźną rozmowę. Bardzo dobry kontakt nauczyciela z dzieckiem. Przez kilka zajęć nauczyła się więcej niż jednego semestru w szkole👌',
            author: {
                name: 'Jasienki',
                image: '/reviews/jj.png',
                rating: 5,
            },
        },
    ],
    [
        {
            content:
            'Jeżeli jesteś zainteresowany poprawą umiejętności prowadzenia konwersacji tak jak ja, jeżeli Twoje dotychczasowe lekcje były oparte na ćwiczeniówkach i nie czujesz się nadal na siłach, aby rozmawiać po angielsku to koniecznie wybierz tą szkołę. Efekty przyjdą szybko jak u mnie. Joel to profesjonalny native speaker. Polecam.',
            author: {
                name: 'Wojciech Ozgowicz',
                image: '/reviews/woj.png',
                rating: 5,
            },
        },
        {
            content:
            'Polecam! Indywidualne podejście w tej szkole urzekło mnie najbardziej. Bez porównania z zajęciami prowadzonymi przez osoby, dla których angielski nie jest językiem ojczystym. Tutaj nie ma szkolnych regułek, tylko rozmowy w takim angielskim, z którym spotykamy się za granicą. Możliwość osłuchania się z językiem jest bezcenna.',
            author: {
                name: 'Michalina Kulpa',
                image: '/reviews/kul.png',
                rating: 5,
            },
        },
    ],
    [
        {
            content: 'Super poziom. Świetne podejście do ucznia. Można się bardzo dużo nauczyć. Serdecznie polecam.',
            author: {
                name: 'Nati Natrog',
                image: '/reviews/nati.png',
                rating: 5,
            },
        },
        {
            content:
            'Jeśli ktoś chce naprawdę nauczyć się mówić po angielsku to polecam.\n' +
                'Nauczyciel  dostosowuje się do pozimou i do tego co chcemy osiągnąć. Wykazuje duże zaangażowanie i pokazuje gdzie robimy błąd i poprawia jest to bardzo dobre dla ludzi którzy chcą poprostu komunikować się w języku angielskim jak i dla tych którzy chcą mówić perfekcyjnie.',
            author: {
                name: 'Pan Frumencik',
                image: '/reviews/pan.png',
                rating: 5,
            },
        },
    ],
];

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg aria-hidden="true" width={105} height={78} {...props}>
            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
        </svg>
    );
}

function Stars({ rating }: { rating: number }) {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.54 4.737a1 1 0 00.95.69h4.964c.969 0 1.371 1.24.588 1.81l-4.02 2.923a1 1 0 00-.364 1.118l1.54 4.737c.3.921-.755 1.688-1.54 1.118l-4.02-2.923a1 1 0 00-1.176 0l-4.02 2.923c-.784.57-1.838-.197-1.54-1.118l1.54-4.737a1 1 0 00-.364-1.118L2.42 10.164c-.783-.57-.38-1.81.588-1.81h4.964a1 1 0 00.95-.69l1.54-4.737z" />
                </svg>
            ))}
        </div>
    );
}

export function Testimonials() {
    const { t } = useTranslation(); // Use the translation hook

    return (
        <section
            id="testimonials"
            aria-label={t('testimonials.ariaLabel')} // Translated ARIA label
            className="bg-slate-50 py-20 sm:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl md:text-center">
                    <h2 className="font-display text-center text-3xl tracking-tight text-slate-900 sm:text-4xl">
                        {t('testimonials.title')}
                    </h2>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
                >
                    {testimonials.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                {column.map((testimonial, testimonialIndex) => (
                                    <li key={testimonialIndex}>
                                        <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                            <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                                            <blockquote className="relative">
                                                <p className="text-lg tracking-tight text-slate-900">
                                                    {testimonial.content}
                                                </p>
                                            </blockquote>
                                            <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                                <div className="flex items-center">
                                                    <Image
                                                        src={testimonial.author.image}
                                                        alt={testimonial.author.name}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full"
                                                    />
                                                    <div className="ml-4">
                                                        <div className="font-display text-base text-slate-900">
                                                            {testimonial.author.name}
                                                        </div>
                                                        <Stars rating={testimonial.author.rating} />
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <div className="mt-20 text-center">
                    <h3 className="font-display text-2xl mb-4 tracking-tight text-slate-900 sm:text-3xl">
                        {t('testimonials.addYourReview')}
                    </h3>
                    <a
                        href="https://g.page/r/CctDrxcDBMfKEAE/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                    >
                        {t('testimonials.reviewOnGoogle')}
                    </a>
                </div>
            </Container>
        </section>
    );
}
