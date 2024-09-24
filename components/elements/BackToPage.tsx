'use client'
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from 'next/navigation'

type BackToPageProps={
  PageName:string
}
const BackToPage = ({PageName}:BackToPageProps) => {
  const router = useRouter()
  const PagePath=PageName==="home"? "#home":PageName
  return (
    <div className="row">
      <div className="col-12">
        <button 
          type="button" 
          className="btn-back"
          onClick={() => router.push(`/${PagePath}`)}>
            <BsArrowLeft  className="mr-5"/>Go To  <span className="text-capitalize">{PageName}</span> Page
        </button>
      </div>
  </div>
  )
}

export default BackToPage