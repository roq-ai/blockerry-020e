import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { installationValidationSchema } from 'validationSchema/installations';
import { OrganizationInterface } from 'interfaces/organization';
import { ServerInterface } from 'interfaces/server';
import { ToolInterface } from 'interfaces/tool';
import { InstallationInterface } from 'interfaces/installation';

function InstallationCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: InstallationInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.installation.create({ data: values as RoqTypes.installation });
      resetForm();
      router.push('/installations');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<InstallationInterface>({
    initialValues: {
      coin_name: '',
      coin_ticker: '',
      logo: '',
      genesis_file: '',
      status: '',
      organization_id: (router.query.organization_id as string) ?? null,
      server_id: (router.query.server_id as string) ?? null,
      tool_id: (router.query.tool_id as string) ?? null,
    },
    validationSchema: installationValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Installations',
              link: '/installations',
            },
            {
              label: 'Create Installation',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Installation
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.coin_name}
            label={'Coin Name'}
            props={{
              name: 'coin_name',
              placeholder: 'Coin Name',
              value: formik.values?.coin_name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.coin_ticker}
            label={'Coin Ticker'}
            props={{
              name: 'coin_ticker',
              placeholder: 'Coin Ticker',
              value: formik.values?.coin_ticker,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.logo}
            label={'Logo'}
            props={{
              name: 'logo',
              placeholder: 'Logo',
              value: formik.values?.logo,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.genesis_file}
            label={'Genesis File'}
            props={{
              name: 'genesis_file',
              placeholder: 'Genesis File',
              value: formik.values?.genesis_file,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.status}
            label={'Status'}
            props={{
              name: 'status',
              placeholder: 'Status',
              value: formik.values?.status,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<OrganizationInterface>
            formik={formik}
            name={'organization_id'}
            label={'Select Organization'}
            placeholder={'Select Organization'}
            fetcher={() => roqClient.organization.findManyWithCount({})}
            labelField={'name'}
          />
          <AsyncSelect<ServerInterface>
            formik={formik}
            name={'server_id'}
            label={'Select Server'}
            placeholder={'Select Server'}
            fetcher={() => roqClient.server.findManyWithCount({})}
            labelField={'ip_adress'}
          />
          <AsyncSelect<ToolInterface>
            formik={formik}
            name={'tool_id'}
            label={'Select Tool'}
            placeholder={'Select Tool'}
            fetcher={() => roqClient.tool.findManyWithCount({})}
            labelField={'tool_type'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/installations')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'installation',
    operation: AccessOperationEnum.CREATE,
  }),
)(InstallationCreatePage);
