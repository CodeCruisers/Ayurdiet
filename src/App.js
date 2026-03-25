import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./Context/AuthContext";
import LandingPage from "./Pages/LandingPage";
import AuthPage from "./Pages/AuthPage";
import DashboardRouter from "./Components/Dashboard/DashboardRouter";
import ErrorPage from "./Pages/ErrorPage";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, loading } = useAuth();

	if (loading) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-br from-primary-green to-light-green text-white">
				<div className="w-[50px] h-[50px] border-4 border-white/30 border-t-white rounded-[50%] animate-[spin_1s_linear_infinite] mb-5"></div>
				<p className="text-[1.2rem] opacity-90">Loading AyurDiet...</p>
			</div>
		);
	}

	return isAuthenticated ? children : <Navigate to="/auth" />;
};

// Public Route Component (redirects to dashboard if authenticated)
const PublicRoute = ({ children }) => {
	const { isAuthenticated, loading } = useAuth();

	if (loading) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-br from-primary-green to-light-green text-white">
				<div className="w-[50px] h-[50px] border-4 border-white/30 border-t-white rounded-[50%] animate-[spin_1s_linear_infinite] mb-5"></div>
				<p className="text-[1.2rem] opacity-90">Loading AyurDiet...</p>
			</div>
		);
	}

	return !isAuthenticated ? children : <Navigate to="/dashboard" />;
};

function AppContent() {
	return (
		<Router>
			<div className="App">
				<Routes>
					{/* Public routes */}
					<Route
						path="/"
						element={
							<PublicRoute>
								<LandingPage />
							</PublicRoute>
						}
					/>

					<Route
						path="/auth"
						element={
							<PublicRoute>
								<AuthPage />
							</PublicRoute>
						}
					/>

					{/* Protected routes */}
					<Route
						path="/dashboard/*"
						element={
							<ProtectedRoute>
								<DashboardRouter />
							</ProtectedRoute>
						}
					/>

					{/* Catch all route */}
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</Router>
	);
}

function App() {
	return (
		<AuthProvider>
			<AppContent />
		</AuthProvider>
	);
}

export default App;
