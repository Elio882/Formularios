import api from "../lib/axios";
import type { FormData } from "../types/formTypes";

export const inspeccionService = {
  async crear(data: FormData) {
    const response = await api.post<FormData>("/inspecciones", data);
    return response.data;
  },
  async obtenerPorId(id: string): Promise<FormData> {
    const response = await api.get<FormData>(`/inspecciones/${id}`)
    return response.data
  },

  async descargarPdf(id: string) {
    try {
      const response = await api.get(`/inspecciones/${id}/pdf`, {
        responseType: "blob",
      })
      const blob = new Blob([response.data], { type: "application/pdf" })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `inspeccion-${id}.pdf`
      link.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error al descargar el PDF:", error)
      throw error
    }
  },
};
