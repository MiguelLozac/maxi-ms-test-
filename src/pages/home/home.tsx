import { MediaCard } from "./components/media-card";

export const Home = () => {

    const mediaList: MediaCardInterface[] = [
        {
            programType: 'series',
            title: 'Popular Series'
        },
        {
            programType: 'movie',
            title: 'Popular Movies'
        }
    ]

    return(
        <>
             <div className="my-5 flex gap-3">
                {mediaList.map((media, index) => (
                    <MediaCard key={index} title={media.title} programType={media.programType} />
                ))}
            </div>
        </>
    )
}
export default Home;