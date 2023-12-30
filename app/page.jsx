import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-300 mb-4">
          Welcome to Watch List
        </h1>
        <p className="text-gray-300 mb-6">
          Your Personal space to curate and manage a wishlist of your favorite
          watches. Sign in to create, view, edit and delete watches from your
          wishlist.
        </p>
        <div className="p-4 bg-black/40 rounded">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
