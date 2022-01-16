import img1 from "./images/icon-blacklist.svg";
import img2 from "./images/icon-text.svg";
import img3 from "./images/icon-preview.svg";
const data = [
  {
    title: "Quick Search",
    text: "Easily search your snippets by content, category, web address, application, and more.",
  },
  {
    title: "iCloud Sync",
    text: "  Instantly saves and syncs snippets across all your devices.",
  },
  {
    title: "Complete History",
    text: "Retrieve any snippets from the first moment you started using the app.",
  },
];
const logos = [
  {
    img: img1,
    title: "Create blacklist",
    text: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
  },
  {
    img: img2,
    title: "Plain text snippets",
    text: "Remove unwanted formatting from copied text for a consistent look.",
  },
  {
    img: img3,
    title: "Sneak preview",
    text: "Quick preview of all snippets on your Clipboard for easy access.",
  },
];

export default { data, logos };
