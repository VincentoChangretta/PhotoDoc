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
  setFetchedModal,
  privacyCheckbox,
  infoCheckbox,
  privacyError,
  setPrivacyError,
  infoError,
  setInfoError,
  setFileInput
) => {
  e.preventDefault();
  const formData = fetchToMail(e, form);
  if (formData && privacyCheckbox && infoCheckbox) {
    privacyError ? setPrivacyError(false) : null;
    infoError ? setInfoError(false) : null;
    setFetchedModal(true);
    setTimeout(() => setFetchedModal(false), 4500);
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

export const createFullDate = date => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`
}
