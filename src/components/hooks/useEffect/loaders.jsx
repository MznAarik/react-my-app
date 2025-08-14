import {Rings}from 'react-loader-spinner'

export const loaders = () => {
    return (
        <Rings
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="rings-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />)
}
