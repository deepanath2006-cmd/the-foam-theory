"use client";

import { Star, BadgeCheck } from "lucide-react";

type ReviewCardProps = {
  name: string;
  review: string;
  rating: number;
  date?: string;
};

export default function ReviewCard({
  name,
  review,
  rating,
  date,
}: ReviewCardProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Top Section */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          {/* Avatar */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
            {initials}
          </div>

          <div>

            <h3 className="text-lg font-bold text-gray-900">
              {name}
            </h3>

            <div className="flex items-center gap-1 text-sm text-green-600">

              <BadgeCheck className="h-4 w-4 fill-green-500 text-green-500" />

              Verified Customer

            </div>

          </div>

        </div>

      </div>

      {/* Stars */}

      <div className="mt-5 flex">

        {[1, 2, 3, 4, 5].map((star) => (

          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />

        ))}

      </div>

      {/* Review */}

      <p className="mt-5 leading-8 text-gray-600">
        "{review}"
      </p>

      {/* Date */}

      <p className="mt-6 text-sm text-gray-400">
        {date || "Recently"}
      </p>

    </div>
  );
}