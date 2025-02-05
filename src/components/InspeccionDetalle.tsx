"use client"

import { useState, useEffect } from "react"
import { Button, Typography, Box, CircularProgress, Snackbar } from "@mui/material"
import { inspeccionService } from "../services/inspeccionService"
import type { FormData } from "../types/formTypes"

const inspeccionId = "3863af65-966b-44e0-8335-3de74546df0f"

export const InspeccionDetalle = () => {
  const [inspeccion, setInspeccion] = useState<FormData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [downloadingPdf, setDownloadingPdf] = useState(false)

  useEffect(() => {
    const fetchInspeccion = async () => {
      try {
        const data = await inspeccionService.obtenerPorId(inspeccionId)
        setInspeccion(data)
      } catch (error) {
        console.error("Error al cargar la inspección:", error)
        setError("No se pudo cargar la información de la inspección.")
      } finally {
        setLoading(false)
      }
    }

    fetchInspeccion()
  }, [])

  const handleDescargarPdf = async () => {
    setDownloadingPdf(true)
    setError(null)
    try {
      await inspeccionService.descargarPdf(inspeccionId)
    } catch (error) {
      console.error("Error al descargar el PDF:", error)
      setError("Hubo un problema al descargar el PDF. Por favor, intente nuevamente.")
    } finally {
      setDownloadingPdf(false)
    }
  }

  if (loading) {
    return <CircularProgress />
  }

  if (error) {
    return <Typography color="error">{error}</Typography>
  }

  if (!inspeccion) {
    return <Typography>No se encontró la inspección</Typography>
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Detalles de la Inspección
      </Typography>
      <Typography variant="h6">Información General</Typography>
      <Box mb={2}>
        {Object.entries(inspeccion.informacionGeneral).map(([key, value]) => (
          <Typography key={key}>
            {key}: {value}
          </Typography>
        ))}
      </Box>
      <Typography variant="h6">Resultados</Typography>
      {inspeccion.resultados.map((seccion) => (
        <Box key={seccion.id} mb={2}>
          <Typography variant="subtitle1">{seccion.category}</Typography>
          {seccion.items.map((item) => (
            <Box key={item.id} ml={2}>
              <Typography>{item.description}</Typography>
              <Typography>Respuesta: {item.response || "No respondido"}</Typography>
              {item.observation && <Typography>Observación: {item.observation}</Typography>}
            </Box>
          ))}
        </Box>
      ))}
      <Typography variant="h6">Observaciones Complementarias</Typography>
      <Typography>{inspeccion.observacionesComplementarias || "Sin observaciones"}</Typography>
      <Box mt={2}>
        <Button onClick={handleDescargarPdf} variant="contained" color="primary" disabled={downloadingPdf}>
          {downloadingPdf ? <CircularProgress size={24} /> : "Descargar PDF"}
        </Button>
      </Box>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)} message={error} />
    </Box>
  )
}




