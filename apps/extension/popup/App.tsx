export default function App() {
    return (
      <div className="p-4 flex flex-col gap-4 w-72">
        <h1 className="text-lg font-semibold">VizBlock AI</h1>
        <p className="text-sm">
          ¡Hola! La extensión está activa en: <code>{window.location.hostname}</code>
        </p>
      </div>
    );
  }
  