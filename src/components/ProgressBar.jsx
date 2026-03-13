import React from 'react'

const ProgressBar = ({current, total}) => {
  const progress=((current / total) *100);
  return (
    <div className="progress mb-3">
            <div className="progress-bar" style={{width: `${progress}%`}}>{Math.round(progress)}%</div>
        </div>
  )
}

export default ProgressBar