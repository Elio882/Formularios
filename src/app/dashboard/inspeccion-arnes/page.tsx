"use client";

import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

interface FormData {
  superintendencia: string;
  trabajador: string;
  supervisor: string;
  area: string;
  num_inspeccion: string;
  cod_conector: string;
  cod_arnes: string;
  fecha: string;
  observaciones: string;
  resultados: Record<string, string>;
}

const items = [
  "Amortiguador de caídas - Desgaste del protector",
  "Amortiguador de caídas - Testigo activado",
  "Tejido trenzado - Fibras rotas",
  "CONECTORES - Ganchos de seguridad dañados",
  "Hebillas - Corrosión de la hebilla",
];

export default function page() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Datos enviados:", data);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: "100%",
        borderRadius: 2,
        //flexGrow: "1 !important",
      }}
    >
      <Grid container spacing={0} direction={"row"}>
        <Grid container spacing={0} direction={"row"} sx={{ width: "100%" }}>
          <Grid
            size={{ xs: 2, sm: 3, md: 2 }}
            sx={{
              backgroundColor: "#f0f0f0",
              border: "2px solid #000",
            }}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
          >
            <Image
              src="/MSC.png"
              width={100}
              height={50}
              alt="Picture of the MSC"
            />
          </Grid>
          <Grid
            size={{ xs: 2, sm: 6, md: 8 }}
            sx={{
              backgroundColor: "#f0f0f0",
              border: "2px solid #000",
            }}
          >
            <Typography
              variant="h5"
              mb={2}
              align="center"
              sx={{ textTransform: "uppercase" }}
            >
              Lista de Chequeo - Arnés y Conectores <br />
              Sistema de Protección personal contra caidas
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 2, sm: 3, md: 2 }}
            sx={{
              backgroundColor: "#f0f0f0",
              border: "2px solid #000",
            }}
          >
            <Typography align="center">
              1.02.P06.F19 <br />
              Revisión: 4
            </Typography>
            <Typography
              align="center"
              sx={{ textTransform: "uppercase", borderTop: "2px solid" }}
            >
              interno
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} direction={"row"} sx={{ width: "100%" }}>
          {/* Campos de identificación */}
          <Grid size={{ xs: 2, sm: 3, md: 3 }}>
            <Controller
              name="superintendencia"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="SUPERINTENDENCIA:"
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 2, sm: 3, md: 3 }}>
            <Controller
              name="area"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="ÁREA/SECCIÓN:"
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 2, sm: 3, md: 3 }}>
            <Controller
              name="trabajador"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nombre trabajador:"
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 2, sm: 3, md: 3 }}>
            <Controller
              name="fecha"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Fecha"
                  type="date"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 3, md: 3 }}>
            <Controller
              name="num_inspeccion"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nº Inspección"
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 2, sm: 3, md: 3 }}>
            <Controller
              name="supervisor"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nombre supervisor:"
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 2, sm: 3, md: 3 }}>
            <Controller
              name="cod_arnes"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="COD. ARNÉS"
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 2, sm: 3, md: 3 }}>
            <Controller
              name="cod_conector"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="COD. CONECTOR"
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </Grid>

          {/* Preguntas del checklist */}
          {items.map((item, index) => (
            <Box key={index} sx={{ mt: 2 }}>
              <Typography>{item}</Typography>
              <Controller
                name={`resultados.${item}` as const}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <RadioGroup {...field} row>
                    <FormControlLabel
                      value="SI"
                      control={<Radio />}
                      label="Sí"
                    />
                    <FormControlLabel
                      value="NO"
                      control={<Radio />}
                      label="No"
                    />
                    <FormControlLabel
                      value="NA"
                      control={<Radio />}
                      label="No aplica"
                    />
                  </RadioGroup>
                )}
              />
            </Box>
          ))}
          {/* Observaciones */}
          <Controller
            name="observaciones"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Observaciones"
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />
            )}
          />
        </Grid>

        {/* Botón de enviar */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Enviar
        </Button>
      </Grid>
    </Box>
  );
}
