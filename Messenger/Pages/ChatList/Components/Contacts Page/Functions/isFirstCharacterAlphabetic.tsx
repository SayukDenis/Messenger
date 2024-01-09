

const isFirstCharacterAlphabetic = (str: string): boolean => {
    return /[A-Za-zÀ-ÖØ-öø-ÿĀ-žΆ-ΩΆ-ωА-Яа-яҐґІіЇїЄє]/.test(str.charAt(0));
  };

  export default isFirstCharacterAlphabetic