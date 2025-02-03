import type { Control } from "react-hook-form"
import type { FormData } from "../../../../types/formTypes"

export interface IProps {
  item: string
  sectionTitle: string
  control: Control<FormData>
}

