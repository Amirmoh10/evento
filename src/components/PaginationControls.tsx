import Link from "next/link";
import { MoveRight, MoveLeft } from "lucide-react";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const btnStyles =
  'className="text-white flex items-center gap-x-2 px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm';

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <MoveLeft />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next
          <MoveRight />
        </Link>
      )}
    </section>
  );
}
