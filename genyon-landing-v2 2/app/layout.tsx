export const metadata = {
  title: 'GENYON — Sistema biológico inteligente',
  description: 'Medicina antes da medicina. Desenvolvido com ciência de ponta e potenciado por IA.'
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="pt"><body>{children}</body></html>)
}
