export const extensionToRecourceName = (extension: string) => {
  const parsedExtenstion = extension.replaceAll(".", "");

  switch (parsedExtenstion) {
    case "mp3":
      return "sound.svg";
    case "png":
    case "jpg":
    case "jpeg":
      return "image.svg";
    case "mp4":
      return "video.svg";
    default:
      return `${parsedExtenstion}.svg`;
  }
};
