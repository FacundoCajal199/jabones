import { LiaWhatsapp} from "react-icons/lia";
const BotonWsp = () => {
  return (
    <>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=%2B543812021287&text="
          class="btn-wsp"
          target="_blank"
        >
          <LiaWhatsapp className="bx bxl-whatsapp iconWsp"> </LiaWhatsapp>
        
        </a>
      </div>
    </>
  );
};
export default BotonWsp;
