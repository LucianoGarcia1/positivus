export const ButtonCta = ({ children, click, type, classe }) => {
  return (
    <button className={classe} type={type} onClick={click}>
      {children}
    </button>
  );
};
