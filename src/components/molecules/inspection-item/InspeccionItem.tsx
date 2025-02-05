import { Grid, Typography, Radio, FormControlLabel, RadioGroup } from "@mui/material"
import { type Control, Controller } from "react-hook-form"
import { FormTextField } from "@/components/atoms/form-text-field/FormTextField"
import type { FormData } from "../../../types/formTypes"

interface InspectionItemProps {
  sectionIndex: number
  itemIndex: number
  description: string
  control: Control<FormData>
}

export const InspectionItem = ({ sectionIndex, itemIndex, description, control }: InspectionItemProps) => {
  const fieldName = `resultados.${sectionIndex}.items.${itemIndex}` as const

  return (
    <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
      <Grid item xs={6}>
        <Typography>{description}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Controller
          name={`${fieldName}.response`}
          control={control}
          render={({ field }) => (
            <RadioGroup {...field} row value={field.value ?? ""} onChange={(e) => field.onChange(e.target.value)}>
              {[
                { value: "si", label: "Sí" },
                { value: "no", label: "No" },
                { value: "na", label: "No aplica" },
              ].map((option) => (
                <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
              ))}
            </RadioGroup>
          )}
        />
      </Grid>
      <Grid item xs={2}>
        <FormTextField name={`${fieldName}.observation`} control={control} label="Observaciones" size="small" />
      </Grid>
    </Grid>
  )
}


