"use client";
import React from 'react'
import { useFormStatus } from 'react-dom'
import { btnSubmitData } from '@/data/Contact';

 const SubmitBtn = () => {
  const {pending}=useFormStatus();
  return (
    <button 
        type="submit" 
        className="btn-default btn__submit"  
        disabled={pending}> 
        {pending ? (<div className='btn__submit-spin '></div> )
        :(
        <> 
          {btnSubmitData?.icon}
          <span> {btnSubmitData?.text}</span>
        </>     
      ) }
    </button>

  )
}

export default SubmitBtn