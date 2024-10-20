// utils/formatCurrency.js

export const formatCurrency = (amount) => {
  return amount.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });
};
