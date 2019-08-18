import HomePage from "./pages/HomePage";
import UsersListPage, {
  loadData
} from "./pages/UsersListPage";

export default [{
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    loadData,
    path: '/users',
    components: UsersListPage
  }
];