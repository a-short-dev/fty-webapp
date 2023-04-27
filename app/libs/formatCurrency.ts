function formatCurrency(value: number) {
  let converted = Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(value);

  return converted;
}

export default formatCurrency;

export const useFormatCurrency = (amount: number) => {
  let toConvert = amount;
  function format() {
    const formatterd = Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(toConvert);

    return formatterd;
  }

  return {
    format,
  };
};
