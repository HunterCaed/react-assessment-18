const BodyItem = ({comment}) => {

const handleClick = (e) => {
    const id = e.target.id
    console.log(id)
}
return (
    <h1 id={comment.id} onClick={handleClick} >{comment.body}</h1>
)

}

export default BodyItem