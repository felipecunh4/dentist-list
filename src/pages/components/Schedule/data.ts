export const clients = [
  {
    time: '09:00',
    name: 'Nome do cliente',
    scheduleType: 'Consulta',
  },
  {
    time: '10:00',
    name: 'Nome do cliente',
    scheduleType: 'Consulta',
  },
  {
    time: '11:00',
    name: 'Nome do cliente',
    scheduleType: 'Consulta',
  },
  {
    time: '12:00',
    name: 'Nome do cliente',
    scheduleType: 'Consulta',
  },
  {
    time: '13:00',
    name: 'Nome do cliente',
    scheduleType: 'Consulta',
  },
  {
    time: '14:00',
    name: 'Nome do cliente',
    scheduleType: 'Consulta',
  },
  {
    time: '15:00',
    name: 'Nome do cliente',
    scheduleType: 'Consulta',
  },
  {
    time: '16:00',
    name: 'Nome do cliente',
    scheduleType: 'Consulta',
  },
  {
    time: '17:00',
    name: 'Nome do cliente',
    scheduleType: 'Consulta',
  },
  {
    time: '18:00',
    name: 'Nome do cliente',
    scheduleType: 'Consulta',
  },
];

export const myCustomLocale = {
  // months list by order
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],

  // week days by order
  weekDays: [
    {
      name: 'Domingo', // used for accessibility
      short: 'D', // displayed at the top of days' rows
      isWeekend: true, // is it a formal weekend or not?
    },
    {
      name: 'Segunda',
      short: 'S',
    },
    {
      name: 'Terça',
      short: 'T',
    },
    {
      name: 'Quarta',
      short: 'Q',
    },
    {
      name: 'Quinta',
      short: 'Q',
    },
    {
      name: 'Sexta',
      short: 'S',
    },
    {
      name: 'Sábado',
      short: 'S',
      isWeekend: true,
    },
  ],

  // just play around with this number between 0 and 6
  weekStartingIndex: 0,

  // return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject: any) {
    return gregorainTodayObject;
  },

  // return a native JavaScript date here
  toNativeDate(date: any) {
    return new Date(date.year, date.month - 1, date.day);
  },

  // return a number for date's month length
  getMonthLength(date: any) {
    return new Date(date.year, date.month, 0).getDate();
  },

  // return a transformed digit to your locale
  transformDigit(digit: any) {
    return digit;
  },

  // texts in the date picker
  nextMonth: 'Próximo mês',
  previousMonth: 'Mês anterior',
  openMonthSelector: 'Abrir seletor de mês',
  openYearSelector: 'Abrir seletor de ano',
  closeMonthSelector: 'Fechar seletor de mês',
  closeYearSelector: 'Fechar seletor de ano',
  defaultPlaceholder: 'Selecione...',

  // for input range value
  from: 'de',
  to: 'até',

  // used for input value when multi dates are selected
  digitSeparator: ',',

  // if your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,

  // is your language rtl or ltr?
  isRtl: false,
};
