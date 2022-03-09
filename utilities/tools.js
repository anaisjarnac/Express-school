export const listErrors = (err) => {
  let errors = {};
  err.errors &&
    Object.keys(err.errors).map((key) => {
      errors = { ...errors, [key]: err.errors[key].message }; //key au premier tour est égal à name
    });
  err.code === 11000 &&
    Object.keys(err.keyPattern).map((key) => {
      errors = { ...errors, [key]: `C'est mort le nom ${key} existe déja mon pote` };
    });

  return errors;
};
