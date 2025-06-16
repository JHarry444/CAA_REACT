function ConditionalRendering({ bool }) {


    return (
        <>
            <p>This paragraph always renders</p>
            {bool && <p>This paragraph sometimes renders</p>}
            <p>This paragraph also always renders</p>

        </>
    )


}

export default ConditionalRendering;