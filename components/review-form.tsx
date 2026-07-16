 "use client";

import { useState } from "react";
import { X, Star } from "lucide-react";

type ReviewFormProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: {
    name: string;
    rating: number;
    review: string;
  }) => Promise<void>;
};

export default function ReviewForm({
  open,
  onClose,
  onSubmit,
}: ReviewFormProps) {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit() {
    if (!name.trim() || !review.trim()) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await onSubmit({
        name,
        rating,
        review,
      });

      setName("");
      setReview("");
      setRating(5);

      onClose();
    } catch (err) {
      alert("Failed to submit review.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-[92%] max-w-lg rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Write a Review
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-5 w-full rounded-xl border p-4 outline-none focus:border-blue-600"
        />

        <p className="mb-2 font-semibold">
          Rating
        </p>

        <div className="mb-5 flex gap-2">

          {[1,2,3,4,5].map((star)=>(
            <button
              key={star}
              onClick={() => setRating(star)}
            >
              <Star
                className={`h-8 w-8 ${
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}

        </div>

        <textarea
          rows={5}
          placeholder="Share your experience..."
          value={review}
          onChange={(e)=>setReview(e.target.value)}
          className="mb-6 w-full rounded-xl border p-4 outline-none focus:border-blue-600"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-full bg-blue-700 py-4 font-semibold text-white hover:bg-blue-800"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>

      </div>

    </div>
  );
}