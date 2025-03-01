type Student = {
  id?: number
  name?: string
}

interface ResultProps {
  students: Student[]
}

export const Result = ({ students }: ResultProps) => {
  return (
    <div>
      {!students.length ? (
        <h1>No Data</h1>
      ) : (
        students.map((student) => (
          <div key={student.id}>
            <div>
              <h1>{student.name}</h1>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
