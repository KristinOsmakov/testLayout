import s from './blockContent.module.scss'
export const BlockContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={s.content}>
            {children}
        </div>
    );
};