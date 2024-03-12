import { createBrowserRouter  } from 'react-router-dom';
import { Home, MediaList } from '../pages';
import App from '../App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '', element: <Home />
            },
            {
                path: 'list/:mediaType', element: <MediaList />
            }
        ]
    }
]);