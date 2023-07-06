import styles from "./Modal.module.css";
import Overlay from "../UI/Overlay/Overlay";
function Modal(props) {
  let { ModalStatus, closeModal } = props;
  let { container, closed } = styles;
  return (
    <>
      <div className={`${container} ${ModalStatus ? "" : closed}`}>
        {props.children}
      </div>
      {ModalStatus && <Overlay clickHandler={closeModal} />}
    </>
  );
}

export default Modal;
