import { type RadioGroupProps } from "@mui/material"
import type { FormData } from "../../../../types/formTypes"
import { type Control} from "react-hook-form"
export interface IProps extends Omit<RadioGroupProps, "name"> {
  name: `resultados.${string}.${string}.respuesta`
  control: Control<FormData>
  options: { label: string; value: string }[]
}