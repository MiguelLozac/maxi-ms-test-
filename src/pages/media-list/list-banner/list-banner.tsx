
import { Toolbar } from 'primereact/toolbar';
import { Paginator } from 'primereact/paginator';
import { SetStateAction } from 'react';
import { InputText } from "primereact/inputtext";
import { useDispatch } from 'react-redux';
import { firstSlice, rowsSlice, selectRows, selectFirst, yearSlice, selectYear, selectEntries } from '../../../redux/states';
import './list-banner.scss' 
import { useSelector } from 'react-redux';

export const ListBanner = () => {
    //redux
    const dispatch = useDispatch();
    const rows = useSelector(selectRows);
    const first = useSelector(selectFirst);
    const year = useSelector(selectYear);
    const entries = useSelector(selectEntries);

    const onPageChange = (event: { first: SetStateAction<number>; rows: SetStateAction<number>; page: SetStateAction<number>;
     }) => {
        dispatch(rowsSlice.actions.setRows(event.rows));
        dispatch(firstSlice.actions.setFirst(event.first));
    };

    const paginator = (
        <div className="card">
            <Paginator 
            template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink RowsPerPageDropdown' }} 
            first={first} 
            className='p-0'
            rows={rows}
            totalRecords={entries} 
            rowsPerPageOptions={[5, 10, 20]} 
            onPageChange={onPageChange} />
        </div>  
    )

    const yearInput = (
        <div className="card flex justify-content-center">
        <span className="p-float-label">
            <InputText id="username" className='w-4rem md:w-6rem' value={year}  keyfilter="int" onChange={(e) => dispatch(yearSlice.actions.setYear(e.target.value))} />
            <label htmlFor="username">{'Set year'}</label>
        </span>
    </div>
    )
    return(
        <div className="card my-2 py-1 block mx-auto w-12 md:w-9">
            <Toolbar className='z-5 mx-auto pt-5 ' start={yearInput} end={paginator} />
        </div>
    )
}

export default ListBanner;