import "./Dialog.css";

export default function Dialog({ isOpen, children }) {
  return (
    <>
      <div className={isOpen ? "overlay open" : "overlay hidden"}></div>
      <dialog className="dialog" open={isOpen}>
        {children}
      </dialog>
    </>
  );
}
