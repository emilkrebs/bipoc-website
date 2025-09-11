import Link from "next/link";

export default function LocaleNotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                <h2 className="text-xl font-semibold text-gray-600 mb-4">
          Language Not Supported
                </h2>
                <p className="text-gray-500 mb-6">
          The language you&apos;re trying to access is not supported yet.
                </p>
                <div className="space-y-2">
                    <Link
                        href="/en"
                        className="block w-full px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
                    >
            Go to English Version
                    </Link>
                    <Link
                        href="/es"
                        className="block w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                    >
            Ir a la Versión en Español
                    </Link>
                </div>
            </div>
        </div>
    );
}
