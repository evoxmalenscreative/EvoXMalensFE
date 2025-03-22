import { useEffect } from "react";
import whatsappIcon from "../../public/img/wa.svg"; // Sesuaikan path gambar jika perlu

const WhatsappButton = () => {
  useEffect(() => {
    const progressWrap = document.querySelector(".progress-wrap");
    if (!progressWrap) return; // Cegah error jika elemen tidak ditemukan

    const offset = 150;

    const handleScroll = () => {
      if (window.scrollY > offset) {
        progressWrap.classList.add("active-progress");
      } else {
        progressWrap.classList.remove("active-progress");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    window.open("https://wa.me/62895384658418", "_blank"); // Ganti dengan nomor WhatsApp
  };

  return (
    <div
      className="progress-wrap whatsapp-wrap"
      onClick={handleClick}
      style={styles.button}
    >
      <img src="/img/wa.svg" alt="WhatsApp" style={styles.icon} />
    </div>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "opacity 0.3s ease-in-out",
  },
  icon: {
    width: "30px",
    height: "30px",
  },
};

export default WhatsappButton;
