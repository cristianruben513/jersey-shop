import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading
} from "@/components/page-header"

export default function HeaderSection() {
  return (
    <PageHeader
      as="section"
      className="mx-auto items-center gap-2 text-center"
      withPadding
    >
      <PageHeaderHeading
        className="animate-fade-up"
        style={{ animationDelay: "0.20s", animationFillMode: "both" }}
      >
        Variedad de las mejores camisas
      </PageHeaderHeading>

      <PageHeaderDescription
        className="max-w-[46.875rem] animate-fade-up"
        style={{ animationDelay: "0.30s", animationFillMode: "both" }}
      >
        Ofrecemos una amplia variedad de camisas de la mejor calidad y al mejor precio del mercado para que lleves la pasion a todas partes
      </PageHeaderDescription>
    </PageHeader>
  )
}