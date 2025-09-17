import { useBioContext } from '.'

const Services = () => {
    const { myName, myAge } = useBioContext();

    return (
        <>
            <section>
                <h1 className='text-white'>
                    Its Services from Context API. name={myName} and age={myAge}
                </h1>
            </section>
        </>
    )
}

export default Services