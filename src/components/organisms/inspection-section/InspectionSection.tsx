import { Box, Typography } from "@mui/material";
import type { Control } from "react-hook-form";
import { InspectionItem } from "@/components/molecules/inspection-item/InspeccionItem";
import type {
  FormData,
  InspectionSection as IInspectionSection,
} from "../../../types/formTypes";

interface InspectionSectionProps {
  sectionIndex: number;
  section: IInspectionSection;
  control: Control<FormData>;
}

export const InspectionSection = ({
  sectionIndex,
  section,
  control,
}: InspectionSectionProps) => (
  <Box sx={{ mt: 4, width: "100%" }}>
    <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mb: 3 }}>
      {section.category}
    </Typography>
    {section.items.map((item, itemIndex) => (
      <InspectionItem
        key={item.id}
        sectionIndex={sectionIndex}
        itemIndex={itemIndex}
        description={item.description}
        control={control}
      />
    ))}
  </Box>
);
