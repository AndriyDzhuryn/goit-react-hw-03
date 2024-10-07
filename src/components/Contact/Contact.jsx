import css from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.contactBox}>
      <div className={css.dataContact}>
        <h3 className={css.nameContact}>{name}</h3>
        <p className={css.numberContact}>{number}</p>
      </div>

      <button
        type="submit"
        className={css.btnDeleteContact}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
