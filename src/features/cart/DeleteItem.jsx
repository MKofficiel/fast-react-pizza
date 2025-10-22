import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { removeItem } from './cartSlice';

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  function handleDelete(pizzaId) {
    dispatch(removeItem(pizzaId));
  }

  return (
    <Button type="small" onClick={() => handleDelete(pizzaId)}>
      Delete
    </Button>
  );
};

export default DeleteItem;
