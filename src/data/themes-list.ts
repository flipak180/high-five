import helpers from "@/helpers";
import {
    faAtom,
    faBook,
    faCar,
    faFilm,
    faHeart,
    faLandmark,
    faMap,
    faMoneyBill,
    faMusic,
    faPalette,
    faPaw,
    faUtensils
} from "@fortawesome/free-solid-svg-icons";

export default [
    { id: 1, title: 'Кулинария', icon: faUtensils, progress: helpers.getRandomNumber(0, 100), color: helpers.getRandomColor() },
    { id: 2, title: 'История', icon: faLandmark, progress: helpers.getRandomNumber(0, 100), color: helpers.getRandomColor() },
    { id: 3, title: 'Наука', icon: faAtom, progress: helpers.getRandomNumber(0, 100), color: helpers.getRandomColor() },
    { id: 4, title: 'Финансы', icon: faMoneyBill, progress: helpers.getRandomNumber(0, 100), color: helpers.getRandomColor() },
    { id: 5, title: 'Отношения', icon: faHeart, progress: helpers.getRandomNumber(0, 100), color: helpers.getRandomColor() },
    { id: 6, title: 'География', icon: faMap, progress: helpers.getRandomNumber(0, 100), color: helpers.getRandomColor() },
    { id: 7, title: 'Животные', icon: faPaw, progress: helpers.getRandomNumber(0, 100), color: helpers.getRandomColor() },
    { id: 8, title: 'Автомобили', icon: faCar, progress: helpers.getRandomNumber(0, 100), color: helpers.getRandomColor() },
    { id: 9, title: 'Литература', icon: faBook, progress: helpers.getRandomNumber(0, 100), color: helpers.getRandomColor() },
    { id: 10, title: 'Музыка', icon: faMusic, progress: helpers.getRandomNumber(0, 100), color: helpers.getRandomColor() },
    { id: 10, title: 'Кино', icon: faFilm, progress: helpers.getRandomNumber(0, 100), color: helpers.getRandomColor() },
    { id: 10, title: 'Живопись', icon: faPalette, progress: helpers.getRandomNumber(0, 100), color: helpers.getRandomColor() },
]


// const themes = [
//     'Знакомство', // место, ред флаги, фото
//     'Параметры', // имя, знак зодиака, рост
//     'Предпочтения', // еда, спорт, образование
//     'Свидание', // место, через сколько, кто платит, ред флаги
//     'Отношения', // тип (свободные, серьезные, легкие), афиширование,
//     'Досуг', // места, частота,
//     'Совместный быт', // готовка, уборка, продукты, квартплата
//     'Путешествия', // частота, тут или заграницу, цель - пляж, история..
//     'Интимная жизнь', // позы, частота, игрушки, табу
//     'Финансы', // заработок партнера, общий бюджет
//     'Хобби', //
//     'Друзья', //
//     'Недвижимость', //
//     'Ссоры', // Причины, измены, примирение
//     'Расставание', //
//     'Эмоции', //
//     'Свадьба', //
//     'Дети', //
// ];
