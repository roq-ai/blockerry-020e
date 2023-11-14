import * as yup from 'yup';

export const installationValidationSchema = yup.object().shape({
  coin_name: yup.string().required(),
  coin_ticker: yup.string().required(),
  logo: yup.string().required(),
  genesis_file: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  server_id: yup.string().nullable().required(),
  tool_id: yup.string().nullable().required(),
});
