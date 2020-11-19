import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from '@lskjs/modal';

class SizesModal extends PureComponent {
  render() {
    const { children, ...props } = this.props;
    return (
      <Modal whiteTheme trigger={children} size="large" {...props}>
        <Modal.Title whiteTheme />
        <Modal.Content>Здесь будет таблица размеров</Modal.Content>
      </Modal>
    );
  }
}

SizesModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

SizesModal.defaultProps = {
  children: null,
};
export default SizesModal;
