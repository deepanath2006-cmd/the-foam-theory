"use client";

import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { Star } from "lucide-react";

import { db } from "@/lib/firebase";
import ReviewCard from "./review-card";
import ReviewForm from "./review-form";

type Review = {
  id: string;
  name: string;
  review: string;
  rating: number;
  createdAt?: any;
};

export default function CustomerReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  async function loadReviews() {
    try {
      const q = query(
        collection(db, "reviews"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Review, "id">),
      }));

      setReviews(data);

      setTotalReviews(data.length);

      if (data.length > 0) {
        const total = data.reduce((sum, item) => sum + item.rating, 0);
        setAverageRating(total / data.length);
      } else {
        setAverageRating(0);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadReviews();
  }, []);

  async function submitReview(data: {
    name: string;
    review: string;
    rating: number;
  }) {
    try {
      await addDoc(collection(db, "reviews"), {
        name: data.name,
        review: data.review,
        rating: data.rating,
        createdAt: serverTimestamp(),
      });

      await loadReviews();

      setOpen(false);

      alert("Thank you for your review!");
    } catch (err) {
      console.log(err);
      alert("Failed to submit review.");
    }
  }

  if (loading) {
    return (
      <section id="reviews" className="py-24 text-center">
        <h2 className="text-3xl font-bold">Loading Reviews...</h2>
      </section>
    );
  }
    return (
    <section id="reviews" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Customer Reviews
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            See what our happy customers say about The Foam Theory.
          </p>

        </div>

        <div className="mb-12 rounded-3xl bg-white p-8 shadow-lg">

          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            <div>

              <h3 className="text-5xl font-bold text-gray-900">
                {averageRating.toFixed(1)}
              </h3>

              <div className="mt-3 flex">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-6 w-6 ${
                      star <= Math.round(averageRating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}

              </div>

              <p className="mt-3 text-gray-500">
                Based on {totalReviews} Reviews
              </p>

            </div>

            <button
              onClick={() => setOpen(true)}
              className="rounded-full bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Write a Review
            </button>

          </div>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reviews.length === 0 ? (

            <div className="col-span-full rounded-2xl bg-white p-12 text-center shadow">

              <h3 className="text-2xl font-bold">
                No Reviews Yet
              </h3>

              <p className="mt-3 text-gray-500">
                Be the first customer to review The Foam Theory.
              </p>

            </div>

          ) : (

            reviews.map((item) => (

              <ReviewCard
                key={item.id}
                name={item.name}
                review={item.review}
                rating={item.rating}
                date={
                  item.createdAt?.seconds
                    ? new Date(
                        item.createdAt.seconds * 1000
                      ).toLocaleDateString()
                    : "Recently"
                }
              />

            ))

          )}

        </div>

        <ReviewForm
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={submitReview}
        />

      </div>
    </section>
  );
}