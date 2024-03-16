import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css["wrapper-for-item"]}>
          <FaUser></FaUser>
          <p className={css.text}>{name}</p>
        </div>
        <div>
          <BsFillTelephoneFill></BsFillTelephoneFill>
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
