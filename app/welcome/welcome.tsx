export function Welcome() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full space-y-16">
          {/* Hero Section */}
          <header className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              The Troops
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Shopify Apps & Ecommerce Solutions
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              We develop innovative Shopify apps and support ecommerce merchants through our variety of services.
            </p>
          </header>

          {/* SMS Troopers Section */}
          <section className="rounded-3xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 bg-white dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              SMS Troopers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our flagship cart recovery solution with real human agents. Unlike automated chatbots, our team in the Philippines engages in genuine 2-way conversations with your customers, helping them complete their purchases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://smstroopers.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Visit SMS Troopers
              </a>
              <a
                href="https://apps.shopify.com/sms-troopers"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium transition-colors"
              >
                View on Shopify App Store
              </a>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Shopify App Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building innovative apps that solve real ecommerce challenges
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Ecommerce Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Helping online businesses optimize and grow through our services
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="font-semibold text-gray-900 dark:text-white">
            The Troops PTE Ltd.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            160 Robinson Road, #14-04 Singapore Business Federation Centre
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Singapore 068914
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 pt-4">
            © {new Date().getFullYear()} The Troops PTE Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
