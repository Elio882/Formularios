import type { Control } from "react-hook-form"
import type { FormData } from "../../../../types/formTypes"
import type {
  InspectionSection as IInspectionSection,
} from "../../../../types/formTypes";

export interface IProps {
  sectionIndex: number;
    section: IInspectionSection;
    control: Control<FormData>;
}
