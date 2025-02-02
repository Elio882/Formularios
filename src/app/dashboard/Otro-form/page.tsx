"use client"

import type React from "react"
import { useForm, Controller, type SubmitHandler } from "react-hook-form"
import { TextField, Checkbox, FormControlLabel, Typography, Grid, Paper, Button, Box } from "@mui/material"

interface FormData {
  area: string
  numeroInspeccion: string
  codigoConector: string
  codigoArnes: string
  fecha: string
  observaciones: string
  nombreTrabajador: string
  nombreSupervisor: string
  [key: string]: boolean | string // Para los checkboxes dinámicos
}

const page: React.FC = () => {
  const { control, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
    // Aquí puedes manejar el envío del formulario
  }

  const renderCheckboxGroup = (title: string, items: string[]) => (
    <Box mb={2}>
      <Typography variant="subtitle1" gutterBottom>
        {title}
      </Typography>
      {items.map((item, index) => (
        <Controller
          key={index}
          name={`${title.replace(/\s+/g, "")}_${index}`}
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel control={<Checkbox {...field} checked={field.value as boolean} />} label={item} />
          )}
        />
      ))}
    </Box>
  )

  return (
    <Paper elevation={3} sx={{ p: 3, m: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" gutterBottom>
          Lista de Chequeo Arnés y Conectores
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Sistema de Protección Personal Contra Caídas
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="area"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} fullWidth label="ÁREA/SECCIÓN" variant="outlined" margin="normal" />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="numeroInspeccion"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} fullWidth label="Nº INSPECCIÓN" variant="outlined" margin="normal" />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="codigoConector"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} fullWidth label="COD. CONECTOR" variant="outlined" margin="normal" />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="codigoArnes"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} fullWidth label="COD. ARNÉS" variant="outlined" margin="normal" />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="fecha"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="FECHA"
                  variant="outlined"
                  margin="normal"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
        </Grid>

        {renderCheckboxGroup('1. ARGOLLAS EN "D" O ANILLOS', [
          "Picaduras, grietas, trizaduras (que abarquen un 50% de una sección)",
          "Corrosión de la argolla (Corrosión de toda la argolla)",
          "Con deformaciones o desgaste excesivo (dobladura, etc.)",
        ])}

        {renderCheckboxGroup("2. PROTECTOR DE ESPALDA", [
          "Cortes (que pasan todo el grosor de la pieza)",
          "Deterioro por uso o calor (reseco)",
        ])}

        {renderCheckboxGroup("3. HEBILLAS", [
          "Corrosión de las hebillas (corrosión de toda la hebilla)",
          "Defecto de funcionamiento (no enganchan o se traban)",
          "Picaduras, grietas, trizaduras, quemaduras. (que abarquen un 50% de una sección)",
          "Desgaste excesivo o deformaciones (dobladuras, etc.)",
        ])}

        {renderCheckboxGroup("4. PASADORES", [
          "Cortes (que pasan todo el grosor de la pieza)",
          "Deterioro por uso o calor (reseco)",
        ])}

        {renderCheckboxGroup("5. TEJIDO TRENZADO (Correas de fibra sintética)", [
          "Presenta partes deshilachadas",
          "Tiene cortes",
          "Tiene fibras rotas",
          "Presenta rasgaduras",
          "Presenta daños por radiación ultravioleta: decoloración y presencia de astillas en la superficie del tejido trenzado (desintegración polvorienta)",
          "Presenta daños por calor o productos químicos: manchas marrones, zonas decoloradas, áreas quebradizas",
        ])}

        {renderCheckboxGroup("6. AGUJEROS (POR QUEMADURAS O CORTES)", [
          'Agujeros mayores a 1/16" (1,59 mm) en correas de hombro, pierna o parte mas resistente del arnés',
          "Presencia de más de un (1) agujero pasante en la correa",
          'Agujeros mayores a 1/4" (6,35 mm) en correas de pecho o los protectores',
        ])}

        {renderCheckboxGroup("7. COSTURAS", [
          "Pérdida de costura",
          "Daño de costura por calor o fricción",
          "Más de dos (2) hilos cortados o rotos en el mismo patrón",
          "Cortes que llegaron a las costuras",
        ])}

        {renderCheckboxGroup("8. DAÑO POR CALOR", [
          "Quemaduras en correas de hombro, pierna o parte resistente del arnés",
          "Quemadura en el protector de espalda que pasen su grosor",
          "Las costuras han sido afectadas por quemaduras (perdida de costura)",
          'Quemadura cerca al anillo "D" dorsal',
          'Agujeros, quemaduras o cortes cerca al anillo "D" dorsal (de cualquier tamaño)',
          'Cortes mayores a 1/8" (3,18 mm) en cualquier parte del tejido trenzado',
        ])}

        {renderCheckboxGroup("9. GANCHOS DE SEGURIDAD, AJUSTADORES, GUARDACABOS, BARRA EXPANSORA", [
          "Presentan daños (que afecten su cierre o funcionalidad)",
          "Están rotos o rajados (cualquier daño)",
          "Presentan deformación (que afecte su cierre o funcionalidad)",
          "Presentan corrosión (Corrosión de toda la argolla)",
          "Presentas bordes afilados (que puedan causar cortes al conector durante su uso)",
          "Resortes con fallas (trabado)",
        ])}

        {renderCheckboxGroup("10. AMORTIGUADOR DE CAIDAS", [
          "Desgaste del protector, deformación, quemaduras",
          "Testigo activado",
        ])}

        <Controller
          name="observaciones"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Observaciones Complementarias"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
          )}
        />

        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="nombreTrabajador"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField {...field} fullWidth label="Nombre Trabajador" variant="outlined" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="nombreSupervisor"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField {...field} fullWidth label="Nombre Supervisor" variant="outlined" />}
            />
          </Grid>
        </Grid>

        <Box mt={3}>
          <Typography variant="body1" gutterBottom>
            QUE DEBE HACER SI MARCO ALGUNA CASILLA ROJA "NO LO USE"
          </Typography>
          <Typography variant="body2">
            Si usted nota que el arnés, conector u otro de los dispositivos inspeccionados se encuentra EN MAL ESTADO O
            DEFECTUOSO, estos deben ser removidos cuanto antes del lugar de trabajo y dados de baja cortándolos
            (coordine con su Supervisor). "NO LO USE"
          </Typography>
        </Box>

        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary">
            Guardar Inspección
          </Button>
        </Box>
      </form>
    </Paper>
  )
}

export default page

