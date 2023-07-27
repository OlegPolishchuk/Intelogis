import { MenuProps } from 'antd';
import { fetchRoutesAction, mapActions } from 'store/reducers';
import { selectBaseRoutes } from 'store/selectors';
import { selectSelectedRoute } from 'store/selectors/selectSelectedRoute';
import { useAppDispatch, useAppSelector } from 'store/store';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const useMenu = () => {
  const dispatch = useAppDispatch();

  const baseRoutes = useAppSelector(selectBaseRoutes);
  const selectedRoute = useAppSelector(selectSelectedRoute);

  const items: MenuItem[] = baseRoutes.map(({ name }) => {
    return getItem(name, name, null, undefined);
  });

  const handleSelectRoute: MenuProps['onClick'] = (event) => {
    const routeName = event.key;

    if (selectedRoute?.name === routeName) {
      return;
    }

    const route = baseRoutes.find((route) => route.name === routeName) || null;

    dispatch(mapActions.setSelectedRoute({ route }));
    dispatch(fetchRoutesAction(route));
  };

  return {
    items,
    handleSelectRoute,
  };
};
