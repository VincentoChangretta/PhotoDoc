import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  docImg,
  FirstStep,
  FourthStep,
  restImg,
  retImg,
  SecondStep,
  ThirdStep,
} from "./ImgData";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const links = {
  telegram: "https://www.google.com",
};

export const PHOTODOC = "Фото на документ";

export const SIZE_2x3 = "2x3";
export const SIZE_25x35 = "2.5x3.5";
export const SIZE_3x4 = "3x4";
export const SIZE_35x45 = "3.5x4.5";
export const SIZE_4x6 = "4x6";
export const SIZE_45x60 = "4.5x6";
export const SIZE_5x5 = "5x5";
export const SIZE_9x12 = "9x12";

export const PHOTODOC_PRICE_ONLINE = 250;
export const PHOTODOC_PRICE_DELIVERY = 300;
export const PHOTODOC_CLOTH_PRICE = 150;
export const PHOTODOC_PHYSICAL_QUANTITY = 2;
export const PHOTODOC_ELECTRO_QUANTITY = 1;
export const PHOTODOC_PRICE_ADDITIONAL = 25;

export const PHOTODOC_INITIAL_ELECTRO_QUANTITY = 4;

export const MAX_PHOTO_QUANTITY = 9;
export const MAX_PHOTO_QUANTITY_IN_DESIGN = 9;

export const PHOTO_VARIATION_ELECTRO = "ELECTRO";
export const CURRENT_PHYSICAL_QUANTITY = "currentPhysicalQuantity";
export const CURRENT_ELECTRO_QUANTITY = "currentElectroQuantity";

export const PHOTO_COLOR_COLORED = "Цветная";
export const PHOTO_COLOR_COLORLESS = "Черно-белая";

export const PHOTO_WITHOUT_CLOTH = "Без формы";
export const PHOTO_WITH_CLOTH = "С формой";

export const PHOTODOC_LOCALSTORE = "photodoc_store";
export const CLOTH_INPUT_LOCALSTORE = "cloth_input_store";

export const RUBLE = "₽";

export const RETOUCH_PRICE = 500;
export const RETOUCH_COMPLEX_PRICE = 300;
export const RETOUCH_COMPLEX_GROUP_PRICE = 500;
export const RETOUCH_BEAUTY_PRICE = 700;

export const RETOUCH_PRICE_DELIVERY = 300;
export const RETOUCH_PHYSICAL_QUANTITY = 1;
export const RETOUCH_PRICE_ADDITIONAL = 50;

export const RESTORATION_PRICE = 500;
export const HARD_RESTORATION_PRICE = 2000;
export const RESTORATION_PRICE_DELIVERY = 300;
export const RESTORATION_PHYSICAL_QUANTITY = 1;
export const RESTORATION_PRICE_ADDITIONAL = 50;

export const DELIVERY_CITYIES = [
  "г. Калининград",
  "п. Ласкино",
  "Новое Голубево",
  "п. Яблоневка",
];

// delivery time
export const TIME_12 = "12:00";
export const TIME_18 = "18:00";

export const TELEGRAM = "Telegram";
export const E_MAIL = "E-mail";
export const TELEPHONE_NUMBER = "Номер телефона";
export const WHATS_APP = "WhatsApp";

export const promoCodeData = [
  {
    code: "PhotoDoc",
    discount: 15,
  },
  {
    code: "vcDevs",
    discount: 10,
  },
];

export const ATTENTION_DATA = {
  maxSize: "Максимальный размер 9 на 12",
  emptyInput: "Не заполнены поля",
  sizeExists: "Указанный размер существует в списке размеров",
};

export const PATHNAMES = {
  home: "/",
  photoDocument: "/photodocument",
  recommendations: "/recommendations",
  restoration: "/restoration",
  retouch: "/retouch",
  aboutUs: "/aboutus",
  constructor: "/constructor",
  order: "/order",
  delivery: "/delivery",
  privacyPolicy: "/privacy-policy",
  supportProject: "/support-project",
  oferta: "/oferta",
};

export const TYPES = {
  ELECTRO: "Электронный",
  PHYSICAL: "Бумажный",
  ELECTRO_PHYSICAL: "Электронный/Бумажный",
};

export const photoDocTypes = [
  TYPES.ELECTRO,
  TYPES.PHYSICAL,
  TYPES.ELECTRO_PHYSICAL,
];

export const photoColorTypes = [PHOTO_COLOR_COLORED, PHOTO_COLOR_COLORLESS];

export const photoClothArr = [PHOTO_WITHOUT_CLOTH, PHOTO_WITH_CLOTH];

export const navArr = [
  {
    id: "glavnaya",
    item: "Главная",
    pathname: PATHNAMES.home,
  },
  {
    id: "fotodocument",
    item: "Фото на документы",
    pathname: PATHNAMES.photoDocument,
  },
  {
    id: "restoration",
    item: "Реставрация",
    pathname: PATHNAMES.restoration,
  },
  {
    id: "retouch",
    item: "Ретушь",
    pathname: PATHNAMES.retouch,
  },
  {
    id: "aboutus",
    item: "О нас",
    pathname: PATHNAMES.aboutUs,
  },
];

export const mainTopImgArr = [
  {
    id: "фото на документы",
    img: docImg,
    text: "Фото на документы",
    price: PHOTODOC_PRICE_ONLINE,
  },
  {
    id: "обработка фотографий",
    img: retImg,
    text: "Ретушь",
    price: RETOUCH_PRICE,
  },
  {
    id: "реставрация фотографий",
    img: restImg,
    text: "Реставрация",
    price: RESTORATION_PRICE,
  },
];

export const photoDocumentArr = [
  {
    id: SIZE_25x35,
    type: PHOTODOC,
    name: `Фото ${SIZE_25x35}`,
    descr: "Для школьных документов и удостоверений",
    priceOnline: PHOTODOC_PRICE_ONLINE,
    priceOrder: PHOTODOC_PRICE_ONLINE + PHOTODOC_PRICE_DELIVERY,
    physicalQuantity: PHOTODOC_PHYSICAL_QUANTITY,
    AdditionalPrice: PHOTODOC_PRICE_ADDITIONAL,
    tag: "фото, фотография, фотографии, документы, фото на, справка, фото на справку, фото на удостоверение, удостоверение",
    pathname: PATHNAMES.constructor,
  },
  {
    id: SIZE_3x4,
    type: PHOTODOC,
    name: `Фото ${SIZE_3x4}`,
    descr: "Стандартный размер для большинства документов",
    priceOnline: PHOTODOC_PRICE_ONLINE,
    priceOrder: PHOTODOC_PRICE_ONLINE + PHOTODOC_PRICE_DELIVERY,
    physicalQuantity: PHOTODOC_PHYSICAL_QUANTITY,
    AdditionalPrice: PHOTODOC_PRICE_ADDITIONAL,
    tag: "фото, фотография, фотографии, документы, справка, фото на справку, фото на, фото на удостоверение, удостоверение",
    pathname: PATHNAMES.constructor,
  },
  {
    id: SIZE_35x45,
    type: PHOTODOC,
    name: `Фото ${SIZE_35x45}`,
    descr: "Подойдет на паспорт, загранпаспорт, визы",
    priceOnline: PHOTODOC_PRICE_ONLINE,
    priceOrder: PHOTODOC_PRICE_ONLINE + PHOTODOC_PRICE_DELIVERY,
    physicalQuantity: PHOTODOC_PHYSICAL_QUANTITY,
    AdditionalPrice: PHOTODOC_PRICE_ADDITIONAL,
    tag: "фото, фотография, фотографии, документы, справка, фото на справку, фото на, паспорт, фото на паспорт, фото на загранпаспорт, фото на визу, шенген, виза, загранпаспорт, фото на удостоверение, удостоверение",
    pathname: PATHNAMES.constructor,
  },
  {
    id: SIZE_4x6,
    type: PHOTODOC,
    name: `Фото ${SIZE_4x6}`,
    descr: "На различные удостоверения, военные документы",
    priceOnline: PHOTODOC_PRICE_ONLINE,
    priceOrder: PHOTODOC_PRICE_ONLINE + PHOTODOC_PRICE_DELIVERY,
    physicalQuantity: PHOTODOC_PHYSICAL_QUANTITY,
    AdditionalPrice: PHOTODOC_PRICE_ADDITIONAL,
    tag: "фото, фотография, фотографии, документы, справка, фото на справку, фото на, удостоверение, фото на удостоверение",
    pathname: PATHNAMES.constructor,
  },
  {
    id: SIZE_45x60,
    type: PHOTODOC,
    name: `Фото ${SIZE_45x60}`,
    descr: "Подходит для различных удостоверений и карт",
    priceOnline: PHOTODOC_PRICE_ONLINE,
    priceOrder: PHOTODOC_PRICE_ONLINE + PHOTODOC_PRICE_DELIVERY,
    physicalQuantity: PHOTODOC_PHYSICAL_QUANTITY,
    AdditionalPrice: PHOTODOC_PRICE_ADDITIONAL,
    tag: "фото, фотография, фотографии, документы, справка, фото на справку, фото на, удостоверение, фото на удостоверение",
    pathname: PATHNAMES.constructor,
  },
  {
    id: SIZE_9x12,
    type: PHOTODOC,
    name: `Фото ${SIZE_9x12}`,
    descr: "Для официальных документов и портретов",
    priceOnline: PHOTODOC_PRICE_ONLINE,
    priceOrder: PHOTODOC_PRICE_ONLINE + PHOTODOC_PRICE_DELIVERY,
    physicalQuantity: 1,
    AdditionalPrice: PHOTODOC_PRICE_ADDITIONAL,
    tag: "фото, фотография, фотографии, документы, справка, фото на справку, фото на, удостоверение, фото на удостоверение",
    pathname: PATHNAMES.constructor,
  },
];

export const MainServicesArr = [
  {
    id: "Реставрация",
    title: "Реставрация",
    text: "Сохраните память на долгие годы! Для нас восстановление старых фотографий – не только любимая работа, но и настоящее искусство. Мы с удовольствием оживим Ваши фото:",
    serviceParagraphs: [
      "удалим все изъяны и трещины",
      "восстановим даже сильно поврежденные изображения",
      "сохраним уникальность фотографии и дух давно ушедшей эпохи",
      "учтем и воплотим в жизнь любые Ваши пожелания",
      "сделаем из черно-белого фото цветное",
    ],
    pathname: PATHNAMES.restoration,
  },
  {
    id: "Ретушь / обработка",
    title: "Ретушь / обработка",
    text: " Всем хочется смотреться красиво на фото! Но иногда досадные несовершенства могут испортить все впечатление. Избавиться от дефектов кожи, скорректировать фигуру, изменить прическу и макияж- со всем этим поможет справиться профессиональная ретушь для фото на заказ. Мы очень аккуратно подходим к обработке фотографий:",
    serviceParagraphs: [
      "подчеркнем достоинства Вашей внешности, уберем недостатки",
      "максимально сохраним естественность лица",
      "не оставим следов фотошопа",
      "бработаем фото точно в срок и учтем все Ваши пожелания",
    ],
    pathname: PATHNAMES.retouch,
  },
];

export const inputSelectData = [
  {
    id: TELEGRAM,
    name: faTelegram,
    placeholder: "@username",
    type: "text",
  },
  {
    id: WHATS_APP,
    name: faWhatsapp,
    placeholder: "+7 (999) 999 99 99",
    type: "text",
  },
  {
    id: E_MAIL,
    name: faEnvelope,
    placeholder: "main@mail.ru",
    type: "email",
  },
];

export const FIRST_OPTIONS = {
  type: photoDocTypes[0],
  color: photoColorTypes[0],
  cloth: photoClothArr[0],
};

export const DELIVERY_TIME_DATA = [TIME_12, TIME_18];

export const photoDocRecommendationsData = [
  {
    id: "headRec",
    title: "Положение головы - строго анфас",
    text: "Избегайте наклонов или поворотов лица. Лицо должно быть направлено прямо в камеру. Смотрите прямо, без улыбки (нейтральное выражение). Лицо должно быть полностью видимым",
  },
  {
    id: "bgRec",
    title: "Фон фотографии",
    text: "Рекомендуется выбрать фон однотонный, светлый и нейтральный (белый или светло-голубой). Избегайте любых текстур или узоров на фоне",
  },
  {
    id: "bgRec",
    title: "Размер фотографии",
    text: "Следите за тем, чтобы на вашей фотографии были видны плечи и туловище",
  },
  {
    id: "qualityRec",
    title: "Качество",
    text: "Фотографии должны быть четкими, без теней и засветов",
  },
  {
    id: "qualityRec",
    title: "Срок",
    text: "Убедитесь, что фотография актуальна и сделана в течение последних 6 месяцев",
  },
];

export const photoDocSteps = [
  {
    id: "first-step",
    title: "Сделайте фото",
    text: "Cледуйте простым рекомендациям, чтобы сделать правильное фото",
    img: FirstStep,
  },
  {
    id: "second-step",
    title: "Настройте заказ в конструкторе.",
    text: "Выберите формат, количество, цветность и т.д. ",
    img: SecondStep,
  },
  {
    id: "third-step",
    title: "Загрузите фото на сайт и заполните форму",
    text: "Заполните форму, чтобы мы смогли связаться с вами",
    img: ThirdStep,
  },
  {
    id: "fourth-step",
    title: "Получите фотографии",
    text: "Электронные - на указанную почту или мессенджеры, бумажные - по доставке",
    img: FourthStep,
  },
];

export const faqData = [
  {
    id: "faq1",
    question: "Как заказать фотографию на документы онлайн?",
    answer:
      "Для заказа фотографии на документы нужно загрузить ваше фото через нашу форму на сайте, указать желаемый формат и тип документа, а также выбрать способ получения готовых фотографий. Также можно отправить фотографии на наши социальные сети (WhatsApp, Telegram)",
  },
  {
    id: "faq2",
    question: "Как подготовить фото для отправки?",
    answer:
      "Сфотографируйтесь на нейтральном фоне (предпочтительно белом), убедитесь, что лицо освещено равномерно, и избегайте теней. Прочитайте рекомендации к фото на нашем сайте. Если у вас есть сомнения, отправьте нам фото, и мы проверим его перед обработкой.",
  },
  {
    id: "faq3",
    question: "В каких форматах вы принимаете фотографии?",
    answer:
      "Мы принимаем фотографии в форматах JPEG, PNG, HEIC и PDF. Если у вас фото в другом формате, напишите нам, и мы постараемся помочь.",
  },
  {
    id: "faq4",
    question: "Могу ли я заказать бумажные фотографии?",
    answer:
      "Да, вы можете заказать бумажные копии фотографий. Укажите этот вариант при оформлении заказа, и мы доставим их по указанному адресу.",
  },
  {
    id: "faq5",
    question: "Как быстро я получу готовые фотографии?",
    answer:
      "Электронные фотографии мы отправляем в течение 1–2 часов после оплаты. Бумажные фотографии доставляются курьером в течение 1–2 рабочих дней, в зависимости от вашего местоположения. Также вы можете ознакомиться и правилами доставки на нашем сайте.",
  },
  {
    id: "faq6",
    question: "Какими способами я могу получить готовые фотографии?",
    answer:
      "Вы можете получить электронные фотографии на электронную почту или в мессенджеры (WhatsApp, Telegram). Бумажные фотографии доставляются курьером на указанный адрес.",
  },
  {
    id: "faq7",
    question: "Как я могу оплатить заказ?",
    answer:
      "Оплата принимается онлайн через банковскую карту, электронные кошельки или переводы в популярных мессенджерах. Также возможна оплата при получении. Подробности будут указаны при оформлении заказа.",
  },
  {
    id: "faq8",
    question: "Предоставляете ли вы гарантию на фото?",
    answer:
      "Да, мы гарантируем, что ваши фотографии будут соответствовать требованиям выбранного документа. Если что-то не так, мы бесплатно исправим.",
  },
];

export const restorationPriceData = [
  {
    id: "restoration-1",
    title: "Базовая реставрация фотографий",
    text: "Помогает при небольших повреждениях (10-40%). Включает удаление мелких пятен и царапин, цветокоррекцию и тонирование, дорисовку небольших участков.",
    price: RESTORATION_PRICE,
    tags: [
      "реставрация, фото, старые фото, реставрация фотографий, реставрация фото, фото реставрация",
    ],
    pathname: PATHNAMES.restoration,
  },
  {
    id: "restoration-2",
    title: "Сложная реставрация фотографий",
    text: "Помогает при сильных повреждениях (от 40%). Включает дорисовку крупных объектов и углов; удаление больших трещин; коррекцию светотени и резкости; устранение мутности, зернистости, муара и тиснения с полным восстановлением фото",
    price: HARD_RESTORATION_PRICE,
    tags: [
      "реставрация, фото, старые фото, реставрация фотографий, реставрация фото, фото реставрация",
    ],
    pathname: PATHNAMES.restoration,
  },
];

export const retouchPriceData = [
  {
    id: "retouch-1",
    title: "Комплексная ретушь одного человека",
    text: "Может включать в себя что-то из следующих пожеланий - ретушь кожи; пластику фигуры; коррекцию прически, одежды или макияжа.",
    price: RETOUCH_COMPLEX_PRICE,
    tags: [
      "ретушь, обработка, фото, фотографии, ретушь фотографий, фото ретушь, фотография ретушь, фотографии ретушь",
    ],
    pathname: PATHNAMES.retouch,
  },
  {
    id: "retouch-2",
    title: "Комплексная ретушь группового портрета",
    text: "Может включать в себя что-то из следующих пожеланий - ретушь кожи; пластику фигуры; коррекцию прически, одежды или макияжа.",
    price: RETOUCH_COMPLEX_GROUP_PRICE,
    tags: [
      "ретушь, обработка, фото, фотографии, ретушь фотографий, фото ретушь, фотография ретушь, фотографии ретушь",
    ],
    pathname: PATHNAMES.retouch,
  },
  {
    id: "retouch-3",
    title: "Beauty ретушь",
    text: "Глубокая журнальная или глянцевая обработка всего фото. Ретушь для портфолио и модельных тестов. Используется техника частотного разложения, а также dodge&burn.",
    price: RETOUCH_BEAUTY_PRICE,
    tags: [
      "ретушь, обработка, фото, фотографии, ретушь фотографий, фото ретушь, фотография ретушь, фотографии ретушь",
    ],
    pathname: PATHNAMES.retouch,
  },
];

export const allServiceData = {
  photoDoc: photoDocumentArr,
  restoration: restorationPriceData,
  retouch: retouchPriceData,
};
