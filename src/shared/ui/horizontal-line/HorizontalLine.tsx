import styles from './HorizontalLine.module.scss';
import cn from 'classnames';

interface HorizontalLineProps {
  className?: string;
}

export function HorizontalLine({ className }: HorizontalLineProps) {
	return <div className={cn(styles.line, null, className)} />;
}
