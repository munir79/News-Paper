
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import q1 from '../assets/qZone1.png';
import q2 from '../assets/qZone2.png';
import q3 from '../assets/qZone3.png';
const RightSIdebar = () => {
  return (
    <div>
      <div className="p-4 space-y-3">
        <h3 className="text-3xl">Log In With </h3>
        <button className="btn btn-outline w-full">

          <FaGoogle /> Google
        </button>

        <button className="btn btn-outline w-full">

        <FaGithub /> Github
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-3xl space-y-3 mb-6"> Find Us On </h3>
        <button className="btn btn-outline w-full"><FaFacebookF /> FaceBook</button>
        <button className="btn btn-outline w-full"><FaTwitter /> Twiter</button>
        <button className="btn btn-outline w-full"><FaInstagram /> Instagram</button>
      </div>

      <div className="p-4">
        <h3 className="text-3xl space-y-3 mb-6"> Q-zone </h3>
        <img src={q1} alt="" />
        <img src={q2} alt="" />
        <img src={q3} alt="" />
       
      </div>
    </div>
  );
};

export default RightSIdebar;