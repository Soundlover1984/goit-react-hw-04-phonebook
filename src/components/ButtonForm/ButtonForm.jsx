import PropTypes from 'prop-types';
import { BtnElement } from './ButtonForm.styled';

export const ButtonForm = ({
  text,
  status,
  disabled = false,
  icon: Icon = null,
  type = 'button',
  onClick = null,
  onSubmit = null,
}) => {
  return (
    <BtnElement
      status={status}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {Icon && <Icon></Icon>}
      {text}
    </BtnElement>
  );
};

ButtonForm.propTypes = {
  icon: PropTypes.any,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  status: PropTypes.string,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};
