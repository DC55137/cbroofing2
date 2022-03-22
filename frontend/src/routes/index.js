import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import MainLayout from "../layouts/main";
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
// guards
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// config
import { PATH_AFTER_LOGIN } from "../config";
// components
import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: "login-unprotected", element: <Login /> },
        { path: "register-unprotected", element: <Register /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "verify", element: <VerifyCode /> },
      ],
    },

    // Dashboard Routes
    {
      path: "dashboard",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "job/:id", element: <JobShow /> },
        { path: "analytics", element: <GeneralAnalytics /> },
        { path: "banking", element: <GeneralBanking /> },
        { path: "booking", element: <GeneralBooking /> },
        {
          path: "jobs",
          children: [
            {
              element: <Navigate to="/dashboard/jobs" replace />,
              index: true,
            },
            { path: "lead", element: <JobLeads /> },
            { path: "inspect", element: <JobInspect /> },
            { path: "schedule", element: <JobList /> },
            { path: "discuss", element: <JobDiscuss /> },
            { path: "search", element: <JobSearch /> },
          ],
        },
        {
          path: "user",
          children: [
            {
              element: <Navigate to="/dashboard/user/profile" replace />,
              index: true,
            },
            { path: "profile", element: <UserProfile /> },
            { path: "cards", element: <UserCards /> },
            { path: "list", element: <UserList /> },
            { path: "new", element: <UserCreate /> },
            { path: ":name/edit", element: <UserCreate /> },
            { path: "account", element: <UserAccount /> },
          ],
        },
        {
          path: "blog",
          children: [
            {
              element: <Navigate to="/dashboard/blog/posts" replace />,
              index: true,
            },
            { path: "posts", element: <BlogPosts /> },
            { path: "post/:title", element: <BlogPost /> },
            { path: "new-post", element: <BlogNewPost /> },
          ],
        },
      ],
    },

    // Main Routes
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "coming-soon", element: <ComingSoon /> },
        { path: "maintenance", element: <Maintenance /> },
        { path: "pricing", element: <Pricing /> },
        { path: "payment", element: <Payment /> },
        { path: "500", element: <Page500 /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: "about-us", element: <About /> },
        { path: "contact-us", element: <Contact /> },
        { path: "testimonials", element: <Testimonials /> },
        { path: "gallery", element: <Gallery /> },
        { path: "gallery/:id", element: <GalleryShow /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Register = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPassword = Loadable(
  lazy(() => import("../pages/auth/ResetPassword"))
);
const VerifyCode = Loadable(lazy(() => import("../pages/auth/VerifyCode")));
// Dashboard
const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const JobShow = Loadable(lazy(() => import("../pages/dashboard/JobShow")));
const GeneralAnalytics = Loadable(
  lazy(() => import("../pages/dashboard/GeneralAnalytics"))
);
const GeneralBanking = Loadable(
  lazy(() => import("../pages/dashboard/GeneralBanking"))
);
const GeneralBooking = Loadable(
  lazy(() => import("../pages/dashboard/GeneralBooking"))
);

const BlogPosts = Loadable(lazy(() => import("../pages/dashboard/BlogPosts")));
const BlogPost = Loadable(lazy(() => import("../pages/dashboard/BlogPost")));
const BlogNewPost = Loadable(
  lazy(() => import("../pages/dashboard/BlogNewPost"))
);
const UserProfile = Loadable(
  lazy(() => import("../pages/dashboard/UserProfile"))
);
const UserCards = Loadable(lazy(() => import("../pages/dashboard/UserCards")));

const UserList = Loadable(lazy(() => import("../pages/dashboard/UserList")));
const UserAccount = Loadable(
  lazy(() => import("../pages/dashboard/UserAccount"))
);
const UserCreate = Loadable(
  lazy(() => import("../pages/dashboard/UserCreate"))
);
const JobList = Loadable(lazy(() => import("../pages/dashboard/JobList")));
const JobLeads = Loadable(lazy(() => import("../pages/dashboard/JobLeads")));
const JobSearch = Loadable(lazy(() => import("../pages/dashboard/JobSearch")));
const JobDiscuss = Loadable(
  lazy(() => import("../pages/dashboard/JobDiscuss"))
);
const JobInspect = Loadable(
  lazy(() => import("../pages/dashboard/JobInspect"))
);

// Main
const HomePage = Loadable(lazy(() => import("../pages/Home")));
const Gallery = Loadable(lazy(() => import("../pages/Gallery")));
const GalleryShow = Loadable(lazy(() => import("../pages/GalleryShow")));
const About = Loadable(lazy(() => import("../pages/About")));
const Contact = Loadable(lazy(() => import("../pages/Contact")));
const Testimonials = Loadable(lazy(() => import("../pages/Testimonials")));
const ComingSoon = Loadable(lazy(() => import("../pages/ComingSoon")));
const Maintenance = Loadable(lazy(() => import("../pages/Maintenance")));
const Pricing = Loadable(lazy(() => import("../pages/Pricing")));
const Payment = Loadable(lazy(() => import("../pages/Payment")));
const Page500 = Loadable(lazy(() => import("../pages/Page500")));
const NotFound = Loadable(lazy(() => import("../pages/Page404")));
