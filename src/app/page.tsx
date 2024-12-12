export default function Home() {
  return (
    <div className="flex flex-col p-4 w-80">
      <h1 className="text-xl font-bold mb-4">Ollama Email Assistant</h1>
      <p className="text-sm text-gray-600">
        Click the "Generate Reply with Ollama" button in Gmail to generate AI-powered responses.
      </p>
      <div className="mt-4 text-xs text-gray-500">
        Make sure Ollama is running locally on port 11434
      </div>
    </div>
  )
}
