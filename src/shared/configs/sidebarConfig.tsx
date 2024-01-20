import { CounterpartiesIcon, CrownIcon, DeliveryIcon, EmployeeIcon, ExchangeIcon, FaqIcon, FavoriteIcon, FileIcon, FinanceIcon, GoodIcon, IdCardIcon, ReportIcon, SettingsIcon, ShopIcon } from "@assets/index";
import { ReactNode } from "react";
import { MockView } from "@pages/Views/MockView";
import { Goods } from "@pages/Views/Goods";

type Subcategory = {
  [key: string]: {
    title: string;
    id: string;
    view: ReactNode;
  }[]
}

export const SIDEBAR_CATEGORIES = {
  'Избранное': { title: 'Избранное', id: 'favorite', icon: FavoriteIcon },
  'Розничные продажи': { title: 'Розничные продажи', id: 'retail-sales', icon: ShopIcon },
  'Товары и склады': { title: 'Товары и склады', id: 'goods', icon: GoodIcon },
  'Сотрудники': { title: 'Сотрудники', id: 'employees', icon: EmployeeIcon },
  'Прейскурант': { title: 'Прейскурант', id: 'price-list', icon: FileIcon },
  'Финансы': { title: 'Финансы', id: 'finance', icon: FinanceIcon },
  'Контрагенты': { title: 'Контрагенты', id: 'counterparties', icon: CounterpartiesIcon },
  'Отчеты': { title: 'Отчеты', id: 'reports', icon: ReportIcon },
  'Дисконтная система': { title: 'Дисконтная система', id: 'discount', icon: IdCardIcon },
  'Обмен данными': { title: 'Обмен данными', id: 'exchange-data', icon: ExchangeIcon },
  'Администрирование': { title: 'Администрирование', id: 'admin-panel', icon: CrownIcon },
  'Доставка': { title: 'Доставка', id: 'delivery', icon: DeliveryIcon },
  'Настройки': { title: 'Настройки', id: 'settings', icon: SettingsIcon },
  'Помощь': { title: 'Помощь', id: 'help', icon: FaqIcon },
};

export const SIDEBAR_SUBCATEGORIES: Subcategory = {
    [SIDEBAR_CATEGORIES['Избранное'].id]: [],
    [SIDEBAR_CATEGORIES['Розничные продажи'].id]: [
      { title: 'Кассовые продажи, смены', id: '', view: <MockView /> },
      { title: 'OLAP отчет по продажам и по проводкам', id: '', view: <MockView /> },
      { title: 'Типы внесений и изъятий', id: '', view: <MockView /> },
      { title: 'Типы оплат', id: '', view: <MockView /> },
      { title: 'Типы заказов', id: '', view: <MockView /> },
      { title: 'Видеонаблюдение', id: '', view: <MockView /> },
      { title: 'Банкеты, резервы, доставки', id: '', view: <MockView /> },
      { title: 'ABC XYZ анализ', id: '', view: <MockView /> },
    ],
    [SIDEBAR_CATEGORIES['Товары и склады'].id]: [
      { title: 'Товары', id: '', view: <Goods /> },
      { title: 'Блюда', id: '', view: <MockView /> },
      { title: 'Заготовки', id: '', view: <MockView /> },
      { title: 'Модификации', id: '', view: <MockView /> },
      { title: 'Номенклатура', id: '', view: <MockView /> },
      { title: 'Группы аллергенов', id: '', view: <MockView /> },
      { title: 'Единицы измерения', id: '', view: <MockView /> },
      { title: 'Бухгалтерские категории', id: '', view: <MockView /> },
      { title: 'Признаки расчета', id: '', view: <MockView /> },
      { title: 'Склады, поставщики', id: '', view: <MockView /> },
      { title: 'Накладные', id: '', view: <MockView /> },
      { title: 'Инвентаризации', id: '', view: <MockView /> },
      { title: 'Акты списания', id: '', view: <MockView /> },
      { title: 'Акты переработки', id: '', view: <MockView /> },
      { title: 'Остатки на складах', id: '', view: <MockView /> },
      { title: 'Движение товара', id: '', view: <MockView /> },
      { title: 'Отчет о вхождении товара в блюда', id: '', view: <MockView /> },
    ],
    [SIDEBAR_CATEGORIES['Сотрудники'].id]: [
      { title: 'Заказ блюд и продуктов', id: '', view: <MockView /> },
      { title: 'Отчет о закупках', id: '', view: <MockView /> },
    ],
    [SIDEBAR_CATEGORIES['Прейскурант'].id]: [
      { title: 'Список сотрудников', id: '', view: <MockView /> },
      { title: 'Должности', id: '', view: <MockView /> },
      { title: 'Типы смен', id: '', view: <MockView /> },
      { title: 'Типы явок', id: '', view: <MockView /> },
      { title: 'Удержания', id: '', view: <MockView /> },
      { title: 'Начисления', id: '', view: <MockView /> },
      { title: 'Расписание', id: '', view: <MockView /> },
      { title: 'Планирование расписания', id: '', view: <MockView /> },
      { title: 'Персональный отчет', id: '', view: <MockView /> },
      { title: 'Журнал явки', id: '', view: <MockView /> },
      { title: 'Платежные ведомости', id: '', view: <MockView /> },
    ],
    [SIDEBAR_CATEGORIES['Финансы'].id]: [
      { title: 'Быстрое меню', id: '', view: <MockView /> },
      { title: 'Прейскуранты товаров и услуг', id: '', view: <MockView /> },
      { title: 'Периоды действия', id: '', view: <MockView /> },
    ],
    [SIDEBAR_CATEGORIES['Контрагенты'].id]: [
      { title: 'План счетов', id: '', view: <MockView /> },
      { title: 'Акты приема услуг', id: '', view: <MockView /> },
      { title: 'Акты оказания услуг', id: '', view: <MockView /> },
      { title: 'Отчет о прибылях и убытках', id: '', view: <MockView /> },
      { title: 'Отчет о движении денег', id: '', view: <MockView /> },
      { title: 'Задолженность перед контрагентами', id: '', view: <MockView /> },
      { title: 'Прогноз продаж', id: '', view: <MockView /> },
    ],
    [SIDEBAR_CATEGORIES['Контрагенты'].id]: [
      { title: 'Гости банкетов и резервов', id: '', view: <MockView /> },
    ],
    [SIDEBAR_CATEGORIES['Отчеты'].id]: [
      { title: 'Все возможные отчеты', id: '', view: <MockView /> },
    ],
    [SIDEBAR_CATEGORIES['Дисконтная система'].id]: [
      { title: 'Клубные карты', id: '', view: <MockView /> },
      { title: 'Скидки и надбавки', id: '', view: <MockView /> },
    ],
    [SIDEBAR_CATEGORIES['Администрирование'].id]: [
      { title: 'Настройки торгового предприятия', id: '', view: <MockView /> },
      { title: 'Схемы залов', id: '', view: <MockView /> },
      { title: 'Настройки оборудования', id: '', view: <MockView /> },
      { title: 'Права доступа', id: '', view: <MockView /> },
      { title: 'Шаблоны печатных форм', id: '', view: <MockView /> },
      { title: 'Шаблоны чеков', id: '', view: <MockView /> },
    ],
    [SIDEBAR_CATEGORIES['Обмен данными'].id]: [],
    [SIDEBAR_CATEGORIES['Доставка'].id]: [],
    [SIDEBAR_CATEGORIES['Настройки'].id]: [],
    [SIDEBAR_CATEGORIES['Помощь'].id]: [],
}
