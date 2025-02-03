import type { Control } from "react-hook-form"
import type { FormData } from "../../../../types/formTypes"

export interface IProps {
  title: string
  items: string[]
  control: Control<FormData>
}
