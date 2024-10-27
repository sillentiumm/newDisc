export const validEmail = (value) => {
  if (!value) return 'Введите email'
  const regex = /^[0-9A-Za-z.!_-]+@[A-Za-z]{3,}\.[A-Za-z]{2,}$/
  if (!regex.test(value)) return 'Неправильный формат email'
  return ''
}

export const validPassword = (value) => {
  if (!value) return 'Введите пароль'
  return ''
}