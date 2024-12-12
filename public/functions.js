const mailto = "./../mail.php";

export const fetchToMail = async (e, form) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log([...formData]);
  try {
    const response = await fetch(mailto, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      console.log("sended");
      form.reset();
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Ошибка:", error);
    return false;
  }
};

export const handleSubmit = async (
  e,
  form,
  setFetchedDescr,
  privacyCheckbox,
  infoCheckbox,
  privacyError,
  setPrivacyError,
  infoError,
  setInfoError,
  setFileInput,
  setOrderCodeGenerator,
  documentPhoto
) => {
  e.preventDefault();
  const formData = fetchToMail(e, form);
  if (formData && privacyCheckbox && infoCheckbox) {
    privacyError ? setPrivacyError(false) : null;
    infoError ? setInfoError(false) : null;
    if (documentPhoto) {
      setOrderCodeGenerator(true);
    } else {
      setFetchedDescr(true);
      setTimeout(() => setFetchedDescr(false), 4500);
    }
  } else if (!privacyCheckbox && !infoCheckbox) {
    setPrivacyError(true);
    setInfoError(true);
    setTimeout(() => {
      setPrivacyError(false);
      setInfoError(false);
    }, 1500);
  } else if (!privacyCheckbox) {
    setPrivacyError(true);
    setTimeout(() => setPrivacyError(false), 1500);
  } else if (!infoCheckbox) {
    setInfoError(true);
    setTimeout(() => setInfoError(false), 1500);
  }
  setFileInput(false);
};

export const calculateWithDiscount = (sum, discount) => {
  return sum - (sum * discount) / 100;
};

// Функция для расчета стоимости дополнительного фото
export const calculateAdditionalPhotoSum = (
  quantity,
  minQuantity,
  additionalPrice
) => {
  return (quantity - minQuantity) * additionalPrice;
};

// Функция для расчета стоимости электронного формата
export const calculateElectroFormat = () => {
  return electroQuantity && electroType ? currentSize.priceOnline : 0;
};

export const createFullDate = (date, code) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  if (code) {
    return `${day}/${month}`;
  } else {
    return `${day}-${month}-${year}`;
  }
};

export const generateOrderCode = () => {
  const fullDate = createFullDate(new Date(), true);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let randomLetters = "";
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    randomLetters += letters[randomIndex];
  }
  const code = `${fullDate}-${randomLetters}`;
  return code;
};
