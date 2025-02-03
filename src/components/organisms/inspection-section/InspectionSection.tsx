import { Box, Typography } from "@mui/material"
import { InspectionItem } from "@/components/molecules/inspection-item/InspeccionItem"
import type { IProps } from "./types/IProps"

export const InspectionSection = ({ title, items, control }: IProps) => (
  <Box sx={{ mt: 4, width: "100%" }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    {items.map((item, index) => (
      <InspectionItem key={index} item={item} sectionTitle={title} control={control} />
    ))}
  </Box>
)
