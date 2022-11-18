import dayjs from "dayjs"

// Небольшая функция для преобразования даты из формата firebase в формат для отображения в инпуте
const dateConverter = (date) => {
  const day = dayjs.unix(date.seconds)["$D"]
  const month = dayjs.unix(date.seconds)["$M"]
  const year = dayjs.unix(date.seconds)["$y"]
  return `${month}/${day}/${year}`
}

export default dateConverter