import { addWatch } from "../server-actions/addWatch";

export default function WatchForm() {
  return (
    <form action={addWatch} className="bg-gray-700 text-white p-6 rounded-lg">
      <div className="mb-4">
        <label htmlFor="brand" className="block text-sm font-bold mb-2">
          Brand
        </label>
        <input
          type="text"
          name="brand"
          id="brand"
          required
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="model" className="block text-sm font-bold mb-2">
          Model
        </label>
        <input
          type="text"
          name="model"
          id="model"
          required
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="referenceNumber"
          className="block text-sm font-bold mb-2"
        >
          Reference Number
        </label>
        <input
          type="text"
          name="referenceNumber"
          id="referenceNumber"
          required
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Add Watch
      </button>
    </form>
  );
}
