
export interface NavigationProps {
  id: number;
  path: string;
  name?: string;
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}