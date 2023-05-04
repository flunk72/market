
export interface NavigationProps {
  id: number;
  path: string;
  name?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>
}