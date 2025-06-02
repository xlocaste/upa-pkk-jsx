import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { useForm } from '@inertiajs/react';

export default function Import({ onClose }) {
    const { data, setData, post, processing, errors } = useForm({
        file: null,
    });
    console.log(errors)

  const submit = (e) => {
    e.preventDefault();
    post(route('authentication.pra-inkubasi.excel'), {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <div className='max-h-[400px] overflow-y-auto'>
        <form onSubmit={submit} encType="multipart/form-data">
            <h2 className="text-xl font-bold mb-4">Import Data Pra Inkubasi</h2>
            <input
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={(e) => setData('file', e.target.files[0])}
                className="block w-full mb-2 bg-gray-200/50 backdrop-blur-md p-2 rounded-lg"
            />
            {errors.file && <div className="text-red-600 text-sm">{errors.file}</div>}
            {errors.import && (
            <div className="text-red-600 text-sm mt-2 whitespace-pre-wrap">
                {errors.import}
            </div>
            )}
            <div className="mt-4 flex justify-end space-x-2">
                <SecondaryButton>
                    <button
                    type="button"
                    onClick={onClose}
                    >
                    Batal
                    </button>
                </SecondaryButton>
                <PrimaryButton className='bg-green-600 hover:bg-green-900'>
                    <button
                    type="submit"
                    disabled={processing}
                    >
                    IMPORT
                    </button>
                </PrimaryButton>
            </div>
        </form>
    </div>
  );
}
