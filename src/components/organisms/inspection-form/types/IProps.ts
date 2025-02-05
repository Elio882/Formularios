import { Control } from "react-hook-form";

import type { FormData, InspectionSection as IInspectionSection } from "../../../../types/formTypes"

export interface IProps {
    control: Control<FormData>
    onSubmit: () => void
    sections: IInspectionSection[]
}