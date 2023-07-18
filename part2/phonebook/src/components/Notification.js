const Notification = ({message, type}) => {
    if (type === 'error' || type === 'success'|| type === 'hide') 
    return (
      <div className={type}> {/*either error or success*/}
        {message}
      </div>
    )
    return console.error('Unsupported type')
  }

  export default Notification