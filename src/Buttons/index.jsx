import { ButtonItem } from "../ButtonItem";
import imageHtml from "../icons/html-5.png"
import imageCss from "../icons/css-3.png";
import imageJavascript from "../icons/js.png";
import imageAccessibility from "../icons/avatar.png";

export const Buttons = () => {
  const options = ["HTML", "CSS", "JavaScript", "Accessibility"];
  const images = [imageHtml, imageCss, imageJavascript, imageAccessibility];

  return (
    <div className="buttons">
      {options.map((option, index) => (
        <ButtonItem key={index} value={option} img={images[index]} />
      ))}
    </div> 
  );
};