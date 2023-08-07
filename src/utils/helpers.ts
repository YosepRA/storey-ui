function capitalizeFirstLetter(text: string) {
  const splitText = text.split(' ');
  const capitalized = splitText.map(
    (word) => `${word[0].toUpperCase()}${word.slice(1)}`,
  );

  return capitalized.join(' ');
}

export { capitalizeFirstLetter };
