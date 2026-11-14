import { StarIcon } from "@/components/icons/StarIcon";

export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-[#F5B400]">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <div key={i} className="relative h-4 w-4">
            <StarIcon className="absolute inset-0 h-4 w-4 text-nav-ink/15" />
            {fill > 0 && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <StarIcon className="h-4 w-4" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
