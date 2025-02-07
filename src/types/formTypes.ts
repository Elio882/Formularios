export type CheckboxOption = "si" | "no" | "na"

export type InspectionItem = {
  id: string
  description: string
  response: CheckboxOption | null
  observation: string
}

export type InspectionSection = {
  id: string
  category: string
  items: InspectionItem[]
}

export type FormData = {
  informacionGeneral: {
    superintendencia: string
    trabajador: string
    supervisor: string
    area: string
    numInspeccion: string
    codConector: string
    codArnes: string
    fecha: string
  }
  resultados: InspectionSection[]
  observacionesComplementarias: string
  firmaInspector: string
  firmaSupervisor: string
}

export type FormFieldName =
  | `informacionGeneral.${keyof FormData["informacionGeneral"]}`
  | `resultados.${number}.items.${number}.response`
  | `resultados.${number}.items.${number}.observation`
  | "observacionesComplementarias"
  | "firmaInspector"
  | "firmaSupervisor"

