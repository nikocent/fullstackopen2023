const Header = ({name}) => <h2>{name}</h2>

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

const Total = ({parts}) => {
    const sum = parts.reduce(((sum, item) => sum + item.exercises), 0)
    return (
        <p><strong>total of {sum} exercises</strong></p>
    )
}

const Course = ({course}) => {
    return(
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default Course