<?php

namespace App\Http\Requests\KerjaSamaIndustri;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama_ksi' => ['required', 'string', 'max:255'],
            'bentuk_lembaga' => ['required', 'string', 'max:255'],
            'jenis_kegiatan' => ['required', 'string', 'max:255'],
            'tahun_ksi' => ['required', 'date'],
            'tahun_exit_ksi' => ['required', 'date', 'after_or_equal:tahun_ksi'],
            'no_mou_poltesa' => ['required', 'string', 'max:255'],
            'no_mou_mitra' => ['nullable', 'string', 'max:255'],
            'prodi' => ['required', 'string', 'max:255'],
            'aktivitas' => ['nullable', 'string', 'max:255'],
            'waktu' => ['required', 'string', 'max:255'],
            'keterangan' => ['required', 'string', 'max:255'],
        ];
    }

    public function messages(): array
    {
        return [
            'nama_ksi.required' => 'Nama kerja sama industri wajib diisi.',
            'nama_ksi.string' => 'Nama kerja sama industri harus berupa teks.',
            'nama_ksi.max' => 'Nama kerja sama industri maksimal 255 karakter.',

            'bentuk_lembaga.required' => 'Bentuk lembaga wajib diisi.',
            'bentuk_lembaga.string' => 'Bentuk lembaga harus berupa teks.',
            'bentuk_lembaga.max' => 'Bentuk lembaga maksimal 255 karakter.',

            'jenis_kegiatan.required' => 'Jenis kegiatan wajib diisi.',
            'jenis_kegiatan.string' => 'Jenis kegiatan harus berupa teks.',
            'jenis_kegiatan.max' => 'Jenis kegiatan maksimal 255 karakter.',

            'tahun_ksi.required' => 'Tahun kerja sama wajib diisi.',
            'tahun_ksi.date' => 'Format tahun kerja sama tidak valid.',

            'tahun_exit_ksi.required' => 'Tahun exit wajib diisi.',
            'tahun_exit_ksi.date' => 'Format tahun exit tidak valid.',
            'tahun_exit_ksi.after_or_equal' => 'Tahun exit tidak boleh lebih awal dari tahun kerja sama.',

            'no_mou_poltesa.required' => 'Nomor MOU Poltesa wajib diisi.',
            'no_mou_poltesa.string' => 'Nomor MOU Poltesa harus berupa teks.',
            'no_mou_poltesa.max' => 'Nomor MOU Poltesa maksimal 255 karakter.',

            'no_mou_mitra.string' => 'Nomor MOU Mitra harus berupa teks.',
            'no_mou_mitra.max' => 'Nomor MOU Mitra maksimal 255 karakter.',

            'prodi.required' => 'Prodi wajib diisi.',
            'prodi.string' => 'Prodi harus berupa teks.',
            'prodi.max' => 'Prodi maksimal 255 karakter.',

            'aktivitas.string' => 'Aktivitas harus berupa teks.',
            'aktivitas.max' => 'Aktivitas maksimal 255 karakter.',

            'waktu.required' => 'Waktu wajib diisi.',
            'waktu.string' => 'Waktu harus berupa teks.',
            'waktu.max' => 'Waktu maksimal 255 karakter.',

            'keterangan.required' => 'Keterangan wajib diisi.',
            'keterangan.string' => 'Keterangan harus berupa teks.',
            'keterangan.max' => 'Keterangan maksimal 255 karakter.',
        ];
    }
}
