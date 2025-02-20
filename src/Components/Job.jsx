import React from 'react'
import Card from './Card'

const Job = ({result}) => {
  return (
    <>
      <div>
        <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
      </div>
      <section>
        {result}
      </section>
    </>
  )
}

export default Job
