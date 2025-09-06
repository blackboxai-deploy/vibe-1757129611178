import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <title>Hola a Todos - Test Page</title>
      </head>
      <body>{children}</body>
    </html>
  )
}