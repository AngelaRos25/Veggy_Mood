import { useParams, useNavigate } from "react-router-dom";

// icon
import { TbSquareRoundedArrowLeftFilled, TbSquareRoundedArrowUpFilled } from "react-icons/tb";

import "../FootButton/FootButton.css";


function FootButton() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="return-icon">
      <div className="back"
        onClick={() => {
          if (id) {
            navigate(-1);
          } else {
            navigate("/Veggy_Mood/", {
              replace: true,
            });
          }
        }}>
        <TbSquareRoundedArrowLeftFilled />
        <p>back</p>
      </div>

      <div className="top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <TbSquareRoundedArrowUpFilled />
        <p>top</p>
      </div>

    </div>
  )
}

export default FootButton