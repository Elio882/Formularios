export type InspectionResult = {
  respuesta: string;  // Ahora es un arreglo para permitir múltiples respuestas
  observacion: string;
};

export type SectionResults = {
  [item: string]: InspectionResult;
};

export type FormData = {
  superintendencia: string;
  trabajador: string;
  supervisor: string;
  area: string;
  num_inspeccion: string;
  cod_conector: string;
  cod_arnes: string;
  fecha: string;
  observaciones: string;
  resultados: {
    [sectionTitle: string]: SectionResults;
  };
  firma: string;
};

export type FormFieldName =
  | keyof FormData
  | `resultados.${string}.${string}.respuesta`
  | `resultados.${string}.${string}.observacion`;
