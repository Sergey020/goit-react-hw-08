import { FaUser } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleClickDelete = () => dispatch(deleteContact(id));

  return (
    <div>
      <div>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <MdLocalPhone />
          {number}
        </p>
      </div>
      <button onClick={handleClickDelete}>Delete</button>
    </div>
  );
};

export default Contact;
