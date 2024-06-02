import { ErrorCard } from "@/components/error-card"
import { Shell } from "@/components/shell"

export default function ProductModalNotFound() {
  return (
    <Shell variant="centered" className="max-w-md">
      <ErrorCard
        title="Producto no encontrado"
        description="El producto que buscas no existe o ha sido eliminado."
        retryLink="/"
        retryLinkText="Volver al inicio"
      />
    </Shell>
  )
}