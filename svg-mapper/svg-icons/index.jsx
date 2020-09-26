// react core imports
import React from 'react';
import PropTypes from 'prop-types';

// Intuit svg-icon file imports
import MintSvgIcon from './MintSvgIcon';
import ProConnectSvgIcon from './ProConnectSvgIcon';
import QuickBooksSvgIcon from './QuickBooksSvgIcon';
import TurboTaxSvgIcon from './TurboTaxSvgIcon';
import TurboSvgIcon from './TurboSvgIcon';
import DefaultSvgIcon from './DefaultSvgIcon';

// create dynamic SvgIcon component based on product name prop
const SvgIcon = ({ product }) => {
  switch (product) {
    case 'TurboTax':
      return <TurboTaxSvgIcon />;
    case 'QuickBooks':
      return <QuickBooksSvgIcon />;
    case 'Mint':
      return <MintSvgIcon />;
    case 'ProConnect':
      return <ProConnectSvgIcon />;
    case 'Turbo':
      return <TurboSvgIcon />;
    default:
      return <DefaultSvgIcon />;
  }
};

SvgIcon.propTypes = {
  product: PropTypes.string.isRequired,
};

export default SvgIcon;
