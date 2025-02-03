import { Grid, Typography } from "@mui/material"
import { FormRadioGroup } from "@/components/atoms/form-radio-group/FormRadioGroup"
import { FormTextField } from "@/components/atoms/form-text-field/FormTextField"
import type { IProps } from "./types/IProps"

export const InspectionItem = ({ item, sectionTitle, control }: IProps) => {
  const respuestaFieldName = `resultados.${sectionTitle}.${item}.respuesta` as const
  const observacionFieldName = `resultados.${sectionTitle}.${item}.observacion` as const

  return (
    <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }} >
      <Grid item xs={4}>
        <Typography>{item}</Typography>
      </Grid>
      <Grid item xs={4} >
        <FormRadioGroup
          name={respuestaFieldName}
          control={control}
          options={[
            { label: "Sí", value: "SI" },
            { label: "No", value: "NO" },
            { label: "No aplica", value: "NA" },
          ]}
        />
      </Grid>
      <Grid item xs={4}>
        <FormTextField name={observacionFieldName} control={control} label="Observaciones" size="small" />
      </Grid>
    </Grid>
  )
}
