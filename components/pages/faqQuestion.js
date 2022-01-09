const faqquestion = (props) => {

    return (
        <>
                <p className="font-extrabold pb-5">{props.question}</p>
                <p className="font-thin pb-10">{props.answer}</p>
        </>

    )
}

export default faqquestion;
