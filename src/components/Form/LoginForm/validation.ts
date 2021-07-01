import * as yup from 'yup'

const phoneRegex =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

export const schema = yup.object().shape(
  {
    email: yup.string().when(['phoneNumber'], {
      is: (phoneNumber: string, password: string) => !phoneNumber && !password,
      then: yup.string().required('E-mail obrigatório')
    }),
    phoneNumber: yup.string().when(['email'], {
      is: (email: string, password: string) => !email && !password,
      then: yup
        .string()
        .required('Número obrigatório')
        .matches(phoneRegex, 'Por favor, insira um número válido')
    }),
    password: yup
      .string()
      .required('Senha obrigatória')
      .min(6, 'Sua senha precisa ter mais de 6 caracteres')
  },
  [['email', 'phoneNumber']]
)
