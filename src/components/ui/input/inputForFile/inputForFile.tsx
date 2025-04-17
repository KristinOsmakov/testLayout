import AttachFile from '../../../../assets/icons/attachFile';
import s from './inputForFile.module.scss';

export const InputForFile = () => {
  return (
    <div className={s.fileUpload}>
      <input  
        type="file" 
        id="fileInput"
        accept=".jpg, .png, .gif" 
        className={s.fileInput}
      />
      <label htmlFor="fileInput" className={s.fileLabel}>
        <div className={s.containerText}>
        <AttachFile/>
        <span className={s.fileButton}>Прикрепить файл</span>
        </div>
      </label>
    </div>
  );
};