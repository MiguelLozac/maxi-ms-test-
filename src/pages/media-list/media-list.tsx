import { useParams } from "react-router-dom";
import { useFetchData } from "./useFetchData";
import { useEffect, useState } from "react";
import { Card } from 'primereact/card';
import './media-list.scss';
import { Dialog } from 'primereact/dialog';
import { ListBanner } from "./list-banner";
//redux
import { useSelector } from 'react-redux';
import { selectFirst, selectRows, selectYear } from '../../redux/states';

export const MediaList = () => {
    const { mediaType } = useParams();
    const [selectedItem, setSelectedItem] = useState<ProgramInfoInterface | null>(null);
    const [results, setResults] = useState<ProgramInfoInterface[]>([]);
    const { data, loading, error } = useFetchData();
    const [visible, setVisible] = useState(false);
    const rows = useSelector(selectRows);
    const first = useSelector(selectFirst);
    const year = useSelector(selectYear);

    const onSelectProgram = (program: ProgramInfoInterface) => {
        setSelectedItem(program);
        setVisible(true);
    }

  useEffect(() => {
    if (data) {
      const filteredResults = data.filter(
        entry => entry.releaseYear >= year && entry.programType === mediaType
      );
      const sortedResults: ProgramInfoInterface[] = filteredResults.sort((a, b) => a.title.localeCompare(b.title));
      setResults(sortedResults);
    }
  }, [data, mediaType, year]);

    const headerImg = (imgUrl:string) => {
        return (
            <img className="border-round-top" alt='program image' src={imgUrl} />
        )
    }

    const content = (imgUrl: string, description: string) => {
        return(
            <>
                <div className="text-center my-2">
                    <img src={imgUrl} alt="program image" className="info-card-img" style={{ display: 'block', margin: '0 auto' }} />
                    <p>{description}</p>
                </div>
            </>
        );
    };

    const releaseYearFooter = (releaseYear: number) => {
        return (
           <p className="m-0">
            release year: {releaseYear}
           </p>
        )
    }
    return (
        <>
            <div className="w-12 mx-auto my-3">
                <ListBanner/>
            </div>
            <div className="w-9 mx-auto my-5">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && (
                <div className="media-list gap-3">
                    {results.slice(first, first + rows).map((result, index) => (
                        <Card
                        className="list-card"
                        onClick={() => onSelectProgram(result)}
                        key={index}
                        title={result.title}
                        header={headerImg(result.images['Poster Art'].url)}
                    />
                    ))}
                </div>
                )}
            </div> 
            <Dialog
                visible={visible}
                className="w-4 m-3"
                breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                modal
                dismissableMask={true}
                onHide={() => setVisible(false)}
                header={selectedItem?.title}
                footer={releaseYearFooter(selectedItem?.releaseYear as number)}
            >
                {content(selectedItem?.images["Poster Art"].url as string, selectedItem?.description as string)}
                
            </Dialog>    
        </>
    )
}

export default MediaList;