import { ValidationError } from 'yup';

interface Errors {
  // desta forma vc diz para o typescript que ele vai receber uma string
  // e que o valor tb tem que ser uma string
  // a palavra key não significa nada, poderia ser qualquer nome.
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
