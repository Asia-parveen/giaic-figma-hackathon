import { useState } from "react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewsSection = () => {
  // State for storing reviews and new review form inputs
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Asia perveen",
      rating: 5,
      comment: "Amazing product! Highly recommend.",
      date: "2025-01-19",
    },
    {
      id: 2,
      name: "Ahmed khan",
      rating: 4,
      comment: "Good quality, and satisfied service.",
      date: "2025-01-18",
    },
  ]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  // Handle form changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  // Submit new review
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = reviews.length + 1;
    const reviewDate = new Date().toISOString().split("T")[0]; // Date format (YYYY-MM-DD)
    const newReviewData = { ...newReview, id: newId, date: reviewDate };
    setReviews((prev) => [...prev, newReviewData]);
    setNewReview({ name: "", rating: 0, comment: "" }); // Reset form
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 bg-[#FFF9E5] rounded-lg shadow-md md:mt-[40px]">
      {/* Review Form */}
      <h2 className="text-2xl font-semibold text-[#000000] mb-4">Write a Review</h2>
      <form onSubmit={handleSubmitReview} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={newReview.name}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border  border-[#FFF9E5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600" htmlFor="rating">
            Rating (1-5)
          </label>
          <input
            type="number"
            name="rating"
            id="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            min={1}
            max={5}
            className="mt-1 block w-full p-2 border  border-[#FFF9E5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600" htmlFor="comment">
            Your Comment
          </label>
          <textarea
            name="comment"
            id="comment"
            value={newReview.comment}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 block w-full p-2 border  border-[#FFF9E5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-[#000000]  text-white hover:bg-gray-600 rounded-md "
        >
          Submit Review
        </button>
      </form>

      {/* Reviews List */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Customer Reviews</h3>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">{review.name}</h4>
                <div className="text-yellow-500 text-xl">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
              </div>
              <p className="mt-2 text-gray-600">{review.comment}</p>
              <span className="text-sm text-gray-500">Posted on {review.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
