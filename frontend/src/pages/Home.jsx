export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600">Cloud Optimizer</h1>
      <p className="mt-4 text-gray-700 text-lg">
        Optimize cloud spend, performance, and security.
      </p>
      <button className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500">
        Get Started
      </button>
    </main>
  );
}
