import * as yup from 'yup';

export const serverValidationSchema = yup.object().shape({
  ip_adress: yup.string().required(),
  region: yup.string().required(),
  server_provider: yup.string().required(),
});
