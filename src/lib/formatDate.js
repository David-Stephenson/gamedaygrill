function formatDate(date, dateStyle = 'medium', locales = 'en') {
  const dateToFormat = new Date(date.replaceAll('-', '/'));
  const dateFormatter = new Intl.DateTimeFormat(locales, {
    dateStyle: dateStyle,
  });
  return dateFormatter.format(dateToFormat);
}

export default formatDate;
