export default function DebugPage() {
    return (
      <div style={{ padding: '20px', fontFamily: 'monospace' }}>
        <h1>🔍 Debug Variables de Entorno</h1>
        <pre>
          SMTP_USER: {process.env.SMTP_USER ? '✅ Cargado' : '❌ No cargado'}
          SMTP_PASSWORD: {process.env.SMTP_PASSWORD ? '✅ Cargado' : '❌ No cargado'}
          EMAIL_TO: {process.env.EMAIL_TO ? '✅ Cargado' : '❌ No cargado'}
          NODE_ENV: {process.env.NODE_ENV}
        </pre>
      </div>
    );
  }