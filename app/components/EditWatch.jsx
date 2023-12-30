"use client";

import { useState } from "react";
import { updateWatch } from "../server-actions/updateWatch";

export default function EditWatch({ watch }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    brand: watch.brand,
    model: watch.model,
    referenceNumber: watch.reference_number,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-700 text-white p-6 rounded-lg">
            <span
              className="close text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>

            <form
              action={updateWatch}
              onSubmit={() => setShowModal(false)}
              className="space-y-4"
            >
              <input type="hidden" name="id" value={watch.id} />
              <div>
                <label htmlFor="brand" className="block text-sm font-bold mb-2">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="model" className="block text-sm font-bold mb-2">
                  Model
                </label>
                <input
                  type="text"
                  name="model"
                  id="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                />
              </div>
              <div>
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
                  value={formData.referenceNumber}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Update Watch
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
