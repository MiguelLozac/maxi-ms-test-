import { useParams } from "react-router-dom";

export const Banner = () => {
    const { mediaType = 'titles' } = useParams();
    return (
        <>           
            <div className="w-12 bg-bluegray-900 text-gray-100 p-3">
                <div className="mx-auto w-12 md:w-9">
                    <div className="font-bold mr-8">Popular {mediaType}!</div>
                </div>
            </div>   
        </>
    )
}

export default Banner;