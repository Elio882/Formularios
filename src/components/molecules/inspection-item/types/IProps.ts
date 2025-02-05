import type { Control } from "react-hook-form"
import type { FormData } from "../../../../types/formTypes"

export interface IProps {
  sectionIndex: number
  itemIndex: number
  title: string
  control: Control<FormData>
}

