import PropTypes from 'prop-types';
import { MdPersonRemoveAlt1 } from 'react-icons/md';
import { ListItem, ListItemData } from './ContactItems.styled';
import { ButtonForm } from 'components/ButtonForm/ButtonForm';

export const ContactItem = ({ id, name, number, onDeleteBtnClick }) => {
  return (
    <ListItem>
      <ListItemData>
        {name}: {number}
      </ListItemData>
      <ButtonForm
        icon={MdPersonRemoveAlt1}
        type="button"
        status="delete"
        text="Delete contact"
        onClick={() => onDeleteBtnClick(id, name)}
      />
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
};
