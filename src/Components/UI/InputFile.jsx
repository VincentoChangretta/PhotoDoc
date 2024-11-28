import { faCheck, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InputFile = ({ fileInput, setFileInput }) => {

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFileInput(true)
        } else {
            setFileInput(false)
        }
    };

    return (
        <div className="input-box max-w-[300px] flex items-center justify-center relative p-[20px] overflow-hidden">
            <div className='flex items-center gap-[10px] text-xl font-bold'>
                {
                    fileInput
                        ?
                        <>
                            <FontAwesomeIcon icon={faCheck} />
                            Фото загружено
                        </>
                        :
                        <>
                            <FontAwesomeIcon icon={faCloudArrowUp} />
                            Загрузите ваше фото
                        </>
                }
            </div>
            <label className='absolute inset-0 cursor-pointer'>
                <input
                    className='relative z-[-1] opacity-0'
                    name="file"
                    type="file"
                    onChange={handleFileChange}
                    required
                    aria-label="Загрузите фото"
                    accept=".jpg,.jpeg,.png,.heic,.webp"
                />
            </label>
        </div>
    );
}