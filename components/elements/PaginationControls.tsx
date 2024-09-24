"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { BsArrowLeft,BsArrowRight } from "react-icons/bs";
type PaginationControlsProps= {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  length: number;
  nbPosts:number,
  pageName:string
}

const PaginationControls =({hasNextPage,hasPrevPage,length,nbPosts,pageName}:PaginationControlsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? nbPosts;
  const  nb = Math.ceil(length / Number(per_page));

  function PaginationNumber() {
    let listNb = [];
    for (let i = 1; i <= nb; i++) {
      listNb?.push(
        <button
          key={i}
          disabled={!hasPrevPage && !hasNextPage}
          className={`pagination__number ${Number(page) === i ? " pagination--active" : ""}`}
          onClick={() => {router.push(`${pageName}/?page=${i}&per_page=${per_page}`); }}>
          {i}
        </button>
      );
    }
    return listNb;
  }

  return (
    <div className="pagination">
      <div className="pagination mt-24">
        <button
          className="pagination__number"
          disabled={!hasPrevPage}
          onClick={() => {router.push(`${pageName}/?page=${Number(page) - 1}&per_page=${per_page}`);}} >
          <BsArrowLeft />
        </button>
        {PaginationNumber()}
        <button
          className="pagination__number"
          disabled={!hasNextPage}
          onClick={() => { router.push(`${pageName}/?page=${Number(page) + 1}&per_page=${per_page}`);}}>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;
