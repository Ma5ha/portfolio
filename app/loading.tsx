"use client";
import React from 'react'
import { useState, useEffect } from "react";
const Loading = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading &&
      <div className="loading text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>} 
    </>
  )
}

export default Loading