

export const wrapText = (text:string, maxLength:number) => {
  const words = text.split(' ');
  let currentLine = '';
  const lines = [];

  words.forEach((word) => {
    if (word.length > maxLength) {
      // Break the long word into chunks of maxLength characters
      if(currentLine.length)
        lines.push(currentLine.trim());
      currentLine = '';
      for (let i = 0; i < word.length; i += maxLength) {
        lines.push(word.slice(i, i + maxLength).trim());
      }
    } else if ((currentLine + word).length > maxLength) {
      lines.push(currentLine.trim());
      currentLine = word + ' ';
    } else {
      currentLine += word + ' ';
    }
  });

  lines.push(currentLine.trim());

  return lines.join('\n').trim();
};