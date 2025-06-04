const dashboards = [
  { name: 'Analytics Dashboard', path: '/dashboard-analytics' },
  { name: 'Ecommerce Dashboard', path: '/dashboard-ecommerce' },
  { name: 'Finance Dashboard', path: '/dashboard-finance' },
];

export function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col items-center px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">React Dashboard Showcase</h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl mb-8">
        A collection of beautiful, responsive, and modular dashboard templates built with React, Tailwind CSS, and Nx Monorepo.
      </p>

      <div className="mb-12 text-center">
        <span className="text-gray-400">Created by </span>
        <a
          href="https://bsky.app/profile/olsiodobashi.bsky.social"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Olsi Odobashi
        </a>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {dashboards.map((dash) => (
          <a
            key={dash.path}
            href={dash.path}
            className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-2xl shadow-lg border border-gray-700 text-center"
          >
            <h2 className="text-xl font-semibold">{dash.name}</h2>
            <p className="text-sm text-gray-400 mt-2">View Demo →</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
