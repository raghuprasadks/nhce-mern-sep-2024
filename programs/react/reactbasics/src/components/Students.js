import React,{useState} from 'react'

const Students = (property) => {
    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [course,setCourse]=useState('')
    const studentslist = property.studentslist

    const addStudent=()=>{
        
        let student ={id,name,course}
        console.log(student)
        property.addstudents(student)
        resetStudent()
    }

    const resetStudent=()=>{
        setId('')
        setName('')
        setCourse('')
    }

    const deleteStudent=(id)=>{
        property.delStudent(id)
        
    }
    

  return (
    <>
        <h1 className='header'>Student Master</h1>
        <div className="form">
            <label>Id:</label>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>Course:</label>
            <input type="text" value={course} onChange={(e)=>setCourse(e.target.value)}/>
            <button onClick={addStudent}>Add Student</button>

        </div>
        <div className="table">
            <h1>Students List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentslist.map((student,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.course}</td>
                                    <td><button onClick={()=>deleteStudent(student.id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Students