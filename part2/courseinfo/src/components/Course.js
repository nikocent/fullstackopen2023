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

const TotalExercises = ({parts}) => {
    const sum = parts.reduce(((sum, item) => sum + item.exercises), 0)
    return (
        <p><strong>total of {sum} exercises</strong></p>
    )
}

const Course = ({course}) => {
    return(
        <>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <TotalExercises parts={course.parts}/>
        </>
    )
}



export default Course