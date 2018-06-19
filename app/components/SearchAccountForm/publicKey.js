/**
 *
 * SetProxyForm
 *
 */

import React from 'react';
import { compose } from 'redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import AccountBalance from '@material-ui/icons/AccountBalance';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardText from 'components/Card/CardText';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';
import Quote from 'components/Typography/Quote';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import regularFormsStyle from 'assets/jss/regularFormsStyle';
import switchStyle from 'assets/jss/customCheckboxRadioSwitch';

const FormObject = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty,
    classes,
  } = props;
  return (
    <form>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <CustomInput
            labelText="Public Key"
            id="publicKey"
            error={errors.publicKey}
            touched={touched.publicKey}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Search for this public key',
              value: values.publicKey,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            Search
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};
export default FormObject;
