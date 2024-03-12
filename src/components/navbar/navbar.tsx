import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <div className="w-12 bg-blue-200 py-2 px-3">
                <div className='w-12 md:w-9 flex justify-content-between mx-auto'>
                    <div className='flex align-items-baseline'>

                        <Link to='/' className='no-underline'>
                        <h3 className='no-underline text-color	'>Maxi streaming</h3>

                        </Link>
                       
                    </div>
                    <div className="flex gap-2">
                        <Button label="Log in" text/>
                        <Button className='hidden md:block' label="Start your free trial" severity="secondary" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;