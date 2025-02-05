import { Grid, Typography, Button, Box } from "@mui/material"
import { FormTextField } from "@/components/atoms/form-text-field/FormTextField"
import { InspectionSection } from "@/components/organisms/inspection-section/InspectionSection"
import SignatureCanvas from "react-signature-canvas"
import { useRef } from "react"
import type {IProps} from "./types/IProps"



export const InspectionForm = ({ control, onSubmit, sections }: IProps) => {
  const sigCanvasRef = useRef<SignatureCanvas | null>(null)

  const clearSignature = () => {
    sigCanvasRef.current?.clear()
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" sx={{ mt: 2, mb: 2 }}>
          INSPECCIÓN DE SEGURIDAD
        </Typography>
      </Grid>

      <Grid item xs={12} container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <FormTextField name="informacionGeneral.superintendencia" control={control} label="SUPERINTENDENCIA:" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormTextField name="informacionGeneral.trabajador" control={control} label="Nombre Trabajador:" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormTextField name="informacionGeneral.supervisor" control={control} label="Nombre Supervisor:" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormTextField name="informacionGeneral.area" control={control} label="ÁREA/SECCIÓN:" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormTextField name="informacionGeneral.numInspeccion" control={control} label="Nº INSPECCIÓN:" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormTextField name="informacionGeneral.codConector" control={control} label="COD. CONECTOR:" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormTextField name="informacionGeneral.codArnes" control={control} label="COD. ARNÉS:" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormTextField
            name="informacionGeneral.fecha"
            control={control}
            label="FECHA:"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography align="center" sx={{ textTransform: "uppercase", mt: 4, mb: 2 }}>
          ITEMS DE INSPECCIÓN
        </Typography>
        {sections.map((section, index) => (
          <InspectionSection key={section.id} sectionIndex={index} section={section} control={control} />
        ))}
      </Grid>

      <Grid item xs={12}>
        <FormTextField
          name="observacionesComplementarias"
          control={control}
          label="OBSERVACIONES COMPLEMENTARIAS:"
          multiline
          rows={4}
        />
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h6" gutterBottom>
          Firma del Inspector
        </Typography>
        <Box sx={{ border: "1px solid #ccc", borderRadius: 2, width: "100%", height: 200, mb: 2 }}>
          <SignatureCanvas
            ref={sigCanvasRef}
            canvasProps={{
              width: 380,
              height: 200,
              className: "sigCanvas",
            }}
          />
        </Box>
        <Button onClick={clearSignature} variant="outlined" color="secondary">
          Limpiar Firma
        </Button>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h6" gutterBottom>
          Firma del Supervisor
        </Typography>
        <Box sx={{ border: "1px solid #ccc", borderRadius: 2, width: "100%", height: 200, mb: 2 }}>
          <SignatureCanvas
            canvasProps={{
              width: 380,
              height: 200,
              className: "sigCanvas",
            }}
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box display="flex" justifyContent="center">
          <Button onClick={onSubmit} variant="contained" color="primary" sx={{ mt: 2, width: "25%" }}>
            Enviar
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

