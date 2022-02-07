import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import NotFound from './components/common/NotFound';

const App = () => {
	return (
		<>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
