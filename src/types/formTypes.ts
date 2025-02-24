export type CheckboxOption = "si" | "no" | "na"
export type OperativoOption = "SI" | "NO"

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

export type InspectionTitle ={
  id: string
  title: string
  items: InspectionSection[]
}

export type FormData = {
  documentCode:string 
  revisionNumber:number 
  informacionGeneral: {
    superintendencia: string
    trabajador: string
    supervisor: string
    area: string
    numInspeccion: string
    codConector: string
    codArnes: string
    fecha: Date
  }
  resultados: InspectionTitle[]
  operativo:  OperativoOption | null
  observacionesComplementarias: string
  inspectionConductedBy: string
  firmaInspector: string
  inspectionApprovedBy: string
  firmaSupervisor: string
  reviewDate: Date
}

export type FormFieldName =
  | `informacionGeneral.${keyof FormData["informacionGeneral"]}`
  | `resultados.${number}.items.${number}.items.${number}.response`
  | `resultados.${number}.items.${number}.items.${number}.observation`
  | "observacionesComplementarias"
  | "reviewDate"
  | "inspectionApprovedBy"
  | "inspectionConductedBy"
  | "firmaInspector"
  | "firmaSupervisor"



  // Crear FormDataExport extendiendo FormData
export interface FormDataExport extends FormData {
  _id: string
}