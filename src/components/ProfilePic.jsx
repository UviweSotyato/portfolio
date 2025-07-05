import UviweImage from "../assets/logo.png";

export default function ProfilePic({ alt = "Profile Picture" }) {
  return (
    <img
      src={UviweImage}
      alt={alt}
      className="w-14 h-14 rounded-full object-cover border-2 border-gray-300 shadow-md dark:border-gray-600 transition-shadow duration-300"
    />
  );
}
