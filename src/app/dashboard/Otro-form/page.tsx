"use client";
import { useForm } from "react-hook-form";
import { Box, Typography, Button, Grid } from "@mui/material";
import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";
import { FormTextField } from "@/components/atoms/form-text-field/FormTextField";
import { InspectionSection } from "@/components/organisms/inspection-section/InspectionSection";
import type { FormData, SectionResults } from "../../../types/formTypes";
const sections = [

  { 
    title: "ARGOLLAS EN D O ANILLOS",
    items: [
      "Picaduras, grietas, trizaduras (que abarquen un 50% de una sección)",
      "Corrosión de la argolla (Corrosión de toda la argolla) ",
      "Con deformaciones o desgaste excesivo (dobladura, etc.) ",
    ],
  },
  {
    title: "CINTAS Y/O FLEJES",
    items: [
      "Desgaste excesivo o cortes",
      "Deformación o abolladuras",
      "Corrosión",
    ],
  },
  {
    title: "GANCHOS",
    items: ["Deformación o abolladuras", "Grietas o fisuras", "Corrosión"],
  },
  {
    title: "HEBILLAS",
    items: ["Deformación o abolladuras", "Grietas o fisuras", "Corrosión"],
  },
  {
    title: "COSTURAS",
    items: ["Descosidos o roturas", "Desgaste excesivo"],
  },
  {
    title: "CONECTORES",
    items: [
      "Daños en el aislante",
      "Contactos flojos o dañados",
      "Deformación o roturas",
    ],
  },
];


export default function page() {
  const defaultValues: FormData = {
    superintendencia: "",
    trabajador: "",
    supervisor: "",
    area: "",
    num_inspeccion: "",
    cod_conector: "",
    cod_arnes: "",
    fecha: "",
    observaciones: "",
    resultados: sections.reduce<{ [key: string]: SectionResults }>(
      (acc, section) => {
        acc[section.title] = section.items.reduce<SectionResults>(
          (itemAcc, item) => {
            itemAcc[item] = {
              respuesta: "",
              observacion: "",
            };
            return itemAcc;
          },
          {}
        );
        return acc;
      },
      {}
    ),
    firma: "",
  };
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues,
    mode: "onChange",
  });

  const sigCanvasRef = useRef<SignatureCanvas | null>(null);

  const onSubmit = (data: FormData) => {
    if (sigCanvasRef.current) {
      const signature = sigCanvasRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      data.firma = signature;
    }
    console.log("Datos enviados:", data);
  };

  const clearSignature = () => {
    sigCanvasRef.current?.clear();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: "100%", borderRadius: 2 }}
    >
      <Grid container spacing={2}>
        {/* Header */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" sx={{ mt: 2, mb: 2 }}>
            INSPECCIÓN DE ARNES DE SEGURIDAD
          </Typography>
        </Grid>

        {/* Form fields */}
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="superintendencia"
              control={control}
              label="SUPERINTENDENCIA:"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="trabajador"
              control={control}
              label="TRABAJADOR:"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="supervisor"
              control={control}
              label="SUPERVISOR:"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField name="area" control={control} label="AREA:" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="num_inspeccion"
              control={control}
              label="NÚMERO DE INSPECCIÓN:"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="cod_conector"
              control={control}
              label="COD. CONECTOR:"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="cod_arnes"
              control={control}
              label="COD. ARNES:"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="fecha"
              control={control}
              label=""
              type="date"
            />
          </Grid>
        </Grid>

        {/* Inspection sections */}
        <Grid item xs={12}>
          <Typography align="center" sx={{ textTransform: "uppercase" }}>
            ARNES <br />
            HERRAJES(Componentes palsticos y metalicos integrales del arnes)
          </Typography>
          {sections.map((section, index) => (
            <InspectionSection
              key={index}
              title={section.title}
              items={section.items}
              control={control}
            />
          ))}
        </Grid>

        {/* Observations */}
        <Grid item xs={12}>
          <FormTextField
            name="observaciones"
            control={control}
            label="OBSERVACIONES:"
            multiline
            rows={4}
          />
        </Grid>

        {/* Signature */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Firma Digital
          </Typography>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: 2,
              width: "100%",
              height: 200,
              mb: 2,
            }}
          >
            <SignatureCanvas
              ref={sigCanvasRef}
              canvasProps={{
                width: 760,
                height: 200,
                className: "sigCanvas",
              }}
            />
          </Box>
          <Button onClick={clearSignature} variant="outlined" color="secondary">
            Limpiar Firma
          </Button>
        </Grid>

        {/* Submit button */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, width: "25%" }}
            >
              Enviar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
