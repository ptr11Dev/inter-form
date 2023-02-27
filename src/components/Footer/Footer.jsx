import "./Footer.css";

const Footer = ({ okText, laterText }) => {
  return (
    <div className="footerContaier">
      <button className="button">{okText}</button>
      <button className="button">{laterText}</button>
    </div>
  );
};
export default Footer;
