const Content=()=>{
    let course = "MERN"
    let courseinfo={
        title:"MERN",
        duration:'6 days',
        topics:'Web,react,node'
    }
    return(
        <div>
            <h1>I am learning - {course}</h1>
            <h2>Course Info</h2>
            <p>Title : {courseinfo.title}</p>
        </div>
    )
}
export default Content