import { MenuProps } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useCallback, useState } from 'react';
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

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const baseRoutes = useAppSelector(selectBaseRoutes);
  const selectedRoute = useAppSelector(selectSelectedRoute);

  const { setCoordinates, setSelectedRoute } = mapActions;

  const items: MenuItem[] = baseRoutes.map(({ name }) => {
    return getItem(name, name, null, undefined);
  });

  const handleSelectRoute: MenuProps['onClick'] = useCallback((event: MenuInfo) => {
    const routeName = event.key;

    if (selectedRoute?.name === routeName) {
      return;
    }

    const route = baseRoutes.find((route) => route.name === routeName) || null;

    setSelectedKeys([routeName]);

    dispatch(setSelectedRoute({ route }));
    dispatch(fetchRoutesAction(route));
  }, []);

  const resetMap = useCallback(() => {
    setSelectedKeys([]);

    dispatch(setCoordinates({ coordinates: [] }));
    dispatch(setSelectedRoute({ route: null }));
  }, []);

  return {
    items,
    handleSelectRoute,
    resetMap,
    selectedKeys,
  };
};
