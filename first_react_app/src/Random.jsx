function Random(){
    let number =Math.random() * 10
    return <h2>
        random number is : {Math.round(number)}
    </h2>
}
export default Random