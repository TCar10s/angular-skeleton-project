import { InjectionToken } from '@angular/core';

interface RequiredFields {
  requiredLength: number;
  actualLength: number;
}

interface listErrors {
  required: (_: any) => string;
  min: (min: number) => string;
  max: (min: number) => string;
  repetido: () => string;
  email: () => string;
  minlength: ({ requiredLength, actualLength }: RequiredFields) => string;
  maxlength: ({ requiredLength, actualLength }: RequiredFields) => string;
}

export const listErrors: listErrors = {
  required: (_: string) => 'Dato <strong> obligatorio </strong>',
  min: ({ min }: any): string => `Valor mínimo ${min}`,
  max: ({ max }: any): string => `Valor máximo ${max}`,
  repetido: (): string => 'Elemento repetido',
  email: (): string => 'Esto no es un correo',
  minlength: ({ requiredLength, actualLength }): string =>
    `Mínimo <strong>${requiredLength}</strong> caracteres, actual <strong>${actualLength}</strong>`,
  maxlength: ({ requiredLength, actualLength }): string =>
    `Máximo <strong>${requiredLength}</strong> caracteres, actual <strong>${actualLength}</strong>`,
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: (): listErrors => listErrors,
});
