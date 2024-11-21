import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { docImg, restImg, retImg } from "./ImgData";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

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

export const RETOUCH_PRICE_ONLINE = 300;
export const RETOUCH_PRICE_DELIVERY = 300;
export const RETOUCH_PHYSICAL_QUANTITY = 1;
export const RETOUCH_PRICE_ADDITIONAL = 50;

export const RESTORATION_PRICE_ONLINE = 300;
export const RESTORATION_PRICE_DELIVERY = 300;
export const RESTORATION_PHYSICAL_QUANTITY = 1;
export const RESTORATION_PRICE_ADDITIONAL = 50;

export const DELIVERY_CITYIES = {
  Kaliningrad: "Калининград",
}

// delivery time
export const TIME_12 = "12:00"
export const TIME_18 = "18:00"

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
  restoration: "/restoration",
  retouch: "/retouch",
  aboutUs: "/aboutus",
  constructor: "/constructor",
  order: "/order",
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
    id: "allservices",
    item: "Все услуги",
    services: [
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
    ],
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
    price: RETOUCH_PRICE_ONLINE,
  },
  {
    id: "реставрация фотографий",
    img: restImg,
    text: "Реставрация",
    price: RESTORATION_PRICE_ONLINE,
  },
];

export const photoDocumentArr = [
  {
    id: SIZE_25x35,
    name: `Фото ${SIZE_25x35}`,
    descr: "Для школьных документов и удостоверений",
    priceOnline: PHOTODOC_PRICE_ONLINE,
    priceOrder: PHOTODOC_PRICE_ONLINE + PHOTODOC_PRICE_DELIVERY,
    physicalQuantity: PHOTODOC_PHYSICAL_QUANTITY,
    AdditionalPrice: PHOTODOC_PRICE_ADDITIONAL,
  },
  {
    id: SIZE_3x4,
    name: `Фото ${SIZE_3x4}`,
    descr: "Стандартный размер для большинства документов",
    priceOnline: PHOTODOC_PRICE_ONLINE,
    priceOrder: PHOTODOC_PRICE_ONLINE + PHOTODOC_PRICE_DELIVERY,
    physicalQuantity: PHOTODOC_PHYSICAL_QUANTITY,
    AdditionalPrice: PHOTODOC_PRICE_ADDITIONAL,
  },
  {
    id: SIZE_35x45,
    name: `Фото ${SIZE_35x45}`,
    descr: "Подойдет на паспорт, загранпаспорт, визы",
    priceOnline: PHOTODOC_PRICE_ONLINE,
    priceOrder: PHOTODOC_PRICE_ONLINE + PHOTODOC_PRICE_DELIVERY,
    physicalQuantity: PHOTODOC_PHYSICAL_QUANTITY,
    AdditionalPrice: PHOTODOC_PRICE_ADDITIONAL,
  },
  {
    id: SIZE_4x6,
    name: `Фото ${SIZE_4x6}`,
    descr: "На различные удостоверения, военные документы",
    priceOnline: PHOTODOC_PRICE_ONLINE,
    priceOrder: PHOTODOC_PRICE_ONLINE + PHOTODOC_PRICE_DELIVERY,
    physicalQuantity: PHOTODOC_PHYSICAL_QUANTITY,
    AdditionalPrice: PHOTODOC_PRICE_ADDITIONAL,
  },
  {
    id: SIZE_45x60,
    name: `Фото ${SIZE_45x60}`,
    descr: "Подходит для различных удостоверений и карт",
    priceOnline: PHOTODOC_PRICE_ONLINE,
    priceOrder: PHOTODOC_PRICE_ONLINE + PHOTODOC_PRICE_DELIVERY,
    physicalQuantity: PHOTODOC_PHYSICAL_QUANTITY,
    AdditionalPrice: PHOTODOC_PRICE_ADDITIONAL,
  },
  {
    id: SIZE_9x12,
    name: `Фото ${SIZE_9x12}`,
    descr: "Для официальных документов и портретов",
    priceOnline: PHOTODOC_PRICE_ONLINE,
    priceOrder: PHOTODOC_PRICE_ONLINE + PHOTODOC_PRICE_DELIVERY,
    physicalQuantity: 1,
    AdditionalPrice: PHOTODOC_PRICE_ADDITIONAL,
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
