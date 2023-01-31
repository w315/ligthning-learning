//import { has } from "browser-sync";
import * as vovaFunctions from "./modules/functions.js";

vovaFunctions.isWebp();

const burger = document?.querySelector('[data-burger]');
const lineF = document?.querySelector('[data-line-f]');
const lineS = document?.querySelector('[data-line-s]');
const lineT = document?.querySelector('[data-line-t]');
const nav = document?.querySelector('[data-nav]');
const link1 = document?.querySelector('[data-link-1]');
const link2 = document?.querySelector('[data-link-2]');
const link3 = document?.querySelector('[data-link-3]');
const link4 = document?.querySelector('[data-link-4]');
const link5 = document?.querySelector('[data-link-5]');

const select = document?.querySelector('.topbar__select');
const allLang = ['en', 'ua']


burger?.addEventListener('click', () => {
	lineF?.classList.toggle('burger--active');
	lineS?.classList.toggle('burger--active');
	lineT?.classList.toggle('burger--active');
	nav?.classList.toggle('nav--visible');
});

link1?.addEventListener('click', () => {
	nav?.classList.remove('nav--visible');
	lineF?.classList.remove('burger--active');
	lineS?.classList.remove('burger--active');
	lineT?.classList.remove('burger--active');
});
link2?.addEventListener('click', () => {
	nav?.classList.remove('nav--visible');
	lineF?.classList.remove('burger--active');
	lineS?.classList.remove('burger--active');
	lineT?.classList.remove('burger--active');
});
link3?.addEventListener('click', () => {
	nav?.classList.remove('nav--visible');
	lineF?.classList.remove('burger--active');
	lineS?.classList.remove('burger--active');
	lineT?.classList.remove('burger--active');
});
link4?.addEventListener('click', () => {
	nav?.classList.remove('nav--visible');
	lineF?.classList.remove('burger--active');
	lineS?.classList.remove('burger--active');
	lineT?.classList.remove('burger--active');
});
link5?.addEventListener('click', () => {
	nav?.classList.remove('nav--visible');
	lineF?.classList.remove('burger--active');
	lineS?.classList.remove('burger--active');
	lineT?.classList.remove('burger--active');
});

const langArr = {
	"title": {
		"en": "Ligthning learning",
		"ua": "Блискавичне навчання",
	},
	"a-1": {
		"en": "About lessons",
		"ua": "Про заняття",
	},
	"a-2": {
		"en": "How to start",
		"ua": "Як почати",
	},
	"a-3": {
		"en": "Courses",
		"ua": "Курси",
	},
	"a-4": {
		"en": "Teachers",
		"ua": "Наші вчителі",
	},
	"a-5": {
		"en": "Registration",
		"ua": "Реєстрація",
	},
	"title-hero": {
		"en": "LEARN SPANISH FAST",
		"ua": "ШВИДКО ВИВЧАЙТЕ ІСПАНСЬКУ",
	},
	"text-hero": {
		"en": "Enjoy 1-on-1, online Spanish lessons tailored to your level & goals. See rapid results with the help of an experienced, native tutor.",
		"ua": "Насолоджуйтесь індивідуальними онлайн-уроками іспанської мови, адаптованими до вашого рівня та цілей. Побачте швидкі результати за допомогою досвідченого репетитора з рідною мовою.",
	},
	"btn-hero": {
		"en": "Book Free Taster Session",
		"ua": "Замовте безкоштовну сесію",
	},
	"class-title": {
		"en": "how are classes going",
		"ua": "як проходять заняття",
	},
	"class-title-1": {
		"en": "one on one",
		"ua": "один на один",
	},
	"class-title-2": {
		"en": "50 minutes",
		"ua": "50 хвилин",
	},
	"class-title-3": {
		"en": "2-3 per week",
		"ua": "2-3 рази на тиждень",
	},
	"class-title-4": {
		"en": "Teacher",
		"ua": "Добрий викладач",
	},
	"class-title-5": {
		"en": "25 dollars",
		"ua": "25 доларів",
	},
	"class-text-1": {
		"en": "lessons with a teacher",
		"ua": "заняття зі вчителем",
	},
	"class-text-2": {
		"en": "lesson duration",
		"ua": "тривалість уроку",
	},
	"class-text-3": {
		"en": "recommended intensity",
		"ua": "рекомендована інтенсивність",
	},
	"class-text-4": {
		"en": "local or native speaker",
		"ua": "місцевий або носій мови",
	},
	"class-text-5": {
		"en": "initial cost of the class",
		"ua": "початкова вартість заняття",
	},
	"start-title": {
		"en": "How to start learning Spanish",
		"ua": "Як почати вивчати іспанську мову",
	},
	"start-item-title-1": {
		"en": "1. Find your ideal tutor",
		"ua": "1. Оберіть ліпшого репетитора",
	},
	"start-item-title-2": {
		"en": "2. Book a 30-minute trial session",
		"ua": "2. Замовте пробну сесію",
	},
	"start-item-title-3": {
		"en": "3. Enjoy personalised lessons",
		"ua": "3. Насолоджуйтеся індивідуальними уроками",
	},
	"start-item-text-1": {
		"en": "Make an informed choice based on tutors' videos, availability, reviews and pricing.",
		"ua": "Зробіть усвідомлений вибір на основі відео репетиторів, наявності, відгуків і цін.",
	},
	"start-item-text-2": {
		"en": "Meet a tutor via video call to discuss your needs and get a feel for learning online.",
		"ua": "Зустріньтеся з репетитором за допомогою відеодзвінка, щоб обговорити ваші потреби та відчути, як навчатися онлайн.",
	},
	"start-item-text-3": {
		"en": "If the tutor is a good fit, start taking online Spanish lessons tailored to your needs,interests and level.",
		"ua": "Якщо репетитор вам підходить, почніть брати онлайн-уроки іспанської мови відповідно до ваших потреб, інтересів і рівня.",
	},
	"start-btn": {
		"en": "Take a taster session",
		"ua": "Пройдіть пробне заняття",
	},
	"groups-title": {
		"en": "recruitment to online groups",
		"ua": "набір в онлайн групи",
	},
	"groups-schedule-item-1": {
		"en": "mon 18:15 - 19:05",
		"ua": "пн 18:15 - 19:05",
	},
	"groups-schedule-item-2": {
		"en": "Tue 19:15 - 20:05",
		"ua": "Вт 19:15 - 20:05",
	},
	"groups-schedule-item-3": {
		"en": "Thu 18:15 - 19:05",
		"ua": "Чт 18:15 - 19:05",
	},
	"groups-schedule-item-4": {
		"en": "mon 10:15 - 11:05",
		"ua": "пн 10:15 - 11:05",
	},
	"groups-schedule-item-5": {
		"en": "Tue 12:15 - 13:05",
		"ua": "Вт 12:15 - 13:05",
	},
	"groups-schedule-item-6": {
		"en": "Thu 14:15 - 15:05",
		"ua": "Чт 14:15 - 15:05",
	},
	"groups-schedule-item-7": {
		"en": "mon 16:15 - 18:05",
		"ua": "пн 16:15 - 18:05",
	},
	"groups-schedule-item-8": {
		"en": "Tue 11:15 - 12:05",
		"ua": "Вт 11:15 - 12:05",
	},
	"groups-schedule-item-9": {
		"en": "Thu 13:15 - 14:05",
		"ua": "Чт 13:15 - 14:05",
	},
	"groups-item-title-1": {
		"en": "Basic",
		"ua": "Базовий",
	},
	"groups-item-title-2": {
		"en": "advanced",
		"ua": "розширений",
	},
	"groups-item-title-3": {
		"en": "intensive (advanced)",
		"ua": "інтенсивний",
	},
	"groups-info-text-start-1": {
		"en": "Start",
		"ua": "Старт",
	},
	"groups-info-text-start-2": {
		"en": "Start",
		"ua": "Старт",
	},
	"groups-info-text-start-3": {
		"en": "Start",
		"ua": "Старт",
	},
	"groups-info-text-duration-1": {
		"en": "Duration",
		"ua": "Тривалість",
	},
	"groups-info-text-duration-2": {
		"en": "Duration",
		"ua": "Тривалість",
	},
	"groups-info-text-duration-3": {
		"en": "Duration",
		"ua": "Тривалість",
	},
	"groups-info-text-months-1": {
		"en": "2 months",
		"ua": "2 місяці",
	},
	"groups-info-text-months-2": {
		"en": "4 months",
		"ua": "4 місяці",
	},
	"groups-info-text-months-3": {
		"en": "3 months",
		"ua": "3 місяці",
	},
	"groups-info-text-cost-1": {
		"en": "Cost",
		"ua": "Ціна",
	},
	"groups-info-text-cost-2": {
		"en": "Cost",
		"ua": "Ціна",
	},
	"groups-info-text-cost-3": {
		"en": "Cost",
		"ua": "Ціна",
	},
	"teachers-title": {
		"en": "our teachers",
		"ua": "Наші викладачі",
	},
	"teachers-description-1": {
		"en": "Founder of the course",
		"ua": "Засновниця курсу",
	},
	"teachers-description-2": {
		"en": "a top tutor",
		"ua": "Найкращій вчитель",
	},
	"teachers-description-3": {
		"en": "Bachelor of Philology",
		"ua": "Бакалавр філології",
	},
	"sing-title": {
		"en": "Sign up for the course",
		"ua": "Запишіться на курс",
	},
	"sing-option-1": {
		"en": "--Choose the course for you!--",
		"ua": "--Обирайте курс для себе!--",
	},
	"sing-option-2": {
		"en": "Basic",
		"ua": "Базовий",
	},
	"sing-option-3": {
		"en": "Advanced",
		"ua": "Розширений",
	},
	"sing-option-4": {
		"en": "Intensive(advanced)",
		"ua": "інтенсивний",
	},
	"sing-btn": {
		"en": "submit",
		"ua": "подати",
	},
	"footer-contat": {
		"en": "contact us",
		"ua": "зв'яжіться з нами",
	},
	"footer-payment": {
		"en": "payment",
		"ua": "оплата",
	},
	"footer-offer": {
		"en": "Public offer of Spain",
		"ua": "Публічна оферта Укріїни",
	},
	"footer-policy": {
		"en": "Privacy Policy",
		"ua": "Політика конфіденційності",
	},
};

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
	let lang = select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function changeLanguage() {
	let hash = window.location.hash
	hash = hash.substr(1);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	select.value = hash;
	document.querySelector('title').innerHTML = langArr['title'][hash];
	document.querySelector('.lang-title-hero').innerHTML = langArr["title-hero"][hash];
	document.querySelector('.lang-a-1').innerHTML = langArr["a-1"][hash];
	document.querySelector('.lang-a-2').innerHTML = langArr["a-2"][hash];
	document.querySelector('.lang-a-3').innerHTML = langArr["a-3"][hash];
	document.querySelector('.lang-a-4').innerHTML = langArr["a-4"][hash];
	document.querySelector('.lang-a-5').innerHTML = langArr["a-5"][hash];
	document.querySelector('.lang-text-hero').innerHTML = langArr["text-hero"][hash];
	document.querySelector('.lang-btn-hero').innerHTML = langArr["btn-hero"][hash];
	document.querySelector('.lang-class-title').innerHTML = langArr["class-title"][hash];
	document.querySelector('.lang-class-title-1').innerHTML = langArr["class-title-1"][hash];
	document.querySelector('.lang-class-title-2').innerHTML = langArr["class-title-2"][hash];
	document.querySelector('.lang-class-title-3').innerHTML = langArr["class-title-3"][hash];
	document.querySelector('.lang-class-title-4').innerHTML = langArr["class-title-4"][hash];
	document.querySelector('.lang-class-title-5').innerHTML = langArr["class-title-5"][hash];
	document.querySelector('.lang-class-text-1').innerHTML = langArr["class-text-1"][hash];
	document.querySelector('.lang-class-text-2').innerHTML = langArr["class-text-2"][hash];
	document.querySelector('.lang-class-text-3').innerHTML = langArr["class-text-3"][hash];
	document.querySelector('.lang-class-text-4').innerHTML = langArr["class-text-4"][hash];
	document.querySelector('.lang-class-text-5').innerHTML = langArr["class-text-5"][hash];
	document.querySelector('.lang-start-title').innerHTML = langArr["start-title"][hash];
	document.querySelector('.lang-start-item-title-1').innerHTML = langArr["start-item-title-1"][hash];
	document.querySelector('.lang-start-item-title-2').innerHTML = langArr["start-item-title-2"][hash];
	document.querySelector('.lang-start-item-title-3').innerHTML = langArr["start-item-title-3"][hash];
	document.querySelector('.lang-start-item-text-1').innerHTML = langArr["start-item-text-1"][hash];
	document.querySelector('.lang-start-item-text-2').innerHTML = langArr["start-item-text-2"][hash];
	document.querySelector('.lang-start-item-text-3').innerHTML = langArr["start-item-text-3"][hash];
	document.querySelector('.lang-start-btn').innerHTML = langArr["start-btn"][hash];
	document.querySelector('.lang-groups-title').innerHTML = langArr["groups-title"][hash];
	document.querySelector('.lang-groups-schedule-item-1').innerHTML = langArr["groups-schedule-item-1"][hash];
	document.querySelector('.lang-groups-schedule-item-2').innerHTML = langArr["groups-schedule-item-2"][hash];
	document.querySelector('.lang-groups-schedule-item-3').innerHTML = langArr["groups-schedule-item-3"][hash];
	document.querySelector('.lang-groups-schedule-item-4').innerHTML = langArr["groups-schedule-item-4"][hash];
	document.querySelector('.lang-groups-schedule-item-5').innerHTML = langArr["groups-schedule-item-5"][hash];
	document.querySelector('.lang-groups-schedule-item-6').innerHTML = langArr["groups-schedule-item-6"][hash];
	document.querySelector('.lang-groups-schedule-item-7').innerHTML = langArr["groups-schedule-item-7"][hash];
	document.querySelector('.lang-groups-schedule-item-8').innerHTML = langArr["groups-schedule-item-8"][hash];
	document.querySelector('.lang-groups-schedule-item-9').innerHTML = langArr["groups-schedule-item-9"][hash];
	document.querySelector('.lang-groups-item-title-1').innerHTML = langArr["groups-item-title-1"][hash];
	document.querySelector('.lang-groups-item-title-2').innerHTML = langArr["groups-item-title-2"][hash];
	document.querySelector('.lang-groups-item-title-3').innerHTML = langArr["groups-item-title-3"][hash];
	document.querySelector('.lang-groups-info-text-start-1').innerHTML = langArr["groups-info-text-start-1"][hash];
	document.querySelector('.lang-groups-info-text-start-2').innerHTML = langArr["groups-info-text-start-2"][hash];
	document.querySelector('.lang-groups-info-text-start-3').innerHTML = langArr["groups-info-text-start-3"][hash];
	document.querySelector('.lang-groups-info-text-duration-1').innerHTML = langArr["groups-info-text-duration-1"][hash];
	document.querySelector('.lang-groups-info-text-duration-2').innerHTML = langArr["groups-info-text-duration-2"][hash];
	document.querySelector('.lang-groups-info-text-duration-3').innerHTML = langArr["groups-info-text-duration-3"][hash];
	document.querySelector('.lang-groups-info-text-cost-1').innerHTML = langArr["groups-info-text-cost-1"][hash];
	document.querySelector('.lang-groups-info-text-cost-2').innerHTML = langArr["groups-info-text-cost-2"][hash];
	document.querySelector('.lang-groups-info-text-cost-3').innerHTML = langArr["groups-info-text-cost-3"][hash];
	document.querySelector('.lang-groups-info-text-months-1').innerHTML = langArr["groups-info-text-months-1"][hash];
	document.querySelector('.lang-groups-info-text-months-2').innerHTML = langArr["groups-info-text-months-2"][hash];
	document.querySelector('.lang-groups-info-text-months-3').innerHTML = langArr["groups-info-text-months-3"][hash];
	document.querySelector('.lang-teachers-title').innerHTML = langArr["teachers-title"][hash];
	document.querySelector('.lang-teachers-description-1').innerHTML = langArr["teachers-description-1"][hash];
	document.querySelector('.lang-teachers-description-2').innerHTML = langArr["teachers-description-2"][hash];
	document.querySelector('.lang-teachers-description-3').innerHTML = langArr["teachers-description-3"][hash];
	document.querySelector('.lang-sing-title').innerHTML = langArr["sing-title"][hash];
	document.querySelector('.lang-sing-option-1').innerHTML = langArr["sing-option-1"][hash];
	document.querySelector('.lang-sing-option-2').innerHTML = langArr["sing-option-2"][hash];
	document.querySelector('.lang-sing-option-3').innerHTML = langArr["sing-option-3"][hash];
	document.querySelector('.lang-sing-option-4').innerHTML = langArr["sing-option-4"][hash];
	document.querySelector('.lang-sing-btn').innerHTML = langArr["sing-btn"][hash];
	document.querySelector('.lang-footer-contat').innerHTML = langArr["footer-contat"][hash];
	document.querySelector('.lang-footer-payment').innerHTML = langArr["footer-payment"][hash];
	document.querySelector('.lang-footer-offer').innerHTML = langArr["footer-offer"][hash];
	document.querySelector('.lang-footer-policy').innerHTML = langArr["footer-policy"][hash];





	/*for (let key in langArr) {
		document.querySelector('.lang-' + key).innerHTML = langArr[key][hash];
	}*/
}

changeLanguage();


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});