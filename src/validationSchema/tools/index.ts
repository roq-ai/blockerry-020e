import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  tool_type: yup.string().required(),
  tool_name: yup.string().required(),
  price: yup.number().required(),
});
