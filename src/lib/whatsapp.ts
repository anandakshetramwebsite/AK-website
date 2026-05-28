export function buildWhatsAppLink(context: string): string {
  const message = `Namaste Ananda Kshethram team,%0A%0AI'm interested in ${context}. Please share availability, pricing, and next steps.%0A%0AThank you.`;
  return `https://wa.me/917799900060?text=${message}`;
}
