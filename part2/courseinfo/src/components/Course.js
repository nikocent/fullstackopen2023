const Header = ({name}) => <h1>{name}</h1>
const Content = ({parts}) => {
    return (
        <>
            {parts.map(item => 
                <p key={item.id}>
                    {item.name} {item.exercises}
                </p>
            )}
        </>
    )
}


const Course = ({course}) => {
    return(
        <>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
        </>
    )
}



export default Course