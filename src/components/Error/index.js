import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Error({ data }) {
  return (
    <Container>
      <p>{data.info}</p>
    </Container>
  );
}

Error.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.bool,
    info: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};
