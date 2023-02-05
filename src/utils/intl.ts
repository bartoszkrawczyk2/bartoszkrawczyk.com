export type FmtDate = 'Present' | Date;

const formatter = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric' });

export const dateFmt = (date: FmtDate) => {
  if (date === 'Present') return date;
  return formatter.format(date);
};
