import moment from 'moment';

export default function getFormattedDate(date) {
  return moment(date).format('DD/MM/YYYY, HH:mm')
}
